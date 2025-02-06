import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/utils/api";
import { queryKeys } from "@/utils/queryKey";
export function useUsers() {
  return useQuery({
    queryKey: queryKeys.users,
    queryFn: getUsers,
   
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
}