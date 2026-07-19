import { Navigate } from "react-router-dom";

function ProtectedRoute({ user, allowedRole, children }) {

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    if (user.role !== allowedRole) {

        if (user.role === "admin") {
            return <Navigate to="/admin/dashboard" replace />;
        }

        return <Navigate to="/user/home" replace />;

    }

    return children;
}

export default ProtectedRoute;