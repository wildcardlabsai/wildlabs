const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

content = content.replace(
  'Automation without the headache.',
  'Digital solutions without the headache.'
);

content = content.replace(
  'We manage the end-to-end technical build so your team doesn’t have to learn another complex platform.',
  'We manage the end-to-end technical build, whether it is custom software, web design, or a complex AI integration.'
);

content = content.replace(
  'The goal isn’t more AI. It’s less work.',
  'The goal isn’t just technology. It’s business velocity.'
);

content = content.replace(
  'Typical automation opportunities can dramatically reduce clerical overhead. Here are illustrative outcomes observed across standard business workflow deployments:',
  'From bespoke platforms to high-conversion websites, our engineering translates directly into measurable business outcomes:'
);

fs.writeFileSync('src/pages/HomePage.tsx', content);
