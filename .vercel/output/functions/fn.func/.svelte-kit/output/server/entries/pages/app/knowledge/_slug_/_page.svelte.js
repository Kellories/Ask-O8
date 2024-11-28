import { Y as store_get, Z as unsubscribe_stores, R as pop, P as push } from "../../../../../chunks/index.js";
import { p as page } from "../../../../../chunks/stores.js";
import "../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  store_get($$store_subs ??= {}, "$page", page).params.slug;
  $$payload.out += `<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center">`;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-gray-700">Loading knowledge base details...</p>`;
  }
  $$payload.out += `<!--]--></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
