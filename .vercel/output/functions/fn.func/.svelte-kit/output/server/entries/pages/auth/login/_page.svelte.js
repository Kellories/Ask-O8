import { a3 as copy_payload, a4 as assign_payload, R as pop, P as push } from "../../../../chunks/index.js";
import { B as Button } from "../../../../chunks/index5.js";
import { C as Card, a as Card_header, b as Card_title, d as Card_description, c as Card_content, I as Input } from "../../../../chunks/input.js";
import "clsx";
import { I as Icon } from "../../../../chunks/Icon.js";
import "../../../../chunks/client.js";
function _page($$payload, $$props) {
  push();
  let email = "";
  let password = "";
  let $$settled = true;
  let $$inner_payload;
  function $$render_inner($$payload2) {
    Card($$payload2, {
      class: "mx-auto max-w-md p-6 shadow-md",
      children: ($$payload3) => {
        Card_header($$payload3, {
          children: ($$payload4) => {
            Card_title($$payload4, {
              class: "text-3xl font-thin",
              children: ($$payload5) => {
                $$payload5.out += `<!---->Login`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----> `;
            Card_description($$payload4, {
              children: ($$payload5) => {
                $$payload5.out += `<!---->Enter your Email and Password`;
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
            $$payload4.out += `<form>`;
            Input($$payload4, {
              type: "email",
              get value() {
                return email;
              },
              set value($$value) {
                email = $$value;
                $$settled = false;
              },
              placeholder: "Email",
              required: true,
              class: "my-3 w-full"
            });
            $$payload4.out += `<!----> `;
            Input($$payload4, {
              type: "password",
              get value() {
                return password;
              },
              set value($$value) {
                password = $$value;
                $$settled = false;
              },
              placeholder: "Password",
              required: true,
              class: "my-3 w-full"
            });
            $$payload4.out += `<!----> `;
            {
              $$payload4.out += "<!--[!-->";
            }
            $$payload4.out += `<!--]--> `;
            Button($$payload4, {
              type: "submit",
              class: "w-full flex items-center justify-center gap-2 mt-3",
              children: ($$payload5) => {
                Icon($$payload5, { icon: "mdi:email", class: "h-6 w-6" });
                $$payload5.out += `<!----> <span>Login with Email</span>`;
              },
              $$slots: { default: true }
            });
            $$payload4.out += `<!----></form> <p class="text-center mt-4">Don’t have an account? <a href="/auth/register" class="text-blue-500 hover:underline">Register</a></p>`;
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
  pop();
}
export {
  _page as default
};
