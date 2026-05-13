import React from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Edit3,
  Trash2,
  MapPin,
  Star,
  Calendar,
  Check,
  ArrowRight,
} from "lucide-react";
import { Button, Card, CardContent, Input } from "@heroui/react";

const DestinationDetails = () => {
  const highlights = [
    "Luxury beachfront accommodation",
    "Visit Uluwatu Temple at sunset",
    "Traditional Balinese spa treatment",
    "Private beach dinner experience",
    "Sunrise trek to Mount Batur",
  ];

  return (
    <div className="min-h-screen bg-white pb-20">
      {/* Top Navigation Bar */}
      <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
        <button className="flex items-center gap-2 text-gray-500 hover:text-black transition-colors">
          <ArrowLeft size={18} />
          <span className="text-sm font-medium">Back to Destinations</span>
        </button>

        <div className="flex gap-3">
          <Button
            variant="bordered"
            startContent={<Edit3 size={16} />}
            className="rounded-sm border-gray-300 font-medium px-6"
          >
            Edit
          </Button>
          <Button
            variant="bordered"
            startContent={<Trash2 size={16} />}
            className="rounded-sm border-red-200 text-red-500 hover:bg-red-50 font-medium px-6"
          >
            Cancel
          </Button>
        </div>
      </div>

      {/* Hero Image Section (Referencing image_2051aa.jpg) */}
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <div className="relative h-100 w-full overflow-hidden rounded-sm">
          <Image
            src="/assets/destinations/image1.png" // image_2051aa.jpg এর ভিউ
            alt="Bali Paradise"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Information */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <div className="flex items-center gap-1 text-gray-400">
              <MapPin size={16} />
              <span className="text-sm">Indonesia</span>
            </div>
            <h1 className="text-5xl font-light text-gray-900">Bali Paradise</h1>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-1">
                <Star size={18} className="fill-green-600 text-green-600" />
                <span className="font-bold">4.9</span>
                <span className="text-gray-400 text-sm">(234 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={18} />
                <span className="font-medium">7 Days / 6 Nights</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-medium text-gray-900">Overview</h3>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              Discover the magic of Bali with pristine beaches, ancient temples,
              and vibrant culture. Experience luxury resorts, tropical
              landscapes, and unforgettable sunsets.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-medium text-gray-900">Highlights</h3>
            <p className="text-gray-500 leading-relaxed max-w-2xl">
              Discover the magic of Bali with pristine beaches, ancient temples,
              and vibrant culture. Experience luxury resorts, tropical
              landscapes, and unforgettable sunsets.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={18} className="text-green-600" />
                  <span className="text-gray-600 text-sm font-light">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Booking Card */}
        <div className="relative">
          <Card className="sticky top-10 border border-gray-100 shadow-xl shadow-gray-100 p-4 rounded-md">
            <CardContent className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Starting from</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-cyan-500">
                    $1299
                  </span>
                  <span className="text-gray-400 text-sm">per person</span>
                </div>
              </div>

              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="05/15/2026"
                  className="bg-gray-50"
                  variant="flat"
                  size="lg"
                  radius="sm"
                />
                <Button
                  className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-medium py-7 text-md rounded-sm"
                  endContent={<ArrowRight size={18} />}
                >
                  Book Now
                </Button>
              </div>

              <div className="space-y-3 pt-2">
                {[
                  "Free cancellation up to 7 days",
                  "Travel insurance included",
                  "24/7 customer support",
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-[13px] text-gray-500"
                  >
                    <Check size={14} className="text-green-600" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetails;
