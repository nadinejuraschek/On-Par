import { Button, DatePicker, Input, Text } from "components";
import * as dayjs from "dayjs";
import { ChangeEvent } from "react";
import { ExtensionInfo, ExtensionInput, StyledForm } from "./styled";
import { IForm } from "./types";

export const Form = ({ formData, handleInputChange, setFormData }: IForm): JSX.Element => {
  return (
    <StyledForm>
      <Input
        disabled
        fullWidth
        handleChange={(e: ChangeEvent) => handleInputChange(e, "firstname")}
        label="First Name"
        name="firstname"
        value={formData.firstname}
      />
      <Input
        disabled
        fullWidth
        handleChange={(e: ChangeEvent) => handleInputChange(e, "lastname")}
        label="Last Name"
        name="lastname"
        value={formData.lastname}
      />
      <Input
        disabled
        fullWidth
        handleChange={(e: ChangeEvent) => handleInputChange(e, "email")}
        label="E-Mail"
        name="email"
        type="email"
        value={formData.email}
      />
      <DatePicker
        format="MM/dd/yyyy"
        handleChange={(date: Date) => setFormData((prev) => ({ ...prev, birthday: date }))}
        label="Birthday"
        name="birthday"
        value={formData.birthday}
      />
      <ExtensionInput
        disabled
        fullWidth
        handleChange={() => {}}
        label="Arrival Date"
        name="startDate"
        value={dayjs(formData.startDate).format("MMM DD, YYYY")}
      />
      <ExtensionInput
        disabled
        fullWidth
        handleChange={() => {}}
        label="End Date"
        name="endDate"
        value={dayjs(formData.endDate).format("MMM DD, YYYY")}
      />
      <ExtensionInfo>
        <Text size="md">Thinking of extending your au pair experience?</Text>
        <Button link="/resources" variant="secondary">Read Extension Requirements</Button>
      </ExtensionInfo>
    </StyledForm>
  );
}