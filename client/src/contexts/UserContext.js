import axios from "axios";
import { useState, createContext, useEffect } from "react";
import Loading from "../components/Loading";

export const UserContext = createContext();

export const UserProvider = ( { children } ) => {
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
