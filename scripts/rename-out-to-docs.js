const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'out');
const docsDir = path.join(__dirname, '..', 'docs');

// Remove existing docs directory if it exists
if (fs.existsSync(docsDir)) {
  fs.rmSync(docsDir, { recursive: true, force: true });
  console.log('✓ Removed existing docs directory');
}

// Rename out to docs
if (fs.existsSync(outDir)) {
  fs.renameSync(outDir, docsDir);
  console.log('✓ Renamed out directory to docs');
} else {
  console.error('✗ Error: out directory does not exist');
  process.exit(1);
}

// Create .nojekyll so GitHub Pages serves the _next folder
const noJekyllPath = path.join(docsDir, '.nojekyll');
fs.writeFileSync(noJekyllPath, '');
console.log('✓ Created docs/.nojekyll to disable Jekyll on GitHub Pages');

