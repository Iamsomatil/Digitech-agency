const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Create optimized directory if it doesn't exist
const optimizedDir = path.join(__dirname, '..', 'public', 'optimized');
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Optimize logo
const optimizeImage = async (inputPath, outputPath, width = 800, quality = 80) => {
  try {
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`Optimized ${path.basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(optimizedSize / 1024).toFixed(2)}KB (${savings}% savings)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

// Process all images in the public directory
const processImages = async () => {
  const publicDir = path.join(__dirname, '..', 'public');
  const files = fs.readdirSync(publicDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const inputPath = path.join(publicDir, file);
      const outputPath = path.join(optimizedDir, file.replace(/\.[^/.]+$/, '') + '.jpg');
      await optimizeImage(inputPath, outputPath);
    }
  }
};

processImages();
