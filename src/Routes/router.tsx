import Dashbord from "@/page/Dashbord/Dashbord";
import ProtectRoute from "@/page/Dashbord/ProtectRoute";
import SignUp from "@/page/signUp/SignUp";

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/dashbord",
    element: (
      <ProtectRoute>
        <Dashbord />,
      </ProtectRoute>
    ),
  },
]);
