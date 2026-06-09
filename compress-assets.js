#!/usr/bin/env node

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

const filesToCompress = [
  'hero-video.mp4',  // 3.4MB - will skip, let ffmpeg handle
  'blog-web-dev-hero.png',  // 1.4MB
  'blog-offshore-risks.png',  // 1.5MB
  'hero-illustration.png',  // 979KB
  'x15pcbuilders-screenshot.png',  // 820KB
  'portfolio-salon.png',  // 163KB
  'portfolio-consultancy.png',  // 122KB
  'portfolio-fashion.png',  // 155KB
  'portfolio-restaurant.png',  // 135KB
];

async function compressImages() {
  console.log('Starting image compression...\n');

  for (const file of filesToCompress) {
    if (file.endsWith('.mp4')) {
      console.log(`⏭️  Skipping ${file} (video file - would need ffmpeg)`);
      continue;
    }

    const filePath = path.join(assetsDir, file);

    if (!fs.existsSync(filePath)) {
      console.log(`❌ File not found: ${file}`);
      continue;
    }

    const stats = fs.statSync(filePath);
    const sizeBefore = stats.size / 1024;

    try {
      await sharp(filePath)
        .png({ quality: 80, progressive: true, compressionLevel: 9 })
        .toFile(filePath + '.tmp');

      const statsAfter = fs.statSync(filePath + '.tmp');
      const sizeAfter = statsAfter.size / 1024;
      const saved = sizeBefore - sizeAfter;
      const percent = ((saved / sizeBefore) * 100).toFixed(1);

      // Only replace if compression was effective (20%+ reduction)
      if (saved > 0 && percent > 20) {
        fs.renameSync(filePath + '.tmp', filePath);
        console.log(`✅ ${file}: ${sizeBefore.toFixed(1)}KB → ${sizeAfter.toFixed(1)}KB (-${percent}%)`);
      } else {
        fs.unlinkSync(filePath + '.tmp');
        console.log(`⏭️  ${file}: Already optimal (only -${percent}% reduction)`);
      }
    } catch (err) {
      console.log(`❌ Error compressing ${file}: ${err.message}`);
      if (fs.existsSync(filePath + '.tmp')) {
        fs.unlinkSync(filePath + '.tmp');
      }
    }
  }

  console.log('\n✨ Image compression complete!');
}

compressImages().catch(console.error);
