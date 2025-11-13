import axios from "axios";
import { TNote } from "types";

export async function getNotes() {
  // return await axios.get<TNote[]>(`/api/user/:id/notes?page=${page}`).then((res) => res.data);
  return await axios.get<{ notes: TNote[], total: number }>("/api/user/:id/notes").then((res) => res.data);
}

export async function createNote(newNote: TNote) {
  return await axios.post("/api/notes", newNote);
}

export async function editNote(updatedNote: TNote) {
  return await axios.put(`/api/notes/${updatedNote._id}`, updatedNote);
}

export async function deleteNote(noteid: string) {
  return await axios.delete(`/api/notes/${noteid}`);
}
