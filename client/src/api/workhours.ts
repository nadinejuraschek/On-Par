import axios from "axios";
import dayjs from "dayjs";
import { TWorkhour } from "types";

export type TNewWorkhourEntry = {
  date: Date;
  hours: {
    duration: number;
    end: Date;
    start: Date;
  }[];
}

export async function getWorkhours({ endOfWeek, filter, startOfWeek } : { endOfWeek?: string; filter?: "today" | "weekly"; startOfWeek?: string }) {
  const baseUrl = "/api/user/:id/workhours";
  let url = "";

  if (filter === "weekly") {
    // add fallback start and end dates
    let startDate = startOfWeek;
    let endDate = endOfWeek;
    if (!startOfWeek && !endOfWeek) {
      startDate = dayjs().startOf("week").format("YYYY-MM-DD");
      endDate = dayjs().endOf("week").format("YYYY-MM-DD");
    }
    if (!startOfWeek) {
      startDate = dayjs(endOfWeek).startOf("week").format("YYYY-MM-DD");
    }
    if (!endOfWeek) {
      endDate = dayjs(startOfWeek).endOf("week").format("YYYY-MM-DD");
    }
    url = `${baseUrl}?filter=${filter || ""}/${startDate}/${endDate}`.trim().replace(/\s\s+/g, " ");
  } else {
    url = baseUrl.trim().replace(/\s\s+/g, " ");
  }

  return await axios.get<TWorkhour[]>(url).then((res) => res.data);
}

export async function createWorkhours(newHours: TNewWorkhourEntry) {
  return await axios.post("/api/workhours", newHours);
}

export async function editWorkhours(updatedHours: TWorkhour) {
  return await axios.put(`/api/workhours/${updatedHours._id}`, updatedHours);
}

export async function deleteWorkhours(workhoursid: string) {
  return await axios.delete(`/api/workhours/${workhoursid}`);
}
