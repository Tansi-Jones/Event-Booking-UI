import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/logo.png";

const navLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Events",
    link: "/events",
  },
  {
    title: "Gallery",
    link: "/gallery",
  },
];

export const Navbar = () => {
  const location = useLocation();
  return (
    <>
      <nav className="flex items-center justify-between">
        <div>
          <h1>Live Event Booking</h1>
        </div>
        <div className="space-x-8 text-lg hidden md:block">
          {navLinks.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className={
                location.pathname === item.link
                  ? "text-black font-bold"
                  : "font-medium text-slate-600"
              }
            >
              {item.title}
            </Link>
          ))}
          <a href="mailto:" className="font-medium text-slate-600">
            Contact us
          </a>
        </div>
        <div className="hidden md:block">
          <button className="btn btn-gold">Reserve now</button>
        </div>
      </nav>

      {/* Mobile navbar */}
      <div></div>
    </>
  );
};
