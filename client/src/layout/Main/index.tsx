import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { LoadingSpinner } from "components";
import { useUserContext } from "contexts";
import { ACTIONS } from "contexts/UserContext/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Router } from "router";

// const Login = lazy(() => import("../../pages/auth/Login"));
// const Register = lazy(() => import("../../pages/auth/Register"));

export const Main = (): JSX.Element => {
  const [loading, setLoading] = useState(false);

  const [{ user }, dispatch] = useUserContext();

  useEffect( () => {
    setLoading(true);
    axios( {
      method: "GET",
      url: "/api/user",
    } ).then( res => {
      dispatch({
        type: ACTIONS.SET_USER,
        payload: res.data,
      });
    } ).catch( () => {
      toast.error("Could not find the user information. Please try again later!");
    }).finally(() => setLoading(false));
  }, [dispatch] );

  if (loading) return <main><LoadingSpinner /></main>;

  if (!user) {
    return <div>LOGIN / REGISTER</div>;
  }

  return <Router />;
};
