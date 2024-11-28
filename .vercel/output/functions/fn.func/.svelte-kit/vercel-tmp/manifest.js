export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.Cxo68mhQ.js","app":"_app/immutable/entry/app.HsNgyz2y.js","imports":["_app/immutable/entry/start.Cxo68mhQ.js","_app/immutable/chunks/entry.CBknA8ay.js","_app/immutable/chunks/utils.C5S0ZuWa.js","_app/immutable/entry/app.HsNgyz2y.js","_app/immutable/chunks/preload-helper.C1FmrZbK.js","_app/immutable/chunks/utils.C5S0ZuWa.js","_app/immutable/chunks/render.XxxBT1qd.js","_app/immutable/chunks/disclose-version.0l5ZSCYr.js","_app/immutable/chunks/utils.D9pBWCDQ.js","_app/immutable/chunks/if.Dz3LUtzn.js","_app/immutable/chunks/props.CjR2llfe.js","_app/immutable/chunks/store.DHcqW628.js","_app/immutable/chunks/this.DV1u-Fx3.js","_app/immutable/chunks/index-client.BsLgzKKx.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js')),
			__memo(() => import('../output/server/nodes/4.js')),
			__memo(() => import('../output/server/nodes/5.js')),
			__memo(() => import('../output/server/nodes/6.js')),
			__memo(() => import('../output/server/nodes/7.js')),
			__memo(() => import('../output/server/nodes/8.js')),
			__memo(() => import('../output/server/nodes/9.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/api/completeChat",
				pattern: /^\/api\/completeChat\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/completeChat/_server.ts.js'))
			},
			{
				id: "/api/createEmbedding",
				pattern: /^\/api\/createEmbedding\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/createEmbedding/_server.ts.js'))
			},
			{
				id: "/api/createKnowledgeBase",
				pattern: /^\/api\/createKnowledgeBase\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/createKnowledgeBase/_server.ts.js'))
			},
			{
				id: "/api/fetchAllKnowledgeBase",
				pattern: /^\/api\/fetchAllKnowledgeBase\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/fetchAllKnowledgeBase/_server.ts.js'))
			},
			{
				id: "/api/fetchKnowledgeBaseById/[id]",
				pattern: /^\/api\/fetchKnowledgeBaseById\/([^/]+?)\/?$/,
				params: [{"name":"id","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/fetchKnowledgeBaseById/_id_/_server.ts.js'))
			},
			{
				id: "/api/findSimilarEmbedding",
				pattern: /^\/api\/findSimilarEmbedding\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/findSimilarEmbedding/_server.ts.js'))
			},
			{
				id: "/api/storeEmbedding",
				pattern: /^\/api\/storeEmbedding\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/api/storeEmbedding/_server.ts.js'))
			},
			{
				id: "/app",
				pattern: /^\/app\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/app/knowledge",
				pattern: /^\/app\/knowledge\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/app/knowledge/create",
				pattern: /^\/app\/knowledge\/create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/app/knowledge/[slug]",
				pattern: /^\/app\/knowledge\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/app/knowledge/[slug]/create",
				pattern: /^\/app\/knowledge\/([^/]+?)\/create\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/auth/callback",
				pattern: /^\/auth\/callback\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/callback/_server.ts.js'))
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/auth/login/email",
				pattern: /^\/auth\/login\/email\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/login/email/_server.ts.js'))
			},
			{
				id: "/auth/login/github",
				pattern: /^\/auth\/login\/github\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/login/github/_server.ts.js'))
			},
			{
				id: "/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/logout/_server.ts.js'))
			},
			{
				id: "/auth/register",
				pattern: /^\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/auth/register/_server.ts.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
