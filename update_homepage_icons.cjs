const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

content = content.replace(
  '  Layers,\n  ShieldCheck\n} from \'lucide-react\';',
  '  Layers,\n  ShieldCheck,\n  Layout,\n  Code2,\n  BrainCircuit\n} from \'lucide-react\';'
);

content = content.replace(
  'const PROBLEM_ICON_MAP: Record<string, React.ElementType> = {\n  CopyCheck,',
  'const PROBLEM_ICON_MAP: Record<string, React.ElementType> = {\n  Layout,\n  Code2,\n  BrainCircuit,\n  CopyCheck,'
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
