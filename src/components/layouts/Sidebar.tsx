"use client";

import { useState } from "react";
import {
  FiMenu, FiHome, FiUsers, FiSettings, FiChevronDown, FiFileText,
  FiCheckCircle, FiMap, FiDollarSign, FiToggleRight, FiFolder,
  FiCreditCard, FiMessageSquare,
} from "react-icons/fi";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", icon: FiHome, path: "/admin/dashboard" },
  {
    name: "Vendor",
    icon: FiUsers,
    children: [
      { name: "Vendor Master", path: "/admin/vendor", icon: FiFileText },
      { name: "Approval Workflow", path: "/admin/vendor/approval", icon: FiCheckCircle },
      { name: "Vendor Products Mapping", path: "/admin/vendor/products", icon: FiMap },
      { name: "Vendor Pricing & MOQ", path: "/admin/vendor/pricing", icon: FiDollarSign },
      { name: "Vendor Status", path: "/admin/vendor/status", icon: FiToggleRight },
      { name: "Vendor Documents", path: "/admin/vendor/documents", icon: FiFolder },
      { name: "Vendor Payout Settings", path: "/admin/vendor/payout", icon: FiCreditCard },
      { name: "Vendor Communication Logs", path: "/admin/vendor/logs", icon: FiMessageSquare },
    ],
  },
  { name: "Settings", icon: FiSettings, path: "/admin/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const [openVendor, setOpenVendor] = useState(pathname.startsWith("/admin/vendor"));

  return (
    <div className={clsx("bg-white border-r h-screen transition-all", collapsed ? "w-20" : "w-64")}>
      <div className="flex items-center justify-between px-5 h-16 border-b">
        {!collapsed && <span className="font-bold text-green-600 text-lg">GroceryBoard</span>}
        <button onClick={() => setCollapsed(!collapsed)}>
          <FiMenu />
        </button>
      </div>

      <nav className="px-4 py-4 text-sm">
        {menu.map((item) =>
          item.children ? (
            <div key={item.name}>
              <button
                onClick={() => setOpenVendor(!openVendor)}
                className="flex items-center justify-between w-full px-3 py-2 rounded-lg hover:bg-green-50"
              >
                <div className="flex items-center gap-3">
                  <item.icon size={18} />
                  {!collapsed && item.name}
                </div>
                {!collapsed && <FiChevronDown className={clsx(openVendor && "rotate-180")} />}
              </button>

              {openVendor && !collapsed && (
                <div className="ml-7 mt-1 space-y-1">
                  {item.children.map((sub) => (
                    <Link
                      key={sub.name}
                      href={sub.path}
                      className={clsx(
                        "flex items-center gap-2 px-3 py-2 rounded-lg",
                        pathname.startsWith(sub.path)
                          ? "bg-green-100 text-green-700"
                          : "text-gray-600 hover:bg-green-50"
                      )}
                    >
                      <sub.icon size={14} />
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={item.name}
              href={item.path}
              className={clsx(
                "flex items-center gap-3 px-3 py-2 rounded-lg",
                pathname === item.path
                  ? "bg-green-100 text-green-700"
                  : "text-gray-600 hover:bg-green-50"
              )}
            >
              <item.icon size={18} />
              {!collapsed && item.name}
            </Link>
          )
        )}
      </nav>
    </div>
  );
}
