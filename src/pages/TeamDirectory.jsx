import React, { useState } from 'react';

const SUMMARY_CARDS = [
  {
    id: 'total',
    label: 'Total Employees',
    value: '128',
    highlight: '↑ + 6',
    highlightColor: 'text-[#16A34A]',
    subtext: ' new this month',
    iconBg: 'bg-[#EFF6FF]',
    icon: (
      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="6.5" cy="5" r="2.6" fill="#2563EB" />
        <path d="M1.8 13.2C1.8 10.9 3.9 9.2 6.5 9.2C9.1 9.2 11.2 10.9 11.2 13.2" fill="#2563EB" />
        <circle cx="12.5" cy="5.5" r="2" fill="#2563EB" />
        <path d="M11.5 9.5C13.6 9.7 15.2 11.1 15.2 13.2" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'active',
    label: 'Active Employees',
    value: '120',
    highlight: '94%',
    highlightColor: 'text-[#16A34A]',
    subtext: ' of total',
    iconBg: 'bg-[#DCFCE7]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="5" r="2.8" fill="#16A34A" />
        <path d="M3 13.5C3 11 5.2 9.3 8 9.3C10.8 9.3 13 11 13 13.5" fill="#16A34A" />
      </svg>
    ),
  },
  {
    id: 'departments',
    label: 'Departments',
    value: '12',
    highlight: '',
    subtext: 'Across organization',
    iconBg: 'bg-[#FFEDD5]',
    icon: (
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 3C1.5 2.17 2.17 1.5 3 1.5H6.2L7.8 3.2H13C13.83 3.2 14.5 3.87 14.5 4.7V11C14.5 11.83 13.83 12.5 13 12.5H3C2.17 12.5 1.5 11.83 1.5 11V3Z"
          fill="#EA580C"
        />
      </svg>
    ),
  },
  {
    id: 'locations',
    label: 'Locations',
    value: '4',
    highlight: '',
    subtext: 'Across the globe',
    iconBg: 'bg-[#F3E8FF]',
    icon: (
      <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7 1C3.96 1 1.5 3.46 1.5 6.5C1.5 10.6 7 15 7 15C7 15 12.5 10.6 12.5 6.5C12.5 3.46 10.04 1 7 1ZM7 8.5C5.9 8.5 5 7.6 5 6.5C5 5.4 5.9 4.5 7 4.5C8.1 4.5 9 5.4 9 6.5C9 7.6 8.1 8.5 7 8.5Z"
          fill="#7C3AED"
        />
      </svg>
    ),
  },
];

const EMPLOYEES = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Product Designer',
    department: 'Product Design',
    location: 'New York',
    email: 'alex.johnson@nexurhr.com',
    phone: '+1 202-555-0134',
    bgCircle: '#FDBA74',
    hairColor: '#1E293B',
    shirtColor: '#1D4ED8',
    skinColor: '#FDE68A',
    glasses: false,
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    role: 'UI/UX Designer',
    department: 'Design Team',
    location: 'San Francisco',
    email: 'sarah.wilson@nexurhr.com',
    phone: '+1 202-555-0135',
    bgCircle: '#FDE047',
    hairColor: '#B45309',
    shirtColor: '#EA580C',
    skinColor: '#FED7AA',
    glasses: false,
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Frontend Developer',
    department: 'Engineering',
    location: 'New York',
    email: 'michael.brown@nexurhr.com',
    phone: '+1 202-555-0136',
    bgCircle: '#FCA5A5',
    hairColor: '#312E81',
    shirtColor: '#1E293B',
    skinColor: '#FDE68A',
    glasses: true,
  },
  {
    id: 4,
    name: 'Emily Davis',
    role: 'HR Manager',
    department: 'Human Resources',
    location: 'London',
    email: 'emily.davis@nexurhr.com',
    phone: '+1 202-555-0137',
    bgCircle: '#FDBA74',
    hairColor: '#3B0764',
    shirtColor: '#7E22CE',
    skinColor: '#FED7AA',
    glasses: false,
  },
  {
    id: 5,
    name: 'David Lee',
    role: 'Backend Developer',
    department: 'Engineering',
    location: 'San Francisco',
    email: 'david.lee@nexurhr.com',
    phone: '+1 202-555-0138',
    bgCircle: '#C7D2FE',
    hairColor: '#1E1B4B',
    shirtColor: '#1E40AF',
    skinColor: '#FDE68A',
    glasses: false,
  },
  {
    id: 6,
    name: 'Jessica Taylor',
    role: 'Marketing Specialist',
    department: 'Marketing',
    location: 'New York',
    email: 'jessica.taylor@nexurhr.com',
    phone: '+1 202-555-0139',
    bgCircle: '#A5F3FC',
    hairColor: '#9A3412',
    shirtColor: '#EA580C',
    skinColor: '#FED7AA',
    glasses: false,
  },
  {
    id: 7,
    name: 'Daniel Martinez',
    role: 'Data Analyst',
    department: 'Analytics',
    location: 'Berlin',
    email: 'daniel.martinez@nexurhr.com',
    phone: '+1 202-555-0140',
    bgCircle: '#D8B4FE',
    hairColor: '#78350F',
    shirtColor: '#15803D',
    skinColor: '#FDE68A',
    glasses: false,
  },
  {
    id: 8,
    name: 'Olivia Anderson',
    role: 'Content Writer',
    department: 'Marketing',
    location: 'London',
    email: 'olivia.anderson@nexurhr.com',
    phone: '+1 202-555-0141',
    bgCircle: '#F9A8D4',
    hairColor: '#1E293B',
    shirtColor: '#DC2626',
    skinColor: '#FED7AA',
    glasses: true,
  },
];

