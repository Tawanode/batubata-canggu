const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'out');
const noJekyll = path.join(outDir, '.nojekyll');
if (!fs.existsSync(noJekyll)) {
  fs.writeFileSync(noJekyll, '');
}

// Ensure all image paths across all static files are prefixed with /lavra-luxury-camp
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
      // Replace "/images/..." not already prefixed with "/lavra-luxury-camp"
      if (content.includes('"/images/')) {
        content = content.replace(/"\/images\//g, '"/lavra-luxury-camp/images/');
        modified = true;
      }
      if (content.includes("'/images/")) {
        content = content.replace(/'\/images\//g, "'/lavra-luxury-camp/images/");
        modified = true;
      }
      if (content.includes('src="/images/')) {
        content = content.replace(/src="\/images\//g, 'src="/lavra-luxury-camp/images/');
        modified = true;
      }
      if (content.includes('href="/images/')) {
        content = content.replace(/href="\/images\//g, 'href="/lavra-luxury-camp/images/');
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
  execSync('git remote add origin https://github.com/Tawanode/lavra-luxury-camp.git', { stdio: 'inherit' });
} catch (e) {
  execSync('git remote set-url origin https://github.com/Tawanode/lavra-luxury-camp.git', { stdio: 'inherit' });
}
execSync('git push -f origin gh-pages', { stdio: 'inherit' });
console.log('Pushed to gh-pages successfully!');
