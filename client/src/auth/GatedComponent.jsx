import { useEffect, useState } from "react";

import { Loading } from "../components/Loading";
import { Register } from "../pages/auth/Register";
import axios from "axios";

export const GatedComponent = ( { children } ) => {
  const [user, setUser] = useState( null );
  const [loading, setLoading] = useState( true );

  useEffect( () => {
    // check if user is signed in
    axios
      .get( "/api/user" )
      .then( res => {
        setUser( res.data );
        setLoading( false );
      } )
      .catch( () => {
        // console.debug( "Error when checking for signed in user: " + error.message );
      } );
  }, [] );

  return (
    <div>{ loading ? <main><Loading /></main> : user ? <>{ children }</> : <Register /> }</div>
  );
};
