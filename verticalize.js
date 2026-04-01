const fs = require('fs');
const path = require('path');
const nichesData = require('./niches.json');

const basePath = path.join(__dirname, 'apps/web/app/solutions');

function pluralize(word) {
  if (word.endsWith('r')) return word + 'es';
  if (word.endsWith('al')) return word.slice(0, -1) + 'is';
  if (word.endsWith('m')) return word.slice(0, -1) + 'ns';
  if (word.endsWith('ão')) return word.slice(0, -2) + 'ões';
  if (word.endsWith('s')) return word;
  return word + 's';
}

function getNicheStyling(id) {
  const styling = {
    dentist: { color: 'blue', icon: 'Stethoscope' },
    clinic: { color: 'blue', icon: 'Stethoscope' },
    physio: { color: 'blue', icon: 'Activity' },
    psychology: { color: 'blue', icon: 'Brain' },
    nutrition: { color: 'blue', icon: 'Apple' },
    podiatry: { color: 'blue', icon: 'Footprints' },
    beauty: { color: 'pink', icon: 'Scissors' },
    aesthetics: { color: 'pink', icon: 'Sparkles' },
    barber: { color: 'amber', icon: 'Scissors' },
    spa: { color: 'teal', icon: 'Flower2' },
    tattoo: { color: 'zinc', icon: 'PenTool' },
    tanning: { color: 'orange', icon: 'Sun' },
    auto_detail: { color: 'slate', icon: 'Car' },
    mechanic: { color: 'slate', icon: 'Wrench' },
    car_wash: { color: 'sky', icon: 'Droplets' },
    driving_school: { color: 'slate', icon: 'Car' },
    pet_shop: { color: 'orange', icon: 'Bone' },
    vet: { color: 'emerald', icon: 'Stethoscope' },
    clinic_vet: { color: 'emerald', icon: 'Stethoscope' },
    pet_hotel: { color: 'orange', icon: 'Home' },
    dog_daycare: { color: 'orange', icon: 'Sun' },
    dog_trainer: { color: 'orange', icon: 'Target' },
    tutoring: { color: 'indigo', icon: 'BookOpen' },
    art_studio: { color: 'violet', icon: 'Palette' },
    music_school: { color: 'violet', icon: 'Music' },
    language_school: { color: 'indigo', icon: 'Globe' },
    cooking_school: { color: 'orange', icon: 'ChefHat' },
    photography: { color: 'zinc', icon: 'Camera' },
    photographer: { color: 'zinc', icon: 'Camera' },
    tech_repair: { color: 'blue', icon: 'MonitorSmartphone' },
    plumbing: { color: 'cyan', icon: 'Wrench' },
    electrician: { color: 'yellow', icon: 'Zap' },
    fire_protection: { color: 'red', icon: 'Flame' },
    construction: { color: 'orange', icon: 'HardHat' },
    environmental_compliance: { color: 'emerald', icon: 'Leaf' },
    logistics: { color: 'blue', icon: 'Truck' },
    cleaning: { color: 'sky', icon: 'Sparkles' },
    consulting: { color: 'slate', icon: 'Briefcase' },
    marketing_agency: { color: 'indigo', icon: 'Megaphone' },
    dev_studio: { color: 'slate', icon: 'Code' },
    event_planning: { color: 'fuchsia', icon: 'CalendarDays' },
    party_venue: { color: 'fuchsia', icon: 'PartyPopper' },
    coworking: { color: 'slate', icon: 'Building' },
    real_estate: { color: 'blue', icon: 'Home' },
    insurance: { color: 'blue', icon: 'ShieldCheck' },
    law: { color: 'slate', icon: 'Scale' },
    gym: { color: 'red', icon: 'Dumbbell' },
    boxing: { color: 'red', icon: 'Dumbbell' },
    pilates: { color: 'teal', icon: 'Activity' },
    yoga: { color: 'teal', icon: 'Flower2' },
    martial_arts: { color: 'red', icon: 'Swords' },
    crossfit: { color: 'red', icon: 'Dumbbell' },
    swim_school: { color: 'blue', icon: 'Waves' },
    beach_tennis: { color: 'orange', icon: 'Sun' },
    personal: { color: 'red', icon: 'Dumbbell' },
    sports_center: { color: 'blue', icon: 'Trophy' },
    tailoring: { color: 'slate', icon: 'Scissors' },
    daycare: { color: 'yellow', icon: 'Baby' },
    elderly_care: { color: 'teal', icon: 'Heart' },
    interior_design: { color: 'slate', icon: 'Sofa' },
    wine_club: { color: 'rose', icon: 'Wine' },
    brewery: { color: 'amber', icon: 'Beer' },
    barista: { color: 'amber', icon: 'Coffee' },
    confectionery: { color: 'pink', icon: 'Cake' },
  };
  return styling[id] || { color: 'slate', icon: 'Briefcase' };
}

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function processFiles(dir, nicheId, nicheObj) {
  const styling = getNicheStyling(nicheId);
  const baseNiche = nicheObj.businessModel === 'CREDIT' ? 'estudio-de-danca' : 'fire-protection';
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath, nicheId, nicheObj);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      const regexBase = new RegExp(`/solutions/${baseNiche}`, 'g');
      content = content.replace(regexBase, `/solutions/${nicheId}`);
      
      const baseColor = nicheObj.businessModel === 'CREDIT' ? 'violet' : 'red';
      
      if (baseColor !== styling.color) {
        content = content.replace(new RegExp(`${baseColor}-600`, 'g'), `${styling.color}-600`);
        content = content.replace(new RegExp(`${baseColor}-500`, 'g'), `${styling.color}-500`);
        content = content.replace(new RegExp(`${baseColor}-400`, 'g'), `${styling.color}-400`);
        content = content.replace(new RegExp(`${baseColor}-300`, 'g'), `${styling.color}-300`);
        content = content.replace(new RegExp(`${baseColor}-700`, 'g'), `${styling.color}-700`);
        content = content.replace(new RegExp(`${baseColor}-800`, 'g'), `${styling.color}-800`);
        content = content.replace(new RegExp(`${baseColor}-900`, 'g'), `${styling.color}-900`);
      }

      const appName = nicheObj.name.replace(/ /g, '');

      if (entry.name === 'page.tsx' && dir === path.join(basePath, nicheId)) {
        content = content.replace(/import \{ ExtinguisherIcon \} from "[^"]+"/g, '');
        content = content.replace(/import \{ ExtinguisherIcon \} from '[^']+'/g, '');
        
        if (content.includes('lucide-react')) {
            content = content.replace(/import \{ ([^}]+) \} from "lucide-react"/, `import { $1, ${styling.icon} } from "lucide-react"`);
        } else {
            content = `import { ${styling.icon} } from "lucide-react";\n` + content;
        }

        if (baseNiche === 'fire-protection') {
            content = content.replace(/<ExtinguisherIcon([^>]*)>/g, `<${styling.icon}$1>`);
            content = content.replace(/Extintores • Vistorias • INMETRO/g, nicheObj.name);
            content = content.replace(/Gestão inteligente de extintores e proteção contra incêndio/g, `Gestão inteligente para ${nicheObj.name}`);
            content = content.replace(/FireControl/g, appName);
            // Fix canvas replacement: completely remove the element
            content = content.replace(/<FireWaterCanvas[^>]*\/>/g, '');
            content = content.replace(/<[A-Za-z]+LogoCanvas[^>]*\/>/g, '');
            // Also remove the imports to avoid warnings
            content = content.replace(/import \{ FireWaterCanvas \} from "[^"]+"/g, '');
            content = content.replace(/import \{ [A-Za-z]+LogoCanvas \} from "[^"]+"/g, '');
        } else {
            content = content.replace(/<Music([^>]*)>/g, `<${styling.icon}$1>`);
            content = content.replace(/Estúdios de Dança/g, nicheObj.name);
            content = content.replace(/estúdios de dança/g, nicheObj.name.toLowerCase());
            content = content.replace(/estúdio de dança/g, nicheObj.name.toLowerCase());
            content = content.replace(/Estúdio de Dança/g, nicheObj.name);
            
            content = content.replace(/Alunos/g, pluralize(nicheObj.client));
            content = content.replace(/alunos/g, pluralize(nicheObj.client.toLowerCase()));
            content = content.replace(/Aluno/g, nicheObj.client);
            content = content.replace(/aluno/g, nicheObj.client.toLowerCase());
            
            content = content.replace(/Aulas/g, pluralize(nicheObj.service));
            content = content.replace(/aulas/g, pluralize(nicheObj.service.toLowerCase()));
            content = content.replace(/Aula/g, nicheObj.service);
            content = content.replace(/aula/g, nicheObj.service.toLowerCase());
            
            content = content.replace(/Professores/g, pluralize(nicheObj.provider));
            content = content.replace(/professores/g, pluralize(nicheObj.provider.toLowerCase()));
            content = content.replace(/Professor/g, nicheObj.provider);
            content = content.replace(/professor/g, nicheObj.provider.toLowerCase());
            
            content = content.replace(/Estúdios/g, pluralize(nicheObj.establishment));
            content = content.replace(/estúdios/g, pluralize(nicheObj.establishment.toLowerCase()));
            content = content.replace(/Estúdio/g, nicheObj.establishment);
            content = content.replace(/estúdio/g, nicheObj.establishment.toLowerCase());
        }
      }

      content = content.replace(/DanceFlow/g, appName);
      content = content.replace(/FireControl/g, appName);
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

async function main() {
  const skipList = ['dance', 'fire_protection', 'default_generic'];
  const allNiches = Object.keys(nichesData.pt).filter(id => !skipList.includes(id));
  
  console.log(`Encontrados ${allNiches.length} nichos para processar.`);

  for (const nicheId of allNiches) {
    const nicheObj = nichesData.pt[nicheId];
    console.log(`Processando [${nicheObj.businessModel}] ${nicheId}...`);
    
    const baseFolder = nicheObj.businessModel === 'CREDIT' ? 'estudio-de-danca' : 'fire-protection';
    const srcDir = path.join(basePath, baseFolder);
    const destDir = path.join(basePath, nicheId);
    
    if (fs.existsSync(destDir)) {
      fs.rmSync(destDir, { recursive: true, force: true });
    }
    
    copyDir(srcDir, destDir);
    processFiles(destDir, nicheId, nicheObj);
    console.log(`✅ Concluído ${nicheId}`);
  }
}

main().catch(console.error);