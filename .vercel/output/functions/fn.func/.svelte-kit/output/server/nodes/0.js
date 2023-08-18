

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.6e74acbe.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.d7cc3bf6.js"];
export const stylesheets = [];
export const fonts = [];
