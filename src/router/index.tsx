import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { RoutePaths } from "@/types/constants";
import Violations from "../pages/Violations";
import MainLayout from "../layouts/MainLayout";

const Routes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      // element: <MainLayout />,
      // errorElement: <NotFoundPage />,
      children: [
        {
          path: "/",
          element: (
            <MainLayout>
              <Violations />
            </MainLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
