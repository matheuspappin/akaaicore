const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const basePath = path.join(__dirname, '../apps/web/app/solutions');

const niches = [
  { id: 'dentist', name: 'Odontologia', color: 'blue', icon: 'Stethoscope' },
  { id: 'clinic', name: 'Clínica Médica', color: 'blue', icon: 'Stethoscope' },
  { id: 'physio', name: 'Fisioterapia', color: 'blue', icon: 'Activity' },
  { id: 'psychology', name: 'Psicologia', color: 'blue', icon: 'Brain' },
  { id: 'nutrition', name: 'Nutrição', color: 'blue', icon: 'Apple' },
];

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

function processFiles(dir, niche) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processFiles(fullPath, niche);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // Rotas e imports
      content = content.replace(/\/solutions\/fire-protection/g, `/solutions/${niche.id}`);
      
      // Cores (substituindo red- para a cor do nicho)
      content = content.replace(/red-600/g, `${niche.color}-600`);
      content = content.replace(/red-500/g, `${niche.color}-500`);
      content = content.replace(/red-400/g, `${niche.color}-400`);
      content = content.replace(/red-300/g, `${niche.color}-300`);
      
      // No arquivo page.tsx da raiz, adaptar o ícone e nome se possível
      if (entry.name === 'page.tsx' && path.dirname(fullPath) === path.join(basePath, niche.id)) {
        content = content.replace(/ExtinguisherIcon/g, niche.icon);
        content = content.replace(/import \{ ExtinguisherIcon \} from "@/gi, `import { ${niche.icon} } from "lucide-react" // `);
        content = content.replace(/Extintores • Vistorias • INMETRO/g, niche.name);
        content = content.replace(/Gestão inteligente de extintores e proteção contra incêndio/g, `Gestão inteligente para ${niche.name}`);
        content = content.replace(/FireControl/g, niche.name.replace(/ /g, ''));
      }
      
      fs.writeFileSync(fullPath, content);
    }
  }
}

async function main() {
  const srcDir = path.join(basePath, 'fire-protection');
  for (const niche of niches) {
    console.log(`Processando ${niche.id}...`);
    const destDir = path.join(basePath, niche.id);
    copyDir(srcDir, destDir);
    processFiles(destDir, niche);
    console.log(`Concluído ${niche.id}`);
  }
}

main().catch(console.error);
