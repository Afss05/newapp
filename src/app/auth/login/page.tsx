"use client";
import { useState } from "react";
import "../../globals.css";
import { useRouter } from "next/navigation";
import { FiUser, FiLock } from "react-icons/fi";
import { useLoginMutation } from "../../api/apiSlices/ApiSlice";

export default function LoginPage() {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    setError("");
    try {
      const res = await login(form).unwrap();
      localStorage.setItem("token", res.token);
      router.push("/admin/dashboard");
    } catch {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-green-100 to-emerald-100">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Grocery Admin</h2>
          <p className="text-sm text-gray-500">Sign in to your dashboard</p>
        </div>

        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-2 rounded mb-3 text-center">
            {error}
          </div>
        )}

        {/* Username */}
        <div className="relative mb-4">
          <FiUser className="absolute left-3 top-3 text-gray-400" />
          <input
            placeholder="Username"
            className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setForm({ ...form, username: e.target.value })}
          />
        </div>

        {/* Password */}
        <div className="relative mb-6">
          <FiLock className="absolute left-3 top-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 pl-10 pr-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500"
            onChange={(e) => setForm({ ...form, password: e.target.value })}
          />
        </div>

        <button
          onClick={handleSubmit}
          disabled={isLoading}
          className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2 rounded-lg font-semibold transition disabled:opacity-60"
        >
          {isLoading ? "Signing in..." : "Login"}
        </button>

        <p className="text-xs text-center text-gray-400 mt-4">
          © {new Date().getFullYear()} GroceryBoard Admin Panel
        </p>
      </div>
    </div>
  );
}
