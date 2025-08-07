import { Navigate } from "react-router-dom";

function ProtectedRoute({ isLoggedIn, isCheckingToken, children }) {
  if (isCheckingToken) {
    return <div>Loading...</div>;
  }
  if (!isLoggedIn) {
    return <Navigate to="/" replace />;
  }
  return children;
}

export default ProtectedRoute;
