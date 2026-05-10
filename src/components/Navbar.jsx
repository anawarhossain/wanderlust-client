import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-between p-5">
        <ul className="flex gap-3">
          <li>
            <Link className="hover:text-cyan-500" href={"/"}>
              Home
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-500" href={"/destinations"}>
              Destinations
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-500" href={"/my-bookings"}>
              My Bookings
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-500" href={"/add-destination"}>
              Add Destination
            </Link>
          </li>
        </ul>

        <div>
          <Image
            src={"/assets/Wanderlast.png"}
            height={200}
            width={200}
            alt="Wanderlast"
            className="w-auto h-auto"
          />
        </div>
        <ul className="flex gap-3">
          <li>
            <Link className="hover:text-cyan-500" href={"/profile"}>
              Profile
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-500" href={"/login"}>
              Login
            </Link>
          </li>
          <li>
            <Link className="hover:text-cyan-500" href={"/signup"}>
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
