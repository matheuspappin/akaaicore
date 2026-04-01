const fs = require('fs');
const path = require('path');

const dir = 'apps/web/app/solutions';
let count = 0;

function cleanIdentifier(name) {
  return name.replace(/[^a-zA-Z0-9_\u00C0-\u017F]/g, '');
}

function walk(currentDir) {
  if (!fs.existsSync(currentDir)) return;
  const entries = fs.readdirSync(currentDir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(currentDir, entry.name);
    if (entry.isDirectory()) {
      walk(fullPath);
    } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      let originalContent = content;

      // Fix imports for LogoCanvas
      const importRegex = /import\s+\{\s*([^\s\}]+)LogoCanvas\s*\}\s+from\s+"@\/components\/fire-protection\/fire-control-logo-canvas"/g;
      content = content.replace(importRegex, (match, p1) => {
        const cleanName = cleanIdentifier(p1);
        return `import { FireControlLogoCanvas as ${cleanName}LogoCanvas } from "@/components/fire-protection/fire-control-logo-canvas"`;
      });

      // Fix usage of LogoCanvas
      const usageRegex = /<([^\s>]+)LogoCanvas\s+className="([^"]+)"(?:\s*\/>|\s+text="[^"]*"\s*\/>)/g;
      content = content.replace(usageRegex, (match, p1, p2) => {
        const cleanName = cleanIdentifier(p1);
        return `<${cleanName}LogoCanvas className="${p2}" text="${cleanName}" />`;
      });

      // Fix all function names that have invalid characters
      const exportRegex = /export\s+default\s+function\s+([^\s\(]+)\s*\(/g;
      content = content.replace(exportRegex, (match, p1) => {
        const cleanName = cleanIdentifier(p1);
        return `export default function ${cleanName}(`;
      });

      if (content !== originalContent) {
        fs.writeFileSync(fullPath, content);
        count++;
      }
    }
  }
}

walk(dir);
console.log('Fixed ' + count + ' files.');