const DEPARTMENTS_LIST = [
  { name: 'Engineering', count: 32, color: '#2563EB' },
  { name: 'Product Design', count: 18, color: '#16A34A' },
  { name: 'Marketing', count: 16, color: '#EA580C' },
  { name: 'Human Resources', count: 12, color: '#2563EB' },
  { name: 'Sales', count: 10, color: '#2563EB' },
  { name: 'Finance', count: 8, color: '#16A34A' },
  { name: 'Customer Support', count: 6, color: '#EA580C' },
  { name: 'Analytics', count: 6, color: '#7C3AED' },
];

const TOP_SKILLS = [
  { name: 'UI/UX Design', count: 28, percent: 94 },
  { name: 'Web Development', count: 24, percent: 82 },
  { name: 'Project Management', count: 18, percent: 62 },
  { name: 'Data Analysis', count: 14, percent: 48 },
  { name: 'Communication', count: 12, percent: 41 },
];

function EmployeeIllustratedAvatar({ emp }) {
  return (
    <div className="relative w-[56px] h-[56px] shrink-0">
      <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="28" cy="28" r="28" fill={emp.bgCircle} />
        <mask id={`mask-${emp.id}`} style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="56" height="56">
          <circle cx="28" cy="28" r="28" fill="white" />
        </mask>
        <g mask={`url(#mask-${emp.id})`}>
          {/* Shoulders / Shirt */}
          <path d="M12 56C12 45.5 19 40 28 40C37 40 44 45.5 44 56H12Z" fill={emp.shirtColor} />
          {/* Neck */}
          <rect x="24.5" y="33" width="7" height="9" rx="3" fill={emp.skinColor} />
          {/* Head */}
          <circle cx="28" cy="26" r="9.5" fill={emp.skinColor} />
          {/* Hair */}
          <path
            d="M18.5 25C18.5 18.5 22.5 14.5 28 14.5C33.5 14.5 37.5 18.5 37.5 25C35.5 21.5 32 20 28 20C24 20 20.5 21.5 18.5 25Z"
            fill={emp.hairColor}
          />
          {emp.glasses && (
            <g>
              <circle cx="24.8" cy="26" r="2.3" stroke="#1E293B" strokeWidth="1.2" fill="white" fillOpacity="0.4" />
              <circle cx="31.2" cy="26" r="2.3" stroke="#1E293B" strokeWidth="1.2" fill="white" fillOpacity="0.4" />
              <path d="M27.1 26H28.9" stroke="#1E293B" strokeWidth="1.2" />
            </g>
          )}
        </g>
      </svg>
      {/* Online Status Dot */}
      <span className="w-[11px] h-[11px] rounded-full bg-[#10B981] border-2 border-white absolute bottom-[1px] right-[1px]" />
    </div>
  );
}

