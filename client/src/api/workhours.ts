import axios from "axios";
import { TWorkhour } from "types";

export type TNewWorkhourEntry = {
  date: Date;
  hours: {
    duration: number;
    end: Date;
    start: Date;
  }[];
}

export async function getWorkhours() {
  return await axios.get<TWorkhour[]>("/api/user/:id/workhours").then((res) => res.data);
}

export async function createWorkhours(newHours: TNewWorkhourEntry) {
  return await axios.post("/api/workhours", newHours);
}

export async function editWorkhours(updatedHours: TWorkhour) {
  return await axios.put(`/api/workhours/${updatedHours._id}`, updatedHours);
}

export async function deleteWorkhours(workhoursid: string) {
  return await axios.put(`/api/workhours/${workhoursid}`);
}
