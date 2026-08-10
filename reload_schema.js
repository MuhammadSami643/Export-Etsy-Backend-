require('dotenv').config();
const { Client } = require('pg');

async function reload() {
  const c = new Client(process.env.DATABASE_URL);
  await c.connect();
  await c.query(`NOTIFY pgrst, 'reload schema'`);
  console.log('Schema reloaded!');
  c.end();
}
reload();
