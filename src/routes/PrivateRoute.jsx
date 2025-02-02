import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ chiildren }) => {

    const { user } = useContext(AuthContext);

    if (user) {
        return chiildren;
    }

    return <Navigate to="/login"></Navigate>
}

export default PrivateRoute;