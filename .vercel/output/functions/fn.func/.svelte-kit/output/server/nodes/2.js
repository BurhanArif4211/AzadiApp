

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.39abd712.js","_app/immutable/chunks/scheduler.6a6dac79.js","_app/immutable/chunks/index.d7cc3bf6.js"];
export const stylesheets = ["_app/immutable/assets/2.c2d2b900.css"];
export const fonts = ["_app/immutable/assets/Nation.78e2cf99.ttf"];
