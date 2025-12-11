import axios from "axios";

export async function editUser({ id, updatedData }: {
  id: string;
  updatedData: {
    birthday?: Date;
    firstname: string;
    lastname: string;
    permissions: {
      shareBirthday: boolean;
      shareEmail: boolean;
      shareLastName: boolean;
    };
    profileImage: string | null | undefined;
  },
}) {
  const response = await axios.put(`/api/user/${id}`, updatedData);
  return response.data;
}