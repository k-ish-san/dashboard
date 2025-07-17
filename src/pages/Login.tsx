// src/pages/Login.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.webp";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const isEmailValid = /\S+@\S+\.\S+/.test(email);
  const isPasswordValid = password.length >= 6;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Both fields are required.");
      return;
    }

    if (!isEmailValid) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!isPasswordValid) {
      setError("Password must be at least 6 characters.");
      return;
    }

    setError("");
    navigate("/dashboard");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Background image */}
      <img
        src={login}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Optional overlay */}
      <div className="absolute inset-0 bg-black opacity-30 z-10"></div>

      {/* Login box */}
      <div className="relative z-20 max-w-md w-full bg-transparent backdrop-blur-sm bg-opacity-90 p-8 rounded-xl shadow border-2 border-[#5D6B68]/30">
        <h2 className="text-2xl font-bold mb-6 text-center text-green-300">
          Customs Portal Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-green-300 mb-1">
              Email <span className="text-red-400">*</span>
            </label>
             <Mail className="absolute left-2 top-8 w-5 h-5  text-green-700" />
            <input
              id="email"
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full pl-10 px-1 pb-1 h-10 border-0 border-b-2 focus:outline-none bg-transparent text-green-300 ${
                email && !isEmailValid
                  ? "border-red-500 focus:border-red-400"
                  : "border-lime-500 focus:border-lime-600"
              }`}
              aria-invalid={!isEmailValid}
              aria-describedby="email-error"
              required
            />
            {email && !isEmailValid && (
              <p id="email-error" className="text-red-500 text-sm mt-1">
                Enter a valid email address.
              </p>
            )}
          </div>

          <div className="relative">
            <label htmlFor="password" className="block text-sm font-medium text-green-300 mb-1">
              Password <span className="text-red-400">*</span>
            </label>
             {/* Password input with icon */}
        
            <Lock className="absolute left-2 top-8 w-5 h-5 text-green-700" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="Enter your Password"
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full pl-10 px-1 h-10 pb-1 border-0 border-b-2 focus:outline-none bg-transparent text-green-300 ${
                password && !isPasswordValid
                  ? "border-red-500 focus:border-red-400"
                  : "border-lime-500 focus:border-lime-600"
              }`}
              required
            />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-0 top-8 text-sm text-gray-600 hover:underline"
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            {password && !isPasswordValid && (
              <p id="password-error" className="text-red-500 text-sm mt-1">
                Password must be at least 6 characters.
              </p>
            )}
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-lime-300 accent-lime-400" />
              <span className="text-green-300 hover:text-lime-400">Remember me</span>
            </label>
            <a href="#" className="text-lime-300 hover:underline">
              Forgot password?
            </a>
          </div>

          {error && <p className="text-red-600 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={!isEmailValid || !isPasswordValid}
            className={`w-full text-white py-2 rounded-md transition ${
              !isEmailValid || !isPasswordValid
                ? "bg-lime-600/60 hover:bg-lime-700"
                : "bg-lime-600 hover:bg-lime-700"
            }`}
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
