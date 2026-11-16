import React, { useState } from 'react';
import { FigmaIcons } from '../components/Icons';

const INITIAL_TODAYS_TASKS = [
  {
    id: 1,
    title: 'Design landing page for OmniLaunch',
    project: 'OmniLaunch Project',
    priority: 'High',
    priorityW: 'w-[46px]',
    priorityBg: 'bg-[#FEF2F2]',
    priorityText: 'text-[#DC2626]',
    dueDate: 'Today, 6 Jun',
    completed: false,
  },
  {
    id: 2,
    title: 'Review mobile app screens',
    project: 'Mobile App Project',
    priority: 'Medium',
    priorityW: 'w-[58px]',
    priorityBg: 'bg-[#FFF7ED]',
    priorityText: 'text-[#EA580C]',
    dueDate: 'Tomorrow, 7 Jun',
    completed: false,
  },
  {
    id: 3,
    title: 'Update user flow diagrams',
    project: 'Website Redesign',
    priority: 'Low',
    priorityW: 'w-[38px]',
    priorityBg: 'bg-[#F0FDF4]',
    priorityText: 'text-[#16A34A]',
    dueDate: '8 Jun 2026',
    completed: false,
  },
  {
    id: 4,
    title: 'Prepare sprint review presentation',
    project: 'Internal Project',
    priority: 'Medium',
    priorityW: 'w-[58px]',
    priorityBg: 'bg-[#FFF7ED]/60',
    priorityText: 'text-[#EA580C]',
    dueDate: '9 Jun 2026',
    completed: true,
  },
  {
    id: 5,
    title: 'Conduct usability testing',
    project: 'Research Project',
    priority: 'Low',
    priorityW: 'w-[38px]',
    priorityBg: 'bg-[#F0FDF4]',
    priorityText: 'text-[#16A34A]',
    dueDate: '10 Jun 2026',
    completed: false,
  },
];

const KANBAN_COLUMNS = [
  {
    id: 'todo',
    title: 'To Do',
    count: 6,
    badgeW: 'w-[20px]',
    badgeBg: 'bg-[#EFF6FF]',
    badgeText: 'text-[#2563EB]',
    cards: [
      {
        id: 't1',
        title: 'UX audit for dashboard',
        priority: 'High',
        pillW: 'w-[44px]',
        pillBg: 'bg-[#FEF2F2]',
        pillText: 'text-[#DC2626]',
      },
      {
        id: 't2',
        title: 'Client research interview',
        priority: 'Medium',
        pillW: 'w-[58px]',
        pillBg: 'bg-[#FFF7ED]',
        pillText: 'text-[#EA580C]',
      },
      {
        id: 't3',
        title: 'Create wireframes',
        priority: 'Low',
        pillW: 'w-[38px]',
        pillBg: 'bg-[#F0FDF4]',
        pillText: 'text-[#16A34A]',
      },
    ],
  },
  {
    id: 'inprogress',
    title: 'In Progress',
    count: 3,
    badgeW: 'w-[20px]',
    badgeBg: 'bg-[#FFF7ED]',
    badgeText: 'text-[#EA580C]',
    cards: [
      {
        id: 'p1',
        title: 'Dashboard design',
        priority: 'High',
        pillW: 'w-[44px]',
        pillBg: 'bg-[#FEF2F2]',
        pillText: 'text-[#DC2626]',
      },
      {
        id: 'p2',
        title: 'API integration',
        priority: 'Medium',
        pillW: 'w-[58px]',
        pillBg: 'bg-[#FFF7ED]',
        pillText: 'text-[#EA580C]',
      },
      {
        id: 'p3',
        title: 'Landing page design',
        priority: 'Medium',
        pillW: 'w-[58px]',
        pillBg: 'bg-[#FFF7ED]',
        pillText: 'text-[#EA580C]',
      },
    ],
  },
  {
    id: 'completed',
    title: 'Completed',
    count: 15,
    badgeW: 'w-[24px]',
    badgeBg: 'bg-[#F0FDF4]',
    badgeText: 'text-[#16A34A]',
    isCompletedCol: true,
    cards: [
      {
        id: 'c1',
        title: 'User flow diagrams',
        priority: 'Low',
        pillW: 'w-[38px]',
        pillBg: 'bg-[#F0FDF4]/60',
        pillText: 'text-[#16A34A]',
      },
      {
        id: 'c2',
        title: 'Style guide setup',
        priority: 'Low',
        pillW: 'w-[38px]',
        pillBg: 'bg-[#F0FDF4]/60',
        pillText: 'text-[#16A34A]',
      },
      {
        id: 'c3',
        title: 'Project brief approval',
        priority: 'Low',
        pillW: 'w-[38px]',
        pillBg: 'bg-[#F0FDF4]/60',
        pillText: 'text-[#16A34A]',
      },
    ],
  },
];

