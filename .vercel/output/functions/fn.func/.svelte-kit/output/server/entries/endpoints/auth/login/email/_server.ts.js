import { s as supabase } from "../../../../../chunks/supabase.js";
const POST = async ({ request }) => {
  const { email, password } = await request.json();
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 401 });
  }
  return new Response(JSON.stringify({ user: data.user }), { status: 200 });
};
export {
  POST
};
