const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'out');
if (!fs.existsSync(outDir)) {
  console.log('out directory does not exist, skipping fix-paths');
  process.exit(0);
}

const noJekyll = path.join(outDir, '.nojekyll');
if (!fs.existsSync(noJekyll)) {
  fs.writeFileSync(noJekyll, '');
}

const isGithubPages =
  process.env.GITHUB_PAGES === 'true' || process.env.GITHUB_ACTIONS === 'true';
const repoName = process.env.REPO_NAME || 'batubata-canggu';
const targetPrefix = isGithubPages ? `/${repoName}/images/` : '/images/';

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

      if (isGithubPages) {
        if (content.includes('"/images/')) {
          content = content.replace(/"\/images\//g, `"${targetPrefix}`);
          modified = true;
        }
        if (content.includes("'/images/")) {
          content = content.replace(/'\/images\//g, `'${targetPrefix}`);
          modified = true;
        }
        if (content.includes('src="/images/')) {
          content = content.replace(/src="\/images\//g, `src="${targetPrefix}`);
          modified = true;
        }
        if (content.includes('href="/images/')) {
          content = content.replace(/href="\/images\//g, `href="${targetPrefix}`);
          modified = true;
        }
      }

      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log('Fixed asset paths in:', path.relative(outDir, fullPath));
      }
    }
  }
}

console.log('Running fix-paths for target prefix:', targetPrefix);
fixAssetPaths(outDir);
console.log('Asset paths verified.');
