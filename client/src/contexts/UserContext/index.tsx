import { useQuery } from "@tanstack/react-query";
import { createContext, ReactNode } from "react";
import { getUserInfo as getUserInfoFn } from "api";
import { LoadingSpinner } from "components";
import { useNavigate } from "react-router-dom";


const UserContext = createContext(null);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const { data: user, isError, isPending } = useQuery({
    queryKey: ["user"],
    queryFn: getUserInfoFn,
    staleTime: Infinity,
  });

  if (isPending) {
    return (
      <main>
        <LoadingSpinner />
      </main>
    );
  }

  if (isError) {
    navigate("/");
    return;
  }

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
