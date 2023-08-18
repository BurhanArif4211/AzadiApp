

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.02c5fd98.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.d7cc3bf6.js","_app/immutable/chunks/singletons.18047db0.js"];
export const stylesheets = [];
export const fonts = [];
