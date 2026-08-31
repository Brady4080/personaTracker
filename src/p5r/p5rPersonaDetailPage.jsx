import { useParams, Link } from 'react-router-dom';
import './p5rPersonaDetailPage.css'
import P5Rnav from '../personaAll/personaCompents'

import { rarePersonaeRoyal, rareCombosRoyal, arcana2CombosRoyal, specialCombosRoyal, dlcPersonaRoyal, inheritanceChartRoyal } from '../../data/p5r/Data5Royal'
import { itemMapRoyal } from '../../data/p5r/ItemDataRoyal'
import { skillMapRoyal } from '../../data/p5r/SkillDataRoyal'
import { personaMapRoyal } from '../../data/p5r/PersonaDataRoyal';

function P5RPersonaDetailPage() {
  const { personaName } = useParams();

  const decodedName = decodeURIComponent(personaName);
  const personaData = personaMapRoyal[decodedName];
  const itemData = itemMapRoyal[personaData.item];
  const itemDatar = itemMapRoyal[personaData.itemr];
  const inheritanceData = inheritanceChartRoyal[personaData.inherits]; 



  if (!personaData) {
    return (
        <div className="p5r-wrapper">
          <P5Rnav />

          <div>
            <h2>Persona not found</h2>
          </div>
        </div>
    );
  }

  return (
    <div className="p5r-wrapper">
      <P5Rnav />

      <div className="persona-detail-page">
        <div className='p5rdetailHeader'>
          <h1>{decodedName}</h1>
          <p>(<strong>Arcana:</strong> {personaData.arcana}</p>
          <p><strong>Level:</strong> {personaData.level})</p>
        </div>

        <h1 className='p5rdetailsTitles'>Itemization</h1>
        <div className='table-container'>
              <table className="p5rFusionTable">
                <thead>
                  <tr>
                    <th></th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <td>Normal</td>
                  <td>{itemData.type}</td>
                  <td>{personaData.item}</td>
                  <td>{itemData.description}</td>
                </tbody>
                <tbody>
                  <td>Fusion Alarm</td>
                  <td>{itemDatar.type}</td>
                  <td>{personaData.itemr}</td>
                  <td>{itemData.description}</td>
                </tbody>
              </table>
        </div>

        <h1 className='p5rdetailsTitles'>Stats</h1>
        <div className='table-container'>
              <table className="p5rFusionTable">
                <thead>
                  <tr>
                    <th>Stregnth</th>
                    <th>Magic</th>
                    <th>Endurance</th>
                    <th>Agility</th>
                    <th>Luck</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{personaData.stats[0]}</td>
                  <td>{personaData.stats[1]}</td>
                  <td>{personaData.stats[2]}</td>
                  <td>{personaData.stats[3]}</td>
                  <td>{personaData.stats[4]}</td>
                </tbody>
              </table>
        </div>

        <h1 className='p5rdetailsTitles'>Elements</h1>
        <div className='table-container'>
              <table className="p5rFusionTable">
                <thead>
                  <tr>
                    <th>Physical</th>
                    <th>Gun</th>
                    <th>Fire</th>
                    <th>Ice</th>
                    <th>Electric</th>
                    <th>Wind</th>
                    <th>Physic</th>
                    <th>Nuclear</th>
                    <th>Bless</th>
                    <th>Curse</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{personaData.elems[0]}</td>
                  <td>{personaData.elems[1]}</td>
                  <td>{personaData.elems[2]}</td>
                  <td>{personaData.elems[3]}</td>
                  <td>{personaData.elems[4]}</td>
                  <td>{personaData.elems[5]}</td>
                  <td>{personaData.elems[6]}</td>
                  <td>{personaData.elems[7]}</td>
                  <td>{personaData.elems[8]}</td>
                  <td>{personaData.elems[9]}</td>
                </tbody>
              </table>
        </div>

        <h1 className='p5rdetailsTitles'>Inheritance | Type:{personaData.inherits}</h1>
        <div className='table-container'>
              <table className="p5rFusionTable">
                <thead>
                  <tr>
                    <th>Physical</th>
                    <th>Gun</th>
                    <th>Fire</th>
                    <th>Ice</th>
                    <th>Electric</th>
                    <th>Wind</th>
                    <th>Physic</th>
                    <th>Nuclear</th>
                    <th>Bless</th>
                    <th>Curse</th>
                  </tr>
                </thead>
                <tbody>
                  <td>{inheritanceData[0]}</td>
                  <td>{inheritanceData[1]}</td>
                  <td>{inheritanceData[2]}</td>
                  <td>{inheritanceData[3]}</td>
                  <td>{inheritanceData[4]}</td>
                  <td>{inheritanceData[5]}</td>
                  <td>{inheritanceData[6]}</td>
                  <td>{inheritanceData[7]}</td>
                  <td>{inheritanceData[8]}</td>
                  <td>{inheritanceData[9]}</td>
                </tbody>
              </table>
        </div>

        <h1 className='p5rdetailsTitles'>Skills</h1>
        <div className='table-container'>
              <table className="p5rFusionTable">
                <thead>
                  <tr>
                    <th>Level</th>
                    <th>Type</th>
                    <th>Name</th>
                    <th>Effect</th>
                    <th>Cost</th>
                  </tr>
                </thead>
                <tbody>
                  <td>0</td>
                  <td>Trait</td>
                  <td>{personaData.trait}</td>
                  <td>{skillMapRoyal[personaData.trait]?.effect || '-'}</td>
                  <td>-</td>
                  {Object.entries(personaData.skills || {}).map(([skillName, level]) => {
                  const skillInfo = skillMapRoyal[skillName] || {};
                  return (
                    <tr key={skillName}>
                      <td>{level}</td>
                      <td>{skillInfo.element || '-'}</td>
                      <td>{skillName}</td>
                      <td>{skillInfo.effect || '-'}</td>
                      <td>{skillInfo.cost || '-'}</td>
                    </tr>
                  );
                  })}
                </tbody>
              </table>
        </div>
      </div>
    </div>
  )
}

export default P5RPersonaDetailPage