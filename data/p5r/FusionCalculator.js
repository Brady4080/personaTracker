import { 
  personaMapRoyal as personaMap, 
} from './PersonaDataRoyal.js';

import {
  rarePersonaeRoyal as rarePersonae, 
  rareCombosRoyal as rareCombos,
  arcana2CombosRoyal as arcana2Combos, 
  specialCombosRoyal as specialCombos, 
} from './Data5Royal.js';

function getResultArcana(arcana1, arcana2) {
  const combo = arcana2Combos.find(
    (c) =>
      (c.source[0] === arcana1 && c.source[1] === arcana2) ||
      (c.source[0] === arcana2 && c.source[1] === arcana1)
  );
  return combo ? combo.result : null;
}

export class FusionCalculator {
  constructor(personaeByArcana, customPersonaList = null) {
    this.personaeByArcana = personaeByArcana;
    
    if (customPersonaList) {
      this.customPersonaList = customPersonaList.map((p) => {
        // If it's an object without a name property, attach it
        if (typeof p === 'object' && p !== null && !p.name) {
          return { name: p.key || p.name, ...p };
        }
        return p;
      });
    } else {
      // Attach the object key as the 'name' property on every persona
      this.customPersonaList = Object.entries(personaMap).map(([name, data]) => ({
        name,
        ...data
      }));
    }
  }

  fuse(persona1, persona2) {
    if (!persona1 || !persona2 || persona1.name === persona2.name) return null;

    const specialResult = this.getSpecialFuseResult(persona1, persona2);
    if (specialResult !== null) return specialResult;

    if ((persona1.rare && !persona2.rare) || (!persona1.rare && persona2.rare)) {
      const rarePersona = persona1.rare ? persona1 : persona2;
      const normalPersona = persona1.rare ? persona2 : persona1;
      return this.fuseRare(rarePersona, normalPersona);
    }

    return this.fuseNormal(persona1, persona2);
  }

  getSpecialFuseResult(persona1, persona2) {
    if (!specialCombos) return null;
    for (let i = 0; i < specialCombos.length; i++) {
      const combo = specialCombos[i];
      if (
        (persona1.name === combo.sources[0] && persona2.name === combo.sources[1]) ||
        (persona2.name === combo.sources[0] && persona1.name === combo.sources[1])
      ) {
        return personaMap[combo.result] || null;
      }
    }
    return null;
  }

  fuseNormal(persona1, persona2) {
    if ((persona1.rare && !persona2.rare) || (persona2.rare && !persona1.rare)) return null;
    if (this.getSpecialFuseResult(persona1, persona2) !== null) return null;

    const level = 1 + Math.floor((persona1.level + persona2.level) / 2);
    const arcana = getResultArcana(persona1.arcana, persona2.arcana);
    if (!arcana) return null;

    const personae = this.personaeByArcana[arcana];
    if (!personae) return null;

    let persona = null;
    let found = false;

    if (persona1.arcana === persona2.arcana) {
      for (let i = personae.length - 1; i >= 0; i--) {
        persona = personae[i];
        if (persona.level <= level) {
          if (persona.special || persona.rare || persona.name === persona1.name || persona.name === persona2.name) continue;
          found = true;
          break;
        }
      }
    } else {
      for (let i = 0; i < personae.length; i++) {
        persona = personae[i];
        if (persona.level >= level) {
          if (persona.special || persona.rare) continue;
          found = true;
          break;
        }
      }
    }
    return found ? persona : null;
  }

  fuseRare(rarePersona, mainPersona) {
    if (!rarePersona || !mainPersona) return null;

    // Get the string name regardless of whether rarePersona is an object or string
    const rareName = rarePersona.name || (typeof rarePersona === 'string' ? rarePersona : null);
    const mainName = mainPersona.name || (typeof mainPersona === 'string' ? mainPersona : null);

    if (!rareName || !mainName) return null;

    const personae = this.personaeByArcana[mainPersona.arcana];
    if (!personae) return null;

    // Normalize name lookup for rarePersonae array
    const rareIndex = rarePersonae.findIndex(
      (name) => name && name.toLowerCase() === rareName.toLowerCase()
    );
    
    // Case-insensitive lookup for rareCombos arcana key
    const arcanaKey = Object.keys(rareCombos).find(
      (k) => k.toLowerCase() === mainPersona.arcana.toLowerCase()
    );

    if (rareIndex === -1 || !arcanaKey || !rareCombos[arcanaKey]) return null;

    let modifier = rareCombos[arcanaKey][rareIndex];
    const mainPersonaIndex = personae.findIndex(
      (p) => (p.name || p).toLowerCase() === mainName.toLowerCase()
    );

    if (mainPersonaIndex === -1) return null;

    let newPersonaIndex = mainPersonaIndex + modifier;
    let newPersona = personae[newPersonaIndex];
    if (!newPersona) return null;

    // Skip special/rare personas if stepping past them
    while (newPersona && (newPersona.special || newPersona.rare)) {
      if (modifier > 0) newPersonaIndex++;
      else if (modifier < 0) newPersonaIndex--;
      newPersona = personae[newPersonaIndex];
    }
    return newPersona || null;
  }

