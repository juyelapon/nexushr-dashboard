import React, { useState } from 'react';
import { FigmaIcons } from '../components/Icons';

const LEAVE_REQUESTS = [
  {
    id: 1,
    title: 'Annual Leave',
    subtitle: 'Family vacation trip',
    iconType: 'plane-green',
    iconBg: 'bg-[#F0FDF4]',
    typePill: 'Annual Leave',
    typePillBg: 'bg-[#F0FDF4]',
    typePillText: 'text-[#16A34A]',
    duration: '3 days',
    dates: '24 Jun 2026 - 26 Jun 2026',
    status: 'Pending',
    statusBg: 'bg-[#FFF7ED]',
    statusText: 'text-[#EA580C]',
  },
  {
    id: 2,
    title: 'Sick Leave',
    subtitle: 'Fever and throat infection',
    iconType: 'med-purple',
    iconBg: 'bg-[#FAF5FF]',
    typePill: 'Sick Leave',
    typePillBg: 'bg-[#FAF5FF]',
    typePillText: 'text-[#7C3AED]',
    duration: '1 day',
    dates: '15 Jun 2026',
    status: 'Approved',
    statusBg: 'bg-[#F0FDF4]',
    statusText: 'text-[#16A34A]',
  },
  {
    id: 3,
    title: 'Personal Leave',
    subtitle: 'Personal work',
    iconType: 'user-blue',
    iconBg: 'bg-[#EFF6FF]',
    typePill: 'Personal Leave',
    typePillBg: 'bg-[#EFF6FF]',
    typePillText: 'text-[#2563EB]',
    duration: '1 day',
    dates: '05 Jun 2026',
    status: 'Approved',
    statusBg: 'bg-[#F0FDF4]',
    statusText: 'text-[#16A34A]',
  },
  {
    id: 4,
    title: 'Annual Leave',
    subtitle: 'Trip to Manali',
    iconType: 'plane-orange',
    iconBg: 'bg-[#FFF7ED]',
    typePill: 'Annual Leave',
    typePillBg: 'bg-[#F0FDF4]',
    typePillText: 'text-[#16A34A]',
    duration: '4 days',
    dates: '10 May 2026 - 13 May 2026',
    status: 'Rejected',
    statusBg: 'bg-[#FEF2F2]',
    statusText: 'text-[#DC2626]',
  },
  {
    id: 5,
    title: 'Comp Off',
    subtitle: 'Comp off for extra hours',
    iconType: 'clock-slate',
    iconBg: 'bg-[#F8FAFC]',
    typePill: 'Comp Off',
    typePillBg: 'bg-[#F1F5F9]',
    typePillText: 'text-[#475569]',
    duration: '1 day',
    dates: '20 Apr 2026',
    status: 'Cancelled',
    statusBg: 'bg-[#F1F5F9]',
    statusText: 'text-[#64748B]',
  },
];

const LEAVE_BALANCES = [
  {
    id: 1,
    label: 'Annual Leave',
    used: 18,
    total: 24,
    barColor: 'bg-[#10B981]',
    widthPct: '75%',
  },
  {
    id: 2,
    label: 'Sick Leave',
    used: 7,
    total: 12,
    barColor: 'bg-[#7C3AED]',
    widthPct: '58%',
  },
  {
    id: 3,
    label: 'Personal Leave',
    used: 5,
    total: 6,
    barColor: 'bg-[#2563EB]',
    widthPct: '83%',
  },
  {
    id: 4,
    label: 'Comp Off',
    used: 2,
    total: 5,
    barColor: 'bg-[#F59E0B]',
    widthPct: '40%',
  },
];

const STATUS_FILTERS = ['All', 'Pending', 'Approved', 'Rejected', 'Cancelled'];

