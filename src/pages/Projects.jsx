import React, { useState } from 'react';
import { FigmaIcons } from '../components/Icons';

const PROJECTS_DATA = [
  {
    id: 1,
    code: 'OL',
    codeBg: 'bg-[#EFF6FF]',
    codeText: 'text-[#2563EB]',
    name: 'OmniLaunch Website Redesign',
    category: 'Website Development',
    progress: 75,
    progressWidth: '75%',
    progressColor: 'bg-[#2563EB]',
    status: 'In Progress',
    statusW: 'w-[76px]',
    statusBg: 'bg-[#EFF6FF]',
    statusText: 'text-[#2563EB]',
    deadline: '20 Jun 2026',
    team: [
      { label: 'SW', bg: 'bg-[#EC4899]', text: 'text-white' },
      { label: 'MJ', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { label: 'CL', bg: 'bg-[#10B981]', text: 'text-white' },
      { label: '+2', bg: 'bg-[#CBD5E1]', text: 'text-[#475569]' },
    ],
  },
  {
    id: 2,
    code: 'MA',
    codeBg: 'bg-[#F0FDF4]',
    codeText: 'text-[#16A34A]',
    name: 'Mobile App Development',
    category: 'Mobile Application',
    progress: 60,
    progressWidth: '60%',
    progressColor: 'bg-[#10B981]',
    status: 'In Progress',
    statusW: 'w-[76px]',
    statusBg: 'bg-[#EFF6FF]',
    statusText: 'text-[#2563EB]',
    deadline: '15 Jul 2026',
    team: [
      { label: 'SW', bg: 'bg-[#EC4899]', text: 'text-white' },
      { label: 'MJ', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { label: 'DL', bg: 'bg-[#8B5CF6]', text: 'text-white' },
      { label: '+3', bg: 'bg-[#CBD5E1]', text: 'text-[#475569]' },
    ],
  },
  {
    id: 3,
    code: 'DP',
    codeBg: 'bg-[#FAF5FF]',
    codeText: 'text-[#7C3AED]',
    name: 'Data Platform Integration',
    category: 'Backend Development',
    progress: 90,
    progressWidth: '90%',
    progressColor: 'bg-[#8B5CF6]',
    status: 'In Progress',
    statusW: 'w-[76px]',
    statusBg: 'bg-[#EFF6FF]',
    statusText: 'text-[#2563EB]',
    deadline: '30 Jun 2026',
    team: [
      { label: 'SW', bg: 'bg-[#EC4899]', text: 'text-white' },
      { label: 'MJ', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { label: 'DL', bg: 'bg-[#8B5CF6]', text: 'text-white' },
      { label: '+1', bg: 'bg-[#CBD5E1]', text: 'text-[#475569]' },
    ],
  },
  {
    id: 4,
    code: 'CM',
    codeBg: 'bg-[#FFF7ED]',
    codeText: 'text-[#EA580C]',
    name: 'CRM System Migration',
    category: 'System Migration',
    progress: 40,
    progressWidth: '40%',
    progressColor: 'bg-[#EA580C]',
    status: 'On Hold',
    statusW: 'w-[64px]',
    statusBg: 'bg-[#FFF7ED]',
    statusText: 'text-[#EA580C]',
    deadline: '10 Aug 2026',
    team: [
      { label: 'SW', bg: 'bg-[#EC4899]', text: 'text-white' },
      { label: 'MJ', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { label: 'CL', bg: 'bg-[#10B981]', text: 'text-white' },
      { label: '+2', bg: 'bg-[#CBD5E1]', text: 'text-[#475569]' },
    ],
  },
  {
    id: 5,
    code: 'MK',
    codeBg: 'bg-[#FEF2F2]',
    codeText: 'text-[#DC2626]',
    name: 'Marketing Campaign Q2',
    category: 'Marketing',
    progress: 100,
    progressWidth: '100%',
    progressColor: 'bg-[#10B981]',
    status: 'Completed',
    statusW: 'w-[70px]',
    statusBg: 'bg-[#F0FDF4]',
    statusText: 'text-[#16A34A]',
    deadline: '25 May 2026',
    team: [
      { label: 'SW', bg: 'bg-[#EC4899]', text: 'text-white' },
      { label: 'MJ', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { label: 'DL', bg: 'bg-[#8B5CF6]', text: 'text-white' },
    ],
  },
];

const TIMELINE_ITEMS = [
  {
    id: 1,
    project: 'OmniLaunch Website Redesign',
    phase: 'Design phase completed',
    phaseColor: 'text-[#2563EB]',
    dotColor: 'bg-[#3B82F6]',
    date: '20 Jun',
  },
  {
    id: 2,
    project: 'Mobile App Development',
    phase: 'Beta testing in progress',
    phaseColor: 'text-[#16A34A]',
    dotColor: 'bg-[#10B981]',
    date: '15 Jul',
  },
  {
    id: 3,
    project: 'Data Platform Integration',
    phase: 'API integration ongoing',
    phaseColor: 'text-[#EA580C]',
    dotColor: 'bg-[#EA580C]',
    date: '30 Jun',
  },
  {
    id: 4,
    project: 'CRM System Migration',
    phase: 'Planning phase',
    phaseColor: 'text-[#64748B]',
    dotColor: 'bg-[#94A3B8]',
    date: '10 Aug',
  },
  {
    id: 5,
    project: 'Marketing Campaign Q2',
    phase: 'Project completed',
    phaseColor: 'text-[#16A34A]',
    dotColor: 'bg-[#10B981]',
    date: '25 May',
  },
];

const TOP_CONTRIBUTORS = [
  {
    id: 1,
    initials: 'SW',
    avatarBg: 'bg-[#EC4899]',
    avatarText: 'text-white',
    name: 'Sarah Wilson',
    barWidth: '80%', // 112/140
    tasks: '24 tasks',
  },
  {
    id: 2,
    initials: 'MJ',
    avatarBg: 'bg-[#3B82F6]',
    avatarText: 'text-white',
    name: 'Mike Johnson',
    barWidth: '60%', // 84/140
    tasks: '18 tasks',
  },
  {
    id: 3,
    initials: 'AJ',
    avatarBg: 'bg-[#10B981]',
    avatarText: 'text-white',
    name: 'Alex Johnson (You)',
    barWidth: '50%', // 70/140
    tasks: '15 tasks',
  },
  {
    id: 4,
    initials: 'DL',
    avatarBg: 'bg-[#E2E8F0]',
    avatarText: 'text-[#475569]',
    name: 'David Lee',
    barWidth: '40%', // 56/140
    tasks: '12 tasks',
  },
];

export default function Projects({ searchQuery = '' }) {
  const [activePage, setActivePage] = useState(1);

  const filteredProjects = PROJECTS_DATA.filter(
    (p) =>
      !searchQuery.trim() ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[18px] pb-[24px] flex flex-col">
      {/* ================= TOP PAGE HEADER & CONTROLS (y=90) ================= */}
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold leading-[27px] text-[#0F172A]">
            Projects
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[2px]">
            Track and manage all your projects in one place.
          </p>
        </div>

        {/* Action Buttons (y=100, h=36, gap=12px) */}
        <div className="flex flex-wrap items-center gap-[12px]">
          {/* All Projects Dropdown (w=120, h=36) */}
          <button
            type="button"
            className="w-[120px] h-[36px] rounded-[8px] bg-white border border-[#E2E8F0] px-[16px] flex items-center justify-between text-[13px] font-bold leading-[16px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          >
            <span>All Projects</span>
            <FigmaIcons.ChevronDown color="#475569" width={10} height={6} />
          </button>

          {/* Filter Dropdown (w=100, h=36) */}
          <button
            type="button"
            className="w-[100px] h-[36px] rounded-[8px] bg-white border border-[#E2E8F0] px-[14px] flex items-center justify-between text-[13px] font-bold leading-[16px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          >
            <div className="flex items-center gap-[7px]">
              <FigmaIcons.FilterBars />
              <span>Filter</span>
            </div>
            <FigmaIcons.ChevronDown color="#475569" width={10} height={6} />
          </button>

          {/* + New Project Button (w=160, h=36) */}
          <button
            type="button"
            className="w-[160px] h-[36px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] px-[20px] flex items-center justify-start gap-[6.8px] text-[13px] font-bold leading-[16px] text-white transition-colors"
          >
            <FigmaIcons.Plus color="white" size={11} />
            <span>New Project</span>
          </button>
        </div>
      </div>

      {/* ================= ROW 1: 4 KPI SUMMARY CARDS (y=160, h=110) ================= */}
      <div className="mt-[24px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
        {/* KPI 1: Total Projects */}
        <div className="bg-white rounded-[16px] h-[110px] p-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <FigmaIcons.NavProjects color="#2563EB" />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Total Projects
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                12
              </p>
              <div className="flex items-center gap-[5px] mt-[3px]">
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none">
                  <path d="M3 0L6 3.5H4V7H2V3.5H0L3 0Z" fill="#16A34A" />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#16A34A]">
                  2 <span className="text-[#94A3B8] font-bold">from last month</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[17px] mr-[8px] shrink-0">
            <FigmaIcons.SparkBlue />
          </div>
        </div>

        {/* KPI 2: Completed */}
        <div className="bg-white rounded-[16px] h-[110px] p-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0">
              <FigmaIcons.StatCompletedCheck />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Completed
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                5
              </p>
              <div className="flex items-center gap-[5px] mt-[3px]">
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none">
                  <path d="M3 0L6 3.5H4V7H2V3.5H0L3 0Z" fill="#16A34A" />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#16A34A]">
                  1 <span className="text-[#94A3B8] font-bold">from last month</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[27px] mr-[8px] shrink-0">
            <FigmaIcons.SparkGreen />
          </div>
        </div>

        {/* KPI 3: In Progress */}
        <div className="bg-white rounded-[16px] h-[110px] p-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
              <FigmaIcons.StatInProgressClock />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                In Progress
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                6
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                No change
              </p>
            </div>
          </div>
          <div className="mt-[18px] mr-[8px] shrink-0">
            <FigmaIcons.SparkOrange />
          </div>
        </div>

        {/* KPI 4: On Hold */}
        <div className="bg-white rounded-[16px] h-[110px] p-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
              <FigmaIcons.StatOverdueAlert />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                On Hold
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                1
              </p>
              <div className="flex items-center gap-[5px] mt-[3px]">
                <svg width="6" height="7" viewBox="0 0 6 7" fill="none">
                  <path d="M3 7L6 3.5H4V0H2V3.5H0L3 7Z" fill="#DC2626" />
                </svg>
                <span className="text-[11px] font-bold leading-[13px] text-[#DC2626]">
                  1 <span className="text-[#94A3B8] font-bold">from last month</span>
                </span>
              </div>
            </div>
          </div>
          <div className="mt-[27px] mr-[8px] shrink-0">
            <FigmaIcons.SparkRed />
          </div>
        </div>
      </div>

      {/* ================= ROW 2: ALL PROJECTS TABLE + PROJECT TIMELINE (y=286, h=446) ================= */}
      <div className="mt-[16px] grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_376px] gap-[16px] items-start">
        {/* Left: All Projects Table Card (w=760, min-h=446) */}
        <div className="bg-white rounded-[16px] min-h-[446px] px-[24px] pt-[18px] pb-[20px] flex flex-col justify-between overflow-hidden">
          <div>
            <h2 className="text-[16px] font-bold leading-[19px] text-[#0F172A]">
              All Projects
            </h2>

            {/* Responsive Table Wrapper */}
            <div className="mt-[12px] overflow-x-auto -mx-[24px] px-[24px]">
              <div className="min-w-[680px]">
                {/* Table Header */}
                <div className="grid grid-cols-[minmax(200px,1.5fr)_minmax(130px,1fr)_90px_110px_108px_44px] pb-[10px] border-b-[1.5px] border-[#F1F5F9] text-[11px] font-bold leading-[13px] text-[#94A3B8]">
                  <span>Project</span>
                  <span>Progress</span>
                  <span>Status</span>
                  <span>Deadline</span>
                  <span>Team</span>
                  <span className="text-right">Actions</span>
                </div>

                {/* Table Rows */}
                <div className="divide-y divide-[#F1F5F9] border-b-[1.5px] border-[#F1F5F9]">
                  {filteredProjects.map((proj) => (
                    <div
                      key={proj.id}
                      className="h-[64px] grid grid-cols-[minmax(200px,1.5fr)_minmax(130px,1fr)_90px_110px_108px_44px] items-center"
                    >
                      {/* Col 1: Project Badge + Name & Category */}
                      <div className="flex items-center gap-[14px] pr-2 min-w-0">
                        <div
                          className={`w-[28px] h-[28px] rounded-[8px] ${proj.codeBg} ${proj.codeText} text-[10px] font-bold leading-[12px] flex items-center justify-center shrink-0`}
                        >
                          {proj.code}
                        </div>
                        <div className="min-w-0">
                          <p className="text-[12px] font-bold leading-[15px] text-[#1E293B] truncate">
                            {proj.name}
                          </p>
                          <p className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px] truncate">
                            {proj.category}
                          </p>
                        </div>
                      </div>

                      {/* Col 2: Progress Bar + % */}
                      <div className="flex items-center gap-[10px]">
                        <div className="w-[90px] h-[6px] rounded-full bg-[#E2E8F0] overflow-hidden shrink-0">
                          <div
                            className={`h-full rounded-full ${proj.progressColor}`}
                            style={{ width: proj.progressWidth }}
                          />
                        </div>
                        <span className="text-[11px] font-bold leading-[13px] text-[#475569]">
                          {proj.progress}%
                        </span>
                      </div>

                      {/* Col 3: Status Pill */}
                      <div>
                        <span
                          className={`${proj.statusW} h-[20px] rounded-[6px] ${proj.statusBg} ${proj.statusText} text-[10px] font-bold leading-[12px] inline-flex items-center justify-center`}
                        >
                          {proj.status}
                        </span>
                      </div>

                      {/* Col 4: Deadline */}
                      <div className="flex items-center gap-[5px]">
                        <FigmaIcons.TaskCalendar />
                        <span className="text-[11px] font-normal leading-[13px] text-[#475569] whitespace-nowrap">
                          {proj.deadline}
                        </span>
                      </div>

                      {/* Col 5: Team Avatars */}
                      <div className="flex items-center -space-x-[4px]">
                        {proj.team.map((member, mIdx) => (
                          <span
                            key={mIdx}
                            className={`w-[18px] h-[18px] rounded-full ${member.bg} ${member.text} text-[8px] font-bold leading-[10px] flex items-center justify-center`}
                          >
                            {member.label}
                          </span>
                        ))}
                      </div>

                      {/* Col 6: Actions */}
                      <div className="flex justify-end pr-[12px]">
                        <button
                          type="button"
                          className="p-1 hover:bg-[#F8FAFC] rounded transition-colors"
                          aria-label="Project actions"
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

          {/* Pagination Footer (y=402) */}
          <div className="mt-[10px] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] font-normal leading-[15px] text-[#94A3B8]">
              Showing 1 to 5 of 12 projects
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

        {/* Right: Project Timeline Card (w=376, min-h=446) */}
        <div className="bg-white rounded-[16px] min-h-[446px] px-[24px] pt-[20px] pb-[16px] flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Project Timeline
              </h2>
              <a
                href="#calendar"
                onClick={(e) => e.preventDefault()}
                className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
              >
                View Calendar
              </a>
            </div>

            {/* Vertical Timeline Items */}
            <div className="mt-[29px] relative pl-[1px] flex flex-col gap-[38px]">
              {/* Vertical Connecting Line */}
              <div className="absolute left-[5px] top-[14px] bottom-[14px] w-[2px] bg-[#E2E8F0]" />

              {TIMELINE_ITEMS.map((item) => (
                <div
                  key={item.id}
                  className="relative flex items-start justify-between gap-2"
                >
                  <div className="flex items-start gap-[13px] min-w-0">
                    <span
                      className={`w-[10px] h-[10px] rounded-full ${item.dotColor} ring-2 ring-white shrink-0 mt-[9px] z-10`}
                    />
                    <div className="min-w-0">
                      <p className="text-[12px] font-bold leading-[15px] text-[#1E293B] truncate">
                        {item.project}
                      </p>
                      <p
                        className={`text-[11px] font-bold leading-[13px] ${item.phaseColor} mt-[2px] truncate`}
                      >
                        {item.phase}
                      </p>
                    </div>
                  </div>

                  <span className="text-[11px] font-normal leading-[13px] text-[#94A3B8] shrink-0 mt-[3px]">
                    {item.date}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom View All Timeline Button (h=38) */}
          <button
            type="button"
            className="mt-[24px] w-full h-[38px] rounded-[8px] bg-white border-[1.2px] border-[#2563EB] hover:bg-[#EFF6FF] transition-colors flex items-center justify-center text-[12px] font-bold leading-[15px] text-[#2563EB]"
          >
            View All Timeline
          </button>
        </div>
      </div>

      {/* ================= ROW 3: RECENT ACTIVITY + TOP CONTRIBUTORS + PROJECT HEALTH (y=748, h=188) ================= */}
      <div className="mt-[16px] grid grid-cols-1 lg:grid-cols-3 gap-[16px]">
        {/* Card 1: Recent Activity (w=376, h=188) */}
        <div className="bg-white rounded-[16px] min-h-[188px] px-[20px] pt-[16px] pb-[13px] flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
              Recent Activity
            </h2>
            <a
              href="#recent"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
            >
              View All
            </a>
          </div>

          <div className="mt-[16px] flex flex-col gap-[8px]">
            {/* Activity 1 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-[3px]">
                <FigmaIcons.ActDoc />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B] truncate">
                  Sarah Wilson{' '}
                  <span className="text-[#64748B] font-bold">
                    updated task &ldquo;Homepage Design&rdquo;
                  </span>
                </p>
                <p className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px] truncate">
                  OmniLaunch Website Redesign • 2h ago
                </p>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0 mt-[3px]">
                <FigmaIcons.ActCheck />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B] truncate">
                  Mike Johnson{' '}
                  <span className="text-[#64748B] font-bold">
                    completed &ldquo;User Authentication&rdquo;
                  </span>
                </p>
                <p className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px] truncate">
                  Mobile App Development • 4h ago
                </p>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FAF5FF] flex items-center justify-center shrink-0 mt-[3px]">
                <svg width="9" height="11" viewBox="0 0 10 12" fill="none">
                  <path
                    d="M6 0H1.2C0.54 0 0.006 0.54 0.006 1.2L0 10.8C0 11.46 0.534 12 1.2 12H8.4C9.06 12 9.6 11.46 9.6 10.8V3.6L6 0ZM7.2 9.6H2.4V8.4H7.2V9.6ZM7.2 7.2H2.4V6H7.2V7.2ZM5.4 4.2V0.9L8.7 4.2H5.4Z"
                    fill="#8B5CF6"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B] truncate">
                  You{' '}
                  <span className="text-[#64748B] font-bold">
                    uploaded a file &ldquo;Project Brief.pdf&rdquo;
                  </span>
                </p>
                <p className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px] truncate">
                  Data Platform Integration • 1d ago
                </p>
              </div>
            </div>

            {/* Activity 4 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 mt-[3px]">
                <svg width="12" height="12" viewBox="0 0 13 13" fill="none">
                  <path
                    d="M11.7 0H1.3C0.585 0 0.0065 0.585 0.0065 1.3L0 13L2.6 10.4H11.7C12.415 10.4 13 9.815 13 9.1V1.3C13 0.585 12.415 0 11.7 0Z"
                    fill="#EA580C"
                  />
                </svg>
              </div>
              <div className="min-w-0">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B] truncate">
                  David Lee{' '}
                  <span className="text-[#64748B] font-bold">
                    commented on &ldquo;API Integration&rdquo;
                  </span>
                </p>
                <p className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px] truncate">
                  Data Platform Integration • 1d ago
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Top Contributors (w=376, h=188) */}
        <div className="bg-white rounded-[16px] min-h-[188px] px-[20px] pt-[16px] pb-[16px] flex flex-col">
          <div className="flex items-center justify-between">
            <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
              Top Contributors
            </h2>
            <a
              href="#contributors"
              onClick={(e) => e.preventDefault()}
              className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
            >
              View All
            </a>
          </div>

          <div className="mt-[13px] flex flex-col gap-[10px]">
            {TOP_CONTRIBUTORS.map((c) => (
              <div key={c.id} className="h-[24px] flex items-center justify-between gap-2">
                <div className="flex items-center gap-[8px] w-[124px] shrink-0 min-w-0">
                  <div
                    className={`w-[24px] h-[24px] rounded-full ${c.avatarBg} ${c.avatarText} text-[9px] font-bold leading-[11px] flex items-center justify-center shrink-0`}
                  >
                    {c.initials}
                  </div>
                  <span className="text-[12px] font-bold leading-[15px] text-[#1E293B] truncate">
                    {c.name}
                  </span>
                </div>

                <div className="w-[140px] h-[6px] rounded-full bg-[#F1F5F9] overflow-hidden shrink-0">
                  <div
                    className="h-full rounded-full bg-[#2563EB]"
                    style={{ width: c.barWidth }}
                  />
                </div>

                <span className="text-[11px] font-bold leading-[13px] text-[#475569] text-right w-[48px] shrink-0">
                  {c.tasks}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Card 3: Project Health (w=368, h=188) */}
        <div className="bg-white rounded-[16px] min-h-[188px] px-[20px] pt-[16px] pb-[16px] flex flex-col justify-between">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Project Health
              </h2>
              <p className="text-[12px] font-normal leading-[15px] text-[#94A3B8] mt-[15px]">
                Overall Progress
              </p>
              <p className="text-[32px] font-bold leading-[39px] text-[#0F172A] mt-[1px]">
                68%
              </p>
              <div className="mt-[5px] w-[100px] h-[18px] rounded-[4px] bg-[#F0FDF4] px-[4px] flex items-center gap-[4px]">
                <svg width="5" height="6" viewBox="0 0 6 7" fill="none">
                  <path d="M3 0L6 3.5H4V7H2V3.5H0L3 0Z" fill="#16A34A" />
                </svg>
                <span className="text-[9px] font-bold leading-[11px] text-[#16A34A] whitespace-nowrap">
                  8% <span className="text-[#94A3B8] font-bold">from last month</span>
                </span>
              </div>
            </div>

            {/* 72x72 Multi-Segment Donut Chart (x=196, y=42) */}
            <div className="mt-[26px] mr-[80px] shrink-0">
              <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#F1F5F9"
                  strokeWidth="12"
                />
                {/* Completed: 28% (52.8 of 188.5) */}
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="12"
                  strokeDasharray="52.8 188.5"
                  strokeDashoffset="0"
                />
                {/* In Progress: 40% (75.4 of 188.5) */}
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="12"
                  strokeDasharray="75.4 188.5"
                  strokeDashoffset="-52.8"
                />
                {/* On Hold: 12% (22.6 of 188.5) */}
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#F59E0B"
                  strokeWidth="12"
                  strokeDasharray="22.6 188.5"
                  strokeDashoffset="-128.2"
                />
                {/* Not Started: 20% (37.7 of 188.5) */}
                <circle
                  cx="36"
                  cy="36"
                  r="30"
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth="12"
                  strokeDasharray="37.7 188.5"
                  strokeDashoffset="-150.8"
                />
              </svg>
            </div>
          </div>

          {/* 2x2 Legend (y=133) */}
          <div className="mt-[7px] grid grid-cols-2 gap-y-[4px] max-w-[235px]">
            <div className="flex items-center justify-between pr-6">
              <div className="flex items-center gap-[5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#10B981]" />
                <span className="text-[10px] font-bold leading-[12px] text-[#475569]">
                  Completed
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8]">
                28%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#F59E0B]" />
                <span className="text-[10px] font-bold leading-[12px] text-[#475569]">
                  On Hold
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8]">
                12%
              </span>
            </div>

            <div className="flex items-center justify-between pr-6">
              <div className="flex items-center gap-[5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#2563EB]" />
                <span className="text-[10px] font-bold leading-[12px] text-[#475569]">
                  In Progress
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8]">
                40%
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[5px]">
                <span className="w-[6px] h-[6px] rounded-full bg-[#EF4444]" />
                <span className="text-[10px] font-bold leading-[12px] text-[#475569]">
                  Not Started
                </span>
              </div>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8]">
                20%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
