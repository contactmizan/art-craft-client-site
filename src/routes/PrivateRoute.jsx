import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <span className="loading loading-spinner loading-lg"></span>;
    }

    if (user) {
        return children;
    }

    // Redirect to login and save intended location
    return <Navigate to="/login" state={{ from: location }} replace />;
}

export default PrivateRoute;
