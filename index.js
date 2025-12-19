const { handleStartTerminal } = require('./lib/handler');
const { default: makeWASocket, useSingleFileAuthState } = require('@adiwajshing/baileys');
const { state, saveState } = useSingleFileAuthState('./session.json');

// 1️⃣ Terminal preview kawaii
handleStartTerminal();

// 2️⃣ WA Kode Pairing Only (Skeleton)
async function startBot(pairingCode = null) {
  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: !pairingCode
  });

  if (pairingCode) {
    console.log('Menggunakan kode pairing untuk login...');
    state.creds = decodePairingCode(pairingCode); // pseudo
    saveState();
  }

  sock.ev.on('creds.update', saveState);

  sock.ev.on('connection.update', (update) => {
    if (update.connection === 'open') console.log('Berhasil connect ke WhatsApp!');
  });

  // nanti handle .start & kirim reply ke WA sesuai role
}

startBot();
