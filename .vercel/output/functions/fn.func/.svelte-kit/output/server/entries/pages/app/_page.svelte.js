import "../../../chunks/client.js";
import { _ as rest_props, P as push, S as fallback, a5 as getContext, a0 as spread_attributes, X as escape_html, $ as slot, V as bind_props, R as pop, a1 as sanitize_props, a2 as spread_props, a6 as invalid_default_snippet, W as attr, Q as setContext, a7 as sanitize_slots, a8 as ensure_array_like, a9 as stringify, Y as store_get, a3 as copy_payload, a4 as assign_payload, Z as unsubscribe_stores } from "../../../chunks/index.js";
import { twMerge } from "tailwind-merge";
import { w as writable } from "../../../chunks/index3.js";
import { p as page } from "../../../chunks/stores.js";
function ToolbarButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "color",
    "name",
    "ariaLabel",
    "size",
    "href"
  ]);
  push();
  let color = fallback($$props["color"], "default");
  let name = fallback($$props["name"], () => void 0, true);
  let ariaLabel = fallback($$props["ariaLabel"], () => void 0, true);
  let size = fallback($$props["size"], "md");
  let href = fallback($$props["href"], () => void 0, true);
  const background = getContext("background");
  const colors = {
    dark: "text-gray-500 hover:text-gray-900 hover:bg-gray-200 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600",
    gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
    red: "text-red-500 focus:ring-red-400 hover:bg-red-200 dark:hover:bg-red-800 dark:hover:text-red-300",
    yellow: "text-yellow-500 focus:ring-yellow-400 hover:bg-yellow-200 dark:hover:bg-yellow-800 dark:hover:text-yellow-300",
    green: "text-green-500 focus:ring-green-400 hover:bg-green-200 dark:hover:bg-green-800 dark:hover:text-green-300",
    indigo: "text-indigo-500 focus:ring-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800 dark:hover:text-indigo-300",
    purple: "text-purple-500 focus:ring-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800 dark:hover:text-purple-300",
    pink: "text-pink-500 focus:ring-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800 dark:hover:text-pink-300",
    blue: "text-blue-500 focus:ring-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 dark:hover:text-blue-300",
    primary: "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
    default: "focus:ring-gray-400 hover:bg-gray-100"
  };
  const sizing = {
    xs: "m-0.5 rounded-sm focus:ring-1 p-0.5",
    sm: "m-0.5 rounded focus:ring-1 p-0.5",
    md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
    lg: "m-0.5 rounded-lg focus:ring-2 p-2.5"
  };
  let buttonClass;
  const svgSizes = {
    xs: "w-3 h-3",
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-5 h-5"
  };
  buttonClass = twMerge("focus:outline-none whitespace-normal", sizing[size], colors[color], color === "default" && (background ? "dark:hover:bg-gray-600" : "dark:hover:bg-gray-700"), $$sanitized_props.class);
  if (href) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<a${spread_attributes({
      href,
      ...$$restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></a>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<button${spread_attributes({
      type: "button",
      ...$$restProps,
      class: buttonClass,
      "aria-label": ariaLabel ?? name
    })}>`;
    if (name) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<span class="sr-only">${escape_html(name)}</span>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--> <!---->`;
    slot($$payload, $$props, "default", { svgSize: svgSizes[size] }, null);
    $$payload.out += `<!----></button>`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { color, name, ariaLabel, size, href });
  pop();
}
function CloseButton($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["name"]);
  push();
  let name = fallback($$props["name"], "Close");
  ToolbarButton($$payload, spread_props([
    { name },
    $$restProps,
    {
      class: twMerge("ms-auto", $$sanitized_props.class),
      children: invalid_default_snippet,
      $$slots: {
        default: ($$payload2, { svgSize }) => {
          $$payload2.out += `<svg${attr("class", svgSize)} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>`;
        }
      }
    }
  ]));
  bind_props($$props, { name });
  pop();
}
function Drawer($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activateClickOutside",
    "hidden",
    "position",
    "leftOffset",
    "rightOffset",
    "topOffset",
    "bottomOffset",
    "width",
    "backdrop",
    "bgColor",
    "bgOpacity",
    "placement",
    "id",
    "divClass",
    "transitionParams",
    "transitionType"
  ]);
  push();
  let activateClickOutside = fallback($$props["activateClickOutside"], true);
  let hidden = fallback($$props["hidden"], true);
  let position = fallback($$props["position"], "fixed");
  let leftOffset = fallback($$props["leftOffset"], "inset-y-0 start-0");
  let rightOffset = fallback($$props["rightOffset"], "inset-y-0 end-0");
  let topOffset = fallback($$props["topOffset"], "inset-x-0 top-0");
  let bottomOffset = fallback($$props["bottomOffset"], "inset-x-0 bottom-0");
  let width = fallback($$props["width"], "w-80");
  let backdrop = fallback($$props["backdrop"], true);
  let bgColor = fallback($$props["bgColor"], "bg-gray-900");
  let bgOpacity = fallback($$props["bgOpacity"], "bg-opacity-75");
  let placement = fallback($$props["placement"], "left");
  let id = fallback($$props["id"], "drawer-example");
  let divClass = fallback($$props["divClass"], "overflow-y-auto z-50 p-4 bg-white dark:bg-gray-800");
  let transitionParams = fallback($$props["transitionParams"], () => ({}), true);
  let transitionType = fallback($$props["transitionType"], "fly");
  const placements = {
    left: leftOffset,
    right: rightOffset,
    top: topOffset,
    bottom: bottomOffset
  };
  let backdropDivClass = twMerge("fixed top-0 start-0 z-50 w-full h-full", backdrop && bgColor, backdrop && bgOpacity);
  if (!hidden) {
    $$payload.out += "<!--[-->";
    if (backdrop && activateClickOutside) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<div role="presentation"${attr("class", backdropDivClass)}></div>`;
    } else {
      $$payload.out += "<!--[!-->";
      if (backdrop && !activateClickOutside) {
        $$payload.out += "<!--[-->";
        $$payload.out += `<div role="presentation"${attr("class", backdropDivClass)}></div>`;
      } else {
        $$payload.out += "<!--[!-->";
      }
      $$payload.out += `<!--]-->`;
    }
    $$payload.out += `<!--]--> <div${spread_attributes({
      id,
      ...$$restProps,
      class: twMerge(divClass, width, position, placements[placement], $$sanitized_props.class),
      tabindex: "-1",
      "aria-controls": id,
      "aria-labelledby": id
    })}><!---->`;
    slot($$payload, $$props, "default", { hidden }, null);
    $$payload.out += `<!----></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    activateClickOutside,
    hidden,
    position,
    leftOffset,
    rightOffset,
    topOffset,
    bottomOffset,
    width,
    backdrop,
    bgColor,
    bgOpacity,
    placement,
    id,
    divClass,
    transitionParams,
    transitionType
  });
  pop();
}
function Sidebar($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "activeUrl",
    "asideClass",
    "nonActiveClass",
    "activeClass",
    "ariaLabel"
  ]);
  push();
  let activeUrl = fallback($$props["activeUrl"], "");
  let asideClass = fallback($$props["asideClass"], "w-64");
  let nonActiveClass = fallback($$props["nonActiveClass"], "flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let activeClass = fallback($$props["activeClass"], "flex items-center p-2 text-base font-normal text-gray-900 bg-gray-200 dark:bg-gray-700 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700");
  let ariaLabel = fallback($$props["ariaLabel"], "Sidebar");
  const activeUrlStore = writable("");
  setContext("sidebarContext", { activeClass, nonActiveClass });
  setContext("activeUrl", activeUrlStore);
  {
    activeUrlStore.set(activeUrl);
  }
  $$payload.out += `<aside${spread_attributes({
    ...$$restProps,
    class: twMerge(asideClass, $$sanitized_props.class),
    "aria-label": ariaLabel
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></aside>`;
  bind_props($$props, {
    activeUrl,
    asideClass,
    nonActiveClass,
    activeClass,
    ariaLabel
  });
  pop();
}
function SidebarItem($$payload, $$props) {
  const $$slots = sanitize_slots($$props);
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "action",
    "params",
    "href",
    "label",
    "spanClass",
    "activeClass",
    "nonActiveClass"
  ]);
  push();
  let active, aClass;
  let action = fallback($$props["action"], () => {
  });
  let params = fallback($$props["params"], () => ({}), true);
  let href = fallback($$props["href"], "");
  let label = fallback($$props["label"], "");
  let spanClass = fallback($$props["spanClass"], "ms-3");
  let activeClass = fallback($$props["activeClass"], () => void 0, true);
  let nonActiveClass = fallback($$props["nonActiveClass"], () => void 0, true);
  const context = getContext("sidebarContext") ?? {};
  const activeUrlStore = getContext("activeUrl");
  let sidebarUrl = "";
  activeUrlStore.subscribe((value) => {
    sidebarUrl = value;
  });
  active = sidebarUrl ? href === sidebarUrl : false;
  aClass = twMerge(active ? activeClass ?? context.activeClass : nonActiveClass ?? context.nonActiveClass, $$sanitized_props.class);
  $$payload.out += `<li><a${spread_attributes({ ...$$restProps, href, class: aClass })}><!---->`;
  slot($$payload, $$props, "icon", {}, null);
  $$payload.out += `<!----> <span${attr("class", spanClass)}>${escape_html(label)}</span> `;
  if ($$slots.subtext) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "subtext", {}, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></a></li>`;
  bind_props($$props, {
    action,
    params,
    href,
    label,
    spanClass,
    activeClass,
    nonActiveClass
  });
  pop();
}
function SidebarGroup($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["ulClass", "borderClass", "border"]);
  push();
  let ulClass = fallback($$props["ulClass"], "space-y-2");
  let borderClass = fallback($$props["borderClass"], "pt-4 mt-4 border-t border-gray-200 dark:border-gray-700");
  let border = fallback($$props["border"], false);
  if (border) {
    ulClass += " " + borderClass;
  }
  $$payload.out += `<ul${spread_attributes({
    ...$$restProps,
    class: twMerge(ulClass, $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></ul>`;
  bind_props($$props, { ulClass, borderClass, border });
  pop();
}
function SidebarWrapper($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["divClass"]);
  push();
  let divClass = fallback($$props["divClass"], "overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800");
  $$payload.out += `<div${spread_attributes({
    ...$$restProps,
    class: twMerge(divClass, $$sanitized_props.class)
  })}><!---->`;
  slot($$payload, $$props, "default", {}, null);
  $$payload.out += `<!----></div>`;
  bind_props($$props, { divClass });
  pop();
}
function MessageInput($$payload, $$props) {
  push();
  let message = "";
  $$payload.out += `<div class="flex items-center gap-2 p-2 bg-[#1e3a5f] rounded-lg"><input type="text" placeholder="What would you like to ask?"${attr("value", message)} class="flex-grow px-3 py-2 rounded-lg border-none outline-none bg-white placeholder-gray-400"> <button class="bg-[#2a4b7b] text-white px-4 py-2 rounded-lg hover:bg-blue-800">➤</button></div>`;
  pop();
}
function ChatWindow($$payload, $$props) {
  push();
  let messages = [];
  let knowledgeBases = [];
  const each_array = ensure_array_like(knowledgeBases);
  const each_array_1 = ensure_array_like(messages);
  $$payload.out += `<div class="flex h-full w-full flex-col items-center justify-center pt-8"><div class="flex h-[80vh] w-full max-w-3xl flex-col rounded-lg bg-white p-4 shadow-lg"><div class="mb-4 self-start"><label for="knowledgeBase" class="sr-only">Select Knowledge Base:</label> <select id="knowledgeBase" class="rounded-md bg-[#1b2845] px-3 py-2 font-medium text-white" required><option value="" disabled selected>Select...</option><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let knowledgeBase = each_array[$$index];
    $$payload.out += `<option${attr("value", knowledgeBase.id)}>${escape_html(knowledgeBase.display)}</option>`;
  }
  $$payload.out += `<!--]--></select></div> <div class="mb-2 flex-grow overflow-y-auto rounded-lg bg-gray-50 p-4"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let message = each_array_1[$$index_1];
    $$payload.out += `<div${attr("class", `${stringify(message.sender === "user" ? "text-right" : "text-left")} my-2`)}><div${attr("class", `${stringify(message.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-gray-900")} inline-block max-w-[70%] rounded-2xl px-4 py-2 shadow-md`)}><p>${escape_html(message.text)}</p></div></div>`;
  }
  $$payload.out += `<!--]--></div> `;
  MessageInput($$payload);
  $$payload.out += `<!----></div></div>`;
  pop();
}
function BrainSolid($$payload, $$props) {
  push();
  const ctx = getContext("iconCtx") ?? {};
  const sizes = {
    xs: "w-3 h-3",
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
    xl: "w-8 h-8"
  };
  let {
    size = ctx.size || "md",
    color = ctx.color || "currentColor",
    title,
    desc,
    class: className,
    ariaLabel = "brain solid",
    $$slots,
    $$events,
    ...restProps
  } = $$props;
  let ariaDescribedby = `${title?.id || ""} ${desc?.id || ""}`;
  const hasDescription = !!(title?.id || desc?.id);
  $$payload.out += `<svg${spread_attributes(
    {
      xmlns: "http://www.w3.org/2000/svg",
      fill: color,
      ...restProps,
      class: twMerge("shrink-0", sizes[size], className),
      "aria-label": ariaLabel,
      "aria-describedby": hasDescription ? ariaDescribedby : void 0,
      viewBox: "0 0 24 24"
    },
    void 0,
    void 0,
    3
  )}>`;
  if (title?.id && title.title) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<title${attr("id", title.id)}>${escape_html(title.title)}</title>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if (desc?.id && desc.desc) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<desc${attr("id", desc.id)}>${escape_html(desc.desc)}</desc>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--><path d="M11 21V2.352A3.451 3.451 0 0 0 9.5 2a3.5 3.5 0 0 0-3.261 2.238A3.5 3.5 0 0 0 4.04 8.015a3.518 3.518 0 0 0-.766 1.128c-.042.1-.064.209-.1.313a3.34 3.34 0 0 0-.106.344 3.463 3.463 0 0 0 .02 1.468A4.017 4.017 0 0 0 2.3 12.5l-.015.036a3.861 3.861 0 0 0-.216.779A3.968 3.968 0 0 0 2 14c.003.24.027.48.072.716a4 4 0 0 0 .235.832c.006.014.015.027.021.041a3.85 3.85 0 0 0 .417.727c.105.146.219.285.342.415.072.076.148.146.225.216.1.091.205.179.315.26.11.081.2.14.308.2.02.013.039.028.059.04v.053a3.506 3.506 0 0 0 3.03 3.469 3.426 3.426 0 0 0 4.154.577A.972.972 0 0 1 11 21Zm10.934-7.68a3.956 3.956 0 0 0-.215-.779l-.017-.038a4.016 4.016 0 0 0-.79-1.235 3.417 3.417 0 0 0 .017-1.468 3.387 3.387 0 0 0-.1-.333c-.034-.108-.057-.22-.1-.324a3.517 3.517 0 0 0-.766-1.128 3.5 3.5 0 0 0-2.202-3.777A3.5 3.5 0 0 0 14.5 2a3.451 3.451 0 0 0-1.5.352V21a.972.972 0 0 1-.184.546 3.426 3.426 0 0 0 4.154-.577A3.506 3.506 0 0 0 20 17.5v-.049c.02-.012.039-.027.059-.04.106-.064.208-.13.308-.2s.214-.169.315-.26c.077-.07.153-.14.225-.216a4.007 4.007 0 0 0 .459-.588c.115-.176.215-.361.3-.554.006-.014.015-.027.021-.041.087-.213.156-.434.205-.659.013-.057.024-.115.035-.173.046-.237.07-.478.073-.72a3.948 3.948 0 0 0-.066-.68Z"></path></svg>`;
  pop();
}
function Sidebar_1($$payload, $$props) {
  push();
  var $$store_subs;
  let drawerHidden = true;
  store_get($$store_subs ??= {}, "$page", page).url.pathname;
  {
    drawerHidden = true;
  }
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    $$payload2.out += `<header class="bg-[#1B2845] text-white p-4 flex items-center justify-between"><button class="lg:hidden"><svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 5h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2zm0 6h14a1 1 0 010 2H3a1 1 0 110-2z" clip-rule="evenodd"></path></svg></button></header> `;
    Drawer($$payload2, {
      get hidden() {
        return drawerHidden;
      },
      set hidden($$value) {
        drawerHidden = $$value;
        $$settled = false;
      },
      width: "w-64",
      class: "h-screen bg-[#1B2845] text-white",
      children: ($$payload3) => {
        CloseButton($$payload3, { class: "dark:text-white lg:hidden" });
        $$payload3.out += `<!----> `;
        Sidebar($$payload3, {
          class: "h-full",
          children: ($$payload4) => {
            SidebarWrapper($$payload4, {
              class: "flex flex-col h-full bg-[#1B2845] text-white",
              children: ($$payload5) => {
                SidebarGroup($$payload5, {
                  children: ($$payload6) => {
                    SidebarItem($$payload6, {
                      href: "/app/knowledge",
                      label: "Knowledge Bases",
                      class: "text-white",
                      $$slots: {
                        icon: ($$payload7) => {
                          {
                            BrainSolid($$payload7, { class: "w-6 h-6 text-white" });
                          }
                        }
                      }
                    });
                  },
                  $$slots: { default: true }
                });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!----> `;
    Sidebar($$payload2, {
      class: "hidden lg:block h-screen fixed bg-[#1B2845] w-64 text-white",
      children: ($$payload3) => {
        SidebarWrapper($$payload3, {
          class: "flex flex-col h-full bg-[#1B2845] text-white",
          children: ($$payload4) => {
            SidebarGroup($$payload4, {
              children: ($$payload5) => {
                SidebarItem($$payload5, {
                  href: "/app/knowledge",
                  label: "Knowledge Bases",
                  class: "text-white",
                  $$slots: {
                    icon: ($$payload6) => {
                      {
                        BrainSolid($$payload6, { class: "w-6 h-6 text-white" });
                      }
                    }
                  }
                });
              },
              $$slots: { default: true }
            });
          },
          $$slots: { default: true }
        });
      },
      $$slots: { default: true }
    });
    $$payload2.out += `<!---->`;
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function _page($$payload) {
  $$payload.out += `<div class="flex h-full">`;
  Sidebar_1($$payload);
  $$payload.out += `<!----> <div class="flex-grow py-4 flex justify-center items-center">`;
  ChatWindow($$payload);
  $$payload.out += `<!----></div></div>`;
}
export {
  _page as default
};
