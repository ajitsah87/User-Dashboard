'use client'

import { getUsers } from "@/utils/api";
import UserCard from "@/components/user-card";
import LoadingSpinner from "@/components/loading-spinner";
import { useQuery } from "@tanstack/react-query";

export default function DashboardPage() {
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: getUsers
  });

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center space-y-2">
          <h2 className="text-lg font-semibold">Error Loading Users</h2>
          <p className="text-sm text-muted-foreground">Please try again later</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="container mx-auto px-20">
        <h1 className="text-2xl font-bold mb-6 text-center">Users Dashboard</h1>
        <div className="text-center">
          <h2 className="text-lg font-semibold mb-4">Users</h2>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="space-y-4">
              {users?.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
