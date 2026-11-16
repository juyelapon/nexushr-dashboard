import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBrandPanel from '../components/AuthBrandPanel';
import { FigmaIcons } from '../components/Icons';

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans bg-[#F8FAFC]">
      <AuthBrandPanel variant="signin" />

      {/* Right Sign In Form Panel */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-4 sm:p-8 lg:p-[40px]">
        <div className="w-full max-w-[560px] bg-white rounded-[20px] p-6 sm:p-[40px] shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-[#F1F5F9]">
          {/* Brand Logo */}
          <div className="flex justify-center mb-[22px]">
            <Link to="/" className="inline-flex items-center">
              <FigmaIcons.Logo />
            </Link>
          </div>

          {/* Sign In / Sign Up Tabs */}
          <div className="grid grid-cols-2 border-b border-[#E2E8F0] mb-[26px]">
            <Link
              to="/signin"
              className="pb-[12px] text-center text-[13px] font-bold text-[#2563EB] border-b-2 border-[#2563EB]"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="pb-[12px] text-center text-[13px] font-semibold text-[#64748B] hover:text-[#0F172A] transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Heading */}
          <div className="mb-[22px]">
            <h2 className="text-[22px] font-bold leading-[27px] text-[#0F172A]">
              Welcome back!
            </h2>
            <p className="text-[12.5px] font-normal leading-[16px] text-[#64748B] mt-[4px]">
              Sign in to continue to your employee dashboard.
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Email Address */}
            <div className="mb-[16px]">
              <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                Email Address
              </label>
              <div className="relative flex items-center">
                <span className="pointer-events-none absolute left-[12px] text-[#94A3B8]">
                  <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="12" height="9" rx="1.5" fill="#94A3B8" />
                    <path d="M1.5 2L7 6L12.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                </span>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full h-[40px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[36px] pr-[12px] text-[12.5px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-[10px]">
              <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                Password
              </label>
              <div className="relative flex items-center">
                <span className="pointer-events-none absolute left-[12px] text-[#94A3B8]">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="9" height="7" rx="1.5" fill="#94A3B8" />
                    <path d="M4 6V4.2C4 2.8 5.1 1.8 6.5 1.8C7.9 1.8 9 2.8 9 4.2V6" stroke="#94A3B8" strokeWidth="1.4" />
                  </svg>
                </span>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full h-[40px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[36px] pr-[38px] text-[12.5px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-[12px] text-[#64748B] hover:text-[#0F172A]"
                  aria-label="Toggle password visibility"
                >
                  <svg width="15" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1 6C2.4 2.8 5 1.2 8 1.2C11 1.2 13.6 2.8 15 6C13.6 9.2 11 10.8 8 10.8C5 10.8 2.4 9.2 1 6Z"
                      stroke="#64748B"
                      strokeWidth="1.3"
                    />
                    <circle cx="8" cy="6" r="2" fill="#64748B" />
                    {!showPassword && (
                      <path d="M2.5 10.5L13.5 1.5" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />
                    )}
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex justify-end mb-[18px]">
              <button
                type="button"
                className="text-[11px] font-bold text-[#2563EB] hover:underline"
              >
                Forgot Password?
              </button>
            </div>

            <button
              type="submit"
              className="w-full h-[42px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold transition-colors shadow-sm"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="my-[18px] flex items-center gap-[12px]">
            <div className="flex-1 h-[1px] bg-[#F1F5F9]" />
            <span className="text-[11px] text-[#94A3B8]">or continue with</span>
            <div className="flex-1 h-[1px] bg-[#F1F5F9]" />
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col gap-[10px]">
            <button
              type="button"
              className="w-full h-[40px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center gap-[10px] text-[12.5px] font-bold text-[#0F172A] transition-colors"
            >
              <svg width="15" height="15" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2C17.64 8.57 17.58 7.95 17.48 7.36H9V10.84H13.84C13.63 11.97 13 12.92 12.04 13.56V15.82H14.95C16.65 14.25 17.64 11.94 17.64 9.2Z" fill="#4285F4" />
                <path d="M9 18C11.43 18 13.47 17.19 14.95 15.82L12.04 13.56C11.24 14.1 10.21 14.42 9 14.42C6.65 14.42 4.67 12.84 3.96 10.71H0.95V13.04C2.43 15.98 5.48 18 9 18Z" fill="#34A853" />
                <path d="M3.96 10.71C3.78 10.17 3.68 9.59 3.68 9C3.68 8.41 3.78 7.83 3.96 7.29V4.96H0.95C0.35 6.17 0 7.54 0 9C0 10.46 0.35 11.83 0.95 13.04L3.96 10.71Z" fill="#FBBC05" />
                <path d="M9 3.58C10.32 3.58 11.51 4.03 12.44 4.93L15.02 2.35C13.46 0.89 11.43 0 9 0C5.48 0 2.43 2.02 0.95 4.96L3.96 7.29C4.67 5.16 6.65 3.58 9 3.58Z" fill="#EA4335" />
              </svg>
              <span>Continue with Google</span>
            </button>

            <button
              type="button"
              className="w-full h-[40px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center gap-[10px] text-[12.5px] font-bold text-[#0F172A] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="6" height="6" fill="#F25022" />
                <rect x="7.5" y="0.5" width="6" height="6" fill="#7FBA00" />
                <rect x="0.5" y="7.5" width="6" height="6" fill="#00A4EF" />
                <rect x="7.5" y="7.5" width="6" height="6" fill="#FFB900" />
              </svg>
              <span>Continue with Microsoft</span>
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center text-[11.5px] text-[#64748B] mt-[22px]">
            Don&apos;t have an account?{' '}
            <Link to="/signup" className="font-bold text-[#2563EB] hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Bottom Security Badge */}
        <div className="mt-[18px] flex items-center gap-[6px] text-[11px] text-[#64748B]">
          <svg width="12" height="13" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z" fill="#2563EB" />
            <path d="M4.5 7.2L5.8 8.5L8.6 5.6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span>Secure. Reliable. Built for Employees.</span>
        </div>
      </div>
    </div>
  );
}
