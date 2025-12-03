import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Home from "../pages/Home/Home";
import Profile from "../pages/Profile/Profile";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Services from "../pages/Services/Services";
import AuthLayout from "../layouts/AuthLayout";
import ResetPass from "../pages/ResetPass/ResetPass";
import AuthPageDesign from "../layouts/AuthPageDesign";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
// import PrivateRoute from "../provider/PrivateRoute";
import Loader from "../components/Loader/Loader";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Support from "../pages/Support/Support";
import ComingSoon from "../components/ComingSoon/ComingSoon";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/services",
        Component: Services,
      },
      {
        path: "/profile",
        Component: Profile,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/contact",
        Component: Contact,
      },
      {
        path: "/support",
        Component: Support,
      },
      {
        path: "/service-details/:id",
        Component: ServiceDetails,
        loader: () => fetch("/petCare.json"),
      },
      {
        path: "/coming-soon",
        Component: ComingSoon,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        index: true,
        Component: AuthPageDesign,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
      {
        path: "/auth/reset",
        Component: ResetPass,
      },
    ],
  },
  // {
  //   path: "/service-details/:id",
  //   // Component: ServiceDetails,
  //   element: (
  //     <PrivateRoute>
  //       <ServiceDetails></ServiceDetails>
  //     </PrivateRoute>
  //   ),
  //   loader: () => fetch("/petCare.json"),
  // },
]);
export default router;
