const { promisify } = require('util');
const fs = require('fs');
const convert = require('heic-convert');

(async () => {
  const files = ['galeria7.HEIC', 'galeria8.HEIC', 'galeria9.HEIC'];
  for (const file of files) {
    try {
      console.log(`Converting ${file}...`);
      const inputBuffer = await promisify(fs.readFile)(`public/${file}`);
      const outputBuffer = await convert({
        buffer: inputBuffer,
        format: 'JPEG',
        quality: 1
      });
      await promisify(fs.writeFile)(`public/${file.replace('.HEIC', '.jpeg')}`, outputBuffer);
      console.log(`Saved as ${file.replace('.HEIC', '.jpeg')}`);
    } catch (e) {
      console.error(`Error converting ${file}: `, e);
    }
  }
})();
