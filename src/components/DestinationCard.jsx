"use client";
import React from "react";
import Image from "next/image";
import { MapPin, Calendar, ArrowUpRight, Star } from "lucide-react";
import Link from "next/link";

const DestinationCard = ({
  _id,
  country,
  destinationName,
  price,
  duration,
  rating,
  imageUrl,
}) => {
  console.log(_id);

  return (
    <div>
      {/* Image Container */}
      <div className="relative h-64 md:h-80  overflow-hidden mb-5 rounded-md">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          sizes="auto"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-sm flex items-center gap-1 shadow-sm">
          <span className="text-xs font-bold text-gray-900">{rating}</span>
          <Star size={12} className="fill-black text-black" />
        </div>
      </div>

      {/* Details */}
      <div className="space-y-3 pr-4">
        <div className="flex items-center gap-1 text-gray-400 text-[10px] md:text-xs">
          <MapPin size={14} />
          <span className="uppercase tracking-[0.15em] font-semibold">
            {country}
          </span>
        </div>

        <div className="flex justify-between items-start gap-2">
          <h3 className="text-xl md:text-2xl font-light text-gray-900 leading-tight">
            {destinationName}
          </h3>
          <div className="text-right">
            <span className="text-xl md:text-2xl font-semibold text-gray-900">
              ${price}
            </span>
            <span className="text-[10px] md:text-xs text-gray-400 block">
              /Person
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <Calendar size={14} />
          <span className="font-light">{duration}</span>
        </div>

        <Link href={`/destinations/${_id}`}>
          <button className="flex items-center gap-1 text-cyan-500 font-bold text-xs mt-4 uppercase group/btn transition-colors hover:text-cyan-600">
            Book Now
            <ArrowUpRight
              size={14}
              className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
            />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
