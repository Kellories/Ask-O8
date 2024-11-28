import { Y as store_get, W as attr, X as escape_html, Z as unsubscribe_stores, R as pop, P as push } from "../../../../../../chunks/index.js";
import { p as page } from "../../../../../../chunks/stores.js";
import "../../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  let content = "";
  let loading = false;
  store_get($$store_subs ??= {}, "$page", page).params.slug;
  $$payload.out += `<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center"><div class="w-full max-w-lg bg-white p-6 rounded-md shadow-md"><h1 class="text-2xl font-bold text-gray-800 mb-4">Create New Content</h1> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <div class="mb-4"><label class="block text-sm font-medium text-gray-700">Choose Creation Method</label> <div class="mt-2 flex space-x-4"><button${attr("class", `px-4 py-2 rounded-lg transition duration-200 ${"text-blue-600 bg-blue-100"}`)}>Text</button> <button${attr("class", `px-4 py-2 rounded-lg transition duration-200 ${"text-gray-600 bg-gray-100"}`)}>Upload PDF</button></div></div> `;
  {
    $$payload.out += "<!--[-->";
    $$payload.out += `<textarea placeholder="Enter your content here..." rows="6" class="w-full mt-4 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">`;
    const $$body = escape_html(content);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea>`;
  }
  $$payload.out += `<!--]--> `;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <button class="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"${attr("disabled", loading, true)}>`;
  {
    $$payload.out += "<!--[!-->";
    $$payload.out += `Save Content`;
  }
  $$payload.out += `<!--]--></button> <button class="mt-2 w-full px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-200">Cancel</button></div></main>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
export {
  _page as default
};
