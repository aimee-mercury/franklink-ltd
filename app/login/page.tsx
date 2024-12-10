"use client";
import React, { useState } from "react";
import { FiMail, FiLock } from "react-icons/fi";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [accountMessage, setAccountMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form default behavior
    setLoading(true); // Set loading to true when submitting the form

    // Validation logic
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let valid = true;
    const newErrors = { email: "", password: "" };
    setAccountMessage(""); // Clear any previous account messages

    if (!email || !emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email.";
      valid = false;
    }

    if (!password || password.length < 7) {
      newErrors.password = "Password must be at least 7 characters.";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      setTimeout(() => {
        // Retrieve the stored users from localStorage
        const storedUsers = JSON.parse(localStorage.getItem("users") || "[]");

        // Find the user with the matching email
        const user = storedUsers.find((user: { email: string; password: string }) => user.email === email);

        if (user) {
          // Check if the password matches
          if (user.password === password) {
            alert("Login successful! Redirecting to home...");
            window.location.href = "/home"; // Redirect to the home page
          } else {
            setErrors({ email: "", password: "Invalid password" });
          }
        } else {
          setAccountMessage("Create an account, you don't have one.");
        }

        setLoading(false); // Reset loading state after processing
      }, 5000); // 5-second delay
    } else {
      setLoading(false); // Reset loading state if validation fails
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md p-8 bg-white rounded-xl shadow-lg space-y-6 animate-fade-in"
      >
        {/* Logo and Explanation */}
        <div className="text-center mb-6">
          <Image
            src="/blue.png" // Image source
            alt="Franklink Logo"
            width={80} // Specify width
            height={80} // Specify height
            className="mx-auto" // Ensure image is centered
          />
          <p className="text-lg text-gray-600 mt-2">Welcome to Franklink! The best partner for your connections.</p>
        </div>

        <h2 className="text-3xl font-extrabold text-center text-gray-800">Welcome Back</h2>
        <p className="text-center text-gray-500">Please sign in to your account</p>

        {/* Email Input */}
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
              aria-invalid={!!errors.email}
              aria-describedby="email-error"
            />
          </div>
          {errors.email && <p id="email-error" className="text-sm text-red-500 mt-1">{errors.email}</p>}
        </div>

        {/* Password Input */}
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
              aria-invalid={!!errors.password}
              aria-describedby="password-error"
            />
          </div>
          {errors.password && <p id="password-error" className="text-sm text-red-500 mt-1">{errors.password}</p>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 px-4 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-lg transition duration-300 transform hover:scale-105"
          disabled={loading} // Disable the button during loading
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-gray-600 mt-4">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="text-purple-600 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Account message */}
        {accountMessage && (
          <p className="text-sm text-red-500 mt-4 text-center">{accountMessage}</p>
        )}
      </form>
    </div>
  );
}
