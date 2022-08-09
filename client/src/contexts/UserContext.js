// REACT
import { useState, createContext, useEffect } from 'react';

// NPM PACKAGES
import axios from 'axios';

// COMPONENTS
import Loading from '../components/Loading';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios({
      method: 'GET',
      url: '/api/user',
    }).then(res => {
      setUser(res.data);
    }).catch(error => console.log('Error: ', error));
  }, []);

  return (
    <UserContext.Provider value={[user]}>
      {
        user
        ?
        <>{children}</>
        :
        <Loading />
      }
    </UserContext.Provider>
  );
};
