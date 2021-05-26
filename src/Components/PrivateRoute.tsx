import { Navigate, Route } from "react-router";
import { useAuthentication } from "../Context/AuthenticationProvider";

export const PrivateRoute = ({path, element}: any) => {
    const {login} = useAuthentication();
    return login ? (
        <Route element={element} path={path} />
      ) : (
        <Navigate replace state={{ from: path }} to={"/login"} />
      );
}