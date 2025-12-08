import axios from "axios";
import { Button, Input, Text } from "components";
import { useMutation } from "@tanstack/react-query";
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { ZodFormattedError } from "zod";
import { ILogin } from "./types";
import { TLoginFormData, loginSchema } from "../../../schema/login.schema";
import { Divider, DividerText, Form, FormWrapper } from "../styled";
import { AUTH_VIEW } from "../types";

export const Login = ({ handleView }: ILogin): JSX.Element => {
  const [errors, setErrors] = useState<ZodFormattedError<TLoginFormData> | undefined>(undefined);
  const [loginData, setLoginData] = useState<TLoginFormData>({
    email: "",
    password: "",
  });

  const { mutate: login, isPending } = useMutation({
    mutationFn: async (credentials: TLoginFormData) => {
      const response = await axios({
        url: "/api/user/login",
        method: "POST",
        data: credentials,
      });
      return response.data;
    },
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {
      toast.error("Could not log you in. Please try again later!");
    },
  });

  const handleInputChange = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setLoginData((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleSubmit = useCallback((event: FormEvent) => {
    event.preventDefault();

    const validation = loginSchema.safeParse(loginData);

    if (validation.success === false) {
      setErrors(validation.error.format());
      return;
    }

    setErrors(undefined);
    login(loginData);
  }, [loginData, login]);

  const handleGuest = useCallback((event: MouseEvent) => {
    event.preventDefault();
    login({ email: "tester@mail.com", password: "testing123" });
  }, [login]);

  return (
    <FormWrapper>
      <Text as="h2" size="xl" weight="bold">Log In</Text>
      <Form onSubmit={ handleSubmit }>
        <Input
          error={errors?.email?._errors?.[0] && errors.email._errors[0]}
          fullWidth
          handleChange={handleInputChange}
          icon="envelope"
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
        <Button loading={isPending} type="submit" variant="primary">
          Log In
        </Button>
        <Button
          handleClick={() => handleView(AUTH_VIEW.REGISTER)}
          variant="tertiary"
        >
          Create an Account
        </Button>
        <Divider>
          <hr />
          <DividerText>OR</DividerText>
        </Divider>
        <Button loading={isPending} handleClick={ handleGuest } variant="tertiary">Use Guest Account</Button>
      </Form>
    </FormWrapper>
  );
};
