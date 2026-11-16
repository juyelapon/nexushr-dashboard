import React, { useState } from 'react';

const SUMMARY_CARDS = [
  {
    id: 'completed',
    label: 'Tasks Completed',
    value: '18',
    trend: '↑ 12%',
    trendColor: 'text-[#16A34A]',
    subtext: ' from last month',
    iconBg: 'bg-[#EFF6FF]',
    icon: (
      <svg width="15" height="15" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.5" y="1.5" width="13" height="13" rx="2.5" fill="#2563EB" />
        <path d="M5 8.2L7 10.2L11.2 5.8" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'in-progress',
    label: 'Tasks In Progress',
    value: '5',
    trend: '↓ 8%',
    trendColor: 'text-[#DC2626]',
    subtext: ' from last month',
    iconBg: 'bg-[#DCFCE7]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6.5" fill="#16A34A" />
        <path d="M5.3 8.1L7.1 9.9L10.8 6.2" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'hours',
    label: 'Total Hours Logged',
    value: '142h 30m',
    trend: '↑ 10%',
    trendColor: 'text-[#16A34A]',
    subtext: ' from last month',
    iconBg: 'bg-[#FFEDD5]',
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="8" r="6" stroke="#EA580C" strokeWidth="1.5" />
        <path d="M8 4.8V8L10.2 9.5" stroke="#EA580C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'submitted',
    label: 'Reports Submitted',
    value: '7',
    trend: '↑ 16%',
    trendColor: 'text-[#16A34A]',
    subtext: ' from last month',
    iconBg: 'bg-[#F3E8FF]',
    icon: (
      <svg width="13" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 1.5H8.8L12.5 5.2V13.5C12.5 14.33 11.83 15 11 15H2.5C1.67 15 1 14.33 1 13.5V3C1 2.17 1.67 1.5 2.5 1.5Z"
          fill="#7C3AED"
        />
        <path d="M8.5 1.5V5.5H12.5" fill="#DDD6FE" />
        <path d="M4 8.5H9.5M4 11H7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
];

const RECENT_REPORTS = [
  {
    id: 1,
    name: 'Project Progress Report',
    iconColor: '#16A34A',
    type: 'Project',
    submittedOn: 'May 31, 2024',
    status: 'Submitted',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
  },
  {
    id: 2,
    name: 'Time Log Report',
    iconColor: '#7C3AED',
    type: 'Time',
    submittedOn: 'May 30, 2024',
    status: 'Submitted',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
  },
  {
    id: 3,
    name: 'Attendance Report',
    iconColor: '#EA580C',
    type: 'Attendance',
    submittedOn: 'May 30, 2024',
    status: 'Submitted',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
  },
  {
    id: 4,
    name: 'Task Performance Report',
    iconColor: '#2563EB',
    type: 'Performance',
    submittedOn: 'May 28, 2024',
    status: 'Submitted',
    statusClass: 'bg-[#DCFCE7] text-[#15803D]',
  },
  {
    id: 5,
    name: 'Monthly Summary Report',
    iconColor: '#7C3AED',
    type: 'Summary',
    submittedOn: 'May 25, 2024',
    status: 'Approved',
    statusClass: 'bg-[#DBEAFE] text-[#2563EB]',
  },
];

const QUICK_REPORTS = [
  {
    id: 'task',
    title: 'Task Report',
    subtitle: 'View tasks summary',
    iconBg: 'bg-[#EFF6FF]',
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="12" rx="2" fill="#2563EB" />
        <path d="M4.2 7.2L6 9L9.8 5" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'time',
    title: 'Time Log Report',
    subtitle: 'View time analytics',
    iconBg: 'bg-[#F3E8FF]',
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="5.5" stroke="#7C3AED" strokeWidth="1.4" />
        <path d="M7 4V7L9 8.2" stroke="#7C3AED" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'attendance',
    title: 'Attendance Report',
    subtitle: 'View attendance status',
    iconBg: 'bg-[#DCFCE7]',
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1.8" y="2.5" width="10.4" height="9.5" rx="1.6" stroke="#16A34A" strokeWidth="1.4" />
        <path d="M1.8 5.5H12.2" stroke="#16A34A" strokeWidth="1.4" />
        <path d="M4.5 1.5V3M9.5 1.5V3" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'project',
    title: 'Project Report',
    subtitle: 'View project progress',
    iconBg: 'bg-[#FFEDD5]',
    icon: (
      <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 2.2C1 1.54 1.54 1 2.2 1H5.2L6.6 2.5H11.8C12.46 2.5 13 3.04 13 3.7V9.8C13 10.46 12.46 11 11.8 11H2.2C1.54 11 1 10.46 1 9.8V2.2Z"
          fill="#EA580C"
        />
      </svg>
    ),
  },
  {
    id: 'performance',
    title: 'Performance Report',
    subtitle: 'View performance stats',
    iconBg: 'bg-[#EFF6FF]',
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="12" rx="2" fill="#2563EB" />
        <path d="M4.2 9.8V7.2M7 9.8V4.5M9.8 9.8V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'custom',
    title: 'Custom Report',
    subtitle: 'Create custom report',
    iconBg: 'bg-[#FCE7F3]',
    icon: (
      <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 3H12M2 6H12M2 9H12" stroke="#DB2777" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="5" cy="3" r="1.4" fill="#DB2777" />
        <circle cx="9" cy="6" r="1.4" fill="#DB2777" />
        <circle cx="4" cy="9" r="1.4" fill="#DB2777" />
      </svg>
    ),
  },
];

export default function Reports({ searchQuery = '' }) {
  const [period, setPeriod] = useState('Monthly');
  const [dateRange, setDateRange] = useState('May 1 – May 31, 2024');

  const filteredReports = RECENT_REPORTS.filter((rep) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      rep.name.toLowerCase().includes(q) ||
      rep.type.toLowerCase().includes(q) ||
      rep.status.toLowerCase().includes(q)
    );
  });

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      {/* Page Title & Right Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[20px]">
        <div>
          <h1 className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
            Reports
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
            View and analyze your work and activity reports
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-[12px] self-start sm:self-auto">
          {/* Date Range Select */}
          <div className="relative">
            <span className="pointer-events-none absolute left-[12px] top-1/2 -translate-y-1/2 text-[#475569]">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="1.5" y="2.5" width="11" height="10" rx="1.8" stroke="#475569" strokeWidth="1.3" />
                <path d="M1.5 5.5H12.5" stroke="#475569" strokeWidth="1.3" />
                <path d="M4.5 1.2V3M9.5 1.2V3" stroke="#475569" strokeWidth="1.3" strokeLinecap="round" />
              </svg>
            </span>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="h-[40px] pl-[34px] pr-[30px] rounded-[8px] border border-[#CBD5E1] bg-white text-[12.5px] font-bold text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
            >
              <option value="May 1 – May 31, 2024">May 1 – May 31, 2024</option>
              <option value="Apr 1 – Apr 30, 2024">Apr 1 – Apr 30, 2024</option>
              <option value="Mar 1 – Mar 31, 2024">Mar 1 – Mar 31, 2024</option>
            </select>
            <svg
              className="pointer-events-none absolute right-[11px] top-1/2 -translate-y-1/2 text-[#475569]"
              width="9"
              height="6"
              viewBox="0 0 10 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          {/* Export Report Button */}
          <button
            type="button"
            className="h-[40px] px-[18px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold leading-[16px] flex items-center gap-[8px] transition-colors shadow-sm"
          >
            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9.5V1.5M6 1.5L3 4.5M6 1.5L9 4.5M1.5 11.5H10.5"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span>Export Report</span>
          </button>
        </div>
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
              <span className="text-[11px] leading-[14px] text-[#94A3B8] mt-[6px]">
                <strong className={`font-bold ${card.trendColor}`}>
                  {card.trend}
                </strong>
                {card.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Main Layout */}
      <div className="flex flex-col xl:flex-row gap-[24px] items-start">
        {/* Left Area: Charts Row + Recent Reports Table */}
        <div className="w-full flex-1 min-w-0 flex flex-col gap-[24px]">
          {/* Top Row: Task Overview (col-span-7) + Task Completion Summary (col-span-5) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[24px]">
            {/* Task Overview Line Chart */}
            <div className="lg:col-span-7 bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
              <div className="flex items-center justify-between mb-[14px]">
                <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                  Task Overview
                </h2>

                <div className="relative">
                  <select
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    className="h-[28px] pl-[10px] pr-[22px] rounded-[6px] border border-[#E2E8F0] bg-white text-[11.5px] font-bold text-[#334155] appearance-none cursor-pointer focus:outline-none"
                  >
                    <option value="Monthly">Monthly</option>
                    <option value="Weekly">Weekly</option>
                  </select>
                  <svg
                    className="pointer-events-none absolute right-[7px] top-1/2 -translate-y-1/2 text-[#475569]"
                    width="8"
                    height="5"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>

              {/* Legend */}
              <div className="flex flex-wrap items-center gap-[16px] mb-[16px] text-[11px] text-[#475569]">
                <div className="flex items-center gap-[6px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#16A34A]" />
                  <span>Completed</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB]" />
                  <span>In Progress</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#EA580C]" />
                  <span>Pending</span>
                </div>
                <div className="flex items-center gap-[6px]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#DC2626]" />
                  <span>Overdue</span>
                </div>
              </div>

              {/* Line Chart SVG */}
              <div className="w-full overflow-x-auto">
                <svg
                  className="w-full h-[185px] min-w-[360px]"
                  viewBox="0 0 410 185"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Y-axis labels & horizontal grid lines */}
                  {[
                    { y: 18, label: '40' },
                    { y: 53, label: '30' },
                    { y: 88, label: '20' },
                    { y: 123, label: '10' },
                    { y: 158, label: '0' },
                  ].map((row) => (
                    <g key={row.label}>
                      <text
                        x="4"
                        y={row.y + 3}
                        fill="#94A3B8"
                        fontSize="9.5"
                        fontFamily="Inter, sans-serif"
                      >
                        {row.label}
                      </text>
                      <line
                        x1="28"
                        y1={row.y}
                        x2="395"
                        y2={row.y}
                        stroke="#F1F5F9"
                        strokeWidth="1"
                      />
                    </g>
                  ))}

                  {/* Shaded area under Completed & In Progress */}
                  <path
                    d="M42 123L105 106L168 85L231 94L294 68L357 54L395 45V158H42V123Z"
                    fill="#16A34A"
                    fillOpacity="0.06"
                  />
                  <path
                    d="M42 132L105 116L168 111L231 103L294 105L357 88L395 83V158H42V132Z"
                    fill="#2563EB"
                    fillOpacity="0.06"
                  />

                  {/* Green Line (Completed) */}
                  <polyline
                    points="42,123 105,106 168,85 231,94 294,68 357,54 395,45"
                    fill="none"
                    stroke="#16A34A"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Blue Line (In Progress) */}
                  <polyline
                    points="42,132 105,116 168,111 231,103 294,105 357,88 395,83"
                    fill="none"
                    stroke="#2563EB"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Orange Line (Pending) */}
                  <polyline
                    points="42,141 105,144 168,136 231,141 294,137 357,128 395,131"
                    fill="none"
                    stroke="#EA580C"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Red Line (Overdue) */}
                  <polyline
                    points="42,157 105,157 168,157 231,157 294,157 357,157 395,157"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />

                  {/* X-axis Labels */}
                  {[
                    { x: 42, label: 'May 1' },
                    { x: 105, label: 'May 8' },
                    { x: 168, label: 'May 15' },
                    { x: 231, label: 'May 22' },
                    { x: 294, label: 'May 29' },
                    { x: 382, label: 'May 31' },
                  ].map((col) => (
                    <text
                      key={col.label}
                      x={col.x}
                      y="176"
                      textAnchor="middle"
                      fill="#94A3B8"
                      fontSize="9.5"
                      fontFamily="Inter, sans-serif"
                    >
                      {col.label}
                    </text>
                  ))}
                </svg>
              </div>
            </div>

            {/* Task Completion Summary Donut Card */}
            <div className="lg:col-span-5 bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)] flex flex-col justify-between">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mb-[16px]">
                Task Completion Summary
              </h2>

              <div className="flex items-center justify-between gap-[16px] my-auto py-[8px]">
                {/* Segmented Donut SVG */}
                <div className="relative w-[134px] h-[134px] flex items-center justify-center shrink-0">
                  <svg width="134" height="134" viewBox="0 0 134 134" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Base light grey ring */}
                    <circle cx="67" cy="67" r="52" stroke="#E2E8F0" strokeWidth="16" />
                    {/* Green segments (top-left, top-right, bottom-left, bottom-right) */}
                    <circle
                      cx="67"
                      cy="67"
                      r="52"
                      stroke="#16A34A"
                      strokeWidth="16"
                      strokeDasharray="34 48"
                      strokeDashoffset="18"
                    />
                    {/* Red accent ticks */}
                    <circle
                      cx="67"
                      cy="67"
                      r="52"
                      stroke="#DC2626"
                      strokeWidth="16"
                      strokeDasharray="6 76"
                      strokeDashoffset="-16"
                    />
                  </svg>

                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[10px] font-normal text-[#94A3B8]">
                      Total
                    </span>
                    <span className="text-[22px] font-bold leading-[26px] text-[#0F172A]">
                      28
                    </span>
                    <span className="text-[10px] font-normal text-[#64748B]">
                      Tasks
                    </span>
                  </div>
                </div>

                {/* Breakdown Legend */}
                <div className="flex flex-col gap-[12px] pr-2">
                  {[
                    { label: 'Completed', stats: '18 (64%)', dot: 'bg-[#16A34A]' },
                    { label: 'In Progress', stats: '5 (18%)', dot: 'bg-[#2563EB]' },
                    { label: 'Pending', stats: '4 (14%)', dot: 'bg-[#EA580C]' },
                    { label: 'Overdue', stats: '1 (4%)', dot: 'bg-[#DC2626]' },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-[8px]">
                      <span className={`w-[7px] h-[7px] rounded-full ${item.dot} mt-[4px] shrink-0`} />
                      <div className="flex flex-col">
                        <span className="text-[11.5px] font-bold leading-[14px] text-[#0F172A]">
                          {item.label}
                        </span>
                        <span className="text-[10.5px] font-normal leading-[13px] text-[#64748B] mt-[1px]">
                          {item.stats}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card: Recent Reports Table */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Recent Reports
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] border-collapse">
                <thead>
                  <tr className="text-left text-[11px] font-semibold leading-[13px] text-[#94A3B8] border-b border-[#F1F5F9]">
                    <th className="pb-[10px] font-semibold w-[38%]">Report Name</th>
                    <th className="pb-[10px] font-semibold w-[18%]">Type</th>
                    <th className="pb-[10px] font-semibold w-[20%]">Submitted On</th>
                    <th className="pb-[10px] font-semibold w-[14%]">Status</th>
                    <th className="pb-[10px] font-semibold text-right w-[10%]">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#F1F5F9]">
                  {filteredReports.map((rep) => (
                    <tr key={rep.id} className="group hover:bg-[#F8FAFC]/60 transition-colors">
                      <td className="py-[13px] pr-2">
                        <div className="flex items-center gap-[10px]">
                          <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M2 1H7.5L10.5 4V12C10.5 12.55 10.05 13 9.5 13H2C1.45 13 1 12.55 1 12V2C1 1.45 1.45 1 2 1Z"
                              fill={rep.iconColor}
                            />
                            <path d="M3 6.5H8M3 9H6.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
                          </svg>
                          <span className="text-[12.5px] font-bold leading-[15px] text-[#0F172A]">
                            {rep.name}
                          </span>
                        </div>
                      </td>

                      <td className="py-[13px] pr-2 text-[12px] font-normal text-[#64748B]">
                        {rep.type}
                      </td>

                      <td className="py-[13px] pr-2 text-[12px] font-normal text-[#64748B]">
                        {rep.submittedOn}
                      </td>

                      <td className="py-[13px] pr-2">
                        <span
                          className={`inline-flex items-center justify-center px-[10px] py-[3px] rounded-[6px] text-[10.5px] font-bold leading-[13px] ${rep.statusClass}`}
                        >
                          {rep.status}
                        </span>
                      </td>

                      <td className="py-[13px] text-right">
                        <div className="inline-flex items-center gap-[12px] text-[#64748B]">
                          <button
                            type="button"
                            className="hover:text-[#0F172A] transition-colors"
                            aria-label="View report"
                          >
                            <svg width="15" height="11" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                d="M1 6C2.4 2.8 5 1.2 8 1.2C11 1.2 13.6 2.8 15 6C13.6 9.2 11 10.8 8 10.8C5 10.8 2.4 9.2 1 6Z"
                                fill="#475569"
                              />
                              <circle cx="8" cy="6" r="2.2" fill="white" />
                            </svg>
                          </button>

                          <button
                            type="button"
                            className="text-[#94A3B8] hover:text-[#475569] transition-colors"
                            aria-label="More options"
                          >
                            <svg width="3" height="13" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <circle cx="2" cy="2" r="1.4" fill="currentColor" />
                              <circle cx="2" cy="7" r="1.4" fill="currentColor" />
                              <circle cx="2" cy="12" r="1.4" fill="currentColor" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right Column (w=336px): Quick Reports + Report Insights */}
        <div className="w-full xl:w-[336px] flex flex-col gap-[24px] shrink-0">
          {/* Card 1: Quick Reports */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mb-[16px]">
              Quick Reports
            </h2>

            <div className="flex flex-col gap-[10px]">
              {QUICK_REPORTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="w-full rounded-[10px] border border-[#F1F5F9] bg-[#F8FAFC]/80 hover:bg-[#EFF6FF]/60 hover:border-[#DBEAFE] px-[12px] py-[10px] flex items-center justify-between text-left transition-all"
                >
                  <div className="flex items-center gap-[12px] min-w-0">
                    <div
                      className={`w-[32px] h-[32px] rounded-[8px] ${item.iconBg} flex items-center justify-center shrink-0`}
                    >
                      {item.icon}
                    </div>
                    <div className="flex flex-col min-w-0">
                      <span className="text-[12.5px] font-bold leading-[15px] text-[#0F172A] truncate">
                        {item.title}
                      </span>
                      <span className="text-[10.5px] font-normal leading-[13px] text-[#94A3B8] mt-[2px] truncate">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>

                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>

          {/* Card 2: Report Insights */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mb-[16px]">
              Report Insights
            </h2>

            <div className="flex flex-col gap-[14px]">
              {/* Insight 1 */}
              <div className="flex items-start gap-[10px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0 mt-[1px]">
                  <svg width="10" height="11" viewBox="0 0 10 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 9.5V1.5M5 1.5L1.5 5M5 1.5L8.5 5" stroke="#16A34A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-bold leading-[15px] text-[#0F172A]">
                    Tasks completed increased by 12%
                  </span>
                  <span className="text-[10.5px] font-normal text-[#94A3B8] mt-[2px]">
                    vs last month
                  </span>
                </div>
              </div>

              {/* Insight 2 */}
              <div className="flex items-start gap-[10px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0 mt-[1px]">
                  <div className="w-[14px] h-[14px] rounded-full bg-[#2563EB] text-white text-[9px] font-bold flex items-center justify-center">
                    i
                  </div>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-bold leading-[15px] text-[#0F172A]">
                    Total hours logged increased by 10%
                  </span>
                  <span className="text-[10.5px] font-normal text-[#94A3B8] mt-[2px]">
                    vs last month
                  </span>
                </div>
              </div>

              {/* Insight 3 */}
              <div className="flex items-start gap-[10px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[#FFEDD5] flex items-center justify-center shrink-0 mt-[1px]">
                  <svg width="10" height="12" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.5 1H6.5L9 3.5V10.5C9 11 8.5 11.5 8 11.5H1.5C1 11.5 0.5 11 0.5 10.5V2C0.5 1.5 1 1 1.5 1Z" fill="#EA580C" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[11.5px] font-bold leading-[15px] text-[#0F172A]">
                    Reports submitted increased by 16%
                  </span>
                  <span className="text-[10.5px] font-normal text-[#94A3B8] mt-[2px]">
                    vs last month
                  </span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-[18px] inline-flex items-center gap-[5px] text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
            >
              <span>View Detailed Insights</span>
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 5H8M8 5L5.5 2.5M8 5L5.5 7.5" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
