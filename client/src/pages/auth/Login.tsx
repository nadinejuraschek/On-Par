import { Button, Text } from 'components';

import axios from "axios";
import styles from "./auth.module.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = (): JSX.Element => {
  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );

  const navigate = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: email, password: password },
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( () => {
        toast.error("Could not log you in. Please try again later!");
        // console.debug( "Error when logging in user: " + error.response );
      } );
  };

  const handleGuest = event => {
    event.preventDefault();
    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: "tester@mail.com", password: "testing123" },
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( error => {
        toast.error("Could not log in test user. Please try again later!");
        // console.debug( "Error: " + error.response );
      } );
  };

  return (
    <main>
      <Text as="h2" size="xl" weight="bold">Log In</Text>

      <form className={ `ui form ${ styles.form }` } onSubmit={ handleSubmit }>
        <div className="field">
          <label htmlFor="email">E-Mail</label>
          <div className="ui left icon input">
            <i className="mail icon"></i>
            <input
              type="text"
              name="email"
              placeholder="E-Mail"
              onChange={ event => setEmail( event.target.value ) }
            />
          </div>
        </div>

        <div className="field">
          <label htmlFor="password">Password</label>
          <div className="ui left icon input">
            <i className="lock icon"></i>
            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={ event => setPassword( event.target.value ) }
            />
          </div>
        </div>

        <div className={ styles.centeredBtn }>
          <Button autoFocus type="submit" variant="primary">
            Log In
          </Button>
        </div>

        <div className={ styles.optionsContainer }>
          <div className={ styles.optionsItem }>
            <Text as="p" size="sm">Don&apos;t have an account?</Text>
            <Button link="/register" variant="tertiary">
              Register
            </Button>
          </div>
          <div className={ styles.optionsItem }>
            <Text as="p" size="sm">Testing?</Text>
            <Button handleClick={ handleGuest } variant="tertiary">
              Use Guest Account
            </Button>
          </div>
          { /* <p>Or Log In with</p>
                                <div className="ui small buttons">
                                    <button className="ui google plus button">
                                        <i className="google icon"></i>
                                        Google
                                    </button>
                                </div> */ }
        </div>
      </form>
    </main>
  );
};
