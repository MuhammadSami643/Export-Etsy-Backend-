require('dotenv').config();
const { Client } = require('pg');

async function updateProduct() {
  const c = new Client(process.env.DATABASE_URL);
  await c.connect();
  const res = await c.query("UPDATE products SET size_guide_id = '3a9fbc38-68ad-4edc-980f-29e82cfeb139' WHERE id = 3");
  console.log('Updated rows:', res.rowCount);
  c.end();
}
updateProduct();
