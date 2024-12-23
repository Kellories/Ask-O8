import { _ as rest_props, S as fallback, Q as setContext, W as attr, $ as slot, a0 as spread_attributes, V as bind_props, R as pop, a1 as sanitize_props, P as push, a5 as getContext, Y as store_get, a8 as ensure_array_like, Z as unsubscribe_stores, X as escape_html } from "../../../../chunks/index.js";
import { w as writable } from "../../../../chunks/index3.js";
import { twMerge, twJoin } from "tailwind-merge";
import "../../../../chunks/client.js";
function Table($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "divClass",
    "striped",
    "hoverable",
    "noborder",
    "shadow",
    "color",
    "customeColor",
    "items",
    "filter",
    "placeholder",
    "innerDivClass",
    "searchClass",
    "svgDivClass",
    "svgClass",
    "inputClass",
    "classInput",
    "classSvgDiv"
  ]);
  push();
  let divClass = fallback($$props["divClass"], "relative overflow-x-auto");
  let striped = fallback($$props["striped"], false);
  let hoverable = fallback($$props["hoverable"], false);
  let noborder = fallback($$props["noborder"], false);
  let shadow = fallback($$props["shadow"], false);
  let color = fallback($$props["color"], "default");
  let customeColor = fallback($$props["customeColor"], "");
  let items = fallback($$props["items"], () => [], true);
  let filter = fallback($$props["filter"], null);
  let placeholder = fallback($$props["placeholder"], "Search");
  let innerDivClass = fallback($$props["innerDivClass"], "p-4");
  let searchClass = fallback($$props["searchClass"], "relative mt-1");
  let svgDivClass = fallback($$props["svgDivClass"], "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none");
  let svgClass = fallback($$props["svgClass"], "w-5 h-5 text-gray-500 dark:text-gray-400");
  let inputClass = fallback($$props["inputClass"], "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-80 p-2.5 ps-10 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500");
  let classInput = fallback($$props["classInput"], "");
  let classSvgDiv = fallback($$props["classSvgDiv"], "");
  let searchTerm = "";
  let inputCls = twMerge(inputClass, classInput);
  let svgDivCls = twMerge(svgDivClass, classSvgDiv);
  const colors = {
    default: "text-gray-500 dark:text-gray-400",
    blue: "text-blue-100 dark:text-blue-100",
    green: "text-green-100 dark:text-green-100",
    red: "text-red-100 dark:text-red-100",
    yellow: "text-yellow-100 dark:text-yellow-100",
    purple: "text-purple-100 dark:text-purple-100",
    indigo: "text-indigo-100 dark:text-indigo-100",
    pink: "text-pink-100 dark:text-pink-100",
    custom: customeColor
  };
  const searchTermStore = writable(searchTerm);
  const filterStore = writable(filter);
  setContext("searchTerm", searchTermStore);
  setContext("filter", filterStore);
  setContext("sorter", writable(null));
  setContext("striped", striped);
  setContext("hoverable", hoverable);
  setContext("noborder", noborder);
  setContext("color", color);
  setContext("items", items);
  searchTermStore.set(searchTerm);
  {
    if (filter) filterStore.set(filter);
  }
  $$payload.out += `<div${attr("class", twJoin(divClass, shadow && "shadow-md sm:rounded-lg"))}>`;
  if (filter) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "search", {}, () => {
      $$payload.out += `<div${attr("class", innerDivClass)}><label for="table-search" class="sr-only">Search</label> <div${attr("class", searchClass)}><div${attr("class", svgDivCls)}><!---->`;
      slot($$payload, $$props, "svgSearch", {}, () => {
        $$payload.out += `<svg${attr("class", svgClass)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>`;
      });
      $$payload.out += `<!----></div> <input${attr("value", searchTerm)} type="text" id="table-search"${attr("class", inputCls)}${attr("placeholder", placeholder)}></div> <!---->`;
      slot($$payload, $$props, "header", {}, null);
      $$payload.out += `<!----></div>`;
    });
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <table${spread_attributes({
    ...$$restProps,
    class: twMerge("w-full text-left text-sm", colors[color], $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></table></div>`;
  bind_props($$props, {
    divClass,
    striped,
    hoverable,
    noborder,
    shadow,
    color,
    customeColor,
    items,
    filter,
    placeholder,
    innerDivClass,
    searchClass,
    svgDivClass,
    svgClass,
    inputClass,
    classInput,
    classSvgDiv
  });
  pop();
}
function TableBody($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tableBodyClass"]);
  push();
  var $$store_subs;
  let items, filtered, sorted;
  let tableBodyClass = fallback($$props["tableBodyClass"], () => void 0, true);
  let filter = getContext("filter");
  let searchTerm = getContext("searchTerm");
  let sorter = getContext("sorter");
  items = getContext("items") || [];
  filtered = store_get($$store_subs ??= {}, "$filter", filter) ? items.filter((item) => store_get($$store_subs ??= {}, "$filter", filter)(item, store_get($$store_subs ??= {}, "$searchTerm", searchTerm))) : items;
  sorted = store_get($$store_subs ??= {}, "$sorter", sorter) ? filtered.toSorted((a, b) => store_get($$store_subs ??= {}, "$sorter", sorter).sortDirection * store_get($$store_subs ??= {}, "$sorter", sorter).sort(a, b)) : filtered;
  const each_array = ensure_array_like(sorted);
  $$payload.out += `<tbody${spread_attributes({ ...$$restProps, class: tableBodyClass })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "row", { item }, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></tbody>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { tableBodyClass });
  pop();
}
function TableBodyCell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["tdClass"]);
  push();
  let tdClass = fallback($$props["tdClass"], "px-6 py-4 whitespace-nowrap font-medium ");
  let color = "default";
  color = getContext("color");
  let tdClassfinal;
  tdClassfinal = twMerge(tdClass, color === "default" ? "text-gray-900 dark:text-white" : "text-blue-50 whitespace-nowrap dark:text-blue-100", $$sanitized_props.class);
  $$payload.out += `<td${spread_attributes({ ...$$restProps, class: tdClassfinal })}>`;
  if ($$sanitized_props.onclick) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></td>`;
  bind_props($$props, { tdClass });
  pop();
}
function TableBodyRow($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["color"]);
  push();
  let color = fallback($$props["color"], () => getContext("color"), true);
  const colors = {
    default: "bg-white dark:bg-gray-800 dark:border-gray-700",
    blue: "bg-blue-500 border-blue-400",
    green: "bg-green-500 border-green-400",
    red: "bg-red-500 border-red-400",
    yellow: "bg-yellow-500 border-yellow-400",
    purple: "bg-purple-500 border-purple-400",
    custom: ""
  };
  const hoverColors = {
    default: "hover:bg-gray-50 dark:hover:bg-gray-600",
    blue: "hover:bg-blue-400",
    green: "hover:bg-green-400",
    red: "hover:bg-red-400",
    yellow: "hover:bg-yellow-400",
    purple: "hover:bg-purple-400",
    custom: ""
  };
  const stripColors = {
    default: "odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700",
    blue: "odd:bg-blue-800 even:bg-blue-700 odd:dark:bg-blue-800 even:dark:bg-blue-700",
    green: "odd:bg-green-800 even:bg-green-700 odd:dark:bg-green-800 even:dark:bg-green-700",
    red: "odd:bg-red-800 even:bg-red-700 odd:dark:bg-red-800 even:dark:bg-red-700",
    yellow: "odd:bg-yellow-800 even:bg-yellow-700 odd:dark:bg-yellow-800 even:dark:bg-yellow-700",
    purple: "odd:bg-purple-800 even:bg-purple-700 odd:dark:bg-purple-800 even:dark:bg-purple-700",
    custom: ""
  };
  let trClass;
  trClass = twMerge([
    !getContext("noborder") && "border-b last:border-b-0",
    colors[color],
    getContext("hoverable") && hoverColors[color],
    getContext("striped") && stripColors[color],
    $$sanitized_props.class
  ]);
  $$payload.out += `<tr${spread_attributes({ ...$$restProps, class: trClass })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></tr>`;
  bind_props($$props, { color });
  pop();
}
function TableHead($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["theadClass", "defaultRow"]);
  push();
  let theadClassfinal;
  let theadClass = fallback($$props["theadClass"], "text-xs uppercase");
  let defaultRow = fallback($$props["defaultRow"], true);
  let color;
  color = getContext("color");
  let noborder = getContext("noborder");
  let striped = getContext("striped");
  let defaultBgColor = noborder || striped ? "" : "bg-gray-50 dark:bg-gray-700";
  const bgColors = {
    default: defaultBgColor,
    blue: "bg-blue-600",
    green: "bg-green-600",
    red: "bg-red-600",
    yellow: "bg-yellow-600",
    purple: "bg-purple-600",
    custom: ""
  };
  let textColor = color === "default" ? "text-gray-700 dark:text-gray-400" : color === "custom" ? "" : "text-white  dark:text-white";
  let borderColors = striped ? "" : color === "default" ? "border-gray-700" : color === "custom" ? "" : `border-${color}-400`;
  theadClassfinal = twMerge(theadClass, textColor, striped && borderColors, bgColors[color], $$sanitized_props.class);
  $$payload.out += `<thead${spread_attributes({ ...$$restProps, class: theadClassfinal })}>`;
  if (defaultRow) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<tr><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></tr>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!---->`;
  }
  $$payload.out += `<!--]--></thead>`;
  bind_props($$props, { theadClass, defaultRow });
  pop();
}
function TableHeadCell($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "padding",
    "sort",
    "defaultDirection",
    "defaultSort",
    "direction"
  ]);
  push();
  var $$store_subs;
  let padding = fallback($$props["padding"], "px-6 py-3");
  let sort = fallback($$props["sort"], null);
  let defaultDirection = fallback($$props["defaultDirection"], "asc");
  let defaultSort = fallback($$props["defaultSort"], false);
  let direction = fallback($$props["direction"], defaultSort ? defaultDirection : null);
  let sorter = getContext("sorter");
  let sortId = Math.random().toString(36).substring(2);
  if (defaultSort) {
    sortItems();
  }
  function sortItems() {
    if (!sort || !sorter) return;
    sorter.update((sorter2) => {
      return {
        id: sortId,
        sort,
        sortDirection: sorter2?.id === sortId ? -sorter2.sortDirection : defaultDirection === "asc" ? 1 : -1
      };
    });
  }
  direction = store_get($$store_subs ??= {}, "$sorter", sorter)?.id === sortId ? store_get($$store_subs ??= {}, "$sorter", sorter).sortDirection === 1 ? "asc" : "desc" : null;
  if (sort && sorter) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<th${spread_attributes({
      ...$$restProps,
      class: $$sanitized_props.class,
      "aria-sort": direction ? `${direction}ending` : void 0
    })}><button${attr("class", twMerge("w-full text-left", "after:absolute after:pl-3", direction === "asc" && 'after:content-["▲"]', direction === "desc" && 'after:content-["▼"]', padding))}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></button></th>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<th${spread_attributes({
      ...$$restProps,
      class: twMerge(padding, $$sanitized_props.class)
    })}><!---->`;
    slot($$payload, $$props, "default", {}, null);
    $$payload.out += `<!----></th>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, {
    padding,
    sort,
    defaultDirection,
    defaultSort,
    direction
  });
  pop();
}
function _page($$payload, $$props) {
  push();
  let knowledgeBases = [];
  $$payload.out += `<main class="p-4 text-gray-900 bg-gray-50 min-h-screen"><div class="flex justify-between items-center mb-4"><h1 class="text-2xl font-bold text-gray-800">Knowledge Bases</h1> <button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200">Create Knowledge Base</button></div> `;
  if (knowledgeBases.length === 0) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<p class="text-gray-700 text-center">No knowledge base entries created yet!</p>`;
  } else {
    $$payload.out += "<!--[!-->";
    Table($$payload, {
      striped: true,
      hoverable: true,
      class: " border border-gray-200 rounded-md shadow-md",
      children: ($$payload2) => {
        TableHead($$payload2, {
          children: ($$payload3) => {
            TableHeadCell($$payload3, {
              class: "px-6 py-3 text-left font-medium text-gray-700",
              children: ($$payload4) => {
                $$payload4.out += `<!---->ID`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            TableHeadCell($$payload3, {
              class: "px-6 py-3 text-left font-medium text-gray-700",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Display Name`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!----> `;
            TableHeadCell($$payload3, {
              class: "px-6 py-3 text-left font-medium text-gray-700",
              children: ($$payload4) => {
                $$payload4.out += `<!---->Actions`;
              },
              $$slots: { default: true }
            });
            $$payload3.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!----> `;
        TableBody($$payload2, {
          class: "",
          children: ($$payload3) => {
            const each_array = ensure_array_like(knowledgeBases);
            $$payload3.out += `<!--[-->`;
            for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
              let kb = each_array[$$index];
              TableBodyRow($$payload3, {
                class: "",
                children: ($$payload4) => {
                  TableBodyCell($$payload4, {
                    class: "px-6 py-4 text-sm dark:text-gray-900 ",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(kb.id)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  TableBodyCell($$payload4, {
                    class: "px-6 py-4 text-sm dark:text-gray-900",
                    children: ($$payload5) => {
                      $$payload5.out += `<!---->${escape_html(kb.display)}`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!----> `;
                  TableBodyCell($$payload4, {
                    class: "px-6 py-4 text-sm text-gray-900",
                    children: ($$payload5) => {
                      $$payload5.out += `<button class="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-200">Open</button>`;
                    },
                    $$slots: { default: true }
                  });
                  $$payload4.out += `<!---->`;
                },
                $$slots: { default: true }
              });
            }
            $$payload3.out += `<!--]-->`;
          },
          $$slots: { default: true }
        });
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  $$payload.out += `<!--]--></main>`;
  pop();
}
export {
  _page as default
};
