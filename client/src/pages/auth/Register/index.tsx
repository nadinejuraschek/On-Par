import axios from "axios";
import { Button, DatePicker, Input, Select, Text } from "components";
import { TSelectOption } from "components/Select/types";
import { UserContext } from "contexts";
import { countrySelectOptions } from "data";
import { FormEvent, MouseEvent, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import {
  Divider,
  DividerText,
  FieldPair,
  Form,
  FormWrapper,
} from "../styled";

export const Register = (): JSX.Element => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  // const [role, setRole] = useState('');
  // const [familyID, setFamilyID] = useState('');
  const [firstname, setFirstname] = useState( "" );
  const [lastname, setLastname] = useState( "" );
  const [country, setCountry] = useState<TSelectOption | undefined>(undefined);
  const [startDate, setStartDate] = useState( new Date() );
  const [email, setEmail] = useState( "" );
  const [password, setPassword] = useState( "" );

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();

    const newUser = {
      role: "Au Pair",
      familyID: "00000",
      firstname: firstname,
      lastname: lastname,
      country: country,
      startDate: startDate,
      email: email,
      password: password,
    };

    axios( {
      url: "/api/user/register",
      method: "POST",
      data: newUser,
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( () => {
        toast.error("Could not register user. Please try again later!");
        // console.debug( "Error when registering user: " + error.response );
      } );
  }, [firstname,
    lastname,
    country,
    startDate,
    email,
    navigate,
    password]);

  const handleGuest = useCallback((event: MouseEvent) => {
    event.preventDefault();
    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: "tester@mail.com", password: "testing123" },
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch( () => {
        toast.error("Could not log in test user. Please try again later!");
        // console.debug( "Error: " + error.response );
      } );
  }, [navigate]);

  if (user) {
    navigate("/home");
  }

  return (
    <FormWrapper>
      <Text as="h2" size="xl" weight="bold">Register</Text>
      <Form onSubmit={ handleSubmit }>
        <FieldPair>
          <Input
            fullWidth
            handleChange={event => setFirstname( (event.target as HTMLInputElement).value )}
            icon="user"
            label="First Name"
            name="firstname"
            placeholder="First Name"
            value={firstname}
          />
          <Input
            fullWidth
            handleChange={event => setLastname( (event.target as HTMLInputElement).value )}
            icon="user"
            label="Last Name"
            name="lastname"
            placeholder="Last Name"
            value={lastname}
          />
        </FieldPair>
        <FieldPair>
          <DatePicker
            format="MM/dd/yyyy"
            fullWidth
            handleChange={(startDate: Date) => setStartDate( startDate )}
            icon="calendar alternate outline"
            label="Arrival Date"
            name="startDate"
            value={new Date(startDate)}
          />
          <Select
            fullWidth
            handleChange={(option: TSelectOption) => setCountry(option)}
            icon="globe icon"
            label="Home Country"
            name="country"
            options={countrySelectOptions}
            value={country}
          />
        </FieldPair>
        <Input
          fullWidth
          handleChange={event => setEmail( (event.target as HTMLInputElement).value )}
          icon="mail"
          label="E-Mail"
          name="email"
          placeholder="E-Mail"
          value={email}
        />
        <Input
          fullWidth
          handleChange={event => setPassword( (event.target as HTMLInputElement).value )}
          icon="lock"
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          value={password}
        />
        <Button type="submit" variant="primary">
          Register
        </Button>
        <Button link="/login" variant="tertiary">
          Log In
        </Button>
        <Divider>
          <hr />
          <DividerText>OR</DividerText>
        </Divider>
        <Button handleClick={ handleGuest } variant="tertiary">
          Use Guest Account
        </Button>
      </Form>
    </FormWrapper>
  );
};
