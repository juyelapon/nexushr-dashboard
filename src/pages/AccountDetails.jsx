import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBrandPanel from '../components/AuthBrandPanel';
import { FigmaIcons } from '../components/Icons';

export default function AccountDetails() {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/personal-details');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans bg-[#F8FAFC]">
      <AuthBrandPanel variant="signup" />

      {/* Right Account Details Form Panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-4 sm:p-8 lg:p-[40px]">
        <div className="w-full max-w-[560px] bg-white rounded-[20px] p-6 sm:p-[36px] shadow-[0_4px_24px_rgba(15,23,42,0.04)] border border-[#F1F5F9]">
          {/* Brand Logo */}
          <div className="flex justify-center mb-[18px]">
            <Link to="/" className="inline-flex items-center">
              <FigmaIcons.Logo />
            </Link>
          </div>

          {/* Heading */}
          <div className="text-center mb-[22px]">
            <h2 className="text-[22px] font-bold leading-[27px] text-[#0F172A]">
              Create your account
            </h2>
            <p className="text-[12.5px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
              Join NexurHR and simplify the way you work.
            </p>
          </div>

          {/* 3-Step Stepper (Step 1 Active) */}
          <div className="flex items-start justify-center mb-[26px] px-2">
            {/* Step 1 (Active) */}
            <div className="flex flex-col items-center">
              <div className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                1
              </div>
              <span className="text-[10.5px] font-bold text-[#2563EB] mt-[6px] whitespace-nowrap">
                Account Details
              </span>
            </div>

            <div className="w-[46px] sm:w-[70px] h-[1px] bg-[#E2E8F0] mt-[13px] mx-[6px]" />

            {/* Step 2 */}
            <Link to="/personal-details" className="flex flex-col items-center group">
              <div className="w-[26px] h-[26px] rounded-full border border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#2563EB] text-[11px] font-bold flex items-center justify-center">
                2
              </div>
              <span className="text-[10.5px] font-medium text-[#64748B] mt-[6px] whitespace-nowrap">
                Personal Details
              </span>
            </Link>

            <div className="w-[46px] sm:w-[70px] h-[1px] bg-[#E2E8F0] mt-[13px] mx-[6px]" />

            {/* Step 3 */}
            <Link to="/work-details" className="flex flex-col items-center group">
              <div className="w-[26px] h-[26px] rounded-full border border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#2563EB] text-[11px] font-bold flex items-center justify-center">
                3
              </div>
              <span className="text-[10.5px] font-medium text-[#64748B] mt-[6px] whitespace-nowrap">
                Work Details
              </span>
            </Link>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-[14px]">
              <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                Full Name
              </label>
              <div className="relative flex items-center">
                <span className="pointer-events-none absolute left-[12px] text-[#94A3B8]">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="4.5" r="2.5" fill="#94A3B8" />
                    <path d="M2.5 12C2.5 9.8 4.5 8.4 7 8.4C9.5 8.4 11.5 9.8 11.5 12" fill="#94A3B8" />
                  </svg>
                </span>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>
            </div>

            {/* Email Address */}
            <div className="mb-[14px]">
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
                  placeholder="Enter your work email"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-[14px]">
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
                  placeholder="Create a password"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[36px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-[12px] text-[#64748B] hover:text-[#0F172A]"
                  aria-label="Toggle password visibility"
                >
                  <svg width="15" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6C2.4 2.8 5 1.2 8 1.2C11 1.2 13.6 2.8 15 6C13.6 9.2 11 10.8 8 10.8C5 10.8 2.4 9.2 1 6Z" stroke="#64748B" strokeWidth="1.3" />
                    <circle cx="8" cy="6" r="2" fill="#64748B" />
                    {!showPassword && <path d="M2.5 10.5L13.5 1.5" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />}
                  </svg>
                </button>
              </div>
              <p className="text-[10px] text-[#94A3B8] mt-[5px]">
                Minimum 8 characters with letters, number &amp; symbol
              </p>
            </div>

            {/* Confirm Password */}
            <div className="mb-[14px]">
              <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <span className="pointer-events-none absolute left-[12px] text-[#94A3B8]">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6" width="9" height="7" rx="1.5" fill="#94A3B8" />
                    <path d="M4 6V4.2C4 2.8 5.1 1.8 6.5 1.8C7.9 1.8 9 2.8 9 4.2V6" stroke="#94A3B8" strokeWidth="1.4" />
                  </svg>
                </span>
                <input
                  type={showConfirm ? 'text' : 'password'}
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[36px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((prev) => !prev)}
                  className="absolute right-[12px] text-[#64748B] hover:text-[#0F172A]"
                  aria-label="Toggle confirm password visibility"
                >
                  <svg width="15" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 6C2.4 2.8 5 1.2 8 1.2C11 1.2 13.6 2.8 15 6C13.6 9.2 11 10.8 8 10.8C5 10.8 2.4 9.2 1 6Z" stroke="#64748B" strokeWidth="1.3" />
                    <circle cx="8" cy="6" r="2" fill="#64748B" />
                    {!showConfirm && <path d="M2.5 10.5L13.5 1.5" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" />}
                  </svg>
                </button>
              </div>
            </div>

            {/* Terms Checkbox */}
            <label className="mt-[6px] mb-[18px] flex items-center gap-[8px] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center transition-colors ${
                  agreed ? 'bg-[#2563EB]' : 'border border-[#CBD5E1] bg-white'
                }`}
              >
                {agreed && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.5L3.2 5.7L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-[11px] font-normal text-[#475569]">
                I agree to the{' '}
                <a href="#terms" onClick={(e) => e.preventDefault()} className="font-bold text-[#2563EB] hover:underline">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#privacy" onClick={(e) => e.preventDefault()} className="font-bold text-[#2563EB] hover:underline">
                  Privacy Policy
                </a>
              </span>
            </label>

            <button
              type="submit"
              className="w-full h-[42px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold transition-colors shadow-sm"
            >
              Continue
            </button>
          </form>

          {/* Divider */}
          <div className="my-[16px] flex items-center gap-[12px]">
            <div className="flex-1 h-[1px] bg-[#F1F5F9]" />
            <span className="text-[11px] text-[#94A3B8]">or sign up with</span>
            <div className="flex-1 h-[1px] bg-[#F1F5F9]" />
          </div>

          {/* 2-Column Social Buttons */}
          <div className="grid grid-cols-2 gap-[12px]">
            <button
              type="button"
              className="h-[38px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center gap-[8px] text-[12px] font-bold text-[#0F172A] transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.64 9.2C17.64 8.57 17.58 7.95 17.48 7.36H9V10.84H13.84C13.63 11.97 13 12.92 12.04 13.56V15.82H14.95C16.65 14.25 17.64 11.94 17.64 9.2Z" fill="#4285F4" />
                <path d="M9 18C11.43 18 13.47 17.19 14.95 15.82L12.04 13.56C11.24 14.1 10.21 14.42 9 14.42C6.65 14.42 4.67 12.84 3.96 10.71H0.95V13.04C2.43 15.98 5.48 18 9 18Z" fill="#34A853" />
                <path d="M3.96 10.71C3.78 10.17 3.68 9.59 3.68 9C3.68 8.41 3.78 7.83 3.96 7.29V4.96H0.95C0.35 6.17 0 7.54 0 9C0 10.46 0.35 11.83 0.95 13.04L3.96 10.71Z" fill="#FBBC05" />
                <path d="M9 3.58C10.32 3.58 11.51 4.03 12.44 4.93L15.02 2.35C13.46 0.89 11.43 0 9 0C5.48 0 2.43 2.02 0.95 4.96L3.96 7.29C4.67 5.16 6.65 3.58 9 3.58Z" fill="#EA4335" />
              </svg>
              <span>Google</span>
            </button>

            <button
              type="button"
              className="h-[38px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center justify-center gap-[8px] text-[12px] font-bold text-[#0F172A] transition-colors"
            >
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.5" y="0.5" width="6" height="6" fill="#F25022" />
                <rect x="7.5" y="0.5" width="6" height="6" fill="#7FBA00" />
                <rect x="0.5" y="7.5" width="6" height="6" fill="#00A4EF" />
                <rect x="7.5" y="7.5" width="6" height="6" fill="#FFB900" />
              </svg>
              <span>Microsoft</span>
            </button>
          </div>

          {/* Footer Sign In Link */}
          <p className="text-center text-[11.5px] text-[#64748B] mt-[18px]">
            Already have an account?{' '}
            <Link to="/signin" className="font-bold text-[#2563EB] hover:underline">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
