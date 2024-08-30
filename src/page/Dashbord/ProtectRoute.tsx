import { Navigate } from "react-router-dom";

const ProtectRoute = ({ children }: { children: React.ReactNode }) => {
  const u = localStorage.getItem("userEmail");
  if (!u) {
    return <Navigate to="/" />;
  }

  return <div>{children}</div>;
};

export default ProtectRoute;
