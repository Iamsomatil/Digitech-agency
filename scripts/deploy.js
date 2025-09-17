/**
 * Deployment script for Pixelforge website
 * This script automates the build and deployment preparation process.
 */

import { execSync } from 'child_process';
import { join } from 'path';
import { writeFileSync } from 'fs';

// Get the current working directory
// @ts-ignore - process is available in Node.js environment
const cwd = process.cwd();

console.log('🚀 Starting deployment preparation...');

// 1. Run the build
console.log('🔨 Building the application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Build completed successfully!');
} catch (error) {
  console.error('❌ Build failed:', error);
  process.exit(1);
}

// 2. Generate deployment instructions
const deploymentInstructions = `
📦 Deployment Instructions
=========================

Your Pixelforge website is ready for deployment! Here are your options:

1. Netlify:
   - Push your code to a GitHub/GitLab/Bitbucket repository
   - Connect the repository to Netlify
   - The _redirects file will handle client-side routing

2. Vercel:
   - Push your code to a GitHub/GitLab/Bitbucket repository
   - Import the repository to Vercel
   - The vercel.json file will handle client-side routing

3. GitHub Pages:
   - Run: npm run build
   - Commit the dist directory to the gh-pages branch
   - Enable GitHub Pages in your repository settings

4. Manual Deployment:
   - The built files are in the 'dist' directory
   - Upload these files to your hosting provider

🔧 Environment Variables in Production:
- Make sure to set VITE_GA_MEASUREMENT_ID in your hosting provider's environment variables

🔍 Post-Deployment Checks:
- Test all navigation links
- Verify analytics are working
- Check the site on mobile and desktop
- Test form submissions
- Verify images are optimized
`;

// 3. Save deployment instructions to a file
const outputFile = join(cwd, 'DEPLOYMENT.md');
writeFileSync(outputFile, deploymentInstructions);

console.log(`\n📝 Deployment instructions have been saved to: ${outputFile}`);
console.log('✨ Deployment preparation complete!');
