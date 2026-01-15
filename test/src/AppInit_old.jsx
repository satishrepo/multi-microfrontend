import React, { lazy, Suspense, useState } from "react";
import {
  Outlet,
  RouterProvider,
  createBrowserRouter,
  useRouteError,
  useNavigate,
  Navigate,
} from "react-router-dom";
// import List from "mf_1/List";
// import Products from "mf_1/Products";
// import Detail from "mf_2/MF2";
import Mf3app from "mf_3/Mf3app";
import { useEffect } from "react";
import {
  Wrapper,
  Title,
  NavList,
  NavListItem,
  StyledLink,
} from "./styledComponents/index";
import { useTranslation } from "react-i18next";
import MasterLayout from "./layout/masterLayout";

export const Home = () => {
  return <div>Home</div>;
};

const ErrorBoundary = () => {
  let error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return <div>Dang!</div>;
};

export function ProtectedRoutes() {
  const userData = JSON.parse(localStorage.getItem('signup') || '{}')
  if(userData.username === 'test') {
    return <Outlet/>
  }
  return <Navigate to="/auth/signup" replace />
}

export default function AppInit() {
  const { i18n } = useTranslation();
  const List = lazy(() => import("mf_1/List"));
  const Products = lazy(() => import("mf_1/Products"));
  const router = createBrowserRouter([
    {
      path: "/auth",
      Component: Auth,
      children: [{ path: "/auth/signup", Component: Signup }],
    },
    {
      path: "/",
      Component: Layout,
      children: [
        {
          path: "/home",
          Component: Home,
        },
        {
          path: "/list",
          Component: LocalList,
        },
        {
          path: "/mf1",
          Component: MF1Layout,
          children: [
            {
              // path: "",
              index: true,
              // Component: List,
              element: (
                <Suspense fallback={() => <div>Loading...</div>}>
                  <List />
                </Suspense>
              ),
              errorElement: <ErrorBoundary />,
            },
            {
              path: "products",
              // Component: Products,
              element: (
                <Suspense fallback={() => <>Loading...</>}>
                  <Products />
                </Suspense>
              ),
              errorElement: <ErrorBoundary />,
            },
          ],
        },
        //   {
        //     path: "/mf2",
        //     Component: Detail,
        //   },
        {
          path: "/mf-3/*",
          // Component: Mf3app,
          element: (
            <Mf3app
              config={{
                base: "/mf-3",
                callback: hostCallback,
                lang: i18n.language,
              }}
            />
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export const MF1Layout = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>
        {t("title")} - {t("sub.title")}
      </Title>
      {/* <Outlet /> */}
      <ProtectedRoutes />
    </Wrapper>
  );
};

export function Layout() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const fn = (d) => console.log(d.detail.data);
    window.addEventListener("mf3_detail_click", fn);
    return () => window.removeEventListener("mf3_detail_click", fn);
  }, []);

  const changeLanguage = (e) => i18n.changeLanguage(e.target.value);

  return (
    <MasterLayout>
      <Title>Outlet Modal</Title>
      <select onChange={changeLanguage}>
        <option value="en">English</option>
        <option value="fr">French</option>
      </select>

      <NavList>
        <NavListItem>
          <StyledLink to="/home">Home</StyledLink>{" "}
          <StyledLink to="/list">List</StyledLink>{" "}
          <StyledLink to="/auth/signup">Auth</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/mf1">mf 1 - List</StyledLink>{" "}
          <StyledLink to="/mf1/products">mf 1 - Products</StyledLink>
        </NavListItem>
        {/* <NavListItem>
              <StyledLink to="/mf2">mf 2</StyledLink>
            </NavListItem> */}
        <NavListItem>
          <StyledLink to="/mf-3">mf 3</StyledLink>
        </NavListItem>
      </NavList>

      <Outlet />
    </MasterLayout>
  );
}

const LocalList = () => {
  return (
    <div>
      <ul>
        <NavListItem>firrrrrr</NavListItem>
        <NavListItem>firrrrrr</NavListItem>
        <NavListItem>firrrrrr</NavListItem>
      </ul>
    </div>
  );
};

const Auth = () => {
  return (
    <Wrapper>
      <Title>Auth</Title>
      <Outlet />
    </Wrapper>
  );
};

const Signup = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    username: "test",
    password: "1234",
  });

  const handleSignup = (e) => {
    localStorage.setItem('signup',JSON.stringify(formValues))
    navigate('/home')
  };

  return (
    <div>
      <form method="post" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>Username: </label>
          <input type="text" name="username" value={formValues.username} />
        </div>
        <div>
          <label>Password: </label>
          <input type="password" name="password" value={formValues.password} />
        </div>
        <div>
          <button type="submit" onClick={handleSignup}>
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

const hostCallback = (data) => {
  console.log("This is host callback, taking data from child data: ", data);
};
