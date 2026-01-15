import { createRoot } from "react-dom/client";
import App from "./App";

let root;

function mount(el, config) {
  root = createRoot(el);
  root.render(<App config={config} />);
}

function unmount() {
  root?.unmount();
}

export default { mount, unmount };
