const axios = require('axios');
require('dotenv').config();

const SERVER_URL = process.env.SERVER_URL || 'https://replix-server.onrender.com';
const PING_INTERVAL = process.env.PING_INTERVAL || 5; // minutes

console.log('🚀 Server Hitter Started');
console.log(`📡 Target Server: ${SERVER_URL}`);
console.log(`⏰ Ping Interval: ${PING_INTERVAL} minutes`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

async function pingServer() {
  const timestamp = new Date().toLocaleString();
  
  try {
    console.log(`[${timestamp}] 🔄 Pinging server...`);
    
    const startTime = Date.now();
    const response = await axios.get(SERVER_URL, {
      timeout: 30000, // 30 seconds timeout
      headers: {
        'User-Agent': 'Server-Hitter-Keep-Alive/1.0'
      }
    });
    const responseTime = Date.now() - startTime;
    
    console.log(`[${timestamp}] ✅ Server is alive! (Status: ${response.status}, Response time: ${responseTime}ms)\n`);
  } catch (error) {
    if (error.response) {
      // Server responded with error status
      console.log(`[${timestamp}] ⚠️  Server responded with status: ${error.response.status}\n`);
    } else if (error.request) {
      // No response received
      console.log(`[${timestamp}] ❌ No response from server (Timeout or network error)\n`);
    } else {
      // Other errors
      console.log(`[${timestamp}] ❌ Error: ${error.message}\n`);
    }
  }
}

// Ping immediately on start
pingServer();

// Then ping at regular intervals
const intervalMs = PING_INTERVAL * 60 * 1000;
setInterval(pingServer, intervalMs);

console.log(`✨ Hitter is now running. Will ping every ${PING_INTERVAL} minutes.`);
console.log('Press Ctrl+C to stop.\n');
