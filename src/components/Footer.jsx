import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import {
  IconBrandInstagram,
  IconBrandTwitter,
  IconBrandFacebook,
  IconBrandTiktok,
  IconBrandYoutube,
} from "@tabler/icons-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 flex items-center flex-col justify-center py-8">
      <div>
        <img
          src={Logo}
          alt="Keerichy logo"
          className="h-28 w-48 object-cover"
        />
      </div>
      <div className="flex items-center justify-start space-x-5">
        <div className="bg-gray-700 flex items-center justify-center rounded-full p-1 w-8 h-8">
          <Link to="https://www.instagram.com/keerichy" className="block">
            <IconBrandInstagram
              size={20}
              color="white"
              stroke={1.3}
              strokeLinejoin="miter"
            />
          </Link>
        </div>
        <div className="bg-gray-700 flex items-center justify-center rounded-full p-1 w-8 h-8">
          <Link to="https://twitter.com/keerichy">
            <IconBrandTwitter
              size={20}
              color="white"
              stroke={1.3}
              strokeLinejoin="miter"
            />
          </Link>
        </div>
        <div className="bg-gray-700 flex items-center justify-center rounded-full p-1 w-8 h-8">
          <Link to="https://www.facebook.com/kee.gardner.71">
            <IconBrandFacebook
              size={20}
              color="white"
              stroke={1.3}
              strokeLinejoin="miter"
            />
          </Link>
        </div>
        <div className="bg-gray-700 flex items-center justify-center rounded-full p-1 w-8 h-8">
          <Link to="https://www.tiktok.com/@keerichy">
            <IconBrandTiktok
              size={20}
              color="white"
              stroke={1.3}
              strokeLinejoin="miter"
            />
          </Link>
        </div>
        <div className="bg-gray-700 flex items-center justify-center rounded-full p-1 w-8 h-8">
          <Link to="https://www.youtube.com/channel/UC4n2-sny0FmFXhYhbwb-eag">
            <IconBrandYoutube
              size={20}
              color="white"
              stroke={1.3}
              strokeLinejoin="miter"
            />
          </Link>
        </div>
      </div>
      <p className="text-gray-400 text-base pt-5 text-center">
        Copyright © 2022 Live Events Booking. All Rights Reserved.{" "}
      </p>
    </footer>
  );
};
