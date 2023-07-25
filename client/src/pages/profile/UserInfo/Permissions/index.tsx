import { Checkbox, Text } from "components";
import { ChangeEvent } from "react";
import { Container } from "./styled";
import { IPermissions } from "./types";

export const Permissions = ({ handleCheckboxChange, permissions }: IPermissions): JSX.Element => {
  return (
    <Container>
      <Text size="lg" weight="bold">Sharing Permissions</Text>
      <Checkbox
        handleChange={(e: ChangeEvent) => handleCheckboxChange(e, "shareLastName")}
        label="Others can see my last name"
        name="shareLastName"
        value={permissions.shareLastName}
      />
      <Checkbox
        handleChange={(e: ChangeEvent) => handleCheckboxChange(e, "shareEmail")}
        label="Others can see my e-mail"
        name="shareEmail"
        value={permissions.shareEmail}
      />
      <Checkbox
        handleChange={(e: ChangeEvent) => handleCheckboxChange(e, "shareBirthday")}
        label="Others can see my birthday"
        name="shareBirthday"
        value={permissions.shareBirthday}
      />
    </Container>
  );
}