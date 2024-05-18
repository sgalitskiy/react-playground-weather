import { Navigate } from "react-router-dom";
import {useEffect, useState} from "react";

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = sessionStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }

    setLoading(false);
  }, []);

  return loading ? null : (isAuthenticated ? <Component /> : <Navigate to="/login" />);
};
export default PrivateRoute;
