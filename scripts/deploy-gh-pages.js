const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'out');
const noJekyll = path.join(outDir, '.nojekyll');
if (!fs.existsSync(noJekyll)) {
  fs.writeFileSync(noJekyll, '');
}

function fixAssetPaths(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      fixAssetPaths(fullPath);
    } else if (/\.(html|js|json|txt|xml)$/.test(file)) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      if (content.includes('"/images/')) {
        content = content.replace(/"\/images\//g, '"/batubata-canggu/images/');
        modified = true;
      }
      if (content.includes("'/images/")) {
        content = content.replace(/'\/images\//g, "'/batubata-canggu/images/");
        modified = true;
      }
      if (content.includes('src="/images/')) {
        content = content.replace(/src="\/images\//g, 'src="/batubata-canggu/images/');
        modified = true;
      }
      if (content.includes('href="/images/')) {
        content = content.replace(/href="\/images\//g, 'href="/batubata-canggu/images/');
        modified = true;
      }
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed asset paths in:', path.relative(outDir, fullPath));
      }
    }
  }
}

console.log('Verifying asset paths in out directory...');
fixAssetPaths(outDir);

console.log('Navigating to out directory:', outDir);
process.chdir(outDir);

execSync('git init -b gh-pages', { stdio: 'inherit' });
execSync('git config user.name "Tawanode"', { stdio: 'inherit' });
execSync('git config user.email "tawanode@users.noreply.github.com"', { stdio: 'inherit' });
execSync('git add -A', { stdio: 'inherit' });
execSync('git commit -m "Deploy to GitHub Pages [skip ci]"', { stdio: 'inherit' });
try {
  execSync('git remote add origin https://github.com/Tawanode/batubata-canggu.git', { stdio: 'inherit' });
} catch (e) {
  execSync('git remote set-url origin https://github.com/Tawanode/batubata-canggu.git', { stdio: 'inherit' });
}
execSync('git push -f origin gh-pages', { stdio: 'inherit' });
console.log('Pushed to gh-pages successfully!');
