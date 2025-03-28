import { createBrowserRouter } from "react-router-dom";

import { createRoutes } from "vite-react-routes";

import App from "./pages/_app";
import NotFound from "./pages/NotFound";

const reactRoutes = createRoutes((module) => {
  return {
    loader: (arg) => {
      return (
        module?.Loader?.({
          ...arg,
          //   context: queryClient,
        }) || {}
      );
    },
  };
});

const routes = [
  {
    element: <App />,
    children: [
      {
        path: "*",
        id: "not-found",
        Component: NotFound,
      },
      ...reactRoutes,
    ],
  },
];

export const router = createBrowserRouter(routes);
