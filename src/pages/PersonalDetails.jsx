import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBrandPanel from '../components/AuthBrandPanel';
import { FigmaIcons } from '../components/Icons';

export default function PersonalDetails() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [stateProvince, setStateProvince] = useState('');
  const [country, setCountry] = useState('');
  const [postalCode, setPostalCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/work-details');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans bg-[#F8FAFC]">
      <AuthBrandPanel variant="signup" />

      {/* Right Personal Details Form Panel */}
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

          {/* 3-Step Stepper (Step 2 Active) */}
          <div className="flex items-start justify-center mb-[22px] px-2">
            <Link to="/signup" className="flex flex-col items-center group">
              <div className="w-[26px] h-[26px] rounded-full border border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#2563EB] text-[11px] font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-[10.5px] font-medium text-[#64748B] mt-[6px] whitespace-nowrap">
                Account Details
              </span>
            </Link>

            <div className="w-[46px] sm:w-[70px] h-[1px] bg-[#E2E8F0] mt-[13px] mx-[6px]" />

            {/* Step 2 (Active) */}
            <div className="flex flex-col items-center">
              <div className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                2
              </div>
              <span className="text-[10.5px] font-bold text-[#2563EB] mt-[6px] whitespace-nowrap">
                Personal Details
              </span>
            </div>

            <div className="w-[46px] sm:w-[70px] h-[1px] bg-[#E2E8F0] mt-[13px] mx-[6px]" />

            <Link to="/work-details" className="flex flex-col items-center group">
              <div className="w-[26px] h-[26px] rounded-full border border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#2563EB] text-[11px] font-bold flex items-center justify-center">
                3
              </div>
              <span className="text-[10.5px] font-medium text-[#64748B] mt-[6px] whitespace-nowrap">
                Work Details
              </span>
            </Link>
          </div>

          {/* Section Subheader */}
          <div className="flex items-center gap-[12px] mb-[18px]">
            <div className="w-[34px] h-[34px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="4.5" r="2.2" stroke="#2563EB" strokeWidth="1.3" />
                <path d="M2.8 12C2.8 9.9 4.7 8.5 7 8.5C9.3 8.5 11.2 9.9 11.2 12" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Personal Details
              </h3>
              <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[2px]">
                Tell us a bit more about yourself.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[13px]">
              {/* Full Name (Full Width) */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Full Name
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="4.5" r="2.2" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M2.8 12C2.8 9.9 4.7 8.5 7 8.5C9.3 8.5 11.2 9.9 11.2 12" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
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

              {/* Date of Birth */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Date of Birth
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.8" y="2.5" width="10.4" height="9.5" rx="1.6" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M1.8 5.5H12.2" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M4.5 1.4V3M9.5 1.4V3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    placeholder="Select date"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[34px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                  <span className="pointer-events-none absolute right-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.8" y="2.5" width="10.4" height="9.5" rx="1.6" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M1.8 5.5H12.2" stroke="#94A3B8" strokeWidth="1.2" />
                    </svg>
                  </span>
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Gender
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="4.5" r="2.2" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M2.8 12C2.8 9.9 4.7 8.5 7 8.5C9.3 8.5 11.2 9.9 11.2 12" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className={`w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[28px] text-[12px] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] focus:bg-white ${
                      gender ? 'text-[#0F172A]' : 'text-[#94A3B8]'
                    }`}
                  >
                    <option value="">Select gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Non-binary">Non-binary</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-[11px] text-[#64748B]"
                    width="9"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Phone Number (Full Width) */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Phone Number
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="12" height="12" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.6 2C2.9 1.7 3.4 1.7 3.7 2L5 3.3C5.3 3.6 5.3 4.1 5 4.4L4.2 5.2C4.8 6.4 5.9 7.5 7.1 8.1L7.9 7.3C8.2 7 8.7 7 9 7.3L10.3 8.6C10.6 8.9 10.6 9.4 10.3 9.7L9.5 10.5C8.7 11.3 7.4 11.4 6.3 10.9C4 9.8 2.5 8.3 1.4 6C0.9 4.9 1 3.6 1.8 2.8L2.6 2Z"
                        stroke="#94A3B8"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter your phone number"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Address (Full Width) */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Address
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="6.2" r="4.8" stroke="#94A3B8" strokeWidth="1.2" />
                      <circle cx="7" cy="6.2" r="1.6" stroke="#94A3B8" strokeWidth="1.2" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter your address"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* City */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  City
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Enter your city"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 px-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* State / Province */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  State / Province
                </label>
                <input
                  type="text"
                  value={stateProvince}
                  onChange={(e) => setStateProvince(e.target.value)}
                  placeholder="Enter your state"
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 px-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Country */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Country
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="7" r="5.5" stroke="#94A3B8" strokeWidth="1.2" />
                      <ellipse cx="7" cy="7" rx="2.4" ry="5.5" stroke="#94A3B8" strokeWidth="1.1" />
                      <path d="M1.8 7H12.2" stroke="#94A3B8" strokeWidth="1.1" />
                    </svg>
                  </span>
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className={`w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[28px] text-[12px] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] focus:bg-white ${
                      country ? 'text-[#0F172A]' : 'text-[#94A3B8]'
                    }`}
                  >
                    <option value="">Select country</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Bangladesh">Bangladesh</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-[11px] text-[#64748B]"
                    width="9"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Postal Code */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Postal Code
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="10" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="12" height="9" rx="1.4" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M1.5 2L7 6L12.5 2" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={postalCode}
                    onChange={(e) => setPostalCode(e.target.value)}
                    placeholder="Enter postal code"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Back & Continue Buttons */}
            <div className="mt-[22px] flex items-center gap-[12px]">
              <button
                type="button"
                onClick={() => navigate('/signup')}
                className="h-[42px] px-[22px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#334155] text-[12.5px] font-bold flex items-center justify-center gap-[6px] transition-colors shrink-0"
              >
                <span>←</span>
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="flex-1 h-[42px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold flex items-center justify-center gap-[6px] transition-colors shadow-sm"
              >
                <span>Continue</span>
                <span>→</span>
              </button>
            </div>
          </form>

          {/* Footer Sign In Link */}
          <p className="text-center text-[11.5px] text-[#64748B] mt-[16px]">
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
