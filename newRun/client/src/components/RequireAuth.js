import { Navigate } from 'react-router-dom'
import { ROUTES } from '../constants/Routes'

const RequireAuth = ({ children, auth, reversed }) => {
    if (!auth && !reversed) return <Navigate to={ROUTES.LOGIN} />;

    return children;
}

export default RequireAuth
