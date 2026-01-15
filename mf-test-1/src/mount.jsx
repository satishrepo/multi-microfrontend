// products/src/mount.tsx
import { createRoot } from "react-dom/client";
import Products from "./components/products";

let root;

function mount(el) {
  root = createRoot(el);
  root.render(<Products />);
}

function unmount() {
  root?.unmount();
}

export default { mount, unmount };
