require('dotenv').config();
const dns = require('dns').promises;
const { Client } = require('pg');
const PW = '/f3%QN2KVh4L4eZ';
const HOST = 'db.zvzhanpdjqlynexznrkg.supabase.co';
(async () => {
  const addrs = await dns.resolve6(HOST);
  const c = new Client({ host: addrs[0], port: 5432, user: 'postgres', password: PW, database: 'postgres', ssl: { rejectUnauthorized: false }, connectionTimeoutMillis: 8000 });
  await c.connect();
  for (const t of ['categories', 'products', 'product_images', 'settings', 'hero_content', 'orders', 'order_items']) {
    const r = await c.query("SELECT column_name FROM information_schema.columns WHERE table_schema='public' AND table_name=$1 ORDER BY ordinal_position", [t]);
    console.log('\n' + t + ':', r.rows.map(x => x.column_name).join(', ') || '(TABLE MISSING)');
  }
  await c.end();
})().catch(e => { console.log('ERR:', e.message); process.exit(1); });
