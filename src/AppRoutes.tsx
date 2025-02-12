import React, { lazy, Suspense } from "react";
import { useRoutes } from "react-router-dom";

const HomePage = lazy(() => import("./pages/HomePage"));

const Routes: React.FC = () => {
  const routes = [
    {
      path: "/",
      element: (
        <Suspense>
          <HomePage />
        </Suspense>
      ),
    },
  ];

  return useRoutes(routes);
};

export default Routes;
