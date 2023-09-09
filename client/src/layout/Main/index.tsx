import "react-toastify/dist/ReactToastify.min.css";
import axios from "axios";
import { LoadingSpinner } from "components";
import { useUserContext } from "contexts";
import { ACTIONS } from "contexts/UserContext/types";
import { lazy, useEffect, useState } from "react";
import { Router } from "router";

const Auth = lazy(() => import("../../pages/auth"));

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
      // eslint-disable-next-line no-console
      console.debug("Could not fetch the user information.");
      // toast.error("Could not find the user information. Please try again later!");
    }).finally(() => setLoading(false));
  }, [dispatch] );

  if (loading) return <main><LoadingSpinner /></main>;

  if (!user) {
    return <Auth />;
  }

  return <Router />;
};
