import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";
import { selectSignedIn } from "../../store/reducers/auth.slice";

const PrivateRoute = ({ children, ...rest }) => {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isSignedIn || sessionStorage.getItem("user") ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
