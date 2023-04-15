import { Button, Input, Text } from 'components';

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
    <main className={ styles.main }>
      <div className={ styles.formWrapper }>
        <Text as="h2" size="xl" weight="bold">Log In</Text>
        <form className={ styles.form } onSubmit={ handleSubmit }>
          <Input
            handleChange={(event) => setEmail( (event.target as HTMLInputElement).value )}
            icon="mail"
            label="E-Mail"
            name="email"
            placeholder="E-Mail"
            value={email}
          />
          <Input
            handleChange={(event) => setPassword( (event.target as HTMLInputElement).value )}
            icon="lock"
            label="Password"
            name="password"
            placeholder="Password"
            type="password"
            value={password}
          />
          <Button autoFocus type="submit" variant="primary">
            Log In
          </Button>
          <Button link="/register" variant="tertiary">Create an Account</Button>
          <div className={ styles.divider }>
            <hr />
            <Text className={ styles.dividerText }>OR</Text>
          </div>
          <Button handleClick={ handleGuest } variant="tertiary">Use Guest Account</Button>
        </form>
      </div>
    </main>
  );
};
