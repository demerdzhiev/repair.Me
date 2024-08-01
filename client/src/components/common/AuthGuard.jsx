import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function AuthGuard() {
  const { isAuthenticated } = AuthContext();

  return isAuthenticated
  ? <Outlet />
  : <Navigate to="/login" />;
}
