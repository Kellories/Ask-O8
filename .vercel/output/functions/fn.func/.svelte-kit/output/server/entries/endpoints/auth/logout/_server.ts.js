import { r as redirect } from "../../../../chunks/index2.js";
const GET = async ({ locals: { supabase } }) => {
  await supabase.auth.signOut();
  redirect(307, "/");
};
export {
  GET
};
