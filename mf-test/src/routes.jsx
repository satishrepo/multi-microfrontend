import * as React from "react";
import {
  Outlet,
  Link,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
// import List from "mf_1/List";
// import Products from "mf_1/Products";
// import Detail from "mf_2/MF2";

export const Home = () => {
  return <div>Home</div>;
};

export default function AppInit() {
  return <RouterProvider router={router} />;
}

export const MF1Layout = () => {
  return (
    <div>
      <h4>MF 1 outlet</h4>
      <Outlet />
    </div>
  );
};

export function Layout() {
  return (
    <div>
      <h1>Outlet Modal Example</h1>
      <p>
        This is a modal example using createBrowserRouter that drives modal
        displays through URL segments. The modal is a child route of its parent
        and renders in the Outlet.
      </p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/mf1">mf 1 - List</Link> |
              <Link to="/mf1/products">mf 1 - Products</Link>
            </li>
            <li>
              <Link to="/mf2">mf 2</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <Outlet />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      {
        path: "/home",
        Component: Home,
      },
      //   {
      //     path: "/mf1",
      //     Component: MF1Layout,
      //     children: [
      //       {
      //         // path: "",
      //         index: true,
      //         Component: List,
      //       },
      //       {
      //         path: "products",
      //         Component: Products,
      //       },
      //     ],
      //   },
      //   {
      //     path: "/mf2",
      //     Component: Detail,
      //   },
    ],
  },
]);
