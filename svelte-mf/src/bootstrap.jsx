import App from "./App.svelte";

let app;

export function mount(el, props = { base: "mf-4" }) {
  console.log("SVELTE MOUNT");
  app = new App({
    target: el,
    props,
  });
}

export function unmount() {
  console.log("SVELTE UN-MOUNT");
  app?.$destroy();
  app = null;
}
