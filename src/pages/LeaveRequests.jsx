import React, { useState } from 'react';

const SUMMARY_CARDS = [
  {
    id: 'available',
    label: 'Available Leave',
    value: '18',
    unit: 'days',
    linkText: 'View Balance',
    iconBg: 'bg-[#F3E8FF]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="12" height="11" rx="2" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M2 6.5H14" stroke="#7C3AED" strokeWidth="1.5" />
        <path d="M5 1.5V3.5M11 1.5V3.5" stroke="#7C3AED" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'planned',
    label: 'Planned Leaves',
    value: '5',
    unit: 'days',
    linkText: 'View Calendar',
    iconBg: 'bg-[#DCFCE7]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1.5L9.4 6.2L14.5 7.8V9.2L9.4 8.3L8.9 12.5L11 13.8V14.8L8 14L5 14.8V13.8L7.1 12.5L6.6 8.3L1.5 9.2V7.8L6.6 6.2L8 1.5Z"
          fill="#16A34A"
        />
      </svg>
    ),
  },
  {
    id: 'pending',
    label: 'Pending Requests',
    value: '2',
    unit: 'requests',
    linkText: 'View Requests',
    iconBg: 'bg-[#FFEDD5]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6" stroke="#EA580C" strokeWidth="1.5" />
        <path d="M8 4.8V8L10.2 9.5" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'taken',
    label: 'Leaves Taken',
    value: '7',
    unit: 'days this year',
    linkText: 'View History',
    iconBg: 'bg-[#DBEAFE]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6.5" fill="#2563EB" />
        <path d="M5.3 8.1L7.1 9.9L10.8 6.2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const INITIAL_REQUESTS = [
  {
    id: 1,
    type: 'Annual Leave',
    iconType: 'plane-green',
    duration: '5 days',
    dates: '20 Jun – 24 Jun 2026',
    reason: 'Family vacation trip',
    status: 'Pending',
    statusClass: 'bg-[#FFEDD5] text-[#C2410C]',
    appliedOn: '10 Jun 2026',
  },
  {
    id: 2,
    type: 'Sick Leave',
    iconType: 'calendar-purple',
    duration: '1 day',
    dates: '15 Jun 2026',
    reason: 'Fever and cold',
    status: 'Approved',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    appliedOn: '8 Jun 2026',
  },
  {
    id: 3,
    type: 'Personal Leave',
    iconType: 'user-blue',
    duration: '1 day',
    dates: '05 Jun 2026',
    reason: 'Personal work',
    status: 'Approved',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    appliedOn: '2 Jun 2026',
  },
  {
    id: 4,
    type: 'Annual Leave',
    iconType: 'plane-green',
    duration: '3 days',
    dates: '10 May – 12 May 2026',
    reason: 'Trip to Manali',
    status: 'Approved',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
    appliedOn: '25 Apr 2026',
  },
  {
    id: 5,
    type: 'Comp Off',
    iconType: 'clock-orange',
    duration: '1 day',
    dates: '20 Apr 2026',
    reason: 'Extra working hours',
    status: 'Cancelled',
    statusClass: 'bg-[#F1F5F9] text-[#475569]',
    appliedOn: '18 Apr 2026',
  },
];

const LEAVE_BALANCES = [
  {
    label: 'Annual Leave',
    used: 18,
    total: 24,
    barColor: 'bg-[#10B981]',
    percent: (18 / 24) * 100,
  },
  {
    label: 'Sick Leave',
    used: 7,
    total: 12,
    barColor: 'bg-[#8B5CF6]',
    percent: (7 / 12) * 100,
  },
  {
    label: 'Personal Leave',
    used: 5,
    total: 6,
    barColor: 'bg-[#2563EB]',
    percent: (5 / 6) * 100,
  },
  {
    label: 'Comp Off',
    used: 2,
    total: 5,
    barColor: 'bg-[#F59E0B]',
    percent: (2 / 5) * 100,
  },
];

