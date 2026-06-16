import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = './public';
const files = fs.readdirSync(publicDir);

files.forEach(file => {
  if (file.endsWith('.png')) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));
    
    console.log(`Optimizing ${file}...`);
    sharp(inputPath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`Saved optimized: ${outputPath}`);
      })
      .catch(err => {
        console.error(`Error optimizing ${file}:`, err);
      });
  }
});
