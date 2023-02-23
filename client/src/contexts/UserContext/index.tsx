import { createContext, useEffect, useState } from "react";

import { IUserProvider } from "./types";
import { Loading } from "../../components";
import axios from "axios";

export const UserContext = createContext({});

export const UserProvider = ( { children }: IUserProvider ): JSX.Element => {
  const [user, setUser] = useState( null );

  useEffect( () => {
    axios( {
      method: "GET",
      url: "/api/user",
    } ).then( res => {
      setUser( res.data );
    } ).catch( error => console.log( "Error: ", error ) );
  }, [] );

  if ( !user ) {
    return <Loading />;
  }

  return (
    <UserContext.Provider value={ [user] }>
      { children }
    </UserContext.Provider>
  );
};