function LeaveRowIcon({ type }) {
  switch (type) {
    case 'plane-green':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path
            d="M14 10.6667V9.33333L8.66667 6V2.33333C8.66667 1.78 8.22 1.33333 7.66667 1.33333C7.11333 1.33333 6.66667 1.78 6.66667 2.33333V6L1.33333 9.33333V10.6667L6.66667 9V12.6667L5.33333 13.6667V14.6667L7.66667 14L10 14.6667V13.6667L8.66667 12.6667V9L14 10.6667Z"
            fill="#16A34A"
          />
        </svg>
      );
    case 'plane-orange':
      return (
        <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path
            d="M14 10.6667V9.33333L8.66667 6V2.33333C8.66667 1.78 8.22 1.33333 7.66667 1.33333C7.11333 1.33333 6.66667 1.78 6.66667 2.33333V6L1.33333 9.33333V10.6667L6.66667 9V12.6667L5.33333 13.6667V14.6667L7.66667 14L10 14.6667V13.6667L8.66667 12.6667V9L14 10.6667Z"
            fill="#EA580C"
          />
        </svg>
      );
    case 'med-purple':
      return (
        <svg width="12" height="11" viewBox="0 0 16 15" fill="none">
          <path
            d="M13.5 3H10.5V1.5C10.5 0.675 9.825 0 9 0H6C5.175 0 4.5 0.675 4.5 1.5V3H1.5C0.675 3 0 3.675 0 4.5V12.75C0 13.575 0.675 14.25 1.5 14.25H13.5C14.325 14.25 15 13.575 15 12.75V4.5C15 3.675 14.325 3 13.5 3ZM9 3H6V1.5H9V3Z"
            fill="#7C3AED"
          />
        </svg>
      );
    case 'user-blue':
      return (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z"
            fill="#2563EB"
          />
        </svg>
      );
    case 'clock-slate':
    default:
      return (
        <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
          <path
            d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4ZM8.4 4H7.2V8.8L11.4 11.32L12 10.336L8.4 8.2V4Z"
            fill="#64748B"
          />
        </svg>
      );
  }
}

