import { W as attr, R as pop, P as push } from "../../../../../chunks/index.js";
import "../../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let knowledgeBase = { display: "" };
  $$payload.out += `<main class="p-6 bg-gray-50 min-h-screen flex flex-col items-center"><div class="w-full max-w-lg bg-white p-6 rounded-md shadow-md"><h1 class="text-2xl font-bold text-gray-800 mb-4">Create Knowledge Base</h1> <form><div class="mb-4"><label for="display" class="block text-sm font-medium text-gray-700">Display Name</label> <input id="display" type="text"${attr("value", knowledgeBase.display)} class="w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="Enter display name" required></div> <div class="flex justify-between"><button type="button" class="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700">Cancel</button> <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Create</button></div></form></div></main>`;
  pop();
}
export {
  _page as default
};
