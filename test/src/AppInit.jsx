import { lazy, Suspense, useState, useEffect, useRef } from "react";
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
// import Mf3app from "mf_3/Mf3app";
import {
  Wrapper,
  Title,
  NavListItem,
  // StyledLink,
} from "./styledComponents/index";
import { useTranslation } from "react-i18next";
// import i18n from "i18next";
import MasterLayout from "./layout/masterLayout";

// const Products = lazy(() => import("mf_1/Products"));

function ProductsWrapper() {
  const ref = useRef(null);

  useEffect(() => {
    let cleanup;

    // import("mf_1/Products")
    //   .then((m) => console.log("REMOTE LOADED", m))
    //   .catch((e) => console.error("REMOTE FAILED", e));

    import("mf_1/App").then((mod) => {
      const { mount, unmount } = mod.default;
      console.log(ref.current);
      mount(ref.current);
      cleanup = unmount;
    });

    return () => cleanup?.();
  }, []);

  return <div className="remote_mf_1" ref={ref} />;
}

function MF3Wrapper() {
  const ref_3 = useRef(null);

  useEffect(() => {
    let cleanup_3;

    // import("mf_3/Mf3app")
    //   .then((m) => console.log("REMOTE LOADED", m))
    //   .catch((e) => console.error("REMOTE FAILED", e));

    import("mf_3/Mf3app").then((mod) => {
      const { mount, unmount } = mod.default;
      console.log(ref_3.current, mod.default);
      mount(ref_3.current, {
        base: "/mf-3",
        callback: () => "",
        lang: "en",
      });
      cleanup_3 = unmount;
    });

    return () => cleanup_3?.();
  }, []);

  return <div className="remote_mf_3" ref={ref_3} />;
}

function SvelteMFWrapper() {
  const hostRef = useRef(null);
  const shadowRootRef = useRef(null);

  useEffect(() => {
    let cleanup;

    // 1. Create shadow root once
    if (!shadowRootRef.current) {
      shadowRootRef.current = hostRef.current.attachShadow({
        mode: "open", // use "closed" only if you really need it
      });
    }

    import("svelte_mf/SvelteApp").then((mod) => {
      const { mount, unmount } = mod.default;

      // 2. Mount Svelte into the shadow root
      mount(shadowRootRef.current, {
        base: "/mf-4",
        message: "Hello from React Host 👋",
      });

      cleanup = unmount;
    });

    return () => cleanup?.();
  }, []);

  return <div ref={hostRef} />;
}

// export default ProductsWrapper;

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
  const userData = JSON.parse(localStorage.getItem("signup") || "{}");
  if (userData.username === "test") {
    return <Outlet />;
  }
  return <Navigate to="/auth/signup" replace />;
}

export default function AppInit() {
  // const { i18n } = useTranslation();
  const List = lazy(() => import("mf_1/List"));
  // const Products = lazy(() => import("mf_1/Products"));
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
                  <ProductsWrapper />
                  {/* <Products /> */}
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
          element: <MF3Wrapper />,
        },
        {
          path: "mf-4/*",
          element: (
            <Suspense fallback={() => <>Loading...</>}>
              <SvelteMFWrapper />
            </Suspense>
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
    <div className="w-full">
      <Title>
        {t("title")} - {t("sub.title")}
      </Title>
      {/* <Outlet /> */}
      <ProtectedRoutes />
    </div>
  );
};

export function Layout() {
  return (
    <MasterLayout>
      <Title>Outlet Modal</Title>

      {/* <NavList>
        <NavListItem>
          <StyledLink to="/home">Home</StyledLink>{" "}
          <StyledLink to="/list">List</StyledLink>{" "}
          <StyledLink to="/auth/signup">Auth</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/mf1">mf 1 - List</StyledLink>{" "}
          <StyledLink to="/mf1/products">mf 1 - Products</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/mf2">mf 2</StyledLink>
        </NavListItem>
        <NavListItem>
          <StyledLink to="/mf-3">mf 3</StyledLink>
        </NavListItem>
      </NavList> */}

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
  const [formValues] = useState({
    username: "test",
    password: "1234",
  });

  const handleSignup = () => {
    localStorage.setItem("signup", JSON.stringify(formValues));
    navigate("/home");
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
