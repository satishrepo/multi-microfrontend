// import * as React from "react";
import {
  RouterProvider,
  //   createBrowserRouter,
  BrowserRouter,
  Outlet,
  Link,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";

export const Home = ({ callback }) => {
  return <div onClick={() => callback({ name: "satish" })}>Home</div>;
};

/* export default function AppWithRoutes() {
  return <RouterProvider router={router} />;
} */

export default function AppWithRoutes({ base, callback }) {
  console.log("  --- mf 3 --- base: ", base);
  const routes = () => (
    <Routes basepath={base}>
      <Route path="/" element={<Layout base={base} />}>
        <Route index element={<Home callback={callback} />} />
        <Route path="/home" element={<Home callback={callback} />} />
        <Route path="/details" element={<Details base={base} />} />
      </Route>
    </Routes>
  );
  console.log("base", base);
  // if (base !== "") {
  //   return <>{routes()}</>;
  // }

  return (
    <BrowserRouter basename={base}>
      <Routes basename={base}>
        <Route path="/" element={<Layout base={base} />}>
          <Route index element={<Home callback={callback} />} />
          <Route path="home" element={<Home callback={callback} />} />
          <Route path="details" element={<Details base={base} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const NavList = styled.ul`
  list-style-type: none;
  display: flex;
`;

const NavListItem = styled.li`
  margin: 2px 5px;
`;

export function Layout({ base }) {
  const path = ""; //window.location.hostname === "localhost" ? base : `/${base}`;
  console.log(" FINAL :::: ", path);
  return (
    <div>
      <h5>MF - 3 App with routes and components</h5>

      <div>
        <NavList>
          <NavListItem>
            <Link to={`${path}/home`}>Home</Link>
          </NavListItem>
          <NavListItem>
            <Link to={`${path}/details`}>Details</Link>
          </NavListItem>
        </NavList>

        <hr />
      </div>
      <Outlet />
    </div>
  );
}

export const Details = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const detailClicked = () => {
    window.dispatchEvent(
      new CustomEvent("mf3_detail_click", {
        detail: { data: "satish clicked it" },
      })
    );
  };
  return (
    <div onClick={detailClicked}>
      <p>{t("description.part1")}</p>
      <div> this data is from mf - 3 </div>
      <button onClick={() => navigate("/list")}>Go to mf - list</button>
    </div>
  );
};

// const router = createMemoryRouter([{ path: "/", Component: Home }]);

/* const router = createMemoryRouter(
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
  ]
  //   { basename: "/mf2" }
); */
