"use client";

import Link from "next/link";
import { useState } from "react";
import axios from "axios";
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
      const res = await axios.post(
        "https://lautalk-backend.onrender.com/api/v1/auths/register",
        {
          username: formData.username,
          displayname: formData.displayname,
          email: formData.email,
          password: formData.password,
          matricNo: formData.matricNo,
        },
        {
          headers: {
            Authorization:
              "JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU0MDQ1NDYyLCJpYXQiOjE3NTM3ODYyNjIsImp0aSI6IjMxY2I2MzY4Nzc5YzRiNTBhNzQzZTUyMWMwY2ViZDAxIiwidXNlcl9pZCI6MX0.h-kqyrKOQ1weYt9RfIOP9DoVchoIMk9icJycnlRJKjc",
          },
        }
      );

      if (res.status === 201 || res.status === 200) {
        alert("Sign up successful!");
        router.replace("https://lautalk.vercel.app");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(error.response?.data?.message || "Signup failed");
      } else {
        alert("An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-blue-500 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-300/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        {/* Glassmorphism Card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full max-w-6xl rounded-3xl overflow-hidden">
          {/* Left Section - Enhanced */}
          <div className="bg-gradient-to-br from-purple-600/90 to-blue-600/90 backdrop-blur-md p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
                Start your journey with{" "}
                <span className="text-yellow-300 drop-shadow-lg">LauTalk</span>
              </h1>
              <p className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed">
                Shop smarter, pay faster, and join a community without limits. Connect with fellow students and explore endless possibilities.
              </p>
              
              {/* Features List */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  <span>Secure student verification</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  <span>Exclusive campus marketplace</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3"></div>
                  <span>Real-time communication</span>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute bottom-0 right-0 transform translate-x-10 translate-y-8">
              <img 
                className="w-48 lg:w-64 h-auto filter drop-shadow-2xl" 
                src="/assets/girl.png" 
                alt="Student illustration"
              />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-6 h-6 bg-white/20 rounded-full"></div>
            <div className="absolute top-32 right-20 w-4 h-4 bg-yellow-300/40 rounded-full"></div>
            <div className="absolute bottom-20 left-20 w-8 h-8 bg-white/10 rounded-full"></div>
          </div>

          {/* Right Section - Glassmorphism Form */}
          <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-2xl lg:rounded-l-none p-8 lg:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-white drop-shadow-lg mb-2">
                  Create Account
                </h1>
                <p className="text-white/80">Join thousands of students on LauTalk</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                      Display Name
                    </label>
                    <input
                      type="text"
                      name="displayname"
                      placeholder="John Doe"
                      value={formData.displayname}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                      Username
                    </label>
                    <input
                      type="text"
                      name="username"
                      placeholder="Unique username"
                      value={formData.username}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                    School Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="yourname@student.lautech.edu.ng"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                    Matric Number
                  </label>
                  <input
                    type="text"
                    name="matricNo"
                    placeholder="MAT123456"
                    value={formData.matricNo}
                    onChange={handleChange}
                    required
                    className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                      Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      placeholder="••••••••"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-white text-sm font-medium mb-2 drop-shadow">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                      className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:transform-none disabled:hover:shadow-lg"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Creating Account...
                    </span>
                  ) : (
                    "Sign Up Now"
                  )}
                </button>
              </form>

              <p className="text-center text-white/80 mt-6">
                Already on LauTalk?{" "}
                <Link 
                  href="/auth/login" 
                  className="text-yellow-300 hover:text-yellow-200 font-semibold underline transition-colors"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}