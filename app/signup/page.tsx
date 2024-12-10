"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function SignupForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "", confirmPassword: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    const newErrors = { email: "", password: "", confirmPassword: "" };

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password || password.length < 7) {
      newErrors.password = "Password must be at least 7 characters.";
      valid = false;
    }

    if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      // Retrieve existing users or initialize an empty array
      const existingUsers = JSON.parse(localStorage.getItem("users") || "[]");

      // Add the new user to the list
      const updatedUsers = [...existingUsers, { email, password }];
      localStorage.setItem("users", JSON.stringify(updatedUsers));

      setLoading(true); // Start loading

      setTimeout(() => {
        // Redirect to login page after saving the data
        router.push("/login");
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form onSubmit={handleSubmit} className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6">
        <div className="text-center mb-6">
          <Image src="/blue.png" alt="Logo" width={80} height={80} className="mx-auto" />
          <p className="text-lg text-gray-600 mt-2">Welcome to Signup! Create your account now.</p>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-gray-800">Sign Up</h2>
        <p className="text-center text-gray-500">Join us to get started.</p>

        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Email</label>
          <div className="relative flex items-center">
            <FiMail className="absolute left-3 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-pink-500 transition duration-200"
              placeholder="Enter your email"
            />
          </div>
          {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Password</label>
          <div className="relative flex items-center">
            <FiLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-pink-500 transition duration-200"
              placeholder="Enter your password"
            />
          </div>
          {errors.password && <p className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        <div className="relative">
          <label className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
          <div className="relative flex items-center">
            <FiLock className="absolute left-3 text-gray-400" />
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-3 pl-10 border rounded focus:outline-none focus:border-pink-500 transition duration-200"
              placeholder="Confirm your password"
            />
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-500 mt-1">{errors.confirmPassword}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
        >
          {loading ? "Signing up..." : "Sign Up"}
        </button>

        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="text-purple-600 hover:underline">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
}
