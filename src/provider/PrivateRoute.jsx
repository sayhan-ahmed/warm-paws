import React, { use, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router";
import { Hourglass } from "react-loader-spinner";
import { AuthContext } from "./AuthContext";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  const [delay, setDelay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setDelay(false), 2000);
    return () => clearTimeout(timer);
  }, []);
  //   console.log(user);
  if (loading || delay) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Hourglass
          visible={true}
          height="80"
          width="80"
          ariaLabel="hourglass-loading"
          wrapperStyle={{}}
          wrapperClass=""
          colors={["#f97316", "#fb923c"]}
        />
      </div>
    );
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate state={location.pathname} to="/auth" />;
};

export default PrivateRoute;