export default function TeamDirectory({ searchQuery = '' }) {
  const [localSearch, setLocalSearch] = useState('');
  const [selectedDept, setSelectedDept] = useState('All Departments');
  const [selectedLoc, setSelectedLoc] = useState('All Locations');
  const [viewMode, setViewMode] = useState('grid');

  const combinedQuery = (localSearch || searchQuery).trim().toLowerCase();

  const filteredEmployees = EMPLOYEES.filter((emp) => {
    const matchesDept =
      selectedDept === 'All Departments' || emp.department === selectedDept;
    const matchesLoc =
      selectedLoc === 'All Locations' || emp.location === selectedLoc;
    const matchesSearch =
      !combinedQuery ||
      emp.name.toLowerCase().includes(combinedQuery) ||
      emp.role.toLowerCase().includes(combinedQuery) ||
      emp.department.toLowerCase().includes(combinedQuery);
    return matchesDept && matchesLoc && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      {/* Page Title & Invite Employee CTA */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[20px]">
        <div>
          <h1 className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
            Team Directory
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
            Browse and connect with your colleagues
          </p>
        </div>

        <button
          type="button"
          className="h-[40px] px-[20px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold leading-[16px] flex items-center gap-[8px] self-start sm:self-auto transition-colors shadow-sm"
        >
          <svg width="15" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="4.5" r="2.5" stroke="white" strokeWidth="1.5" />
            <path d="M2 12.5C2 10.3 4 8.8 6.5 8.8C9 8.8 11 10.3 11 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M13 3.5V7.5M11 5.5H15" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <span>Invite Employee</span>
        </button>
      </div>

      {/* 4 Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] mb-[24px]">
        {SUMMARY_CARDS.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[16px] p-[20px] min-h-[118px] flex items-start gap-[14px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div
              className={`w-[36px] h-[36px] rounded-full ${card.iconBg} flex items-center justify-center shrink-0 mt-[2px]`}
            >
              {card.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-bold leading-[15px] text-[#475569]">
                {card.label}
              </span>
              <span className="text-[24px] font-bold leading-[29px] text-[#0F172A] mt-[5px]">
                {card.value}
              </span>
              <span className="text-[11px] leading-[14px] text-[#64748B] mt-[6px]">
                {card.highlight && (
                  <strong className={`font-bold ${card.highlightColor}`}>
                    {card.highlight}
                  </strong>
                )}
                {card.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Main Layout */}
      <div className="flex flex-col xl:flex-row gap-[24px] items-start">
        {/* Left Column: All Employees Card */}
        <div className="w-full flex-1 min-w-0 bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          {/* Header & View Switcher */}
          <div className="flex items-center justify-between mb-[16px]">
            <h2 className="text-[16px] font-bold leading-[19px] text-[#0F172A]">
              All Employees
            </h2>

            <div className="flex items-center gap-[6px]">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`w-[30px] h-[30px] rounded-[6px] flex items-center justify-center transition-colors ${
                  viewMode === 'grid'
                    ? 'bg-[#2563EB] text-white'
                    : 'border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC]'
                }`}
                aria-label="Grid view"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="8" y="1.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="1.5" y="8" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="8" y="8" width="4.5" height="4.5" rx="1" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`w-[30px] h-[30px] rounded-[6px] flex items-center justify-center transition-colors ${
                  viewMode === 'list'
                    ? 'bg-[#2563EB] text-white'
                    : 'border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC]'
                }`}
                aria-label="List view"
              >
                <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.5 2H12.5M1.5 6H12.5M1.5 10H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Search & Filters Bar */}
          <div className="flex flex-wrap items-center gap-[10px] mb-[20px]">
            {/* Search Input */}
            <div className="flex-1 min-w-[220px] h-[38px] rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[12px] flex items-center gap-[8px]">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.2" cy="6.2" r="4.8" stroke="#94A3B8" strokeWidth="1.4" />
                <path d="M9.8 9.8L12.8 12.8" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search employee by name, role or skill..."
                className="w-full bg-transparent text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
              />
            </div>

            {/* All Departments Dropdown */}
            <div className="relative">
              <span className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-[#64748B]">
                <svg width="12" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M1 2.2C1 1.54 1.54 1 2.2 1H5.2L6.6 2.5H11.8C12.46 2.5 13 3.04 13 3.7V9.8C13 10.46 12.46 11 11.8 11H2.2C1.54 11 1 10.46 1 9.8V2.2Z"
                    fill="#64748B"
                  />
                </svg>
              </span>
              <select
                value={selectedDept}
                onChange={(e) => setSelectedDept(e.target.value)}
                className="h-[38px] pl-[28px] pr-[24px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-bold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                <option value="All Departments">All Departments</option>
                <option value="Engineering">Engineering</option>
                <option value="Product Design">Product Design</option>
                <option value="Design Team">Design Team</option>
                <option value="Marketing">Marketing</option>
                <option value="Human Resources">Human Resources</option>
                <option value="Analytics">Analytics</option>
              </select>
              <svg
                className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[#475569]"
                width="9"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* All Locations Dropdown */}
            <div className="relative">
              <span className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-[#64748B]">
                <svg width="10" height="12" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 1C3.51 1 1.5 3.01 1.5 5.5C1.5 8.88 6 13 6 13C6 13 10.5 8.88 10.5 5.5C10.5 3.01 8.49 1 6 1ZM6 7.2C5.06 7.2 4.3 6.44 4.3 5.5C4.3 4.56 5.06 3.8 6 3.8C6.94 3.8 7.7 4.56 7.7 5.5C7.7 6.44 6.94 7.2 6 7.2Z"
                    fill="#64748B"
                  />
                </svg>
              </span>
              <select
                value={selectedLoc}
                onChange={(e) => setSelectedLoc(e.target.value)}
                className="h-[38px] pl-[26px] pr-[24px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-bold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                <option value="All Locations">All Locations</option>
                <option value="New York">New York</option>
                <option value="San Francisco">San Francisco</option>
                <option value="London">London</option>
                <option value="Berlin">Berlin</option>
              </select>
              <svg
                className="pointer-events-none absolute right-[8px] top-1/2 -translate-y-1/2 text-[#475569]"
                width="9"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>

            {/* More Filters Button */}
            <button
              type="button"
              className="h-[38px] px-[12px] rounded-[8px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] flex items-center gap-[6px] text-[12px] font-bold text-[#334155] transition-colors"
            >
              <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5H11M3 5H9M4.5 8.5H7.5" stroke="#475569" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
              <span>More Filters</span>
              <svg width="9" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1L5 5L9 1" stroke="#475569" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {/* Employee Cards Grid */}
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px]'
                : 'grid grid-cols-1 sm:grid-cols-2 gap-[16px]'
            }
          >
            {filteredEmployees.map((emp) => (
              <div
                key={emp.id}
                className="rounded-[12px] border border-[#F1F5F9] bg-white p-[16px] flex flex-col items-center hover:border-[#CBD5E1] hover:shadow-sm transition-all"
              >
                <EmployeeIllustratedAvatar emp={emp} />

                <h3 className="text-[13.5px] font-bold leading-[16px] text-[#0F172A] text-center mt-[10px]">
                  {emp.name}
                </h3>
                <span className="text-[11px] font-bold leading-[14px] text-[#2563EB] text-center mt-[2px]">
                  {emp.role}
                </span>

                <div className="w-full mt-[12px] pt-[10px] border-t border-[#F8FAFC] flex flex-col gap-[6px]">
                  {/* Department */}
                  <div className="flex items-center gap-[6px] text-[10.5px] leading-[13px] text-[#64748B]">
                    <svg className="shrink-0" width="11" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 2C1 1.45 1.45 1 2 1H4.5L5.7 2.2H10C10.55 2.2 11 2.65 11 3.2V8C11 8.55 10.55 9 10 9H2C1.45 9 1 8.55 1 8V2Z"
                        fill="#94A3B8"
                      />
                    </svg>
                    <span className="truncate">{emp.department}</span>
                  </div>

                  {/* Email */}
                  <div className="flex items-center gap-[6px] text-[10px] leading-[13px] text-[#64748B]">
                    <svg className="shrink-0" width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="1" y="1" width="10" height="8" rx="1.5" fill="#94A3B8" />
                      <path d="M1.5 2L6 5.2L10.5 2" stroke="white" strokeWidth="1" strokeLinecap="round" />
                    </svg>
                    <span className="truncate">{emp.email}</span>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center gap-[6px] text-[10.5px] leading-[13px] text-[#64748B]">
                    <svg className="shrink-0" width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M2.5 1.8C2.8 1.5 3.3 1.5 3.6 1.8L4.9 3.1C5.2 3.4 5.2 3.9 4.9 4.2L4.1 5C4.7 6.2 5.8 7.3 7 7.9L7.8 7.1C8.1 6.8 8.6 6.8 8.9 7.1L10.2 8.4C10.5 8.7 10.5 9.2 10.2 9.5L9.4 10.3C8.6 11.1 7.3 11.2 6.2 10.7C3.9 9.6 2.4 8.1 1.3 5.8C0.8 4.7 0.9 3.4 1.7 2.6L2.5 1.8Z"
                        fill="#94A3B8"
                      />
                    </svg>
                    <span className="truncate">{emp.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Footer */}
          <div className="mt-[22px] pt-[14px] border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] font-normal text-[#94A3B8]">
              Showing 1 to {filteredEmployees.length} of 128 employees
            </span>

            <div className="flex items-center gap-[6px]">
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] flex items-center justify-center"
                aria-label="Previous page"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 1L1 5L5 9" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] bg-[#2563EB] text-white text-[12px] font-bold flex items-center justify-center"
              >
                1
              </button>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC] text-[12px] font-bold flex items-center justify-center"
              >
                2
              </button>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC] text-[12px] font-bold flex items-center justify-center"
              >
                3
              </button>
              <span className="px-1 text-[12px] text-[#94A3B8] select-none">...</span>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC] text-[12px] font-bold flex items-center justify-center"
              >
                16
              </button>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] flex items-center justify-center"
                aria-label="Next page"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L5 5L1 9" stroke="#64748B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Departments + Top Skills + Bottom Quick Actions */}
        <div className="w-full xl:w-[336px] flex flex-col gap-[24px] shrink-0">
          {/* Card 1: Departments */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Departments
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-[12px]">
              {DEPARTMENTS_LIST.map((dept) => (
                <div
                  key={dept.name}
                  className="flex items-center justify-between text-[12.5px] leading-[15px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M1 2.2C1 1.54 1.54 1 2.2 1H5.2L6.6 2.5H11.8C12.46 2.5 13 3.04 13 3.7V9.8C13 10.46 12.46 11 11.8 11H2.2C1.54 11 1 10.46 1 9.8V2.2Z"
                        fill={dept.color}
                      />
                    </svg>
                    <span className="text-[#334155] font-normal">{dept.name}</span>
                  </div>
                  <span className="text-[#475569] font-semibold text-[12px]">
                    {dept.count}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              className="mt-[14px] text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline inline-block"
            >
              + 4 more departments
            </button>
          </div>

          {/* Card 2: Top Skills */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Top Skills
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-[14px]">
              {TOP_SKILLS.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between mb-[6px]">
                    <span className="text-[12px] font-bold leading-[15px] text-[#0F172A]">
                      {skill.name}
                    </span>
                    <span className="text-[12px] font-bold leading-[15px] text-[#334155]">
                      {skill.count}
                    </span>
                  </div>
                  <div className="w-full h-[5px] rounded-full bg-[#F1F5F9] overflow-hidden">
                    <div
                      className="h-full rounded-full bg-[#2563EB]"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Bottom Quick Actions */}
          <div className="bg-white rounded-[16px] p-[20px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="grid grid-cols-4 gap-[8px]">
              {/* Action 1: Invite Employee */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center transition-colors">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="6.5" cy="4.5" r="2.3" stroke="#2563EB" strokeWidth="1.4" />
                    <path d="M2.2 12C2.2 10 4.1 8.6 6.5 8.6C8.9 8.6 10.8 10 10.8 12" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
                    <path d="M13 3.5V7.5M11 5.5H15" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold leading-[13px] text-[#334155] text-center mt-[8px]">
                  Invite
                  <br />
                  Employee
                </span>
              </button>

              {/* Action 2: Organization Chart */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center transition-colors">
                  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="6" y="1.5" width="4" height="3.2" rx="0.8" stroke="#2563EB" strokeWidth="1.3" />
                    <rect x="1.5" y="11" width="4" height="3.2" rx="0.8" stroke="#2563EB" strokeWidth="1.3" />
                    <rect x="10.5" y="11" width="4" height="3.2" rx="0.8" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M8 4.8V8M3.5 11V8H12.5V11" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold leading-[13px] text-[#334155] text-center mt-[8px]">
                  Organization
                  <br />
                  Chart
                </span>
              </button>

              {/* Action 3: My Team */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center transition-colors">
                  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="5.8" cy="4.5" r="2.2" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M1.8 11.8C1.8 9.8 3.6 8.5 5.8 8.5C8 8.5 9.8 9.8 9.8 11.8" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
                    <circle cx="11.2" cy="5" r="1.8" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M10.5 8.8C12.3 9 13.8 10.1 13.8 11.8" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold leading-[13px] text-[#334155] text-center mt-[8px]">
                  My Team
                </span>
              </button>

              {/* Action 4: Birthdays */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-[10px] bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center transition-colors">
                  <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="6.5" width="10" height="6.5" rx="1.2" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M2 9.5H12" stroke="#2563EB" strokeWidth="1.3" />
                    <path d="M4.5 4V6.5M7 3.5V6.5M9.5 4V6.5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10px] font-bold leading-[13px] text-[#334155] text-center mt-[8px]">
                  Birthdays
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
