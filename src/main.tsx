import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import StylesProvider from "./styles/StylesProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense>
      <StylesProvider>
        <RouterProvider router={router} />
      </StylesProvider>
    </Suspense>
  </StrictMode>
);
