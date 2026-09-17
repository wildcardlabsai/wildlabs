const fs = require('fs');
let content = fs.readFileSync('src/pages/HomePage.tsx', 'utf8');

if (!content.includes("import { motion } from 'motion/react';")) {
  content = content.replace("import React from 'react';", "import React from 'react';\nimport { motion } from 'motion/react';");
}

content = content.replace(/<section className="/g, '<motion.section\n        initial={{ opacity: 0, y: 30 }}\n        whileInView={{ opacity: 1, y: 0 }}\n        viewport={{ once: true, margin: "-100px" }}\n        transition={{ duration: 0.6, ease: "easeOut" }}\n        className="');

content = content.replace(/<\/section>/g, '</motion.section>');

fs.writeFileSync('src/pages/HomePage.tsx', content);
