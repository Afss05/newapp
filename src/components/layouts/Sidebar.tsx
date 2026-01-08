"use client";
import { useState } from "react";
import { FiMenu, FiHome, FiUsers, FiSettings } from "react-icons/fi";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  { name: "Users", icon: FiUsers, path: "/users" },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "bg-gradient-to-b from-gray-900 to-gray-800 text-gray-100 h-screen transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="flex items-center justify-between p-4 border-b border-gray-700">
        {!collapsed && <span className="font-bold text-xl">Admin Panel</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu size={22} />
        </button>
      </div>

      <nav className="p-3 space-y-2">
        {menu.map((item) => {
          const active = pathname === item.path;
          return (
            <Link
              key={item.name}
              href={item.path}
              className={clsx(
                "flex items-center gap-3 p-3 rounded-lg transition-all",
                active
                  ? "bg-blue-600 text-white shadow"
                  : "hover:bg-gray-700"
              )}
            >
              <item.icon size={20} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
