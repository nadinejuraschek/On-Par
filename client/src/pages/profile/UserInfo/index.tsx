import axios from "axios";
import { Button } from "components";
import { TUser } from "contexts/UserContext/types";
import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { AvatarUpload } from "./AvatarUpload";
import { Form } from "./Form";
import { Permissions } from "./Permissions";
import { FooterActions, StyledContent } from "./styled";

export const UserInfo = ({ user }: { user: TUser }): JSX.Element => {
  const [updating, setUpdating] = useState(false);

  const [formData, setFormData] = useState<TUser>(user);

  const handleEdit = useCallback(() => {
    setUpdating(true);

    axios.put( "/api/user/" + user._id, {
      birthday: formData.birthday,
      firstname: formData.firstname,
      lastname: formData.lastname,
      permissions: {
        shareBirthday: formData.permissions.shareBirthday,
        shareEmail: formData.permissions.shareEmail,
        shareLastName: formData.permissions.shareLastName,
      },
    } ).then( () => {
      toast.success("Profile updated successfully!");
    } ).catch( () => {
      toast.error("There was an error when updating your profile. Please try again later.");
    } ).finally( () => setUpdating( false ));
  }, [user, formData]);

  const handleInputChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleCheckboxChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, permissions: { ...prev.permissions, [field]: value } }));
  }, []);

  return (
    <>
      <StyledContent>
        <AvatarUpload />
        <Permissions handleCheckboxChange={handleCheckboxChange} permissions={formData.permissions} />
        <Form handleInputChange={handleInputChange} setFormData={setFormData} formData={formData} />
      </StyledContent>
      <FooterActions>
        <Button handleClick={handleEdit} loading={updating} variant="primary">Save Changes</Button>
      </FooterActions>
    </>
  );
};