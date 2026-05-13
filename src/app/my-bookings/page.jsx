import BookingCard from "@/components/BookingCard";
import React from "react";

const BookingsPage = () => {
  return (
    <div className="w-[90%] mx-auto mt-9 mb-9 space-y-5">
      <div>
        <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-4 tracking-tight">
          My Bookings
        </h2>
        <p className="text-gray-500 text-base md:text-lg font-light">
          Manage and view your upcoming travel plans
        </p>
      </div>
      <div className="border p-2 rounded-lg">
        <BookingCard />
        {[...Array(5)].map((_, index) => (
          <div key={index} className="mb-4 mt-4">
            <BookingCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingsPage;
