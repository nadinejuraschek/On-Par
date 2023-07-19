import { Button, Input, Text } from 'components';
import { useContext, useState } from "react";
import { Divider, DividerText, Form, FormWrapper } from "./styled";
import { UserContext } from 'contexts';
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );

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

  if (user) {
    navigate('/home');
  }

  return (
    <FormWrapper>
      <Text as="h2" size="xl" weight="bold">Log In</Text>
      <Form onSubmit={ handleSubmit }>
        <Input
          fullWidth
          handleChange={(event) => setEmail( (event.target as HTMLInputElement).value )}
          icon="mail"
          label="E-Mail"
          name="email"
          placeholder="E-Mail"
          value={email}
        />
        <Input
          fullWidth
          handleChange={(event) => setPassword( (event.target as HTMLInputElement).value )}
          icon="lock"
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
        />
        <Button type="submit" variant="primary">
          Log In
        </Button>
        <Button link="/register" variant="tertiary">Create an Account</Button>
        <Divider>
          <hr />
          <DividerText>OR</DividerText>
        </Divider>
        <Button handleClick={ handleGuest } variant="tertiary">Use Guest Account</Button>
      </Form>
    </FormWrapper>
  );
};
