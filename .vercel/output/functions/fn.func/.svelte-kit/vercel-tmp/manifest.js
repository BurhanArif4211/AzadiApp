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
		client: {"start":"_app/immutable/entry/start.19323750.js","app":"_app/immutable/entry/app.3580dce2.js","imports":["_app/immutable/entry/start.19323750.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/singletons.18047db0.js","_app/immutable/entry/app.3580dce2.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.d7cc3bf6.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/2.js')),
			__memo(() => import('../output/server/nodes/3.js'))
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
				id: "/Create",
				pattern: /^\/Create\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: __memo(() => import('../output/server/entries/endpoints/Create/_server.js'))
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
