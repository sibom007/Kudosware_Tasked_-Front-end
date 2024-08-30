import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./Routes/router";
import { Toaster } from "sonner";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div className="bg-zinc-300 h-screen">
      <RouterProvider router={router} />
      <Toaster />
    </div>
  </StrictMode>
);
