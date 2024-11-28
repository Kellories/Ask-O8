import { _ as rest_props, P as push, S as fallback, Y as store_get, $ as slot, a0 as spread_attributes, Z as unsubscribe_stores, V as bind_props, R as pop, a1 as sanitize_props, W as attr, a2 as spread_props, a3 as copy_payload, a4 as assign_payload } from "../../chunks/index.js";
import { m as makeElement, a as addMeltEventListener, B as Button, c as cn } from "../../chunks/index5.js";
import { C as Card, a as Card_header, b as Card_title, c as Card_content, d as Card_description, I as Input } from "../../chunks/input.js";
import "clsx";
import { twMerge } from "tailwind-merge";
import { h as html } from "../../chunks/html.js";
import { I as Icon } from "../../chunks/Icon.js";
import "../../chunks/client.js";
function createLabel() {
  const root = makeElement("label", {
    action: (node) => {
      const mouseDown = addMeltEventListener(node, "mousedown", (e) => {
        if (!e.defaultPrevented && e.detail > 1) {
          e.preventDefault();
        }
      });
      return {
        destroy: mouseDown
      };
    }
  });
  return {
    elements: {
      root
    }
  };
}
function createBitAttrs(bit, parts) {
  const attrs = {};
  parts.forEach((part) => {
    attrs[part] = {
      [`data-${bit}-${part}`]: ""
    };
  });
  return (part) => attrs[part];
}
function getLabelData() {
  const NAME = "label";
  const PARTS = ["root"];
  const getAttrs = createBitAttrs(NAME, PARTS);
  return {
    NAME,
    getAttrs
  };
}
function Label$1($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["asChild", "el"]);
  push();
  var $$store_subs;
  let builder;
  let asChild = fallback($$props["asChild"], false);
  let el = fallback($$props["el"], () => void 0, true);
  const { elements: { root } } = createLabel();
  const { getAttrs } = getLabelData();
  const attrs = getAttrs("root");
  builder = store_get($$store_subs ??= {}, "$root", root);
  Object.assign(builder, attrs);
  if (asChild) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<!---->`;
    slot($$payload, $$props, "default", { builder }, null);
    $$payload.out += `<!---->`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<label${spread_attributes({ ...builder, ...$$restProps })}><!---->`;
    slot($$payload, $$props, "default", { builder }, null);
    $$payload.out += `<!----></label>`;
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  bind_props($$props, { asChild, el });
  pop();
}
function Img($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, [
    "caption",
    "src",
    "srcset",
    "size",
    "alignment",
    "imgClass",
    "figClass",
    "alt",
    "effect",
    "captionClass"
  ]);
  push();
  let caption = fallback($$props["caption"], () => void 0, true);
  let src = fallback($$props["src"], () => void 0, true);
  let srcset = fallback($$props["srcset"], () => void 0, true);
  let size = fallback($$props["size"], "max-w-full");
  let alignment = fallback($$props["alignment"], "");
  let imgClass = fallback($$props["imgClass"], "h-auto");
  let figClass = fallback($$props["figClass"], "max-w-lg");
  let alt = fallback($$props["alt"], "");
  let effect = fallback($$props["effect"], "");
  let captionClass = fallback($$props["captionClass"], "mt-2 text-sm text-center text-gray-500 dark:text-gray-400");
  if (caption) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<figure${attr("class", figClass)}><img${spread_attributes({
      class: twMerge(imgClass, size, alignment, effect, $$sanitized_props.class),
      src,
      srcset,
      alt,
      ...$$restProps
    })} onload="this.__e=event" onerror="this.__e=event"> <figcaption${attr("class", captionClass)}>${html(caption)}</figcaption></figure>`;
  } else {
    $$payload.out += "<!--[!-->";
    $$payload.out += `<img${spread_attributes({
      ...$$restProps,
      class: twMerge(imgClass, size, alignment, effect, $$sanitized_props.class),
      src,
      srcset,
      alt
    })} onload="this.__e=event" onerror="this.__e=event">`;
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, {
    caption,
    src,
    srcset,
    size,
    alignment,
    imgClass,
    figClass,
    alt,
    effect,
    captionClass
  });
  pop();
}
function Hero($$payload) {
  $$payload.out += `<div>`;
  Card($$payload, {
    class: "m-auto max-w-fit",
    children: ($$payload2) => {
      Card_header($$payload2, {
        class: "",
        children: ($$payload3) => {
          Card_title($$payload3, {
            class: "text-5xl font-thin  text-[#65AFFF]",
            children: ($$payload4) => {
              $$payload4.out += `<!---->AskO8 `;
              Img($$payload4, {
                src: "https://o8.socialservicesconnect.com/wp-content/uploads/2024/09/9f9b0796-09aa-439f-a1ca-1c14366ec148-1-1-scaled-1-1024x600.jpg",
                class: "rounded-xl max-w-fit h-lg mt-3 ",
                alt: "octopus8 aws event"
              });
              $$payload4.out += `<!---->`;
            },
            $$slots: { default: true }
          });
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!----> `;
      Card_content($$payload2, {
        children: ($$payload3) => {
          Button($$payload3, {
            href: "/auth/login",
            class: "group/loginButton bg-[#65AFFF] ",
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center gap-2"><div>Login</div> `;
              Icon($$payload4, {
                icon: "mdi:login",
                class: "h-5 w-5 transition-all duration-300 md:group-hover/loginButton:translate-x-1"
              });
              $$payload4.out += `<!----></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!----> `;
          Button($$payload3, {
            href: "/auth/register",
            class: "group/loginButton bg-[#65AFFF] my-2 ",
            children: ($$payload4) => {
              $$payload4.out += `<div class="flex items-center gap-2"><div>Register</div> `;
              Icon($$payload4, {
                icon: "mdi:login",
                class: "h-5 w-5 transition-all duration-300 md:group-hover/loginButton:translate-x-1"
              });
              $$payload4.out += `<!----></div>`;
            },
            $$slots: { default: true }
          });
          $$payload3.out += `<!---->`;
        },
        $$slots: { default: true }
      });
      $$payload2.out += `<!---->`;
    },
    $$slots: { default: true }
  });
  $$payload.out += `<!----></div>`;
}
function Label($$payload, $$props) {
  const $$sanitized_props = sanitize_props($$props);
  const $$restProps = rest_props($$sanitized_props, ["class"]);
  push();
  let className = fallback($$props["class"], () => void 0, true);
  Label$1($$payload, spread_props([
    {
      class: cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)
    },
    $$restProps,
    {
      children: ($$payload2) => {
        $$payload2.out += `<!---->`;
        slot($$payload2, $$props, "default", {}, null);
        $$payload2.out += `<!---->`;
      },
      $$slots: { default: true }
    }
  ]));
  bind_props($$props, { class: className });
  pop();
}
function UpdateProfile($$payload, $$props) {
  push();
  let userProfile = $$props["userProfile"];
  let avatar = $$props["avatar"];
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Card($$payload2, {
      class: "mx-auto max-w-md",
      children: ($$payload3) => {
        Card_header($$payload3, {
          children: ($$payload4) => {
            Card_title($$payload4, {
              class: "text-3xl font-thin",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Profile`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Card_description($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Update your profile information`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!---->`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!----> `;
        Card_content($$payload3, {
          children: ($$payload4) => {
            if (avatar) {
              $$payload4.out += "<!--[-->";
              $$payload4.out += `<div class="flex justify-start"><img${attr("src", avatar)} alt="user avatar" class="mb-5 h-24 w-24 rounded-lg object-cover shadow"></div>`;
            } else {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> <form method="post"><div class="flex items-center gap-2"><div class="w-full">`;
            Label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->First Name`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              get value() {
                return userProfile.firstName;
              },
              set value($$value) {
                userProfile.firstName = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <div class="w-full">`;
            Label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Last Name`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              get value() {
                return userProfile.lastName;
              },
              set value($$value) {
                userProfile.lastName = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div></div> <div class="mt-4">`;
            Label($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Email`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              get value() {
                return userProfile.email;
              },
              set value($$value) {
                userProfile.email = $$value;
                $$settled = false;
              }
            });
            $$payload4.out += `<!----></div> <div class="mt-5">`;
            Button($$payload4, {
              type: "submit",
              class: "w-full",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Update Profile`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></div></form>`;
          },
          $$slots: { default: true }
        });
        $$payload3.out += `<!---->`;
      },
      $$slots: { default: true }
    });
  }
  do {
    $$settled = true;
    $$inner_payload = copy_payload($$payload);
    $$render_inner($$inner_payload);
  } while (!$$settled);
  assign_payload($$payload, $$inner_payload);
  bind_props($$props, { userProfile, avatar });
  pop();
}
function _page($$payload, $$props) {
  push();
  let userProfile;
  let data = $$props["data"];
  let avatar;
  userProfile = data?.userProfile || "";
  avatar = data?.user?.user_metadata?.avatar_url || "";
  if (data?.userProfile) {
    $$payload.out += "<!--[-->";
    UpdateProfile($$payload, { userProfile, avatar });
  } else {
    $$payload.out += "<!--[!-->";
    Hero($$payload);
  }
  $$payload.out += `<!--]-->`;
  bind_props($$props, { data });
  pop();
}
export {
  _page as default
};
