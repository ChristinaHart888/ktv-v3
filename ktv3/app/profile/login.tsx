"use client";

import { useState, useEffect } from "react";

type LoginPageProps = {
  onSwitchToRegister?: () => void;
};

export default function LoginPage({ onSwitchToRegister }: LoginPageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);

  useEffect(() => {
    if (error) {
      const timer = setTimeout(() => {
        setError(null);
      }, 5000); // 5 seconds
      return () => clearTimeout(timer);
    }
  }, [error]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const password = (document.getElementById("password") as HTMLInputElement).value;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address");
      setIsLoading(false);
      return;
    }
    setEmailError(null);

    // Check if is localhost
    const url = window.location.hostname === "localhost" ? "http://localhost:3001/api/accounts/login" : "ktv3.ktv3.org/api/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json().then((data) => ({ res, data })))
      .then(({ res, data }) => {
        if (!res.ok) {
          throw new Error(data.message || "Login failed");
        }
        console.log(data);
        // Handle successful login, e.g., save token, redirect, etc.
      })
      .catch((err) => {
        console.error("Login failed:", err);
        setError(err.message || "Login failed");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };
  return (
    <div
      className="relative flex items-center justify-center h-full px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1579201157678-a242a244b34e?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      <div className="relative bg-slate-900/90 border border-slate-700 rounded-lg shadow-lg p-4 md:p-8 w-full max-w-sm md:max-w-md text-white">
        <h1 className="text-2xl md:text-3xl font-bold text-center mb-4">Login</h1>
        <p className="text-center text-slate-200 mb-6 text-sm md:text-base">Please log in to access your account.</p>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-700 mb-2">
              <span className="inline-flex items-center gap-2">
                <span>Email</span>
                {emailError ? (
                  <span className="text-sm font-semibold text-rose-300">{emailError}</span>
                ) : null}
              </span>
            </label>
            <input
              type="email"
              id="email"
              autoComplete="email"
              onChange={(e) => {
                const value = e.currentTarget.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && emailRegex.test(value)) {
                  setEmailError(null);
                }
              }}
              onBlur={(e) => {
                const value = e.currentTarget.value;
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (value && !emailRegex.test(value)) {
                  setEmailError("Please enter a valid email address");
                }
              }}
              className={`w-full bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition ${
                emailError
                  ? "border-rose-400 ring-2 ring-rose-400 focus:ring-rose-400"
                  : "border-slate-700"
              }`}
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              className="w-full border border-slate-700 bg-slate-950/60 text-white px-3 py-2 rounded-lg shadow-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 disabled:opacity-75 text-white font-semibold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin h-5 w-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
          <button
            type="button"
            className="w-full bg-slate-700 hover:bg-slate-600 text-white font-semibold py-2 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-slate-500 focus:ring-offset-2 transition"
          >
            Login as Guest
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-slate-300">
          Don&apos;t have an account?{' '}
          <button
            type="button"
            onClick={onSwitchToRegister}
            className="text-blue-400 hover:underline"
          >
            Register
          </button>
        </p>
        <p className="mt-2 text-center text-sm text-slate-300">
          <a href="/forgot-password" className="text-blue-600 hover:underline">Forgot password?</a>
        </p>
      </div>

      {error && (
        <div className="fixed bottom-16 right-4 z-50">
          <div className="bg-red-600 text-white px-4 py-2 rounded-lg shadow-lg flex items-center space-x-2 max-w-xs">
            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{error}</span>
            <button
              onClick={() => setError(null)}
              className="ml-2 text-white hover:text-gray-200 flex-shrink-0"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}