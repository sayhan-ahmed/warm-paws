import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    // Component:
    element: <h2>Home Layout</h2>,
  },
  {
    path: "/auth",
    // Component:
    element: <h2>Authentication Layout</h2>,
  },
]);
export default router;