const UPCOMING_DEADLINES = [
  {
    id: 1,
    date: 'Today, 6 Jun',
    title: 'Design landing page',
    dotColor: 'bg-[#DC2626]',
    badge: 'High',
    badgeW: 'w-[26px]',
    badgeBg: 'bg-[#FEF2F2]',
    badgeText: 'text-[#DC2626]',
  },
  {
    id: 2,
    date: 'Tomorrow, 7 Jun',
    title: 'Review mobile app',
    dotColor: 'bg-[#EA580C]',
    badge: 'Med',
    badgeW: 'w-[38px]',
    badgeBg: 'bg-[#FFF7ED]',
    badgeText: 'text-[#EA580C]',
  },
  {
    id: 3,
    date: 'Friday, 9 Jun',
    title: 'Sprint review meeting',
    dotColor: 'bg-[#3B82F6]',
    badge: 'Med',
    badgeW: 'w-[38px]',
    badgeBg: 'bg-[#FFF7ED]',
    badgeText: 'text-[#EA580C]',
  },
  {
    id: 4,
    date: 'Monday, 12 Jun',
    title: 'Usability testing',
    dotColor: 'bg-[#16A34A]',
    badge: 'Low',
    badgeW: 'w-[26px]',
    badgeBg: 'bg-[#F0FDF4]',
    badgeText: 'text-[#16A34A]',
  },
];

const TEAM_ACTIVITIES = [
  {
    id: 1,
    initials: 'SW',
    avatarBg: 'bg-[#EC4899]',
    actor: 'Sarah Wilson',
    action: 'commented on',
    target: 'Dashboard Design',
    targetColor: 'text-[#475569]',
    time: '2h ago',
  },
  {
    id: 2,
    initials: 'MJ',
    avatarBg: 'bg-[#3B82F6]',
    actor: 'Mike Johnson',
    action: 'assigned you a new task',
    target: 'Mobile App Review',
    targetColor: 'text-[#475569]',
    time: '4h ago',
  },
  {
    id: 3,
    initials: 'CL',
    avatarBg: 'bg-[#10B981]',
    actor: 'Client',
    action: 'approved the homepage design',
    target: 'OmniLaunch Project',
    targetColor: 'text-[#2563EB]',
    time: '1d ago',
  },
];

