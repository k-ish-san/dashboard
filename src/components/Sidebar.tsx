import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  File,
  Users,
  MessageCircleQuestionMark,
} from "lucide-react";
import logo from "../assets/logo.svg";

interface LinkItem {
  name: string;
  path: string;
  icon: React.ReactNode;
}

const links: LinkItem[] = [
  { icon: <LayoutDashboard className="w-5 h-5" />, name: "Dashboard", path: "/dashboard" },
  { icon: <File className="w-5 h-5" />, name: "Filings", path: "/filings" },
  { icon: <Users className="w-5 h-5" />, name: "Customers", path: "/customers" },
  { icon: <MessageCircleQuestionMark className="w-5 h-5" />, name: "Help", path: "/help" },
];

const Sidebar: React.FC = () => (
  <aside className="fixed top-0 left-0 w-64 h-screen bg-gray-900 text-white p-4 hidden md:block z-50">
    <h2 className="text-2xl font-bold mb-6 inline-flex items-center">
      <img src={logo} alt="logo" className="w-6 h-6 mr-2" />
      Customs Portal
    </h2>
    <nav className="mt-6 space-y-3">
      {links.map((link) => (
        <NavLink
          key={link.name}
          to={link.path}
          className={({ isActive }) =>
            `block px-4 py-2 rounded hover:text-green-500 border-2 border-[#5D6B68]/10 border-l-4 hover:bg-gradient-to-r from-green-900 from-5% via-green-700/50 via-30% to-green-400/50 ${
              isActive
                ? "border-l-[#32CD32] bg-gradient-to-r from-green-900 from-5% via-green-700/50 via-30% to-green-400/50"
                : ""
            }`
          }
        >
          <div className="flex flex-row gap-1.5 items-center ">
            <div className="text-green-500">{link.icon}</div>
            <div className="text-md tracking-wider">{link.name}</div>
          </div>
        </NavLink>
      ))}
    </nav>
  </aside>
);

export default Sidebar;
