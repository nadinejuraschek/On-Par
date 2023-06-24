import { IUserProvider, TUser } from "./types";
import { createContext, useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";

export const UserContext = createContext({
  user: null,
});

export const UserProvider = ( { children }: IUserProvider ): JSX.Element => {
  const [user, setUser] = useState<TUser | null>( null );

  useEffect( () => {
    axios( {
      method: "GET",
      url: "/api/user",
    } ).then( res => {
      setUser( res.data );
    } ).catch( () => {
      toast.error("Could not find the user information. Please try again later!");
    });
  }, [] );

  return (
    <UserContext.Provider value={ { user } }>
      { children }
    </UserContext.Provider>
  );
};