const UPCOMING_LEAVES = [
  {
    id: 1,
    title: 'Annual Leave',
    dates: '20 Jun – 24 Jun 2026',
    badge: '5 Days',
    badgeClass: 'bg-[#DCFCE7] text-[#15803D]',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: '#16A34A',
  },
  {
    id: 2,
    title: 'Personal Leave',
    dates: '05 Jul 2026',
    badge: '1 Day',
    badgeClass: 'bg-[#DBEAFE] text-[#2563EB]',
    iconBg: 'bg-[#DBEAFE]',
    iconColor: '#2563EB',
  },
  {
    id: 3,
    title: 'Sick Leave',
    dates: '15 Jul 2026',
    badge: '1 Day',
    badgeClass: 'bg-[#F3E8FF] text-[#7C3AED]',
    iconBg: 'bg-[#F3E8FF]',
    iconColor: '#7C3AED',
  },
];

function LeaveTypeIcon({ type }) {
  if (type === 'plane-green') {
    return (
      <div className="w-[26px] h-[26px] rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 1.5L8.2 5.4L12.5 6.8V8L8.2 7.2L7.8 10.8L9.5 11.9V12.7L7 12L4.5 12.7V11.9L6.2 10.8L5.8 7.2L1.5 8V6.8L5.8 5.4L7 1.5Z"
            fill="#16A34A"
          />
        </svg>
      </div>
    );
  }
  if (type === 'calendar-purple') {
    return (
      <div className="w-[26px] h-[26px] rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="2" y="2.5" width="10" height="9.5" rx="1.8" stroke="#7C3AED" strokeWidth="1.4" />
          <path d="M2 5.5H12" stroke="#7C3AED" strokeWidth="1.4" />
          <path d="M4.5 1.5V3M9.5 1.5V3" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'user-blue') {
    return (
      <div className="w-[26px] h-[26px] rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0">
        <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="7" cy="7" r="5.5" fill="#2563EB" />
          <circle cx="7" cy="5.3" r="1.8" fill="white" />
          <path d="M4.2 10.3C4.5 8.9 5.6 8.2 7 8.2C8.4 8.2 9.5 8.9 9.8 10.3" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-[26px] h-[26px] rounded-full bg-[#FFEDD5] flex items-center justify-center shrink-0">
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="5.2" stroke="#EA580C" strokeWidth="1.4" />
        <path d="M7 4.2V7L8.8 8.2" stroke="#EA580C" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function LeaveRequests({ searchQuery = '' }) {
  const [requests, setRequests] = useState(INITIAL_REQUESTS);
  const [statusTab, setStatusTab] = useState('All Requests');
  const [typeFilter, setTypeFilter] = useState('All Types');

  // Form states matching the screenshot defaults
  const [leaveType, setLeaveType] = useState('Annual Leave');
  const [fromDate, setFromDate] = useState('20 Jun 2026');
  const [toDate, setToDate] = useState('24 Jun 2026');
  const [duration, setDuration] = useState('5 Days');
  const [reason, setReason] = useState('Family vacation trip');
  const [attachmentName, setAttachmentName] = useState('');

  const handleSubmitRequest = (e) => {
    e.preventDefault();
    if (!reason.trim()) return;

    const iconMap = {
      'Annual Leave': 'plane-green',
      'Sick Leave': 'calendar-purple',
      'Personal Leave': 'user-blue',
      'Comp Off': 'clock-orange',
    };

    const newReq = {
      id: Date.now(),
      type: leaveType,
      iconType: iconMap[leaveType] || 'plane-green',
      duration: duration.toLowerCase(),
      dates: fromDate === toDate ? fromDate : `${fromDate} – ${toDate}`,
      reason: reason.trim(),
      status: 'Pending',
      statusClass: 'bg-[#FFEDD5] text-[#C2410C]',
      appliedOn: '16 Jun 2026',
    };

    setRequests((prev) => [newReq, ...prev]);
  };

  const filteredRequests = requests.filter((req) => {
    const matchesStatus = statusTab === 'All Requests' || req.status === statusTab;
    const matchesType = typeFilter === 'All Types' || req.type === typeFilter;
    const matchesSearch =
      !searchQuery.trim() ||
      req.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.reason.toLowerCase().includes(searchQuery.toLowerCase()) ||
      req.status.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStatus && matchesType && matchesSearch;
  });

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      {/* Page Title & Primary CTA Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[20px]">
        <div>
          <h1 className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
            Leave Requests
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
            Request time off and track your leave status
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            const el = document.getElementById('apply-leave-card');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="h-[40px] px-[18px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold leading-[16px] flex items-center gap-[8px] self-start sm:self-auto transition-colors shadow-sm"
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 1V11M1 6H11" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <span>New Leave Request</span>
        </button>
      </div>

      {/* 4 Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[24px] mb-[24px]">
        {SUMMARY_CARDS.map((card) => (
          <div
            key={card.id}
            className="bg-white rounded-[16px] p-[20px] min-h-[118px] flex items-start gap-[14px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <div className={`w-[36px] h-[36px] rounded-full ${card.iconBg} flex items-center justify-center shrink-0 mt-[2px]`}>
              {card.icon}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-[12px] font-bold leading-[15px] text-[#475569]">
                {card.label}
              </span>
              <div className="flex items-baseline mt-[5px]">
                <span className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
                  {card.value}
                </span>
                <span className="text-[13px] font-bold leading-[16px] text-[#475569] ml-[5px]">
                  {card.unit}
                </span>
              </div>
              <button
                type="button"
                className="inline-flex items-center gap-[4px] text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline mt-[8px] w-fit"
              >
                <span>{card.linkText}</span>
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Main Content */}
      <div className="flex flex-col xl:flex-row gap-[24px] items-start">
        {/* Left Column: Apply for Leave Form + Requests Table */}
        <div className="w-full flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Card 1: Apply for Leave */}
          <div
            id="apply-leave-card"
            className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]"
          >
            <h2 className="text-[16px] font-bold leading-[19px] text-[#0F172A] mb-[18px]">
              Apply for Leave
            </h2>

            <form onSubmit={handleSubmitRequest}>
              {/* Row 1: Leave Type, From Date, To Date, Duration */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[16px] mb-[16px]">
                {/* Leave Type */}
                <div>
                  <label className="block text-[12px] font-bold leading-[15px] text-[#0F172A] mb-[8px]">
                    Leave Type
                  </label>
                  <div className="relative">
                    <select
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      className="w-full h-[40px] rounded-[8px] border border-[#CBD5E1] bg-white pl-[12px] pr-[30px] text-[13px] font-normal text-[#0F172A] appearance-none focus:outline-none focus:border-[#2563EB] cursor-pointer"
                    >
                      <option value="Annual Leave">Annual Leave</option>
                      <option value="Sick Leave">Sick Leave</option>
                      <option value="Personal Leave">Personal Leave</option>
                      <option value="Comp Off">Comp Off</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#475569]"
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* From Date */}
                <div>
                  <label className="block text-[12px] font-bold leading-[15px] text-[#0F172A] mb-[8px]">
                    From Date
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={fromDate}
                      onChange={(e) => setFromDate(e.target.value)}
                      className="w-full h-[40px] rounded-[8px] border border-[#CBD5E1] bg-white pl-[12px] pr-[32px] text-[13px] font-normal text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                    />
                    <span className="pointer-events-none absolute right-[11px] text-[#94A3B8]">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="2.5" width="11" height="10" rx="1.8" stroke="#94A3B8" strokeWidth="1.2" />
                        <path d="M1.5 5.5H12.5" stroke="#94A3B8" strokeWidth="1.2" />
                        <path d="M4.5 1.2V3M9.5 1.2V3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* To Date */}
                <div>
                  <label className="block text-[12px] font-bold leading-[15px] text-[#0F172A] mb-[8px]">
                    To Date
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type="text"
                      value={toDate}
                      onChange={(e) => setToDate(e.target.value)}
                      className="w-full h-[40px] rounded-[8px] border border-[#CBD5E1] bg-white pl-[12px] pr-[32px] text-[13px] font-normal text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                    />
                    <span className="pointer-events-none absolute right-[11px] text-[#94A3B8]">
                      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.5" y="2.5" width="11" height="10" rx="1.8" stroke="#94A3B8" strokeWidth="1.2" />
                        <path d="M1.5 5.5H12.5" stroke="#94A3B8" strokeWidth="1.2" />
                        <path d="M4.5 1.2V3M9.5 1.2V3" stroke="#94A3B8" strokeWidth="1.2" strokeLinecap="round" />
                      </svg>
                    </span>
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-[12px] font-bold leading-[15px] text-[#0F172A] mb-[8px]">
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      value={duration}
                      onChange={(e) => setDuration(e.target.value)}
                      className="w-full h-[40px] rounded-[8px] border border-[#CBD5E1] bg-white pl-[12px] pr-[30px] text-[13px] font-normal text-[#0F172A] appearance-none focus:outline-none focus:border-[#2563EB] cursor-pointer"
                    >
                      <option value="1 Day">1 Day</option>
                      <option value="2 Days">2 Days</option>
                      <option value="3 Days">3 Days</option>
                      <option value="4 Days">4 Days</option>
                      <option value="5 Days">5 Days</option>
                    </select>
                    <svg
                      className="pointer-events-none absolute right-[12px] top-1/2 -translate-y-1/2 text-[#475569]"
                      width="10"
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

              {/* Row 2: Reason + Attachment (Optional) */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
                {/* Reason */}
                <div>
                  <label className="block text-[12px] font-bold leading-[15px] text-[#0F172A] mb-[8px]">
                    Reason
                  </label>
                  <textarea
                    rows={2}
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                    placeholder="Enter reason for leave..."
                    className="w-full h-[64px] rounded-[8px] border border-[#CBD5E1] bg-white px-[12px] py-[10px] text-[13px] font-normal text-[#0F172A] resize-none focus:outline-none focus:border-[#2563EB]"
                  />
                </div>

                {/* Attachment (Optional) */}
                <div>
                  <label className="block text-[12px] leading-[15px] mb-[8px]">
                    <span className="font-bold text-[#0F172A]">Attachment </span>
                    <span className="font-normal text-[#64748B]">(Optional)</span>
                  </label>
                  <label className="w-full h-[64px] rounded-[8px] border-[1.5px] border-dashed border-[#93C5FD] bg-[#F8FAFC] hover:bg-[#EFF6FF]/60 px-[16px] flex items-center gap-[12px] cursor-pointer transition-colors">
                    <input
                      type="file"
                      className="hidden"
                      onChange={(e) => setAttachmentName(e.target.files?.[0]?.name || '')}
                    />
                    <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M15.5 6.2C15.1 3.3 12.6 1 9.5 1C6.8 1 4.5 2.8 3.7 5.3C1.6 5.7 0 7.5 0 9.7C0 12.2 2 14.2 4.5 14.2H15.2C17.3 14.2 19 12.5 19 10.4C19 8.4 17.5 6.6 15.5 6.2ZM11 9.2V12.2H8V9.2H5.8L9.5 5.2L13.2 9.2H11Z"
                        fill="#2563EB"
                      />
                    </svg>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12px] font-bold leading-[15px] text-[#0F172A] truncate">
                        {attachmentName || 'Upload document'}
                      </span>
                      <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                        PDF, JPG, PNG (Max 5MB)
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button Row */}
              <div className="flex justify-end mt-[16px]">
                <button
                  type="submit"
                  className="h-[40px] px-[26px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold leading-[16px] transition-colors shadow-sm"
                >
                  Submit Request
                </button>
              </div>
            </form>
          </div>

          {/* Card 2: Requests History Table */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            {/* Tabs & Filter Dropdown */}
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-[22px] overflow-x-auto">
                {['All Requests', 'Pending', 'Approved', 'Rejected', 'Cancelled'].map((tab) => {
                  const isActive = statusTab === tab;
                  return (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setStatusTab(tab)}
                      className={`pb-[12px] text-[13px] leading-[16px] whitespace-nowrap border-b-2 transition-colors ${
                        isActive
                          ? 'border-[#2563EB] text-[#2563EB] font-bold'
                          : 'border-transparent text-[#475569] font-semibold hover:text-[#0F172A]'
                      }`}
                    >
                      {tab}
                    </button>
                  );
                })}
              </div>

              <div className="relative mb-[8px]">
                <span className="pointer-events-none absolute left-[10px] top-1/2 -translate-y-1/2 text-[#475569]">
                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5H11M3 5H9M4.5 8.5H7.5" stroke="#475569" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </span>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="h-[32px] pl-[28px] pr-[26px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-bold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
                >
                  <option value="All Types">All Types</option>
                  <option value="Annual Leave">Annual Leave</option>
                  <option value="Sick Leave">Sick Leave</option>
                  <option value="Personal Leave">Personal Leave</option>
                  <option value="Comp Off">Comp Off</option>
                </select>
                <svg
                  className="pointer-events-none absolute right-[9px] top-1/2 -translate-y-1/2 text-[#475569]"
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

            {/* Table */}
            <div className="overflow-x-auto mt-[14px]">
              <table className="w-full min-w-[680px] border-collapse">
                <thead>
                  <tr className="text-left text-[11px] font-semibold leading-[13px] text-[#94A3B8] border-b border-[#F8FAFC]">
                    <th className="pb-[10px] font-semibold w-[22%]">Type</th>
                    <th className="pb-[10px] font-semibold w-[11%]">Duration</th>
                    <th className="pb-[10px] font-semibold w-[22%]">Dates</th>
                    <th className="pb-[10px] font-semibold w-[20%]">Reason</th>
                    <th className="pb-[10px] font-semibold w-[11%]">Status</th>
                    <th className="pb-[10px] font-semibold w-[10%]">Applied On</th>
                    <th className="pb-[10px] font-semibold text-right w-[4%]">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {filteredRequests.map((req) => (
                    <tr key={req.id} className="group hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-[14px] pr-2">
                        <div className="flex items-center gap-[10px]">
                          <LeaveTypeIcon type={req.iconType} />
                          <span className="text-[12.5px] font-bold leading-[15px] text-[#0F172A] whitespace-nowrap">
                            {req.type}
                          </span>
                        </div>
                      </td>
                      <td className="py-[14px] pr-2 text-[12px] font-bold text-[#334155] whitespace-nowrap">
                        {req.duration}
                      </td>
                      <td className="py-[14px] pr-2 text-[12px] font-normal text-[#475569] whitespace-nowrap">
                        {req.dates}
                      </td>
                      <td className="py-[14px] pr-2 text-[12px] font-normal text-[#64748B] truncate max-w-[140px]">
                        {req.reason}
                      </td>
                      <td className="py-[14px] pr-2">
                        <span
                          className={`inline-flex items-center justify-center px-[10px] py-[3px] rounded-[6px] text-[11px] font-bold leading-[13px] ${req.statusClass}`}
                        >
                          {req.status}
                        </span>
                      </td>
                      <td className="py-[14px] pr-2 text-[12px] font-normal text-[#64748B] whitespace-nowrap">
                        {req.appliedOn}
                      </td>
                      <td className="py-[14px] text-right">
                        <button
                          type="button"
                          className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9] transition-colors inline-flex items-center justify-center"
                          aria-label="Row actions"
                        >
                          <svg width="3" height="13" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="2" cy="2" r="1.4" fill="currentColor" />
                            <circle cx="2" cy="7" r="1.4" fill="currentColor" />
                            <circle cx="2" cy="12" r="1.4" fill="currentColor" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Footer */}
            <div className="mt-[18px] pt-[14px] border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="text-[12px] font-normal text-[#94A3B8]">
                Showing 1 to {filteredRequests.length} of 8 requests
              </span>

              <div className="flex items-center gap-[6px]">
                <button
                  type="button"
                  className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] flex items-center justify-center text-[11px]"
                  aria-label="Previous page"
                >
                  «
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
                  className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#64748B] hover:bg-[#F8FAFC] flex items-center justify-center"
                  aria-label="Next page"
                >
                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Leave Balance + Upcoming Leaves + Quick Actions */}
        <div className="w-full xl:w-[336px] flex flex-col gap-[24px] shrink-0">
          {/* Card 1: Leave Balance */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[18px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Leave Balance
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View Details
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              {LEAVE_BALANCES.map((item) => (
                <div key={item.label}>
                  <div className="flex items-center justify-between mb-[7px]">
                    <span className="text-[12px] font-bold leading-[15px] text-[#0F172A]">
                      {item.label}
                    </span>
                    <span className="text-[12px] leading-[15px]">
                      <strong className="font-bold text-[#0F172A]">{item.used}</strong>
                      <span className="text-[#64748B]"> / {item.total} days</span>
                    </span>
                  </div>
                  <div className="w-full h-[6px] rounded-full bg-[#F1F5F9] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${item.barColor}`}
                      style={{ width: `${item.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Upcoming Leaves */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[18px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Upcoming Leaves
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View Calendar
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              {UPCOMING_LEAVES.map((leave) => (
                <div key={leave.id} className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-[12px] min-w-0">
                    <div
                      className={`w-[34px] h-[34px] rounded-full ${leave.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="2" y="2.5" width="10" height="9.5" rx="1.8" stroke={leave.iconColor} strokeWidth="1.4" />
                        <path d="M2 5.5H12" stroke={leave.iconColor} strokeWidth="1.4" />
                        <path d="M4.5 1.5V3M9.5 1.5V3" stroke={leave.iconColor} strokeWidth="1.4" strokeLinecap="round" />
                      </svg>
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[13px] font-bold leading-[16px] text-[#0F172A] truncate">
                        {leave.title}
                      </span>
                      <span className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                        {leave.dates}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`px-[8px] py-[3px] rounded-[6px] text-[10.5px] font-bold leading-[13px] shrink-0 ${leave.badgeClass}`}
                  >
                    {leave.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Quick Actions */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mb-[18px]">
              Quick Actions
            </h2>

            <div className="grid grid-cols-4 gap-[8px]">
              {/* Action 1: New Request */}
              <button
                type="button"
                onClick={() => {
                  const el = document.getElementById('apply-leave-card');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-full bg-[#EFF6FF] group-hover:bg-[#DBEAFE] flex items-center justify-center transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 2.5V11.5M2.5 7H11.5" stroke="#2563EB" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-bold leading-[13px] text-[#334155] mt-[8px] whitespace-nowrap">
                  New Request
                </span>
              </button>

              {/* Action 2: Leave Balance */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-full bg-[#DCFCE7] group-hover:bg-[#BBF7D0] flex items-center justify-center transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5.5" fill="#16A34A" />
                    <path d="M7 3.5V7L9.5 8.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-bold leading-[13px] text-[#334155] mt-[8px] whitespace-nowrap">
                  Leave Balance
                </span>
              </button>

              {/* Action 3: My Calendar */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-full bg-[#F3E8FF] group-hover:bg-[#E9D5FF] flex items-center justify-center transition-colors">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="2" y="2.5" width="10" height="9.5" rx="1.8" stroke="#7C3AED" strokeWidth="1.4" />
                    <path d="M2 5.5H12" stroke="#7C3AED" strokeWidth="1.4" />
                    <path d="M4.5 1.5V3M9.5 1.5V3" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-bold leading-[13px] text-[#334155] mt-[8px] whitespace-nowrap">
                  My Calendar
                </span>
              </button>

              {/* Action 4: Leave History */}
              <button
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[42px] h-[42px] rounded-full bg-[#FFEDD5] group-hover:bg-[#FED7AA] flex items-center justify-center transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M2.2 7C2.2 4.35 4.35 2.2 7 2.2C9.65 2.2 11.8 4.35 11.8 7C11.8 9.65 9.65 11.8 7 11.8C5.2 11.8 3.65 10.8 2.8 9.3"
                      stroke="#EA580C"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                    />
                    <path d="M7 4.5V7L8.8 8.2" stroke="#EA580C" strokeWidth="1.4" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="text-[10.5px] font-bold leading-[13px] text-[#334155] mt-[8px] whitespace-nowrap">
                  Leave History
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
