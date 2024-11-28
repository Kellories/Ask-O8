import * as server from '../entries/pages/_page.server.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/+page.server.ts";
export const imports = ["_app/immutable/nodes/2.00wpqdPM.js","_app/immutable/chunks/disclose-version.0l5ZSCYr.js","_app/immutable/chunks/utils.C5S0ZuWa.js","_app/immutable/chunks/legacy.BxTldWZS.js","_app/immutable/chunks/if.Dz3LUtzn.js","_app/immutable/chunks/props.CjR2llfe.js","_app/immutable/chunks/store.DHcqW628.js","_app/immutable/chunks/index.1JfNCZ2R.js","_app/immutable/chunks/bundle-mjs.D0VPtKIW.js","_app/immutable/chunks/render.XxxBT1qd.js","_app/immutable/chunks/utils.D9pBWCDQ.js","_app/immutable/chunks/actions.D3JIasEj.js","_app/immutable/chunks/attributes.Dn6mGABP.js","_app/immutable/chunks/this.DV1u-Fx3.js","_app/immutable/chunks/entry.Dl8D_6_8.js","_app/immutable/chunks/input.crmpbt5s.js","_app/immutable/chunks/input.Bt6C-Zmp.js","_app/immutable/chunks/html.Blp0DJLs.js","_app/immutable/chunks/class.BT_6QCHk.js","_app/immutable/chunks/Icon.7sDeMvYj.js","_app/immutable/chunks/index-client.BsLgzKKx.js"];
export const stylesheets = [];
export const fonts = [];
