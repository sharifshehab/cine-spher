import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <span className="loading loading-spinner loading-lg text-warning"></span>
            </div>
        )
    }

    if (user && user.uid) {
        return children;
    }
    return <Navigate to={'/login'} state={{ from: location}} replace></Navigate>
};

export default PrivateRoute;