export default function MyTasks({ searchQuery = '' }) {
  const [tasks, setTasks] = useState(INITIAL_TODAYS_TASKS);

  const toggleTask = (id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const visibleTasks = tasks.filter(
    (t) =>
      !searchQuery.trim() ||
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.project.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[18px] pb-[24px] flex flex-col">
      {/* ================= TOP PAGE HEADER & CONTROLS (y=90) ================= */}
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold leading-[27px] text-[#0F172A]">
            My Tasks
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[2px]">
            Manage and track your tasks efficiently
          </p>
        </div>

        {/* Action / Filter Buttons (y=100, h=36, gap=12px) */}
        <div className="flex flex-wrap items-center gap-[12px]">
          {/* All Tasks Dropdown (w=120, h=36) */}
          <button
            type="button"
            className="w-[120px] h-[36px] rounded-[8px] bg-white border border-[#E2E8F0] px-[16px] flex items-center justify-between text-[13px] font-bold leading-[16px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          >
            <span>All Tasks</span>
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

          {/* Sort by: Due Date Dropdown (w=156, h=36) */}
          <button
            type="button"
            className="w-[156px] h-[36px] rounded-[8px] bg-white border border-[#E2E8F0] px-[16px] flex items-center justify-between text-[13px] font-bold leading-[16px] text-[#334155] hover:bg-[#F8FAFC] transition-colors"
          >
            <span className="truncate">Sort by: Due Date</span>
            <FigmaIcons.ChevronDown color="#475569" width={10} height={6} />
          </button>

          {/* + New Task Button (w=120, h=36) */}
          <button
            type="button"
            className="w-[120px] h-[36px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] px-[16px] flex items-center justify-center gap-[6.8px] text-[13px] font-bold leading-[16px] text-white transition-colors"
          >
            <FigmaIcons.Plus color="white" size={11} />
            <span>New Task</span>
          </button>
        </div>
      </div>

      {/* ================= 4 KPI SUMMARY CARDS ROW (y=160, h=110) ================= */}
      <div className="mt-[24px] grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-[16px]">
        {/* Card 1: Assigned Tasks */}
        <div className="bg-white rounded-[16px] h-[110px] px-[18px] py-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <FigmaIcons.StatAssigned />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Assigned Tasks
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                24
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                Total tasks assigned
              </p>
            </div>
          </div>
          <div className="mt-[17px] mr-[8px] shrink-0">
            <FigmaIcons.SparkBlue />
          </div>
        </div>

        {/* Card 2: Completed */}
        <div className="bg-white rounded-[16px] h-[110px] px-[18px] py-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0">
              <FigmaIcons.StatCompletedCheck />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Completed
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                18
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                Tasks completed
              </p>
            </div>
          </div>
          <div className="mt-[27px] mr-[8px] shrink-0">
            <FigmaIcons.SparkGreen />
          </div>
        </div>

        {/* Card 3: In Progress */}
        <div className="bg-white rounded-[16px] h-[110px] px-[18px] py-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0">
              <FigmaIcons.StatInProgressClock />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                In Progress
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                5
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                Tasks in progress
              </p>
            </div>
          </div>
          <div className="mt-[18px] mr-[8px] shrink-0">
            <FigmaIcons.SparkOrange />
          </div>
        </div>

        {/* Card 4: Overdue */}
        <div className="bg-white rounded-[16px] h-[110px] px-[18px] py-[18px] relative flex items-start justify-between">
          <div className="flex items-start gap-[18px]">
            <div className="w-[36px] h-[36px] rounded-full bg-[#FEF2F2] flex items-center justify-center shrink-0">
              <FigmaIcons.StatOverdueAlert />
            </div>
            <div className="pt-[2px]">
              <p className="text-[12px] font-bold leading-[15px] text-[#64748B]">
                Overdue
              </p>
              <p className="text-[28px] font-bold leading-[34px] text-[#0F172A] mt-[5px]">
                1
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[3px]">
                Tasks overdue
              </p>
            </div>
          </div>
          <div className="mt-[27px] mr-[8px] shrink-0">
            <FigmaIcons.SparkRed />
          </div>
        </div>
      </div>

      {/* ================= MAIN 2-COLUMN CONTENT GRID (y=286) ================= */}
      <div className="mt-[16px] grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_376px] gap-[16px] items-start">
        {/* ---------------- LEFT COLUMN (w=760) ---------------- */}
        <div className="flex flex-col min-w-0">
          {/* Today's Tasks Card (w=760, min-h=320) */}
          <div className="bg-white rounded-[16px] min-h-[320px] px-[24px] pt-[18px] pb-[10px] flex flex-col">
            <div className="flex items-center justify-between mb-[12px]">
              <h2 className="text-[16px] font-bold leading-[19px] text-[#0F172A]">
                Today&apos;s Tasks
              </h2>
              <a
                href="#all-tasks"
                onClick={(e) => e.preventDefault()}
                className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
              >
                View all
              </a>
            </div>

            <div className="flex flex-col divide-y divide-[#F1F5F9]">
              {visibleTasks.map((task) => (
                <div
                  key={task.id}
                  className="py-[13px] flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  {/* Left: Checkbox Circle + Title & Project */}
                  <div className="flex items-start gap-[14px] min-w-0 pl-[2px] sm:w-[360px]">
                    <button
                      type="button"
                      onClick={() => toggleTask(task.id)}
                      className={`w-[16px] h-[16px] rounded-full shrink-0 mt-[7px] flex items-center justify-center transition-colors ${
                        task.completed
                          ? 'bg-[#2563EB] border border-[#2563EB]'
                          : 'border-[1.5px] border-[#CBD5E1] hover:border-[#2563EB]'
                      }`}
                      aria-label={`Mark ${task.title} as ${
                        task.completed ? 'incomplete' : 'complete'
                      }`}
                    >
                      {task.completed && <FigmaIcons.CheckMiniWhite />}
                    </button>

                    <div className="min-w-0">
                      <p
                        className={`text-[13px] font-bold leading-[16px] text-[#1E293B] truncate ${
                          task.completed ? 'line-through' : ''
                        }`}
                      >
                        {task.title}
                      </p>
                      <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[1px] truncate">
                        {task.project}
                      </p>
                    </div>
                  </div>

                  {/* Right: Priority Pill + Calendar Due Date + 3-Dots */}
                  <div className="flex items-center justify-between sm:justify-end flex-1 pl-[32px] sm:pl-0">
                    {/* Priority Pill (x=388 relative to row) */}
                    <div className="w-[90px] sm:w-[122px] flex justify-start">
                      <span
                        className={`${task.priorityW} h-[20px] rounded-[6px] ${task.priorityBg} ${task.priorityText} text-[10px] font-bold leading-[12px] inline-flex items-center justify-center`}
                      >
                        {task.priority}
                      </span>
                    </div>

                    {/* Date Column (x=510 relative to row) */}
                    <div className="w-[140px] sm:w-[172px] flex items-center gap-[5.5px]">
                      <FigmaIcons.TaskCalendar opacity={task.completed ? 0.6 : 1} />
                      <span className="text-[11px] font-normal leading-[13px] text-[#475569] whitespace-nowrap">
                        {task.dueDate}
                      </span>
                    </div>

                    {/* 3-Dots Button */}
                    <button
                      type="button"
                      className="p-1 -mr-1 hover:bg-[#F8FAFC] rounded transition-colors"
                      aria-label="Task actions"
                    >
                      <FigmaIcons.VerticalDotsGrey />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kanban Columns Section (y=625, 3 columns each w=240, gap=16) */}
          <div className="mt-[19px] grid grid-cols-1 md:grid-cols-3 gap-[16px] xl:w-[752px]">
            {KANBAN_COLUMNS.map((col) => (
              <div key={col.id} className="flex flex-col">
                {/* Column Header */}
                <div className="flex items-center justify-between h-[18px] mb-[11px]">
                  <div className="flex items-center gap-[5px]">
                    <h3 className="text-[13px] font-bold leading-[16px] text-[#0F172A]">
                      {col.title}
                    </h3>
                    <span
                      className={`${col.badgeW} h-[18px] rounded-[6px] ${col.badgeBg} ${col.badgeText} text-[11px] font-bold leading-[13px] inline-flex items-center justify-center`}
                    >
                      {col.count}
                    </span>
                  </div>
                  <button
                    type="button"
                    className="hover:opacity-75 transition-opacity"
                    aria-label={`${col.title} column options`}
                  >
                    <FigmaIcons.HorizontalDotsGrey />
                  </button>
                </div>

                {/* Column Cards (each h=66, rounded-[12px], gap=10px) */}
                <div className="flex flex-col gap-[10px]">
                  {col.cards.map((card) => (
                    <div
                      key={card.id}
                      className="h-[66px] rounded-[12px] bg-white px-[16px] pt-[14px] pb-[10px] flex flex-col justify-between shadow-[0_1px_2px_rgba(15,23,42,0.02)]"
                    >
                      <p className="text-[12px] font-bold leading-[15px] text-[#1E293B] truncate">
                        {card.title}
                      </p>

                      <div className="flex items-center justify-end gap-[28.5px]">
                        <span
                          className={`${card.pillW} h-[18px] rounded-[6px] ${card.pillBg} ${card.pillText} text-[9px] font-bold leading-[11px] inline-flex items-center justify-center`}
                        >
                          {card.priority}
                        </span>

                        {col.isCompletedCol && (
                          <span className="w-[15px] h-[15px] rounded-full bg-[#10B981] flex items-center justify-center shrink-0 mr-[6.5px]">
                            <FigmaIcons.CheckMiniWhite />
                          </span>
                        )}
                      </div>
                    </div>
                  ))}

                  {/* + Add Task Dashed Button (h=36) */}
                  <button
                    type="button"
                    className="h-[36px] w-full rounded-[8px] border-[1.5px] border-dashed border-[#E2E8F0] hover:border-[#93C5FD] hover:bg-[#EFF6FF]/40 transition-colors flex items-center justify-center text-[12px] font-bold leading-[15px] text-[#2563EB]"
                  >
                    + Add Task
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ---------------- RIGHT COLUMN (w=376) ---------------- */}
        <div className="flex flex-col gap-[16px] min-w-0">
          {/* 1. Upcoming Deadlines Card (w=376, min-h=230) */}
          <div className="bg-white rounded-[16px] min-h-[230px] px-[24px] pt-[20px] pb-[15px] flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Upcoming Deadlines
              </h2>
              <a
                href="#calendar"
                onClick={(e) => e.preventDefault()}
                className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
              >
                View calendar
              </a>
            </div>

            <div className="mt-[22px] pl-[6px] flex flex-col gap-[16px]">
              {UPCOMING_DEADLINES.map((item, idx) => (
                <div
                  key={item.id}
                  className={`flex items-center justify-between ${
                    idx === 3 ? '-mt-[12px]' : ''
                  }`}
                >
                  <div className="flex items-start gap-[10px] min-w-0">
                    <span
                      className={`w-[8px] h-[8px] rounded-full ${item.dotColor} shrink-0 mt-[13px]`}
                    />
                    <div className="min-w-0">
                      <p className="text-[11px] font-bold leading-[13px] text-[#94A3B8]">
                        {item.date}
                      </p>
                      <p className="text-[12px] font-bold leading-[15px] text-[#1E293B] mt-[2px] truncate">
                        {item.title}
                      </p>
                    </div>
                  </div>

                  <span
                    className={`${item.badgeW} h-[16px] rounded-[4px] ${item.badgeBg} ${item.badgeText} text-[9px] font-bold leading-[11px] inline-flex items-center justify-center shrink-0 mt-[10px]`}
                  >
                    {item.badge}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 2. Team Activity Card (w=376, min-h=220) */}
          <div className="bg-white rounded-[16px] min-h-[220px] px-[24px] pt-[20px] pb-[20px] flex flex-col">
            <div className="flex items-center justify-between">
              <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                Team Activity
              </h2>
              <a
                href="#activity"
                onClick={(e) => e.preventDefault()}
                className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
              >
                View all activity
              </a>
            </div>

            <div className="mt-[19px] flex flex-col gap-[18px]">
              {TEAM_ACTIVITIES.map((act) => (
                <div key={act.id} className="flex items-start justify-between gap-2">
                  <div className="flex items-start gap-[12px] min-w-0">
                    <div
                      className={`w-[32px] h-[32px] rounded-full ${act.avatarBg} text-white text-[11px] font-bold leading-[13px] flex items-center justify-center shrink-0`}
                    >
                      {act.initials}
                    </div>
                    <div className="min-w-0 pt-[2px]">
                      <p className="text-[12px] font-bold leading-[15px] text-[#1E293B] truncate">
                        {act.actor}{' '}
                        <span className="text-[#64748B] font-bold">{act.action}</span>
                      </p>
                      <p
                        className={`text-[12px] font-bold leading-[15px] ${act.targetColor} mt-[1px] truncate`}
                      >
                        {act.target}
                      </p>
                    </div>
                  </div>

                  <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] shrink-0 mt-[4px]">
                    {act.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* 3. Quick Actions Card (w=376, min-h=168) */}
          <div className="bg-white rounded-[16px] min-h-[168px] px-[24px] pt-[18px] pb-[24px] flex flex-col justify-between">
            <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
              Quick Actions
            </h2>

            <div className="mt-[17px] grid grid-cols-3 gap-[14px]">
              {/* Action 1: New Task */}
              <button
                type="button"
                className="h-[92px] rounded-[12px] bg-[#EFF6FF] hover:bg-[#DBEAFE]/70 transition-colors flex flex-col items-center pt-[20px] pb-[14px]"
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#DBEAFE] flex items-center justify-center">
                  <FigmaIcons.Plus color="#2563EB" size={11} />
                </div>
                <span className="text-[11px] font-bold leading-[13px] text-[#1E3A8A] mt-[13px]">
                  New Task
                </span>
              </button>

              {/* Action 2: Submit Work */}
              <button
                type="button"
                className="h-[92px] rounded-[12px] bg-[#F0FDF4] hover:bg-[#DCFCE7]/70 transition-colors flex flex-col items-center pt-[20px] pb-[14px]"
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#DCFCE7] flex items-center justify-center">
                  <FigmaIcons.QuickCloudUpload />
                </div>
                <span className="text-[11px] font-bold leading-[13px] text-[#14532D] mt-[13px]">
                  Submit Work
                </span>
              </button>

              {/* Action 3: Request Extension */}
              <button
                type="button"
                className="h-[92px] rounded-[12px] bg-[#FAF5FF] hover:bg-[#F3E8FF]/70 transition-colors flex flex-col items-center pt-[20px] pb-[8px]"
              >
                <div className="w-[32px] h-[32px] rounded-full bg-[#F3E8FF] flex items-center justify-center">
                  <FigmaIcons.QuickClockPurple />
                </div>
                <div className="flex flex-col items-center text-[10px] font-bold leading-[12px] text-[#581C87] mt-[8px]">
                  <span>Request</span>
                  <span>Extension</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
