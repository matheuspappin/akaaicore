/**
 * Teste rápido da conexão Upstash Redis
 * Execute: node test-upstash.js
 */

const fs = require('fs');
const path = require('path');
function loadEnv(file) {
  try {
    const p = path.join(__dirname, file);
    if (fs.existsSync(p)) {
      fs.readFileSync(p, 'utf8').split('\n').forEach(line => {
        const m = line.match(/^([^#=]+)=(.*)$/);
        if (m) process.env[m[1].trim()] = m[2].trim().replace(/^["']|["']$/g, '');
      });
    }
  } catch (_) {}
}
loadEnv('.env.local');
loadEnv('.env');

const url = process.env.UPSTASH_REDIS_REST_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN;

if (!url || !token) {
  console.log('❌ UPSTASH_REDIS_REST_URL ou UPSTASH_REDIS_REST_TOKEN não configurados');
  console.log('   Configure no .env.local ou .env');
  process.exit(1);
}

async function test() {
  const key = 'test:upstash:' + Date.now();
  const value = 'ok';
  try {
    const setRes = await fetch(`${url}/set/${encodeURIComponent(key)}/${encodeURIComponent(value)}/ex/60`, {
      method: 'GET',
      headers: { Authorization: `Bearer ${token}` },
    });
    const setJson = await setRes.json();
    if (setJson.error) throw new Error(setJson.error);

    const getRes = await fetch(`${url}/get/${encodeURIComponent(key)}`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    const getJson = await getRes.json();
    if (getJson.result === value) {
      console.log('✅ Upstash Redis OK!');
    } else {
      console.log('❌ Valor inesperado:', getJson);
      process.exit(1);
    }
  } catch (e) {
    console.log('❌ Erro:', e.message);
    process.exit(1);
  }
}
test();
