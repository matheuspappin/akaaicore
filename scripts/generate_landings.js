const fs = require('fs');
const path = require('path');

const nichesData = JSON.parse(fs.readFileSync('./niches.json', 'utf-8'));
const ptNiches = nichesData.pt;

const SOLUTIONS_PATH = path.join(__dirname, '../apps/web/app/solutions');
const DANCE_TEMPLATE = path.join(SOLUTIONS_PATH, 'estudio-de-danca/page.tsx');
const FIRE_TEMPLATE = path.join(SOLUTIONS_PATH, 'fire-protection/landing/page.tsx');

// Mapeamento de cores e ícones por nicho (extensível)
const nicheStyleMap = {
  dentist: { color: 'blue', icon: 'Stethoscope' },
  gym: { color: 'emerald', icon: 'Dumbbell' },
  boxing: { color: 'red', icon: 'Zap' },
  clinic: { color: 'cyan', icon: 'Stethoscope' },
  beauty: { color: 'pink', icon: 'Sparkles' },
  aesthetics: { color: 'rose', icon: 'Sparkles' },
  pilates: { color: 'teal', icon: 'Activity' },
  yoga: { color: 'indigo', icon: 'Flower2' },
  barber: { color: 'slate', icon: 'Scissors' },
  spa: { color: 'emerald', icon: 'Waves' },
  physio: { color: 'blue', icon: 'Activity' },
  nutrition: { color: 'green', icon: 'Apple' },
  podiatry: { color: 'blue', icon: 'Footprints' },
  tanning: { color: 'orange', icon: 'Sun' },
  pet_shop: { color: 'amber', icon: 'Dog' },
  vet: { color: 'blue', icon: 'Stethoscope' },
  dog_daycare: { color: 'orange', icon: 'Dog' },
  dog_trainer: { color: 'yellow', icon: 'Bone' },
  pet_hotel: { color: 'blue', icon: 'Home' },
  martial_arts: { color: 'red', icon: 'Zap' },
  crossfit: { color: 'orange', icon: 'Dumbbell' },
  swim_school: { color: 'blue', icon: 'Waves' },
  personal: { color: 'emerald', icon: 'User' },
  beach_tennis: { color: 'yellow', icon: 'Trophy' },
  music_school: { color: 'violet', icon: 'Music' },
  language_school: { color: 'blue', icon: 'Languages' },
  art_studio: { color: 'pink', icon: 'Palette' },
  cooking_school: { color: 'orange', icon: 'Utensils' },
  photography: { color: 'zinc', icon: 'Camera' },
  auto_detail: { color: 'blue', icon: 'Car' },
  mechanic: { color: 'slate', icon: 'Wrench' },
  car_wash: { color: 'blue', icon: 'Droplets' },
  cleaning: { color: 'cyan', icon: 'Brush' },
  interior_design: { color: 'amber', icon: 'Layout' },
  party_venue: { color: 'purple', icon: 'PartyPopper' },
  photographer: { color: 'zinc', icon: 'Camera' },
  coworking: { color: 'blue', icon: 'Briefcase' },
  tattoo: { color: 'slate', icon: 'Pencil' },
  tech_repair: { color: 'blue', icon: 'Smartphone' },
  law: { color: 'slate', icon: 'Scale' },
  psychology: { color: 'indigo', icon: 'Brain' },
  wine_club: { color: 'red', icon: 'GlassWater' },
  brewery: { color: 'amber', icon: 'Beer' },
  barista: { color: 'orange', icon: 'Coffee' },
  confectionery: { color: 'pink', icon: 'Cake' },
  real_estate: { color: 'blue', icon: 'Building' },
  consulting: { color: 'slate', icon: 'BarChart' },
  marketing_agency: { color: 'indigo', icon: 'Megaphone' },
  dev_studio: { color: 'blue', icon: 'Code' },
  event_planning: { color: 'purple', icon: 'Calendar' },
  travel_agency: { color: 'blue', icon: 'Plane' },
  insurance: { color: 'blue', icon: 'ShieldCheck' },
  landscaping: { color: 'green', icon: 'Leaf' },
  plumbing: { color: 'blue', icon: 'Droplets' },
  electrician: { color: 'yellow', icon: 'Zap' },
  construction: { color: 'orange', icon: 'HardHat' },
  environmental_compliance: { color: 'emerald', icon: 'Leaf' },
  logistics: { color: 'blue', icon: 'Truck' },
  tailoring: { color: 'amber', icon: 'Scissors' },
  tutoring: { color: 'blue', icon: 'GraduationCap' },
  daycare: { color: 'pink', icon: 'Baby' },
  elderly_care: { color: 'blue', icon: 'HeartPulse' },
  driving_school: { color: 'slate', icon: 'Car' },
  sports_center: { color: 'emerald', icon: 'Trophy' },
  clinic_vet: { color: 'emerald', icon: 'Stethoscope' },
};

