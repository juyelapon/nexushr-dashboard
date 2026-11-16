import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthBrandPanel from '../components/AuthBrandPanel';
import { FigmaIcons } from '../components/Icons';

export default function WorkDetails() {
  const navigate = useNavigate();

  const [companyName, setCompanyName] = useState('');
  const [department, setDepartment] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [workEmail, setWorkEmail] = useState('');
  const [workPhone, setWorkPhone] = useState('');
  const [joiningDate, setJoiningDate] = useState('');
  const [reportingManager, setReportingManager] = useState('');
  const [workLocation, setWorkLocation] = useState('');
  const [confirmed, setConfirmed] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row font-sans bg-[#F8FAFC]">
      <AuthBrandPanel variant="signup" />

      {/* Right Form Panel */}
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

          {/* 3-Step Progress Stepper */}
          <div className="flex items-start justify-center mb-[24px] px-2">
            {/* Step 1 */}
            <Link to="/signup" className="flex flex-col items-center group">
              <div className="w-[26px] h-[26px] rounded-full border border-[#CBD5E1] bg-white text-[#64748B] group-hover:border-[#2563EB] text-[11px] font-bold flex items-center justify-center">
                1
              </div>
              <span className="text-[10.5px] font-medium text-[#64748B] mt-[6px] whitespace-nowrap">
                Account Details
              </span>
            </Link>

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

            {/* Step 3 (Active) */}
            <div className="flex flex-col items-center">
              <div className="w-[26px] h-[26px] rounded-full bg-[#2563EB] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                3
              </div>
              <span className="text-[10.5px] font-bold text-[#2563EB] mt-[6px] whitespace-nowrap">
                Work Details
              </span>
            </div>
          </div>

          {/* Section Subheader */}
          <div className="flex items-center gap-[12px] mb-[18px]">
            <div className="w-[34px] h-[34px] rounded-[8px] bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="3.5" width="13" height="9" rx="1.8" stroke="#2563EB" strokeWidth="1.4" />
                <path d="M5.5 3.5V2.2C5.5 1.65 5.95 1.2 6.5 1.2H9.5C10.05 1.2 10.5 1.65 10.5 2.2V3.5" stroke="#2563EB" strokeWidth="1.4" />
                <path d="M1.5 7.2H14.5" stroke="#2563EB" strokeWidth="1.2" />
              </svg>
            </div>
            <div>
              <h3 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Work Details
              </h3>
              <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[2px]">
                Tell us about your organization and role.
              </p>
            </div>
          </div>

          {/* Work Details Form */}
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[14px]">
              {/* Company / Organization Name */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Company / Organization Name
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="1.5" width="10" height="11" rx="1.4" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M4.5 4.5H6M8 4.5H9.5M4.5 7H6M8 7H9.5M5.8 12.5V9.8H8.2V12.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    placeholder="Enter company name"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Department */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Department
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 1.8L12.2 4.5L7 7.2L1.8 4.5L7 1.8Z" stroke="#94A3B8" strokeWidth="1.2" strokeLinejoin="round" />
                      <path d="M1.8 7L7 9.7L12.2 7M1.8 9.5L7 12.2L12.2 9.5" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className={`w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[28px] text-[12px] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] focus:bg-white ${
                      department ? 'text-[#0F172A]' : 'text-[#94A3B8]'
                    }`}
                  >
                    <option value="">Select department</option>
                    <option value="Design Team">Design Team</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Human Resources">Human Resources</option>
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

              {/* Job Title */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Job Title
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
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                    placeholder="Enter your job title"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Employee ID (Optional) */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Employee ID <span className="font-normal text-[#64748B]">(Optional)</span>
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.5" y="1.5" width="11" height="9" rx="1.4" stroke="#94A3B8" strokeWidth="1.2" />
                      <circle cx="4.8" cy="5.2" r="1.2" stroke="#94A3B8" strokeWidth="1.1" />
                      <path d="M7.5 4.8H10.5M7.5 7.2H10.5" stroke="#94A3B8" strokeWidth="1.1" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="text"
                    value={employeeId}
                    onChange={(e) => setEmployeeId(e.target.value)}
                    placeholder="Enter employee ID"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Work Email (Full Width) */}
              <div className="sm:col-span-2">
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Work Email
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1.2" y="1.2" width="11.6" height="8.6" rx="1.4" stroke="#94A3B8" strokeWidth="1.2" />
                      <path d="M1.8 2L7 6L12.2 2" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="Enter your work email"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Work Phone Number (Optional) */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Work Phone Number <span className="font-normal text-[#64748B]">(Optional)</span>
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
                    value={workPhone}
                    onChange={(e) => setWorkPhone(e.target.value)}
                    placeholder="Enter work phone number"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Date of Joining */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Date of Joining
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
                    value={joiningDate}
                    onChange={(e) => setJoiningDate(e.target.value)}
                    placeholder="Select date"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Reporting Manager (Optional) */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Reporting Manager <span className="font-normal text-[#64748B]">(Optional)</span>
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
                    value={reportingManager}
                    onChange={(e) => setReportingManager(e.target.value)}
                    placeholder="Enter manager name"
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[12px] text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  />
                </div>
              </div>

              {/* Work Location */}
              <div>
                <label className="block text-[11px] font-bold leading-[14px] text-[#0F172A] mb-[6px]">
                  Work Location
                </label>
                <div className="relative flex items-center">
                  <span className="pointer-events-none absolute left-[11px] text-[#94A3B8]">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="7" cy="6.2" r="4.8" stroke="#94A3B8" strokeWidth="1.2" />
                      <circle cx="7" cy="6.2" r="1.6" stroke="#94A3B8" strokeWidth="1.2" />
                    </svg>
                  </span>
                  <select
                    value={workLocation}
                    onChange={(e) => setWorkLocation(e.target.value)}
                    className={`w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/60 pl-[34px] pr-[28px] text-[12px] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] focus:bg-white ${
                      workLocation ? 'text-[#0F172A]' : 'text-[#94A3B8]'
                    }`}
                  >
                    <option value="">Select work location</option>
                    <option value="New York, USA">New York, USA</option>
                    <option value="San Francisco, USA">San Francisco, USA</option>
                    <option value="London, UK">London, UK</option>
                    <option value="Remote">Remote</option>
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
            </div>

            {/* Confirmation Checkbox */}
            <label className="mt-[16px] flex items-center gap-[8px] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={confirmed}
                onChange={(e) => setConfirmed(e.target.checked)}
                className="sr-only"
              />
              <span
                className={`w-[14px] h-[14px] rounded-[3px] flex items-center justify-center transition-colors ${
                  confirmed
                    ? 'bg-[#2563EB]'
                    : 'border border-[#CBD5E1] bg-white'
                }`}
              >
                {confirmed && (
                  <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 3.5L3.2 5.7L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </span>
              <span className="text-[11px] font-normal text-[#475569]">
                I confirm that the above information is correct.
              </span>
            </label>

            {/* Back & Create Account Buttons */}
            <div className="mt-[22px] flex items-center gap-[12px]">
              <button
                type="button"
                onClick={() => navigate('/personal-details')}
                className="h-[42px] px-[22px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#334155] text-[12.5px] font-bold flex items-center justify-center gap-[6px] transition-colors shrink-0"
              >
                <span>←</span>
                <span>Back</span>
              </button>

              <button
                type="submit"
                className="flex-1 h-[42px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold flex items-center justify-center gap-[6px] transition-colors shadow-sm"
              >
                <span>Create Account</span>
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
