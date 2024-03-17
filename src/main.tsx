import { HelmetProvider } from "react-helmet-async";
import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import router from "@/router";

import "@/styles/main.css";
import "@/styles/components/layout.css";
import "@/styles/components/typography.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <RouterProvider router={router} />
  </HelmetProvider>,
);
