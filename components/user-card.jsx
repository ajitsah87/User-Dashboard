import React from 'react';
import Link from "next/link";
import { Mail,Phone,Globe,MapPin,Building2,Briefcase,Navigation} from 'lucide-react';
const formatAddress = (address) => {
  return `${address.street}, ${address.suite}, ${address.city} ${address.zipcode}`;
};

const formatCoordinates = (geo) => {
  return `${geo.lat}, ${geo.lng}`;
};

function UserCard({ user }) {
  return (
    <Link href={`/user/${user.id}`} className="block bg-slate-300 rounded-xl ">
      <div className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-200">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-orange-50 to-rose-50 p-4 border-b">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center">
                <span className="text-orange-600 font-semibold text-lg">
                  {user.name.charAt(0)}
                </span>
              </div>
              <div>
                <h3 className="font-semibold text-lg text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">@{user.username}</p>
              </div>
            </div>
            <span className="text-xs font-medium bg-gray-100 px-2 py-1 rounded-full">
              ID: {user.id}
            </span>
          </div>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <Link
              href={`mailto:${user.email}`}
              target="_blank"
              className="text-sm text-blue-600 hover:underline flex items-center gap-2"
            >
              <Mail size={16} />
              {user.email}
            </Link>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <Phone size={16} />
              {user.phone}
            </p>
            <Link
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-600 hover:underline flex items-center gap-2"
            >
              <Globe size={16} />
              {user.website}
            </Link>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default UserCard;