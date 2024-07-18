import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import { RoutePaths } from "@/types/constants";
import Violations from "../pages/Violations";
import MainLayout from "../layouts/MainLayout";
import Dashboard from "@/pages/Dashboard";
import Contractors from "@/pages/Contractors";
import PPE from "@/pages/PPE";
import Workers from "@/pages/Workers";

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
        {
          path: "/dashbord",
          element: (
            <MainLayout>
              <Dashboard />
            </MainLayout>
          ),
        },
        {
          path: "/contractors",
          element: (
            <MainLayout>
              <Contractors />
            </MainLayout>
          ),
        },
        {
          path: "/ppes",
          element: (
            <MainLayout>
              <PPE />
            </MainLayout>
          ),
        },
        {
          path: "/workers",
          element: (
            <MainLayout>
              <Workers />
            </MainLayout>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
