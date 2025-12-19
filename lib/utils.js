const fs = require('fs');
const path = require('path');

function getTotalFeatures(categoryFolder) {
  const folderPath = path.join(__dirname, '..', 'plugins', categoryFolder);
  if (!fs.existsSync(folderPath)) return 0;
  return fs.readdirSync(folderPath).filter(f => f.endsWith('.js')).length;
}

module.exports = { getTotalFeatures };
