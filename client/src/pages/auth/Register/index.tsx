import axios from "axios";
import { Button, DatePicker, Input, Select, Text } from "components";
import { TSelectOption } from "components/Select/types";
import { countrySelectOptions } from "data";
import { ChangeEvent, FormEvent, MouseEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { ZodFormattedError } from "zod";
import { IRegister } from "./types";
import { TRegisterFormData, registerSchema } from "../../../schema";
import {
  Divider,
  DividerText,
  FieldPair,
  Form,
  FormWrapper,
} from "../styled";
import { AUTH_VIEW } from "../types";

export const Register = ({ handleView }: IRegister): JSX.Element => {
  const [errors, setErrors] = useState<ZodFormattedError<TRegisterFormData> | undefined>(undefined);
  const [registerData, setRegisterData] = useState<TRegisterFormData>({
    firstname: "",
    lastname: "",
    country: { label: "", value: "" },
    startDate: new Date(),
    email: "",
    password: "",
    // role: "",
    // familyID: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = useCallback((event: ChangeEvent) => {
    const target = event.target as HTMLInputElement;
    setRegisterData((prev) => ({ ...prev, [target.name]: target.value }));
  }, []);

  const handleSubmit = useCallback((event: FormEvent): void => {
    event.preventDefault();
    setIsSubmitting(true);

    const validation = registerSchema.safeParse(registerData);

    if (validation.success === false) {
      setErrors(validation.error.format());
      setIsSubmitting(false);
      return;
    }

    setErrors(undefined);

    const newUser = {
      ...registerData,
      country: registerData.country.value,
      role: "Au Pair",
    };

    axios( {
      url: "/api/user/register",
      method: "POST",
      data: newUser,
    } )
      .then( () => {
        window.location.reload();
      })
      .catch( () => toast.error("Could not register user. Please try again later!"))
      .finally(() => setIsSubmitting(false));
  }, [registerData]);

  const handleGuest = useCallback((event: MouseEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    axios( {
      url: "/api/user/login",
      method: "POST",
      data: { email: "tester@mail.com", password: "testing123" },
    } )
      .then( () => {
        window.location.reload();
      })
      .catch( () => toast.error("Could not log in test user. Please try again later!"))
      .finally(() => setIsSubmitting(false));
  }, []);

  return (
    <FormWrapper>
      <Text as="h2" size="xl" weight="bold">Register</Text>
      <Form onSubmit={ handleSubmit }>
        <FieldPair>
          <Input
            error={errors?.firstname?._errors?.[0] && errors.firstname._errors[0]}
            fullWidth
            handleChange={handleInputChange}
            icon="user"
            label="First Name"
            name="firstname"
            placeholder="First Name"
            value={registerData.firstname}
          />
          <Input
            error={errors?.lastname?._errors?.[0] && errors.lastname._errors[0]}
            fullWidth
            handleChange={handleInputChange}
            icon="user"
            label="Last Name"
            name="lastname"
            placeholder="Last Name"
            value={registerData.lastname}
          />
        </FieldPair>
        <FieldPair>
          <DatePicker
            error={errors?.startDate?._errors?.[0] && errors.startDate._errors[0]}
            format="MM/dd/yyyy"
            fullWidth
            handleChange={(startDate: Date) => {
              setRegisterData((prev) => ({ ...prev, "startDate": startDate }));
            }}
            icon="calendar"
            label="Arrival Date"
            name="startDate"
            value={new Date(registerData.startDate)}
          />
          <Select
            error={errors?.country?.value?._errors?.[0] && errors.country.value._errors[0]}
            fullWidth
            handleChange={(option: TSelectOption) => {
              setRegisterData((prev) => ({ ...prev, "country": option }));
            }}
            icon="globe"
            label="Home Country"
            name="country"
            options={countrySelectOptions}
            placeholder="Country"
            value={registerData.country}
          />
        </FieldPair>
        <Input
          error={errors?.email?._errors?.[0] && errors.email._errors[0]}
          fullWidth
          handleChange={handleInputChange}
          icon="envelope"
          label="E-Mail"
          name="email"
          placeholder="E-Mail"
          value={registerData.email}
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
          value={registerData.password}
        />
        <Button loading={isSubmitting} type="submit" variant="primary">
          Register
        </Button>
        <Button handleClick={() => handleView(AUTH_VIEW.LOGIN)} variant="tertiary">
          Log In
        </Button>
        <Divider>
          <hr />
          <DividerText>OR</DividerText>
        </Divider>
        <Button loading={isSubmitting} handleClick={ handleGuest } variant="tertiary">
          Use Guest Account
        </Button>
      </Form>
    </FormWrapper>
  );
};
