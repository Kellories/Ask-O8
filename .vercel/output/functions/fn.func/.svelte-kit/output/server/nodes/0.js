import * as universal from '../entries/pages/_layout.ts.js';
import * as server from '../entries/pages/_layout.server.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export { server };
export const server_id = "src/routes/+layout.server.ts";
export const imports = ["_app/immutable/nodes/0.CXrNt_Kl.js","_app/immutable/chunks/0.Dt76iRDc.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/disclose-version.0l5ZSCYr.js","_app/immutable/chunks/utils.C5S0ZuWa.js","_app/immutable/chunks/if.Dz3LUtzn.js","_app/immutable/chunks/entry.Dl8D_6_8.js","_app/immutable/chunks/legacy.BxTldWZS.js","_app/immutable/chunks/render.XxxBT1qd.js","_app/immutable/chunks/utils.D9pBWCDQ.js","_app/immutable/chunks/html.Blp0DJLs.js","_app/immutable/chunks/attributes.Dn6mGABP.js","_app/immutable/chunks/props.CjR2llfe.js","_app/immutable/chunks/store.DHcqW628.js","_app/immutable/chunks/index-client.BsLgzKKx.js","_app/immutable/chunks/index.1JfNCZ2R.js","_app/immutable/chunks/bundle-mjs.D0VPtKIW.js","_app/immutable/chunks/actions.D3JIasEj.js","_app/immutable/chunks/this.DV1u-Fx3.js"];
export const stylesheets = ["_app/immutable/assets/0.V4_2r8ab.css"];
export const fonts = [];
