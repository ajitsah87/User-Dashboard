"use client";
import LoadingSpinner from "@/components/loading-spinner";
import { useUsers } from "@/hooks/userUser";
import { getUserPosts } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { use } from "react";
import {
  Mail,
  Phone,
  Globe,
  MapPin,
  Building2,
  Briefcase,
  FileText,
  Hash,
} from "lucide-react";

const PostCard = ({ post ,index}) => (
  <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden">
    <div className="p-6 space-y-4">
      <div className="flex items-start justify-between">
        <h3 className="text-xl font-semibold text-gray-900 flex-1 flex items-center gap-2 capitalize">
          <FileText size={20} className="text-gray-500" />
          {post.title}
        </h3>
        <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full text-gray-600 flex items-center gap-1">
          <Hash size={12} />
          Post {index}
        </span>
      </div>
      <p className="text-gray-600 leading-relaxed capitalize">{post.body}</p>
    </div>
  </div>
);

const UserCard = ({ user }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6">
      <div className="flex items-center gap-4">
        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
          <span className="text-blue-600 font-semibold text-xl">
            {user.name.charAt(0)}
          </span>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
          <p className="text-gray-500">@{user.username}</p>
        </div>
      </div>
    </div>

    <div className="p-6 space-y-4">
      <div className="grid gap-2">
        <a
          href={`mailto:${user.email}`}
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <Mail size={16} className="text-gray-500" />
          {user.email}
        </a>
        <p className="text-gray-600 flex items-center gap-2">
          <Phone size={16} className="text-gray-500" />
          {user.phone}
        </p>
        <a
          href={`https://${user.website}`}
          className="text-blue-600 hover:underline flex items-center gap-2"
        >
          <Globe size={16} className="text-gray-500" />
          {user.website}
        </a>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-start gap-2">
          <MapPin size={16} className="text-gray-500 mt-1" />
          <div>
            <p className="text-gray-600">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-600">
              {user.address.city} {user.address.zipcode}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t pt-4">
        <p className="font-semibold text-gray-900 flex items-center gap-2">
          <Building2 size={16} className="text-gray-500" />
          {user.company.name}
        </p>
        <p className="text-gray-600 mt-1 flex items-center gap-2 ml-6">
          <Briefcase size={14} className="text-gray-500" />
          {user.company.catchPhrase}
        </p>
        <p className="text-gray-500 mt-1 ml-6">{user.company.bs}</p>
      </div>
    </div>
  </div>
);

const UserPage = ({ params }) => {
  const { id } = use(params);
  const {
    data: users,
    isLoading: isLoadingUsers,
    error: usersError,
  } = useUsers();

  const currentUser = users && users.find((user) => user.id === Number(id));

  const { data: posts, isLoading } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => (id ? getUserPosts(id) : Promise.resolve([])),
    enabled: !!id,
  });

  if (isLoading || isLoadingUsers) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <LoadingSpinner />
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-xl text-gray-600">No user found</div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">
      <UserCard user={currentUser} />

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
          <FileText size={24} className="text-gray-500" />
          Posts
        </h2>
        <div className="grid gap-6">
          {posts && posts.length > 0 ? (
            posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index + 1} />
            ))
          ) : (
            <div className="text-center py-8 text-gray-500">No posts found</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserPage;
