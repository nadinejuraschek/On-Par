import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { TNote } from "types";

interface IUseFetchNotes {
  page?: number;
  searchTerm?: string;
}

export function useFetchNotes({ page = 0, searchTerm = undefined }: IUseFetchNotes) {
  const [data, setData] = useState<{ notes: TNote[], total: number }>(undefined);
  const [loading, setLoading] = useState(false);

  const url = `/api/user/:id/notes?page=${page}`;

  const getNotes = useCallback(async () => {
    setLoading(true);
    await axios( {
      url: searchTerm ? url + `?=${searchTerm}` : url,
      method: "GET",
    } ).then(res => setData(res.data))
      .catch(() => toast.error("Could not fetch notes. Please try again later!"))
      .finally(() => setLoading(false));
  }, [searchTerm, url]);

  useEffect(() => {
    getNotes();
  }, [getNotes]);

  return {
    data,
    loading,
    refetch: getNotes,
  };
}
