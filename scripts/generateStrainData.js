const { faker } = require('@faker-js/faker');
const fs = require('fs');
const path = require('path');

// Constants from strains.tsx
const storageOptions = {
  banked: "banked",
  unbanked: "unbanked",
};

const projects = {
  project_zero: "Project Zero",
  super_project: "Super Project",
  gen_revolution: "Gen Revolution",
  quantum_flora: "Quantum Flora",
  biopioneer: "BioPioneer",
  future_brew: "Future Brew",
};

// Helper functions to generate realistic data
function getRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const plasmids = ['pUC19', 'pBR322', 'pET28a', 'pGEX-4T', 'pCMV', 'pYES2', 'pRS316', 'pRS425'];
const markers = ['AmpR', 'KanR', 'ChlR', 'TetR', 'His3', 'Trp1', 'Ura3', 'Leu2'];
const media = ['YPD', 'SD', 'SC', 'LB', 'M9', 'YNB', 'YEPD', 'Synthetic Complete'];
const ethanolTolerances = ['Low', 'Medium', 'High', 'Very High'];
const flocculations = ['Low', 'Medium', 'High', 'Very High'];
const stressResistances = ['Poor', 'Fair', 'Good', 'Excellent'];
const contaminations = ['None', 'Low', 'Medium', 'High'];
const geneticStabilities = ['Stable', 'Moderately Stable', 'Unstable'];
const enzymicActivities = ['Low', 'Medium', 'High', 'Very High'];
const proteinExpressions = ['Low', 'Medium', 'High', 'Overexpressed'];
const carbSources = ['Glucose', 'Fructose', 'Sucrose', 'Galactose', 'Maltose', 'Xylose'];
const nitrogenSources = ['Ammonium Sulfate', 'Peptone', 'Yeast Extract', 'Casamino Acids'];
const biomarkers = ['GFP', 'RFP', 'YFP', 'CFP', 'mCherry', 'Venus', 'Cerulean'];
const storageConditions = ['-80°C', '-20°C', '4°C', 'Room Temperature', 'Liquid Nitrogen'];
const applications = ['Research', 'Production', 'Fermentation', 'Biotech', 'Pharmaceutical'];
const riskAssessments = ['Low Risk', 'Medium Risk', 'High Risk', 'Contained'];
const complianceStatuses = ['Compliant', 'Under Review', 'Non-Compliant', 'Pending'];
const statuses = ['Active', 'Archived', 'Under Development', 'Deprecated', 'Quality Control'];

function generateStrainData(count = 500) {
  console.log(`Generating ${count} strain entries...`);
  
  const projectValues = Object.values(projects);
  const storageValues = Object.values(storageOptions);
  
  const strains = Array.from({ length: count }, (_, i) => {
    return {
      id: `strain-${i + 1}`,
      name: `Y${String(i + 1).padStart(5, '0')}`,
      parent: i < 100 ? null : (Math.random() > 0.3 ? `Y${String(faker.number.int({ min: 1, max: i })).padStart(5, '0')}` : null),
      storage: getRandomElement(storageValues),
      description: faker.lorem.sentence({ min: 4, max: 12 }),
      project: getRandomElement(projectValues),
      temperature: parseFloat(faker.number.float({ min: 15, max: 45, multipleOf: 0.1 }).toFixed(1)),
      ph: parseFloat(faker.number.float({ min: 3.5, max: 8.5, multipleOf: 0.1 }).toFixed(1)),
      viability: faker.number.int({ min: 70, max: 99 }),
      cellCount: faker.number.int({ min: 1000000, max: 50000000 }).toLocaleString(),
      plasmid: getRandomElement(plasmids),
      marker: getRandomElement(markers),
      medium: getRandomElement(media),
      osmolarity: faker.number.int({ min: 200, max: 400 }),
      oxygenLevel: parseFloat(faker.number.float({ min: 0.5, max: 21.0, multipleOf: 0.1 }).toFixed(1)),
      glucoseConc: parseFloat(faker.number.float({ min: 0.5, max: 20.0, multipleOf: 0.1 }).toFixed(1)),
      ethanolTolerance: getRandomElement(ethanolTolerances),
      growthRate: parseFloat(faker.number.float({ min: 0.1, max: 2.5, multipleOf: 0.01 }).toFixed(2)),
      flocculation: getRandomElement(flocculations),
      attenuation: faker.number.int({ min: 60, max: 95 }),
      fermentationTime: faker.number.int({ min: 12, max: 168 }),
      stressResistance: getRandomElement(stressResistances),
      purityLevel: parseFloat(faker.number.float({ min: 85.0, max: 99.9, multipleOf: 0.1 }).toFixed(1)),
      contamination: getRandomElement(contaminations),
      geneticStability: getRandomElement(geneticStabilities),
      mutationRate: parseFloat(faker.number.float({ min: 0.001, max: 0.1, multipleOf: 0.001 }).toFixed(3)),
      enzymicActivity: getRandomElement(enzymicActivities),
      metabolicRate: parseFloat(faker.number.float({ min: 0.5, max: 5.0, multipleOf: 0.01 }).toFixed(2)),
      proteinExpression: getRandomElement(proteinExpressions),
      lipidContent: parseFloat(faker.number.float({ min: 5.0, max: 25.0, multipleOf: 0.1 }).toFixed(1)),
      carbSource: getRandomElement(carbSources),
      nitrogenSource: getRandomElement(nitrogenSources),
      biomarkers: getRandomElement(biomarkers),
      generation: faker.number.int({ min: 1, max: 50 }),
      passage: faker.number.int({ min: 1, max: 100 }),
      freezeThawCycles: faker.number.int({ min: 0, max: 20 }),
      storageCondition: getRandomElement(storageConditions),
      qualityScore: parseFloat(faker.number.float({ min: 6.0, max: 10.0, multipleOf: 0.1 }).toFixed(1)),
      batchNumber: `B${faker.number.int({ min: 1000, max: 9999 })}`,
      laboratoryId: `LAB-${faker.number.int({ min: 100, max: 999 })}`,
      notes: faker.lorem.sentence({ min: 3, max: 8 }),
      applications: getRandomElement(applications),
      riskAssessment: getRandomElement(riskAssessments),
      complianceStatus: getRandomElement(complianceStatuses),
      lastModified: faker.date.recent({ days: 365 }).toISOString().split('T')[0],
      createdBy: faker.person.fullName(),
      createdOn: faker.date.past({ years: 5 }).toISOString().split('T')[0],
      version: `v${faker.number.int({ min: 1, max: 10 })}.${faker.number.int({ min: 0, max: 9 })}`,
      status: getRandomElement(statuses),
      conductivity: parseFloat(faker.number.float({ min: 0.5, max: 10.0, multipleOf: 0.01 }).toFixed(2)),
    };
  });

  return strains;
}

function main() {
  let count = process.argv[2] ? parseInt(process.argv[2]) : 500;
  
  if (isNaN(count) || count <= 0) {
    console.error('Invalid count provided. Using default 500.');
    count = 500;
  }

  const strains = generateStrainData(count);
  
  // Ensure the data directory exists
  const dataDir = path.join(__dirname, '..', 'src', 'data');
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Write to JSON file
  const outputPath = path.join(dataDir, 'strains.json');
  fs.writeFileSync(outputPath, JSON.stringify(strains, null, 2));
  
  console.log(`✅ Generated ${strains.length} strain entries and saved to ${outputPath}`);
  console.log(`📊 File size: ${(fs.statSync(outputPath).size / 1024 / 1024).toFixed(2)} MB`);
}

if (require.main === module) {
  main();
}

module.exports = { generateStrainData };
