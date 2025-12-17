import { Button } from "components";
import { TUser } from "contexts/UserContext/types";
import { ChangeEvent, useCallback, useState } from "react";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AvatarUpload } from "./AvatarUpload";
import { Form } from "./Form";
import { Permissions } from "./Permissions";
import { FooterActions, StyledContent } from "./styled";
import { editUser as editUserFn } from "api";

export const UserInfo = ({ user }: { user: TUser }): JSX.Element => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState<TUser>(user);

  const { isPending, mutate: editUser } = useMutation({
    mutationFn: () => editUserFn({
      id: user._id,
      updatedData: {
        birthday: formData.birthday,
        firstname: formData.firstname,
        lastname: formData.lastname,
        permissions: formData.permissions,
        profileImage: formData.profileImage,
      },
    }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Profile updated successfully!");
    },
    onError: () => {
      toast.error("There was an error when updating your profile. Please try again later.");
    },
  });

  const handleInputChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).value;
    setFormData((prev) => ({ ...prev, [field]: value }));
  }, []);

  const handleAvatarChange = useCallback((imgSource: string) => {
    setFormData((prev) => ({ ...prev, profileImage: imgSource }));
  }, []);

  const handleCheckboxChange = useCallback((e: ChangeEvent, field: string) => {
    const value = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({ ...prev, permissions: { ...prev.permissions, [field]: value } }));
  }, []);

  return (
    <>
      <StyledContent>
        <AvatarUpload
          handleAvatarChange={handleAvatarChange}
          profileImageSrc={formData.profileImage ?? ""}
        />
        <Permissions handleCheckboxChange={handleCheckboxChange} permissions={formData.permissions} />
        <Form handleInputChange={handleInputChange} setFormData={setFormData} formData={formData} />
      </StyledContent>
      <FooterActions>
        <Button handleClick={editUser} loading={isPending} variant="primary">Save Changes</Button>
      </FooterActions>
    </>
  );
};