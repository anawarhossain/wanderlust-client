
import React from "react";

import { getAllDestinations } from "@/lib/data";
import DestinationCard from "./DestinationCard";

const FeaturedDestinations = async () => {
  

  const allDestinations = await getAllDestinations()

  return (
    <div className="grid grid-cols-3 gap-3 ">
      {allDestinations.slice(0, 3).map((destination, index) => (
        <div key={index} className="border p-5 shadow-2xl rounded-lg">
          <DestinationCard
            {...destination}
          />
        </div>
      ))}
    </div>
  );
};

export default FeaturedDestinations;
