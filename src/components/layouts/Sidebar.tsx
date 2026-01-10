"use client";
import { useState } from "react";
import {
  FiMenu,
  FiHome,
  FiUsers,
  FiSettings,
  FiChevronDown,
  FiFileText,
  FiCheckCircle,
  FiMap,
  FiDollarSign,
  FiToggleRight,
  FiFolder,
  FiCreditCard,
  FiMessageSquare,
} from "react-icons/fi";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", icon: FiHome, path: "/dashboard" },
  {
    name: "Vendor",
    icon: FiUsers,
    children: [
      { name: "Vendor Master", path: "/vendor/master", icon: FiFileText },
      { name: "Approval Workflow", path: "/vendor/approval", icon: FiCheckCircle },
      { name: "Vendor Products Mapping", path: "/vendor/products", icon: FiMap },
      { name: "Vendor Pricing & MOQ", path: "/vendor/pricing", icon: FiDollarSign },
      { name: "Vendor Status", path: "/vendor/status", icon: FiToggleRight },
      { name: "Vendor Documents", path: "/vendor/documents", icon: FiFolder },
      { name: "Vendor Payout Settings", path: "/vendor/payout", icon: FiCreditCard },
      { name: "Vendor Communication Logs", path: "/vendor/logs", icon: FiMessageSquare },
    ],
  },
  { name: "Settings", icon: FiSettings, path: "/settings" },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [openVendor, setOpenVendor] = useState(true);
  const pathname = usePathname();

  return (
    <div
      className={clsx(
        "bg-white border-r border-gray-200 h-screen transition-all duration-300",
        collapsed ? "w-20" : "w-64"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-5 h-16 border-b">
        {!collapsed && (
          <span className="font-bold text-lg text-green-600">
            GroceryBoard
          </span>
        )}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu className="text-gray-500" size={20} />
        </button>
      </div>

      {/* Menu */}
      <nav className="px-4 py-6 space-y-2 text-sm">
        {menu.map((item) => {
          if (item.children) {
            return (
              <div key={item.name}>
                <button
                  onClick={() => setOpenVendor(!openVendor)}
                  className="flex items-center justify-between w-full px-3 py-2 rounded-lg text-gray-600 hover:bg-green-50"
                >
                  <div className="flex items-center gap-3">
                    <item.icon size={18} />
                    {!collapsed && <span>{item.name}</span>}
                  </div>
                  {!collapsed && (
                    <FiChevronDown
                      className={clsx(
                        "transition-transform text-gray-400",
                        openVendor && "rotate-180"
                      )}
                    />
                  )}
                </button>

                {openVendor && !collapsed && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.children.map((sub) => (
                      <Link
                        key={sub.name}
                        href={sub.path}
                        className={clsx(
                          "flex items-center gap-2 px-3 py-2 rounded-lg text-gray-500 hover:bg-green-50",
                          pathname === sub.path &&
                            "bg-green-100 text-green-700 font-medium"
                        )}
                      >
                        <sub.icon size={14} />
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          }

          return (
            <Link
              key={item.name}
              href={item.path}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg text-gray-600 hover:bg-green-50",
                pathname === item.path &&
                  "bg-green-100 text-green-700 font-medium"
              )}
            >
              <item.icon size={18} />
              {!collapsed && <span>{item.name}</span>}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