  getSpecialRecipe(persona) {
    const allRecipes = [];
    if (!specialCombos) return allRecipes;
    
    for (let i = 0; i < specialCombos.length; i++) {
      const combo = specialCombos[i];
      if (persona.name === combo.result) {
        const recipe = {
          sources: combo.sources.map((name) => personaMap[name]).filter(Boolean),
          result: personaMap[combo.result]
        };
        this.addRecipe(recipe, allRecipes, true);
      }
    }
    return allRecipes;
  }

  getRecipes(persona) {
    const allRecipes = [];

    if (persona.rare) return allRecipes;

    if (persona.special) {
      const specialRecipes = this.getSpecialRecipe(persona);
      allRecipes.push(...specialRecipes);
    }

    let recipes = this.getArcanaRecipes(persona);
    for (let i = 0; i < recipes.length; i++) {
      this.addRecipe(recipes[i], allRecipes, true);
    }
    return allRecipes;
  }

  getArcanaRecipes(targetPersona) {
    const recipes = [];
    const arcana = targetPersona.arcana;

    // 1. Standard 2-Persona Arcana Fusions
    const arcanaCombos = arcana2Combos.filter(
      (x) => x.result.toLowerCase() === arcana.toLowerCase()
    );

    for (let i = 0; i < arcanaCombos.length; i++) {
      const combo = arcanaCombos[i];
      const personae1 = this.personaeByArcana[combo.source[0]] || [];
      const personae2 = this.personaeByArcana[combo.source[1]] || [];

      for (let j = 0; j < personae1.length; j++) {
        for (let k = 0; k < personae2.length; k++) {
          const persona1 = personae1[j];
          const persona2 = personae2[k];

          if (persona1.arcana === persona2.arcana && k <= j) continue;
          if (persona1.rare || persona2.rare) continue;

          const result = this.fuseNormal(persona1, persona2);
          if (result && result.name === targetPersona.name) {
            recipes.push({
              sources: [persona1, persona2],
              result: result
            });
          }
        }
      }
    }

    // 2. Rare / Treasure Demon Fusions
    for (let i = 0; i < rarePersonae.length; i++) {
      const rareName = rarePersonae[i];
      const rarePersonaData = personaMap[rareName];
      if (!rarePersonaData) continue;
      
      const rarePersona = { name: rareName, ...rarePersonaData };

      // Check against all personas in all Arcanas
      for (const sourceArcana in this.personaeByArcana) {
        const personae = this.personaeByArcana[sourceArcana] || [];
        for (let j = 0; j < personae.length; j++) {
          const mainPersona = personae[j];
          if (mainPersona.rare || rarePersona.name === mainPersona.name) continue;

          const result = this.fuseRare(rarePersona, mainPersona);
          if (result && result.name === targetPersona.name) {
            recipes.push({
              sources: [rarePersona, mainPersona],
              result: result
            });
          }
        }
      }
    }

    return recipes;
  }

  getAllResultingRecipesFrom(persona) {
    const recipes = [];
    for (let i = 0; i < this.customPersonaList.length; i++) {
      const otherPersona = this.customPersonaList[i];
      const result = this.fuse(persona, otherPersona);
      if (result !== null) {
        const recipe = {
          sources: [persona, otherPersona],
          result: result
        };
        this.addRecipe(recipe, recipes, false);
      }
    }
    return recipes;
  }

  addRecipe(recipe, allRecipes, sortIngredients) {
    recipe.cost = this.getApproxCost(recipe);
    if (sortIngredients) {
      recipe.sources.sort((a, b) => b.level - a.level);
    }
    recipe.isAllRare = recipe.sources.every((s) => s.rare);
    allRecipes.push(recipe);
  }

  getApproxCost(recipe) {
    let cost = 0;
    for (let i = 0; i < recipe.sources.length; i++) {
      const level = recipe.sources[i].level;
      cost += 27 * level * level + 126 * level + 2147;
    }
    return cost;
  }
}