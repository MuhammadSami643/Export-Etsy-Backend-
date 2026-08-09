require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');
const sb = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

(async () => {
  const tables = ['users', 'categories', 'products', 'product_images', 'orders', 'order_items', 'contact_messages', 'hero_content', 'settings'];
  for (const t of tables) {
    const { count, error } = await sb.from(t).select('*', { count: 'exact', head: true });
    console.log(t.padEnd(18), error ? 'ERR ' + error.message : 'rows=' + count);
  }
  // sample products to see what fields exist
  const { data: p } = await sb.from('products').select('*').limit(1);
  console.log('\nproduct columns:', p && p[0] ? Object.keys(p[0]).join(', ') : '(none)');
  const { data: c } = await sb.from('categories').select('*').limit(1);
  console.log('category columns:', c && c[0] ? Object.keys(c[0]).join(', ') : '(none)');
})();
