"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LogIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const res = await fetch(
        "https://lautalk-backend.onrender.com/api/v1/auths/login", 
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzU0MDQ1NDYyLCJpYXQiOjE3NTM3ODYyNjIsImp0aSI6IjMxY2I2MzY4Nzc5YzRiNTBhNzQzZTUyMWMwY2ViZDAxIiwidXNlcl9pZCI6MX0.h-kqyrKOQ1weYt9RfIOP9DoVchoIMk9icJycnlRJKjc'
          },
          body: JSON.stringify({
         usernameOrEmail: formData.username,
         password: formData.password
         })
        }
      );
      
      if(res.status === 200){
        alert('Login Successful!');
        setTimeout(() => {
          router.replace('https://lautalk.vercel.app');
        }, 1000);
      } else {
        const errorData = await res.json();
        alert(errorData?.message || 'Login failed');
      }
    } catch (error) {
      alert('An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Left Section */}
      <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gradient-to-br from-purple-500 to-indigo-600 text-white p-10 relative">
        <h1 className="text-4xl font-bold leading-snug">
          Access your <br />
          <span className="text-yellow-300">LauTalk</span> account
        </h1>
        <p className="mt-4 text-lg opacity-90">
          Welcome back! Continue your journey with fellow students.
        </p>
        <img className="absolute bottom-10 right-10 w-40" src="/assets/girl.png" alt="illustration" />
        <img className="absolute top-10 left-10 w-8" src="/assets/cursor.png" alt="cursor" />
      </div>

      {/* Right Section (Form) */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-8">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Username Field */}
            <div className="space-y-2">
              <label htmlFor="username" className="text-sm font-medium text-gray-700">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  placeholder="Enter your username"
                  className="pl-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-900 outline-none"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </label>
                <Link 
                  href="/forgot-password" 
                  className="text-sm text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  placeholder="Enter your password"
                  className="pl-10 pr-10 w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:border-transparent bg-white text-gray-900 outline-none"
                  value={formData.password}
                  onChange={handleChange}
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me Checkbox */}
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                Remember me
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-medium transition disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing In...
                </span>
              ) : (
                "Log In"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don't have an account?{" "}
            <Link href="/auth/signup" className="text-indigo-600 hover:underline">
              Sign Up Now!
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}