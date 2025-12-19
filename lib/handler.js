const readline = require('readline');
const { getUserRole } = require('./role');
const config = require('../config');

function handleStartTerminal() {
  const ascii = `
  
 ██████╗██╗   ██╗██████╗ ███████╗███╗   ██╗███████╗
██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝████╗  ██║██╔════╝
██║      ╚████╔╝ ██████╔╝█████╗  ██╔██╗ ██║█████╗  
██║       ╚██╔╝  ██╔══██╗██╔══╝  ██║╚██╗██║██╔══╝  
╚██████╗   ██║   ██║  ██║███████╗██║ ╚████║███████╗
 ╚═════╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚═╝  ╚═══╝╚══════╝
                                                   

`;
  console.log(ascii);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Masukkan nomor WA user (contoh: 6281234567890): ', (inputNumber) => {
    let role = getUserRole(inputNumber);
    if (!['owner', 'premium'].includes(role)) role = 'free';

    console.log(`\n✨ Hai ${config.roleGreetings[role]}! Aku Cyrene, assistant kawaii kamu 💖`);
    console.log(`🕒 Runtime: ${new Date().toLocaleString()}`);
    console.log(`🖼 Thumbnail Start: ${config.defaultThumbnail}`);
    console.log(`📝 Footer: ${config.footer}`);
    console.log(`🔗 Sosmed Owner: IG ${config.ownerSocial.instagram} | TW ${config.ownerSocial.twitter} | GH ${config.ownerSocial.github}`);

    rl.close();
  });
}

module.exports = { handleStartTerminal };
