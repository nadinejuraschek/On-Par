import axios from "axios";
import { TRegisterUser } from "pages/auth/Register/types";
import { TLoginFormData } from "schema";

export async function loginUser(credentials : TLoginFormData) {
  const response = await axios.post("/api/user/login", credentials);
  return response.data;
}

export async function registerUser(credentials: TRegisterUser) {
  const response = await axios.post("/api/user/register", credentials);
  return response.data;
}

export async function logoutUser() {
  const response = await axios.post("/api/user/signout");
  return response.data;
}

export async function getUserInfo() {
  const response = await axios.get("/api/user");
  return response.data;
}

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
