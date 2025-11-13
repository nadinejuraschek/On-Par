import axios from "axios";
import { useCallback } from "react";
import { toast } from "react-toastify";
import { useFetchWorkhours } from "./useFetchWorkhours";

export type TNewWorkhourEntry = {
  date: Date;
  hours: {
    duration: number;
    end: Date;
    start: Date;
  }[];
}

export function useCreateWorkhours() {
  const { refetch } = useFetchWorkhours();

  const createWorkhours = useCallback(async (newWorkhours: TNewWorkhourEntry) => {
    await axios( {
      url: "/api/workhours",
      method: "POST",
      data: newWorkhours,
    } )
      .then( () => {
        toast.success("Your workhours have been added successfully!");
        refetch();
      })
      .catch( () => toast.error("The workhours could not be added. Please try again later!"));
  }, [refetch]);

  return {
    createWorkhours,
  };
}
