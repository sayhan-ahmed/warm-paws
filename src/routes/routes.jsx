import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
  },
  {
    path: "/auth",
    // Component:
    element: <h2>Authentication Layout</h2>,
  },
]);
export default router;
