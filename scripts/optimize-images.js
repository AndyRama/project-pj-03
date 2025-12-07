import sharp from 'sharp';
import { existsSync, readdirSync, statSync, renameSync, unlinkSync } from 'fs';
import { join } from 'path';

async function optimizeImages(dir) {
  if (!existsSync(dir)) {
    console.log(`📁 Directory ${dir} not found, skipping...`);
    return;
  }
  
  const files = readdirSync(dir);
  let totalSaved = 0;
  let filesProcessed = 0;
  
  for (const file of files) {
    const filePath = join(dir, file);
    
    if (!existsSync(filePath)) continue;
    
    const stat = statSync(filePath);
    
    if (stat.isDirectory()) {
      await optimizeImages(filePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(file)) {
      const originalSize = stat.size;
      
      // Skip si déjà optimisé (< 500KB)
      if (originalSize < 500000) {
        console.log(`✓ ${filePath} - déjà optimisé (${(originalSize / 1024).toFixed(0)}KB)`);
        continue;
      }
      
      console.log(`🔄 Optimisation ${filePath}...`);
      
      const tempPath = filePath + '.tmp';
      
      try {
        await sharp(filePath)
          .resize(1920, 1920, {
            fit: 'inside',
            withoutEnlargement: true
          })
          .jpeg({ quality: 85, progressive: true })
          .toFile(tempPath);
        
        const newSize = statSync(tempPath).size;
        const saved = originalSize - newSize;
        totalSaved += saved;
        filesProcessed++;
        
        console.log(`   ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${((saved / originalSize) * 100).toFixed(1)}% économisé)`);
        
        renameSync(tempPath, filePath);
      } catch (err) {
        console.error(`   ❌ Erreur: ${err.message}`);
        if (existsSync(tempPath)) unlinkSync(tempPath);
      }
    }
  }
  
  if (filesProcessed > 0) {
    console.log(`\n✅ ${filesProcessed} fichiers optimisés`);
    console.log(`💾 Total économisé: ${(totalSaved / 1024 / 1024).toFixed(2)}MB`);
  }
}

console.log('🖼️  Optimisation des images...\n');
optimizeImages('./public')
  .then(() => console.log('\n🎉 Terminé!'))
  .catch(err => console.error('❌ Erreur:', err));