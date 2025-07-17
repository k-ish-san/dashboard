import React from "react";
import { LogOut } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate()

  const getPageTitle = (path: string) => {
    switch (path) {
      case "/filings":
        return "Filings";
      case "/customers":
        return "Customers";
      case "/help":
        return "Help";
      default:
        return "Dashboard";
    }
  };

  const pageTitle = getPageTitle(location.pathname);

  return (
    <header className="sticky flex justify-between items-center px-6 py-4 border-b  bg-white z-50">
      <div>
        <h1 className="text-2xl font-bold lg:text-3xl lg:font-extrabold text-gray-800">
          {pageTitle}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-600 text-xl font-medium lg:font-bold">John Doe</span>
        <img
          src="https://i.pravatar.cc/40"
          alt="User avatar"
          className="rounded-full w-10 h-10 hidden md:block"
        />
        <button
          className="inline-flex items-center gap-2 bg-black hover:bg-red-600 text-white px-4 py-2 rounded text-sm transition"
          aria-label="Logout"
          onClick={() => {navigate('/login')}}
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;

