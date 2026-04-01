const fs = require('fs');
const path = require('path');

const dir = 'apps/web/app/solutions';
let count = 0;

function walk(currentDir) {
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (entry.name === 'page.tsx') {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let changed = false;

      // Match import with unicode characters like AteliêdeArteLogoCanvas
      const importRegex = /import \{ ([\w\u00C0-\u017F]+)LogoCanvas \} from "@\/components\/fire-protection\/fire-control-logo-canvas"/g;
      if (content.match(importRegex)) {
        content = content.replace(importRegex, 'import { FireControlLogoCanvas as $1LogoCanvas } from "@/components/fire-protection/fire-control-logo-canvas"');
        changed = true;
      }

      // Match component usage with unicode characters
      const componentRegex = /<([\w\u00C0-\u017F]+)LogoCanvas className="([^"]+)" \/>/g;
      if (content.match(componentRegex)) {
        content = content.replace(componentRegex, '<$1LogoCanvas className="$2" text="$1" />');
        changed = true;
      }
      
      // Match landing component usage: <SomethingLogoCanvas className="..." />
      const landingComponentRegex = /<([\w\u00C0-\u017F]+)LogoCanvas\s+className="([^"]+)"\s*\/>/g;
      if (content.match(landingComponentRegex)) {
        content = content.replace(landingComponentRegex, '<$1LogoCanvas className="$2" text="$1" />');
        changed = true;
      }

      if (changed) {
        fs.writeFileSync(fullPath, content);
        count++;
      }
    }
  }
}

walk(dir);
console.log('Fixed ' + count + ' files.');