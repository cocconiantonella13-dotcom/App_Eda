const fs = require('fs');
const path = require('path');

// PNG de 1x1 color turquesa
const base64Png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==';
const buffer = Buffer.from(base64Png, 'base64');

fs.writeFileSync(path.join(__dirname, 'icon-192.png'), buffer);
fs.writeFileSync(path.join(__dirname, 'icon-512.png'), buffer);
console.log('Iconos creados.');
