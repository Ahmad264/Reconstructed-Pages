import { NavLink } from "react-router-dom";
import { FaSyncAlt, FaCog, FaBell, FaUser } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full bg-transparent pt-6">
      <div className="max-w-7xl mx-auto flex items-center px-4">
        <div className="flex-shrink-0">
          <span className="bg-white text-blue-900 font-bold px-4 py-2 rounded-2xl text-lg shadow">
            TechLearn Solutions
          </span>
        </div>

        {/* pill navbar */}
        <div className="flex-1 flex justify-center">
          <nav className="flex bg-[#232946] bg-opacity-80 rounded-full px-2 py-1 shadow-lg gap-2">
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-200 hover:text-blue-400"
                }`
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-200 hover:text-blue-400"
                }`
              }
            >
              Progress
            </NavLink>
            <NavLink
              to="/exercises"
              className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-200 hover:text-blue-400"
                }`
              }
            >
              Exercises
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-6 py-2 rounded-full font-semibold transition ${
                  isActive
                    ? "bg-blue-600 text-white shadow"
                    : "text-gray-200 hover:text-blue-400"
                }`
              }
            >
              About
            </NavLink>
          </nav>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-2 ml-4">
          <button className="bg-[#232946] bg-opacity-80 rounded-full p-2 text-gray-300 hover:text-blue-400 transition" title="Sync">
            <FaSyncAlt />
          </button>
          <button className="bg-[#232946] bg-opacity-80 rounded-full px-4 py-2 text-gray-300 hover:text-blue-400 font-medium transition flex items-center gap-2" title="Setting">
            <FaCog className="mr-2" /> Setting
          </button>
          <button className="bg-[#232946] bg-opacity-80 rounded-full p-2 text-gray-300 hover:text-blue-400 transition" title="Notifications">
            <FaBell />
          </button>
          <button className="bg-[#232946] bg-opacity-80 rounded-full p-2 text-gray-300 hover:text-blue-400 transition" title="Profile">
            <FaUser />
          </button>
        </div>
      </div>
    </header>
  );
}