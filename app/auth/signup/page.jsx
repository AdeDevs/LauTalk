"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    displayname: "",
    email: "",
    username: "",
    matricNo: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        "https://lautalk-backend.onrender.com/api/v1/auths/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU0MDQ1NDYyLCJpYXQiOjE3NTM3ODYyNjIsImp0aSI6IjMxY2I2MzY4Nzc5YzRiNTBhNzQzZTUyMWMwY2ViZDAxIiwidXNlcl9pZCI6MX0.h-kqyrKOQ1weYt9RfIOP9DoVchoIMk9icJycnlRJKjc",
          },
          body: JSON.stringify({
            username: formData.username,
            displayname: formData.displayname,
            email: formData.email,
            password: formData.password,
            matricNo: formData.matricNo,
          }),
        }
      );

      if (res.status === 201 || res.status === 200) {
        alert("Sign up successful!");
        router.replace("https://lautalk.vercel.app");
      } else {
        const errorData = await res.json();
        alert(errorData?.message || "Signup failed");
      }
    } catch (error) {
      alert("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-10 relative">
        <h1 className="text-4xl font-bold leading-snug">
          Start your <br />
          journey with <span className="text-yellow-300">LauTalk</span>
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Shop smarter, pay faster, and join a community without limits.
        </p>
        <img className="absolute bottom-10 right-10 w-40" src="/assets/girl.png" alt="illustration" />
      </div>

      {/* Right Section (Form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Create your account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-700 text-sm mb-1">Display Name</label>
              <input
                type="text"
                name="displayname"
                placeholder="John Doe"
                value={formData.displayname}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">School Email</label>
              <input
                type="email"
                name="email"
                placeholder="yourname@student.lautech.edu.ng"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Unique username"
                value={formData.username}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Matric No</label>
              <input
                type="text"
                name="matricNo"
                placeholder="MAT123456"
                value={formData.matricNo}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Password</label>
              <input
                type="password"
                name="password"
                placeholder="••••••••"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="••••••••"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-indigo-400 outline-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg font-medium transition disabled:opacity-50"
            >
              {loading ? "Signing Up..." : "Sign Up Now"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Already on LauTalk?{" "}
            <Link href="/auth/login" className="text-indigo-600 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}