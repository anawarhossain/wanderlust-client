import React from "react";
import { Card, Button, Chip, CardContent } from "@heroui/react"; // HeroUI components
import { Calendar, Hash, Eye, Trash2, CheckCircle2, CheckCircle2Icon } from "lucide-react";
import Image from "next/image";
import { GiConfirmed } from "react-icons/gi";

const BookingCard = () => {
  return (
    <Card className="max-w-4xl border-none shadow-sm bg-white overflow-hidden">
      <CardContent className="p-0 flex flex-col md:flex-row items-stretch">
        {/* Left: Image Section */}
        <div className="relative w-full md:w-1/3 min-h-50">
          <Image
            src="/assets/destinations/image1.png"
            alt="Bali Paradise"
            fill
            sizes="(max-width: 768px) 100vw, 400px"
            loading="eager"
            className="object-cover rounded-lg"
          />
        </div>

        {/* Right: Content Section */}
        <div className="flex-1 p-6 flex flex-col justify-between relative">
          <div className="space-y-4">
            {/* Status Chip */}
            <Chip
              variant="flat"
              color="success"
              className="bg-green-50 text-green-600 border-none px-2 h-7 text-xs font-medium"
            >
              <GiConfirmed size={14} />
              Confirmed
            </Chip>

            {/* Title */}
            <h2 className="text-3xl font-semibold text-gray-900 leading-tight">
              Bali Paradise
            </h2>

            {/* Info Items */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Calendar size={16} className="text-gray-400" />
                <span>Departure: May 15, 2026</span>
              </div>
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <Hash size={16} className="text-gray-400" />
                <span>Booking ID: b1</span>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Price and Actions */}
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-4">
            <span className="text-3xl font-bold text-cyan-500">$1299</span>

            <div className="flex items-center gap-3 w-full md:w-auto">
              {/* Cancel Button */}
              <Button
                variant="outline"
                className="flex-1 md:flex-none border-red-200 text-red-500 hover:bg-red-50 px-6 py-5 rounded-sm flex items-center gap-2 font-medium transition-all"
              >
                <Trash2 size={18} />
                Cancel
              </Button>

              {/* View Button */}
              <Button className="flex-1 md:flex-none bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-5 rounded-sm flex items-center gap-2 font-medium transition-all shadow-none">
                <Eye size={18} />
                View
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BookingCard;
