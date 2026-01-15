import * as React from "react";
import {
  Outlet,
  Link,
  RouterProvider,
  createBrowserRouter,
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

export const Home = () => {
  return <div>Home</div>;
};

/* export default function AppWithRoutes() {
  return <RouterProvider router={router} />;
} */

export default function AppWithRoutes() {
  return (
    // <RouterProvider>
    <BrowserRouter basename="/mf2">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="details" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </RouterProvider>
  );
}

export function Layout() {
  return (
    <div>
      <h5>MF - 2 App with routes and components</h5>
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
              <Link to="/details">Details</Link>
            </li>
          </ul>
        </nav>
        <hr />
      </div>
      <Outlet />
    </div>
  );
}

export const Details = () => {
  return <div>this is details from mf 2</div>;
};

const router = createBrowserRouter(
  [
    {
      path: "/",
      Component: Layout,
      children: [
        {
          //   path: "home",
          index: true,
          Component: Home,
        },
        {
          path: "details",
          Component: Details,
        },
      ],
    },
  ],
  { basename: "/mf2" }
);
