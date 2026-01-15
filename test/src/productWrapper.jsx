import { useEffect, useRef, lazy } from "react";

const Products = lazy(() => import("products/mount"));

function ProductsWrapper() {
  const ref = useRef(null);

  useEffect(() => {
    let cleanup;
    Products.then(({ mount, unmount }) => {
      mount(ref.current);
      cleanup = unmount;
    });

    return () => cleanup?.();
  }, []);

  return <div ref={ref} />;
}
