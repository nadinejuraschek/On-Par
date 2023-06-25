import { IUserProvider, TUser } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext({
  loading: false,
  user: null,
});

export const UserProvider = ( { children }: IUserProvider ): JSX.Element => {
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

  return (
    <UserContext.Provider value={ { loading, user } }>
      { children }
    </UserContext.Provider>
  );
};
