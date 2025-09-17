import sharp from 'sharp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join, basename } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create optimized directory if it doesn't exist
const optimizedDir = join(__dirname, '..', 'public', 'optimized');

try {
  await fs.access(optimizedDir);
} catch (error) {
  if (error.code === 'ENOENT') {
    await fs.mkdir(optimizedDir, { recursive: true });
  } else {
    throw error;
  }
}

// Optimize logo
const optimizeImage = async (inputPath, outputPath, width = 800, quality = 80) => {
  try {
    await sharp(inputPath)
      .resize(width, null, { fit: 'inside', withoutEnlargement: true })
      .jpeg({ quality, progressive: true })
      .toFile(outputPath);
    
    const originalStats = await fs.stat(inputPath);
    const optimizedStats = await fs.stat(outputPath);
    const originalSize = originalStats.size;
    const optimizedSize = optimizedStats.size;
    const savings = ((originalSize - optimizedSize) / originalSize * 100).toFixed(2);
    
    console.log(`Optimized ${basename(inputPath)}: ${(originalSize / 1024).toFixed(2)}KB → ${(optimizedSize / 1024).toFixed(2)}KB (${savings}% savings)`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
};

// Process all images in the public directory
const processImages = async () => {
  const publicDir = join(__dirname, '..', 'public');
  const files = await fs.readdir(publicDir);
  const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp'];
  
  for (const file of files) {
    const ext = file.slice(file.lastIndexOf('.')).toLowerCase();
    if (imageExtensions.includes(ext)) {
      const inputPath = join(publicDir, file);
      const outputPath = join(optimizedDir, file.replace(/\.[^/.]+$/, '') + '.jpg');
      await optimizeImage(inputPath, outputPath);
    }
  }
};

// Run the script
processImages().catch(console.error);
