import React from "react";
import { Avatar, Button, Card, CardContent, Input } from "@heroui/react";
import {
  Camera,
  MapPin,
  Edit3,
  Plane,
  Globe,
  TrendingUp,
  DollarSign,
} from "lucide-react";

const ProfilePage = () => {
  const stats = [
    {
      label: "Total Bookings",
      value: "12",
      icon: <Plane className="text-cyan-500" />,
      bgColor: "bg-cyan-50",
    },
    {
      label: "Countries Visited",
      value: "18",
      icon: <Globe className="text-green-500" />,
      bgColor: "bg-green-50",
    },
    {
      label: "Upcoming Trips",
      value: "2",
      icon: <TrendingUp className="text-orange-500" />,
      bgColor: "bg-orange-50",
    },
    {
      label: "Total Spent",
      value: "$15,750",
      icon: <DollarSign className="text-purple-500" />,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 bg-white min-h-screen">
      {/* Header Section */}
      <div className="mb-10">
        <h1 className="text-5xl font-light text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-500 text-lg">
          Manage your account settings and travel preferences
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <Card className="lg:col-span-4 border border-gray-100 shadow-sm rounded-sm p-6">
          <CardContent className="flex flex-col items-center p-0">
            {/* Avatar with Camera Icon */}
            <div className="relative mb-6">
              <Avatar className="w-32 h-32 rounded-full">
                <Avatar.Image
                  alt="John Doe"
                  src="/assets/person1.png"
                />
              </Avatar>

              <div className="absolute bottom-0 right-0 bg-cyan-500 p-2 rounded-full border-4 border-white text-white cursor-pointer">
                <Camera size={16} />
              </div>
            </div>

            {/* Name & Location */}
            <h2 className="text-2xl font-semibold text-gray-900 mb-1">
              Sarah Mitchell
            </h2>
            <div className="flex items-center gap-1 text-gray-400 mb-8">
              <MapPin size={16} />
              <span className="text-sm">San Francisco, CA</span>
            </div>

            {/* User Details */}
            <div className="w-full space-y-4 border-t border-gray-100 pt-6 mb-8">
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Member since</span>
                <span className="font-bold text-gray-900">Mar 2024</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-400">Nationality</span>
                <span className="font-bold text-gray-900">United States</span>
              </div>
            </div>

            {/* Edit Button */}
            <Button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white rounded-sm h-12 font-medium flex items-center gap-2">
              <Edit3 size={18} />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Right Column: Travel Statistics */}
        <div className="lg:col-span-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 uppercase tracking-tight">
            Travel Statistics
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="border border-gray-100 shadow-sm rounded-sm"
              >
                <CardContent className="flex flex-row justify-between items-center p-6">
                  <div className="space-y-2">
                    <p className="text-gray-400 text-sm font-light">
                      {stat.label}
                    </p>
                    <p className="text-3xl font-semibold text-gray-900">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`${stat.bgColor} p-4 rounded-full`}>
                    {React.cloneElement(stat.icon, { size: 24 })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
