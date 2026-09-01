// src/data/p5r/p5rHelpers.js
import { personaMapRoyal } from './PersonaDataRoyal';

export function buildPersonaeByArcana() {
  const personaeByArcana = {};

  for (const [name, data] of Object.entries(personaMapRoyal)) {
    const arcana = data.arcana;
    if (!personaeByArcana[arcana]) {
      personaeByArcana[arcana] = [];
    }
    // Make sure 'name' property is attached
    personaeByArcana[arcana].push({ name, ...data });
  }

  // Sort each Arcana by level ascending
  for (const arcana in personaeByArcana) {
    personaeByArcana[arcana].sort((a, b) => a.level - b.level);
  }

  return personaeByArcana;
}