import axios from "axios";
import { Button, Input, Text } from "components";
import { UserContext } from "contexts";
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { TLoginFormData, userSchema } from "./login.schema";
import { Divider, DividerText, Form, FormWrapper } from "../styled";
import { ZodFormattedError } from "zod";

export const Login = (): JSX.Element => {
  const navigate = useNavigate();

  const { user } = useContext(UserContext);

  const [errors, setErrors] = useState<ZodFormattedError<TLoginFormData> | undefined>(undefined);
  const [loginData, setLoginData] = useState<TLoginFormData>({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    const validation = userSchema.safeParse(loginData);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setIsSubmitting(false);
      return;
    }

    setErrors(undefined);

    axios( {
      url: "/api/user/login",
      method: "POST",
      data: loginData,
    } )
      .then( () => navigate( "/home" ))
      .catch( () => toast.error("Could not log you in. Please try again later!"))
      .finally(() => setIsSubmitting(false));
  }, [loginData, navigate]);

  const handleGuest = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: "tester@mail.com", password: "testing123" },
    } )
      .then( () => {
        navigate( "/home" );
      } )
      .catch(() => {
        toast.error("Could not log in test user. Please try again later!");
      } )
      .finally(() => setIsSubmitting(false));
  }, [navigate]);

  if (user) {
    navigate("/home");
  }

  return (
    <FormWrapper>
      <Text as="h2" size="xl" weight="bold">Log In</Text>
      <Form onSubmit={ handleSubmit }>
        <Input
          error={errors?.email?._errors?.[0] && errors.email._errors[0]}
          fullWidth
          handleChange={handleInputChange}
          icon="mail"
          label="E-Mail"
          name="email"
          placeholder="E-Mail"
          value={loginData.email}
        />
        <Input
          error={errors?.password?._errors?.[0] && errors.password._errors[0]}
          fullWidth
          handleChange={handleInputChange}
          icon="lock"
          label="Password"
          name="password"
          placeholder="Password"
          type="password"
          value={loginData.password}
        />
        <Button loading={isSubmitting} type="submit" variant="primary">
          Log In
        </Button>
        <Button link="/register" variant="tertiary">Create an Account</Button>
        <Divider>
          <hr />
          <DividerText>OR</DividerText>
        </Divider>
        <Button loading={isSubmitting} handleClick={ handleGuest } variant="tertiary">Use Guest Account</Button>
      </Form>
    </FormWrapper>
  );
};
