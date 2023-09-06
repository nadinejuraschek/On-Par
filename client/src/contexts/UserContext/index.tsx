import axios from "axios";
import { LoadingSpinner } from "components";
import { createContext, useEffect, useMemo, useState } from "react";

import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { IUserContext, IUserProvider, TUser } from "./types";

export const UserContext = createContext<IUserContext>({
  loading: false,
  user: null,
});

export const UserProvider = ( { children }: IUserProvider ): JSX.Element => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<TUser | null>( null );

  useEffect( () => {
    setLoading(true);
    axios( {
      method: "GET",
      url: "/api/user",
    } ).then( res => {
      setUser( res.data );
    } ).catch( () => {
      toast.error("Could not find the user information. Please try again later!");
    }).finally(() => setLoading(false));
  }, [] );

  const renderContent = useMemo(() => {
    if (loading) return <main><LoadingSpinner /></main>;

    if (!user) navigate("/register");

    return children;
  }, [children,
    loading,
    navigate,
    user]);

  return (
    <UserContext.Provider value={ { loading, user } }>
      { renderContent }
    </UserContext.Provider>
  );
};
