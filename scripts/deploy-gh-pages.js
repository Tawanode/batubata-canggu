const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'out');
const noJekyll = path.join(outDir, '.nojekyll');
if (!fs.existsSync(noJekyll)) {
  fs.writeFileSync(noJekyll, '');
}

console.log('Navigating to out directory:', outDir);
process.chdir(outDir);

execSync('git init -b gh-pages', { stdio: 'inherit' });
execSync('git config user.name "Tawanode"', { stdio: 'inherit' });
execSync('git config user.email "tawanode@users.noreply.github.com"', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages [skip ci]"', { stdio: 'inherit' });
try {
  execSync('git remote add origin https://github.com/Tawanode/lavra-luxury-camp.git', { stdio: 'inherit' });
} catch (e) {
  execSync('git remote set-url origin https://github.com/Tawanode/lavra-luxury-camp.git', { stdio: 'inherit' });
}
execSync('git push -f origin gh-pages', { stdio: 'inherit' });
console.log('Pushed to gh-pages successfully!');
