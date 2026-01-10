import { FiSearch, FiBell } from "react-icons/fi";

export default function Header() {
  return (
    <header className="h-16 bg-white border-b flex items-center justify-between px-6">
      {/* Left */}
      <div>
        <h1 className="text-lg font-semibold text-gray-700">
          Good Morning 👋
        </h1>
        <p className="text-xs text-gray-400">
          Here’s what’s happening with your grocery store today
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="relative hidden md:block">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-9 pr-3 py-2 rounded-lg border text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
          />
        </div>

        {/* Notification */}
        <button className="p-2 rounded-lg hover:bg-gray-100">
          <FiBell className="text-gray-500" size={18} />
        </button>

        {/* Profile */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-green-100 flex items-center justify-center font-semibold text-green-700">
            A
          </div>
          <div className="hidden md:block text-sm">
            <p className="font-medium text-gray-700">Abu</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
      </div>
    </header>
  );
}