export default function Attendance({ searchQuery = '' }) {
  const [activeTab, setActiveTab] = useState('Leave Requests');
  const [activeFilter, setActiveFilter] = useState('All');
  const [activePage, setActivePage] = useState(1);

  const filteredRequests = LEAVE_REQUESTS.filter((item) => {
    const matchesStatus = activeFilter === 'All' || item.status === activeFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.dates.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[18px] pb-[24px] flex flex-col">
      {/* ================= TOP PAGE HEADER & BUTTON ================= */}
      <div className="w-full flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold leading-[27px] text-[#0F172A]">
            Attendance &amp; Leave Requests
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[2px]">
            Manage your attendance and submit leave requests
          </p>
        </div>

        <button
          type="button"
          className="h-[38px] px-[18px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors inline-flex items-center justify-center gap-[8px] text-[13px] font-bold leading-[16px] text-white shrink-0"
        >
          <FigmaIcons.Plus color="white" size={11} />
          <span>New Leave Request</span>
        </button>
      </div>

      {/* ================= ROW 1: 4 SUMMARY KPI CARDS ================= */}
      <div className="mt-[22px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
        {/* Card 1: Available Leave */}
        <div className="bg-white rounded-[16px] h-[132px] px-[18px] pt-[18px] pb-[14px] flex flex-col justify-between">
          <div className="flex items-start gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <FigmaIcons.NavLeave color="#2563EB" />
            </div>
            <div>
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Available Leave
              </p>
              <p className="mt-[4px] flex items-baseline gap-[4px]">
                <span className="text-[26px] font-bold leading-[32px] text-[#0F172A]">
                  18
                </span>
                <span className="text-[13px] font-bold leading-[16px] text-[#475569]">
                  days
                </span>
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                Total annual leave
              </p>
            </div>
          </div>
          <div className="pl-[52px]">
            <a
              href="#balance"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline inline-flex items-center gap-1"
            >
              <span>View Balance</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 2: Planned Leave */}
        <div className="bg-white rounded-[16px] h-[132px] px-[18px] pt-[18px] pb-[14px] flex flex-col justify-between">
          <div className="flex items-start gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M14 10.6667V9.33333L8.66667 6V2.33333C8.66667 1.78 8.22 1.33333 7.66667 1.33333C7.11333 1.33333 6.66667 1.78 6.66667 2.33333V6L1.33333 9.33333V10.6667L6.66667 9V12.6667L5.33333 13.6667V14.6667L7.66667 14L10 14.6667V13.6667L8.66667 12.6667V9L14 10.6667Z"
                  fill="#16A34A"
                />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Planned Leave
              </p>
              <p className="mt-[4px] flex items-baseline gap-[4px]">
                <span className="text-[26px] font-bold leading-[32px] text-[#0F172A]">
                  5
                </span>
                <span className="text-[13px] font-bold leading-[16px] text-[#475569]">
                  days
                </span>
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                Upcoming time off
              </p>
            </div>
          </div>
          <div className="pl-[52px]">
            <a
              href="#calendar"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline inline-flex items-center gap-1"
            >
              <span>View Calendar</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 3: Pending Requests */}
        <div className="bg-white rounded-[16px] h-[132px] px-[18px] pt-[18px] pb-[14px] flex flex-col justify-between">
          <div className="flex items-start gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
              <FigmaIcons.StatInProgressClock />
            </div>
            <div>
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Pending Requests
              </p>
              <p className="text-[26px] font-bold leading-[32px] text-[#0F172A] mt-[4px]">
                2
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                Awaiting approval
              </p>
            </div>
          </div>
          <div className="pl-[52px]">
            <a
              href="#requests"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline inline-flex items-center gap-1"
            >
              <span>View Requests</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Card 4: Attended Today */}
        <div className="bg-white rounded-[16px] h-[132px] px-[18px] pt-[18px] pb-[14px] flex flex-col justify-between">
          <div className="flex items-start gap-[16px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <circle cx="8" cy="8" r="8" fill="#EF4444" />
                <path
                  d="M6.5 10.6L4.2 8.3L5.1 7.4L6.5 8.8L10.9 4.4L11.8 5.3L6.5 10.6Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Attended Today
              </p>
              <p className="text-[24px] font-bold leading-[30px] text-[#0F172A] mt-[5px]">
                07h 45m
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                Check-in: 09:15 AM
              </p>
            </div>
          </div>
          <div className="pl-[52px]">
            <a
              href="#attendance"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline inline-flex items-center gap-1"
            >
              <span>View Attendance</span>
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* ================= ROW 2: 2-COLUMN MAIN CONTENT ================= */}
      <div className="mt-[16px] grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_360px] gap-[16px] items-start">
        {/* ---------------- LEFT COLUMN: LEAVE REQUESTS TABLE CARD ---------------- */}
        <div className="bg-white rounded-[16px] min-h-[596px] px-[24px] pt-[18px] pb-[20px] flex flex-col justify-between overflow-hidden">
          <div>
            {/* Top Tabs */}
            <div className="flex items-center gap-[24px] border-b border-[#F1F5F9]">
              {['Leave Requests', 'Attendance Log', 'Attendance Calendar'].map((tab) => {
                const isActive = activeTab === tab;
                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`pb-[12px] text-[13px] font-bold leading-[16px] relative transition-colors ${
                      isActive
                        ? 'text-[#2563EB]'
                        : 'text-[#64748B] hover:text-[#0F172A]'
                    }`}
                  >
                    {tab}
                    {isActive && (
                      <span className="absolute left-0 bottom-0 w-full h-[2px] bg-[#2563EB] rounded-full" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Filter Pills + All Types Dropdown */}
            <div className="mt-[16px] flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-[8px]">
                {STATUS_FILTERS.map((status) => {
                  const isSelected = activeFilter === status;
                  return (
                    <button
                      key={status}
                      type="button"
                      onClick={() => setActiveFilter(status)}
                      className={`h-[28px] px-[14px] rounded-full text-[11px] leading-[13px] transition-colors ${
                        isSelected
                          ? 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                          : 'bg-white border border-[#E2E8F0] text-[#64748B] font-medium hover:bg-[#F8FAFC]'
                      }`}
                    >
                      {status}
                    </button>
                  );
                })}
              </div>

              <button
                type="button"
                className="h-[30px] px-[12px] rounded-[8px] bg-white border border-[#E2E8F0] flex items-center gap-[10px] text-[11px] font-bold text-[#334155] hover:bg-[#F8FAFC]"
              >
                <span>All Types</span>
                <FigmaIcons.ChevronDown color="#475569" width={10} height={6} />
              </button>
            </div>

            {/* Requests Table */}
            <div className="mt-[18px] overflow-x-auto -mx-[24px] px-[24px]">
              <div className="min-w-[660px]">
                {/* Table Header */}
                <div className="grid grid-cols-[minmax(180px,1.4fr)_110px_70px_minmax(140px,1.2fr)_90px_48px] pb-[10px] border-b border-[#F1F5F9] text-[11px] font-bold leading-[13px] text-[#94A3B8]">
                  <span>Request Details</span>
                  <span>Type</span>
                  <span>Duration</span>
                  <span>Dates</span>
                  <span>Status</span>
                  <span className="text-right">Actions</span>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#F1F5F9]">
                  {filteredRequests.map((req) => (
                    <div
                      key={req.id}
                      className="h-[74px] grid grid-cols-[minmax(180px,1.4fr)_110px_70px_minmax(140px,1.2fr)_90px_48px] items-center"
                    >
                      {/* Col 1: Icon + Title & Subtitle */}
                      <div className="flex items-center gap-[12px] pr-2 min-w-0">
                        <div
                          className={`w-[28px] h-[28px] rounded-full ${req.iconBg} flex items-center justify-center shrink-0`}
                        >
                          <LeaveRowIcon type={req.iconType} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold leading-[15px] text-[#0F172A] truncate">
                            {req.title}
                          </p>
                          <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px] truncate">
                            {req.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Col 2: Type Pill */}
                      <div>
                        <span
                          className={`px-[10px] h-[20px] rounded-[6px] ${req.typePillBg} ${req.typePillText} text-[10px] font-bold leading-[12px] inline-flex items-center justify-center`}
                        >
                          {req.typePill}
                        </span>
                      </div>

                      {/* Col 3: Duration */}
                      <span className="text-[11px] font-normal leading-[13px] text-[#334155]">
                        {req.duration}
                      </span>

                      {/* Col 4: Dates */}
                      <span className="text-[11px] font-normal leading-[13px] text-[#334155] truncate pr-2">
                        {req.dates}
                      </span>

                      {/* Col 5: Status Pill */}
                      <div>
                        <span
                          className={`px-[10px] h-[20px] rounded-[6px] ${req.statusBg} ${req.statusText} text-[10px] font-bold leading-[12px] inline-flex items-center justify-center`}
                        >
                          {req.status}
                        </span>
                      </div>

                      {/* Col 6: Actions */}
                      <div className="flex justify-end pr-[8px]">
                        <button
                          type="button"
                          className="p-1 hover:bg-[#F8FAFC] rounded transition-colors"
                          aria-label="Request actions"
                        >
                          <FigmaIcons.VerticalDotsGrey />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Pagination Footer */}
          <div className="mt-[20px] pt-[12px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[11px] font-normal leading-[13px] text-[#94A3B8]">
              Showing 1 to 5 of 12 requests
            </span>

            <div className="flex items-center gap-[4px]">
              <button
                type="button"
                onClick={() => setActivePage((p) => Math.max(1, p - 1))}
                className="w-[24px] h-[24px] rounded-[6px] bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:bg-[#F8FAFC]"
                aria-label="Previous page"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path
                    d="M5 9L1 5L5 1"
                    stroke="#475569"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {[1, 2, 3].map((page) => (
                <button
                  key={page}
                  type="button"
                  onClick={() => setActivePage(page)}
                  className={`w-[24px] h-[24px] rounded-[6px] text-[11px] font-bold leading-[13px] flex items-center justify-center transition-colors ${
                    activePage === page
                      ? 'bg-[#2563EB] text-white'
                      : 'bg-white border border-[#E2E8F0] text-[#475569] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                type="button"
                onClick={() => setActivePage((p) => Math.min(3, p + 1))}
                className="w-[24px] h-[24px] rounded-[6px] bg-white border border-[#E2E8F0] flex items-center justify-center text-[#475569] hover:bg-[#F8FAFC]"
                aria-label="Next page"
              >
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none">
                  <path
                    d="M1 1L5 5L1 9"
                    stroke="#475569"
                    strokeWidth="1.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ---------------- RIGHT COLUMN: 3 STACKED WIDGET CARDS ---------------- */}
        <div className="flex flex-col gap-[16px] min-w-0">
          {/* 1. Leave Balance Card */}
          <div className="bg-white rounded-[16px] px-[22px] pt-[18px] pb-[20px] flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Leave Balance
              </h2>
              <a
                href="#details"
                onClick={(e) => e.preventDefault()}
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View Details
              </a>
            </div>

            <div className="mt-[18px] flex flex-col gap-[16px]">
              {LEAVE_BALANCES.map((item) => (
                <div key={item.id} className="flex flex-col gap-[6px]">
                  <div className="flex items-center justify-between text-[11px] leading-[13px]">
                    <span className="font-bold text-[#1E293B]">{item.label}</span>
                    <span className="font-bold text-[#0F172A]">
                      {item.used}{' '}
                      <span className="font-normal text-[#64748B]">
                        / {item.total} days
                      </span>
                    </span>
                  </div>
                  <div className="w-full h-[6px] rounded-full bg-[#F1F5F9] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.barColor}`}
                      style={{ width: item.widthPct }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Quick Actions Card */}
          <div className="bg-white rounded-[16px] px-[22px] pt-[18px] pb-[20px] flex flex-col">
            <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
              Quick Actions
            </h2>

            <div className="mt-[16px] grid grid-cols-2 gap-[12px]">
              {/* Action 1: New Leave Request */}
              <button
                type="button"
                className="h-[68px] rounded-[12px] bg-[#F8FAFC] hover:bg-[#EFF6FF]/70 transition-colors flex flex-col items-center justify-center gap-[6px] px-2"
              >
                <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                  <path
                    d="M9 1H3C1.9 1 1 1.9 1 3V15C1 16.1 1.9 17 3 17H13C14.1 17 15 16.1 15 15V7L9 1Z"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M9 1V7H15"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 13V9M6 11H10"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#334155]">
                  New Leave Request
                </span>
              </button>

              {/* Action 2: View Calendar */}
              <button
                type="button"
                className="h-[68px] rounded-[12px] bg-[#F8FAFC] hover:bg-[#EFF6FF]/70 transition-colors flex flex-col items-center justify-center gap-[6px] px-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="1.5"
                    y="2.5"
                    width="13"
                    height="12"
                    rx="2"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M1.5 6.5H14.5M5 1V3.5M11 1V3.5"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#334155]">
                  View Calendar
                </span>
              </button>

              {/* Action 3: Attendance Log */}
              <button
                type="button"
                className="h-[68px] rounded-[12px] bg-[#F8FAFC] hover:bg-[#EFF6FF]/70 transition-colors flex flex-col items-center justify-center gap-[6px] px-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="6.5"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M8 4.5V8L10.5 9.5"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#334155]">
                  Attendance Log
                </span>
              </button>

              {/* Action 4: Download Report */}
              <button
                type="button"
                className="h-[68px] rounded-[12px] bg-[#F8FAFC] hover:bg-[#EFF6FF]/70 transition-colors flex flex-col items-center justify-center gap-[6px] px-2"
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M8 2V11M8 11L5 8M8 11L11 8M2.5 13.5H13.5"
                    stroke="#2563EB"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#334155]">
                  Download Report
                </span>
              </button>
            </div>
          </div>

          {/* 3. Company Policy Card */}
          <div className="bg-white rounded-[16px] px-[22px] py-[18px] flex items-start gap-[14px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-[2px]">
              <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
                <path
                  d="M8 1L1.5 3.8V8.2C1.5 12.2 4.3 15.9 8 16.8C11.7 15.9 14.5 12.2 14.5 8.2V3.8L8 1Z"
                  stroke="#2563EB"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.8 9L7.3 10.5L10.5 7.3"
                  stroke="#2563EB"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <h3 className="text-[13px] font-bold leading-[16px] text-[#0F172A]">
                Company Policy
              </h3>
              <p className="text-[11px] font-normal leading-[13px] text-[#64748B] mt-[2px]">
                Read our leave and attendance policy
              </p>
              <a
                href="#policy"
                onClick={(e) => e.preventDefault()}
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline mt-[10px] inline-flex items-center gap-1"
              >
                <span>View Policy Document</span>
                <span>&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