function generateLanding(nichoId) {
  const vocab = ptNiches[nichoId];
  if (!vocab) return console.error(`Nicho ${nichoId} não encontrado.`);

  const style = nicheStyleMap[nichoId] || { color: 'blue', icon: 'Layout' };
  const isCredit = vocab.businessModel === 'CREDIT';
  
  // Escolhe o template base
  const templatePath = isCredit ? DANCE_TEMPLATE : FIRE_TEMPLATE;
  let content = fs.readFileSync(templatePath, 'utf-8');

  // Substituições de texto universais
  content = content.replace(/\/solutions\/(estudio-de-danca|fire-protection)/g, `/solutions/${nichoId}`);
  
  if (isCredit) {
    // Especializações para o template CREDIT (AKAAI Dance)
    const [prefix, ...rest] = vocab.name.split(' ');
    const suffix = rest.join(' ');
    
    content = content.replace(/AKAAI <span className="text-violet-400 font-black">Dance<\/span>/g, `${prefix} <span className="text-${style.color}-400 font-black">${suffix}</span>`);
    content = content.replace(/AKAAI Dance/g, vocab.name);
    content = content.replace(/Estúdios de Dança/g, vocab.establishment + ' de ' + vocab.name);
    content = content.replace(/Estúdio/g, vocab.establishment);
    content = content.replace(/Dança/g, vocab.name);
    content = content.replace(/Aluno/g, vocab.client);
    content = content.replace(/Professor/g, vocab.provider);
    content = content.replace(/Aula/g, vocab.service);
    content = content.replace(/Modalidade/g, vocab.category);
    
    // Cores (Dance usa violet/pink/cyan)
    content = content.replace(/violet/g, style.color);
    // Ícone principal
    content = content.replace(/Music/g, style.icon);
    if (!content.includes(`import { ${style.icon}`)) {
        content = content.replace(/import {/, `import { ${style.icon}, `);
    }

  } else {
    // Especializações para o template MONETARY (AKAAI Fire)
    const [prefix, ...rest] = vocab.name.split(' ');
    const suffix = rest.join(' ');

    const color2 = style.color === 'blue' ? 'cyan' : 'red';
    
    content = content.replace(/AKAAI <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-cyan-400 font-black">Fire<\/span>/g, `${prefix} <span className="text-transparent bg-clip-text bg-gradient-to-r from-${style.color}-400 to-${color2}-400 font-black">${suffix}</span>`);
    content = content.replace(/AKAAI Fire/g, vocab.name);
    content = content.replace(/Extintores & PPCI/g, vocab.name);
    content = content.replace(/Empresa/g, vocab.establishment);
    content = content.replace(/Técnico/g, vocab.provider);
    content = content.replace(/Cliente/g, vocab.client);
    content = content.replace(/Vistoria\/OS/g, vocab.service);
    
    // Cores (Fire usa orange/red/cyan)
    content = content.replace(/orange/g, style.color);
    content = content.replace(/red/g, color2);
    
    // Ícone principal
    content = content.replace(/FireExtinguisher/g, style.icon);
    if (!content.includes(`import { ${style.icon}`)) {
        content = content.replace(/import {/, `import { ${style.icon}, `);
    }
  }

  // Caminho de destino
  const destDir = path.join(SOLUTIONS_PATH, nichoId, 'landing');
  if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });
  
  fs.writeFileSync(path.join(destDir, 'page.tsx'), content);
  console.log(`✅ Landing gerada para: ${nichoId} (${vocab.name})`);
}

// Lotes de 10
const allNiches = Object.keys(ptNiches).filter(id => id !== 'dance' && id !== 'fire_protection' && id !== 'default_generic');
const batchSize = 10;
const start = parseInt(process.argv[2] || 0);
const batch = allNiches.slice(start, start + batchSize);

console.log(`🚀 Iniciando lote: ${start} até ${start + batchSize}`);
batch.forEach(generateLanding);
