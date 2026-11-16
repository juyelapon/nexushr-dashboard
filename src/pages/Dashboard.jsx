import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FigmaIcons } from '../components/Icons';

const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Finalize OmniLaunch Landing Page',
    subtitle: 'Project: OmniLaunch • Due: Jun 18, 2026',
    priority: 'High',
    priorityBg: 'bg-[#FAF5FF]',
    priorityText: 'text-[#7C3AED]',
    priorityW: 'w-[46px]',
    circleStroke: '#2563EB',
    status: 'In Progress',
    assignees: [{ initial: 'S', bg: 'bg-[#EC4899]', text: 'text-white' }],
  },
  {
    id: 2,
    title: 'Design review: Mobile nav',
    subtitle: 'Project: OmniLaunch • Due: Jun 20, 2026',
    priority: 'Medium',
    priorityBg: 'bg-[#FFF7ED]',
    priorityText: 'text-[#EA580C]',
    priorityW: 'w-[58px]',
    circleStroke: '#10B981',
    status: 'Review',
    assignees: [
      { initial: 'M', bg: 'bg-[#3B82F6]', text: 'text-white' },
      { initial: 'J', bg: 'bg-[#10B981]', text: 'text-white' },
    ],
  },
  {
    id: 3,
    title: 'QA: Checkout validation',
    subtitle: 'Project: E-Commerce • Due: Jun 22, 2026',
    priority: 'Low',
    priorityBg: 'bg-[#F0FDF4]',
    priorityText: 'text-[#16A34A]',
    priorityW: 'w-[40px]',
    circleStroke: '#94A3B8',
    status: 'In Progress',
    assignees: [{ initial: 'A', bg: 'bg-[#F59E0B]', text: 'text-white' }],
  },
  {
    id: 4,
    title: 'Update API docs for analytics',
    subtitle: 'Project: Data Platform • Due: Jun 25, 2026',
    priority: 'Medium',
    priorityBg: 'bg-[#FFF7ED]',
    priorityText: 'text-[#EA580C]',
    priorityW: 'w-[58px]',
    circleStroke: '#10B981',
    status: 'Review',
    assignees: [{ initial: 'K', bg: 'bg-[#8B5CF6]', text: 'text-white' }],
  },
  {
    id: 5,
    title: 'Prepare sprint retro notes',
    subtitle: 'Project: OmniLaunch • Due: Jun 27, 2026',
    priority: 'Low',
    priorityBg: 'bg-[#F0FDF4]',
    priorityText: 'text-[#16A34A]',
    priorityW: 'w-[40px]',
    circleStroke: '#94A3B8',
    status: 'Completed',
    assignees: [
      { initial: 'L', bg: 'bg-[#14B8A6]', text: 'text-white' },
      { initial: '+', bg: 'bg-[#CBD5E1]', text: 'text-[#475569]' },
    ],
  },
];

const CALENDAR_WEEKS = [
  [
    { day: 1, currentMonth: true },
    { day: 2, currentMonth: true },
    { day: 3, currentMonth: true },
    { day: 4, currentMonth: true },
    { day: 5, currentMonth: true },
    { day: 6, currentMonth: true },
    { day: 7, currentMonth: true },
  ],
  [
    { day: 8, currentMonth: true },
    { day: 9, currentMonth: true },
    { day: 10, currentMonth: true },
    { day: 11, currentMonth: true },
    { day: 12, currentMonth: true },
    { day: 13, currentMonth: true },
    { day: 14, currentMonth: true },
  ],
  [
    { day: 15, currentMonth: true },
    { day: 16, currentMonth: true },
    { day: 17, currentMonth: true },
    { day: 18, currentMonth: true },
    { day: 19, currentMonth: true },
    { day: 20, currentMonth: true },
    { day: 21, currentMonth: true },
  ],
  [
    { day: 22, currentMonth: true },
    { day: 23, currentMonth: true },
    { day: 24, currentMonth: true },
    { day: 25, currentMonth: true },
    { day: 26, currentMonth: true },
    { day: 27, currentMonth: true },
    { day: 28, currentMonth: true },
  ],
  [
    { day: 29, currentMonth: true },
    { day: 30, currentMonth: true },
    { day: 1, currentMonth: false },
    { day: 2, currentMonth: false },
    { day: 3, currentMonth: false },
    { day: 4, currentMonth: false },
    { day: 5, currentMonth: false },
  ],
];

const TASK_TABS = ['All', 'In Progress', 'Review', 'Completed'];

const MONTHS = ['May 2026', 'June 2026', 'July 2026'];

const INITIAL_MEETINGS = [
  {
    id: 1,
    time: '10:00',
    period: 'AM',
    title: 'Product Monthly Sync',
    location: 'Zoom Meeting',
    type: 'zoom',
    bg: 'bg-[#EFF6FF]',
    accent: 'text-[#2563EB]',
    divider: 'bg-[#BFDBFE]',
    titleColor: 'text-[#1E3A8A]',
  },
  {
    id: 2,
    time: '2:00',
    period: 'PM',
    title: 'UX Review: Mobile Nav',
    location: 'Meeting Room B',
    type: 'pin',
    bg: 'bg-[#FAF5FF]',
    accent: 'text-[#7C3AED]',
    divider: 'bg-[#E9D5FF]',
    titleColor: 'text-[#581C87]',
  },
];

function formatSeconds(totalSec) {
  const h = String(Math.floor(totalSec / 3600)).padStart(2, '0');
  const m = String(Math.floor((totalSec % 3600) / 60)).padStart(2, '0');
  const s = String(totalSec % 60).padStart(2, '0');
  return `${h}:${m}:${s}`;
}

export default function Dashboard({ searchQuery = '' }) {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [activeTaskTab, setActiveTaskTab] = useState('All');
  const [monthIdx, setMonthIdx] = useState(1);
  const [selectedDay, setSelectedDay] = useState(18);
  const [isClockedIn, setIsClockedIn] = useState(true);
  const [isOnBreak, setIsOnBreak] = useState(false);
  const [elapsedSeconds, setElapsedSeconds] = useState(2 * 3600 + 45 * 60 + 18);

  // Add Task Modal
  const [showAddTask, setShowAddTask] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskProject, setNewTaskProject] = useState('OmniLaunch');
  const [newTaskPriority, setNewTaskPriority] = useState('High');

  // Schedule Meeting Modal
  const [meetings, setMeetings] = useState(INITIAL_MEETINGS);
  const [showAddMeeting, setShowAddMeeting] = useState(false);
  const [newMeetingTitle, setNewMeetingTitle] = useState('');
  const [newMeetingTime, setNewMeetingTime] = useState('4:30');
  const [newMeetingLocation, setNewMeetingLocation] = useState('Zoom Meeting');

  useEffect(() => {
    if (!isClockedIn || isOnBreak) return;
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isClockedIn, isOnBreak]);

  const toggleTaskStatus = (id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? {
              ...t,
              status: t.status === 'Completed' ? 'In Progress' : 'Completed',
              circleStroke: t.status === 'Completed' ? '#2563EB' : '#10B981',
            }
          : t
      )
    );
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    const priorityStyles = {
      High: { bg: 'bg-[#FAF5FF]', text: 'text-[#7C3AED]', w: 'w-[46px]' },
      Medium: { bg: 'bg-[#FFF7ED]', text: 'text-[#EA580C]', w: 'w-[58px]' },
      Low: { bg: 'bg-[#F0FDF4]', text: 'text-[#16A34A]', w: 'w-[40px]' },
    };
    const style = priorityStyles[newTaskPriority];
    setTasks((prev) => [
      {
        id: Date.now(),
        title: newTaskTitle.trim(),
        subtitle: `Project: ${newTaskProject} • Due: Jun 28, 2026`,
        priority: newTaskPriority,
        priorityBg: style.bg,
        priorityText: style.text,
        priorityW: style.w,
        circleStroke: '#2563EB',
        status: 'In Progress',
        assignees: [{ initial: 'AJ', bg: 'bg-[#2563EB]', text: 'text-white' }],
      },
      ...prev,
    ]);
    setNewTaskTitle('');
    setShowAddTask(false);
  };

  const handleAddMeeting = (e) => {
    e.preventDefault();
    if (!newMeetingTitle.trim()) return;
    setMeetings((prev) => [
      ...prev,
      {
        id: Date.now(),
        time: newMeetingTime,
        period: 'PM',
        title: newMeetingTitle.trim(),
        location: newMeetingLocation,
        type: 'zoom',
        bg: 'bg-[#EFF6FF]',
        accent: 'text-[#2563EB]',
        divider: 'bg-[#BFDBFE]',
        titleColor: 'text-[#1E3A8A]',
      },
    ]);
    setNewMeetingTitle('');
    setShowAddMeeting(false);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesTab = activeTaskTab === 'All' || task.status === activeTaskTab;
    const matchesSearch =
      !searchQuery.trim() ||
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const dueCount = tasks.filter((t) => t.status !== 'Completed').length;

  return (
    <div className="w-full max-w-[1600px] mx-auto p-4 sm:p-[24px] flex flex-col gap-[16px]">
      {/* ================= ROW 1: Welcome Card + 4 Stat Cards ================= */}
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(380px,1.22fr)_minmax(0,2fr)] gap-[16px]">
        {/* Welcome Card */}
        <div className="bg-white rounded-[16px] min-h-[200px] px-[24px] py-[20px] relative flex flex-col sm:flex-row items-start sm:items-center justify-between overflow-hidden">
          <div className="z-10 flex flex-col justify-between h-full w-full sm:w-auto">
            <p className="text-[14px] font-normal leading-[17px] text-[#6B7280] mt-[34px] sm:mt-[34px]">
              Have a productive day ahead.
            </p>

            {/* Quote Box */}
            <div className="mt-[25px] w-full sm:w-[230px] h-[80px] rounded-[12px] bg-[#F8FAFC] relative flex items-center pl-[19.5px] pr-[12px]">
              <div className="shrink-0 mr-[4px] -mt-[4px]">
                <FigmaIcons.QuoteMark />
              </div>
              <div className="flex flex-col text-[12px] font-bold leading-[18px] text-[#1E3A8A]">
                <span>&ldquo;Focus on being productive</span>
                <span>instead of busy.&rdquo;</span>
              </div>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="mt-4 sm:mt-0 sm:absolute sm:right-[24px] sm:top-[42px] shrink-0 self-end sm:self-auto">
            <FigmaIcons.WelcomeIllustration />
          </div>
        </div>

        {/* 4 Stat Cards Grid (each w=162, h=200 on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-[16px]">
          {/* Stat 1: Today's Hours */}
          <div className="bg-white rounded-[16px] h-[200px] p-[18px] relative flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] flex items-center justify-center">
                <FigmaIcons.StatHours />
              </div>
              <button type="button" className="mt-[6px] hover:opacity-80" aria-label="More options">
                <FigmaIcons.MoreDots />
              </button>
            </div>

            <div className="mt-[13px]">
              <p className="text-[13px] font-bold leading-[16px] text-[#4B5563]">
                Today&apos;s Hours
              </p>
              <p className="text-[32px] font-bold leading-[39px] text-[#0F172A] mt-[9px]">
                6.5h
              </p>
              <p className="text-[12px] font-normal leading-[15px] text-[#6B7280] mt-[9px]">
                Goal: 8h
              </p>
            </div>

            {/* Progress Bar (y=172, h=6) */}
            <div className="w-full h-[6px] rounded-full bg-[#E5E7EB] overflow-hidden mt-auto mb-[4px]">
              <div className="h-full rounded-full bg-[#2563EB]" style={{ width: '81%' }} />
            </div>
          </div>

          {/* Stat 2: Tasks Due */}
          <div className="bg-white rounded-[16px] h-[200px] p-[18px] relative flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F0FDF4] flex items-center justify-center">
                <FigmaIcons.StatTasks />
              </div>
              <button type="button" className="mt-[6px] hover:opacity-80" aria-label="More options">
                <FigmaIcons.MoreDots />
              </button>
            </div>

            <div className="mt-[13px]">
              <p className="text-[13px] font-bold leading-[16px] text-[#4B5563]">
                Tasks Due
              </p>
              <p className="text-[32px] font-bold leading-[39px] text-[#0F172A] mt-[9px]">
                {dueCount}
              </p>
              <p className="text-[12px] font-bold leading-[15px] text-[#16A34A] mt-[9px]">
                Due today
              </p>
            </div>

            <Link
              to="/my-tasks"
              className="text-[12px] font-bold leading-[15px] text-[#16A34A] hover:underline mt-auto mb-[1px]"
            >
              View all
            </Link>
          </div>

          {/* Stat 3: Active Projects */}
          <div className="bg-white rounded-[16px] h-[200px] p-[18px] relative flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#FAF5FF] flex items-center justify-center">
                <FigmaIcons.StatProjects />
              </div>
              <button type="button" className="mt-[6px] hover:opacity-80" aria-label="More options">
                <FigmaIcons.MoreDots />
              </button>
            </div>

            <div className="mt-[13px]">
              <p className="text-[13px] font-bold leading-[16px] text-[#4B5563]">
                Active Projects
              </p>
              <p className="text-[32px] font-bold leading-[39px] text-[#0F172A] mt-[9px]">
                7
              </p>
              <p className="text-[12px] font-normal leading-[15px] text-[#6B7280] mt-[9px]">
                This quarter
              </p>
            </div>

            <Link
              to="/projects"
              className="text-[12px] font-bold leading-[15px] text-[#7C3AED] hover:underline mt-auto mb-[1px]"
            >
              View all
            </Link>
          </div>

          {/* Stat 4: Leave Balance */}
          <div className="bg-white rounded-[16px] h-[200px] p-[18px] relative flex flex-col justify-between">
            <div className="flex items-start justify-between">
              <div className="w-[36px] h-[36px] rounded-[10px] bg-[#FFF7ED] flex items-center justify-center">
                <FigmaIcons.StatLeave />
              </div>
              <button type="button" className="mt-[6px] hover:opacity-80" aria-label="More options">
                <FigmaIcons.MoreDots />
              </button>
            </div>

            <div className="mt-[13px]">
              <p className="text-[13px] font-bold leading-[16px] text-[#4B5563]">
                Leave Balance
              </p>
              <p className="text-[32px] font-bold leading-[39px] text-[#0F172A] mt-[9px]">
                12
              </p>
              <p className="text-[12px] font-normal leading-[15px] text-[#6B7280] mt-[9px]">
                Days available
              </p>
            </div>

            <Link
              to="/leave-requests"
              className="text-[12px] font-bold leading-[15px] text-[#EA580C] hover:underline mt-auto mb-[1px]"
            >
              View all
            </Link>
          </div>
        </div>
      </div>

      {/* ================= ROW 2: My Tasks + My Calendar + Today's Meetings ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-[minmax(0,2.15fr)_minmax(268px,1fr)_minmax(272px,1fr)] gap-[16px]">
        {/* My Tasks Card */}
        <div className="lg:col-span-12 xl:col-span-1 bg-white rounded-[16px] min-h-[370px] px-[24px] pt-[16px] pb-[12px] flex flex-col">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[18px] font-bold leading-[22px] text-[#0F172A] mt-[4px]">
              My Tasks
            </h2>
            <button
              type="button"
              onClick={() => setShowAddTask((prev) => !prev)}
              className="w-[96px] h-[32px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] transition-colors flex items-center justify-center gap-[6.8px] text-white text-[12px] font-bold leading-[15px]"
            >
              <FigmaIcons.Plus />
              <span>Add Task</span>
            </button>
          </div>

          {showAddTask && (
            <form
              onSubmit={handleAddTask}
              className="mt-3 p-3 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-wrap items-center gap-2"
            >
              <input
                type="text"
                value={newTaskTitle}
                onChange={(e) => setNewTaskTitle(e.target.value)}
                placeholder="Task title..."
                className="flex-1 min-w-[160px] h-[32px] px-2.5 rounded-[6px] border border-[#CBD5E1] bg-white text-[12px] focus:outline-none focus:border-[#2563EB]"
              />
              <select
                value={newTaskPriority}
                onChange={(e) => setNewTaskPriority(e.target.value)}
                className="h-[32px] px-2 rounded-[6px] border border-[#CBD5E1] bg-white text-[12px]"
              >
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              <button
                type="submit"
                className="h-[32px] px-3 rounded-[6px] bg-[#2563EB] text-white text-[12px] font-bold"
              >
                Save
              </button>
            </form>
          )}

          {/* Filter Tabs (y=63) */}
          <div className="flex items-center gap-[19px] mt-[15px] border-b border-[#F1F5F9]">
            {TASK_TABS.map((tab) => {
              const isActive = activeTaskTab === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setActiveTaskTab(tab)}
                  className={`pb-[10px] text-[13px] leading-[16px] relative transition-colors ${
                    isActive
                      ? 'font-bold text-[#2563EB]'
                      : 'font-normal text-[#6B7280] hover:text-[#0F172A]'
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

          {/* Task Rows */}
          <div className="flex flex-col divide-y divide-[#F1F5F9] flex-1">
            {filteredTasks.map((task) => (
              <div
                key={task.id}
                className="py-[12.5px] first:pt-[16px] last:pb-[4px] flex items-center justify-between gap-3"
              >
                {/* Left: Status Circle + Task Title & Subtitle */}
                <button
                  type="button"
                  onClick={() => toggleTaskStatus(task.id)}
                  className="flex items-start gap-[12.5px] min-w-0 pl-[2.5px] text-left group"
                >
                  <span
                    className={`w-[15px] h-[15px] rounded-full shrink-0 mt-[6.5px] flex items-center justify-center transition-colors ${
                      task.status === 'Completed' ? 'bg-[#10B981]' : ''
                    }`}
                    style={{
                      border: `1.5px solid ${
                        task.status === 'Completed' ? '#10B981' : task.circleStroke
                      }`,
                    }}
                  >
                    {task.status === 'Completed' && (
                      <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                        <path d="M1 3.5L3.2 5.7L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <div className="min-w-0">
                    <p
                      className={`text-[13px] font-bold leading-[16px] truncate ${
                        task.status === 'Completed'
                          ? 'line-through text-[#94A3B8]'
                          : 'text-[#1E293B] group-hover:text-[#2563EB]'
                      }`}
                    >
                      {task.title}
                    </p>
                    <p className="text-[11px] font-normal leading-[13px] text-[#94A3B8] mt-[2px] truncate">
                      {task.subtitle}
                    </p>
                  </div>
                </button>

                {/* Right: Priority Pill + Avatars */}
                <div className="flex items-center shrink-0">
                  <div className="w-[70px] flex justify-start">
                    <span
                      className={`${task.priorityW} h-[20px] rounded-[6px] ${task.priorityBg} ${task.priorityText} text-[10px] font-bold leading-[12px] inline-flex items-center justify-center`}
                    >
                      {task.priority}
                    </span>
                  </div>

                  {/* Avatar Group */}
                  <div className="w-[36px] flex items-center justify-center -space-x-[4px]">
                    {task.assignees.map((assignee, idx) => (
                      <span
                        key={idx}
                        className={`w-[20px] h-[20px] rounded-full ${assignee.bg} ${assignee.text} text-[9px] font-bold leading-[11px] flex items-center justify-center`}
                      >
                        {assignee.initial}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* My Calendar Card (w=268, h=370) */}
        <div className="lg:col-span-6 xl:col-span-1 bg-white rounded-[16px] min-h-[370px] px-[20px] pt-[23px] pb-[20px] flex flex-col">
          <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
            My Calendar
          </h2>

          {/* Month Selector */}
          <div className="flex items-center justify-between mt-[14px]">
            <span className="text-[13px] font-bold leading-[16px] text-[#4B5563]">
              {MONTHS[monthIdx]}
            </span>
            <div className="flex items-center gap-[19px] pr-[11px]">
              <button
                type="button"
                onClick={() => setMonthIdx((prev) => Math.max(0, prev - 1))}
                className="p-0.5 hover:opacity-75 transition-opacity"
                aria-label="Previous month"
              >
                <FigmaIcons.CalPrev />
              </button>
              <button
                type="button"
                onClick={() =>
                  setMonthIdx((prev) => Math.min(MONTHS.length - 1, prev + 1))
                }
                className="p-0.5 hover:opacity-75 transition-opacity"
                aria-label="Next month"
              >
                <FigmaIcons.CalNext />
              </button>
            </div>
          </div>

          {/* Weekday Headers (y=89) */}
          <div className="grid grid-cols-7 text-center mt-[18px]">
            {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((dayName) => (
              <span
                key={dayName}
                className="text-[11px] font-bold leading-[13px] text-[#94A3B8]"
              >
                {dayName}
              </span>
            ))}
          </div>

          {/* Calendar Days Grid (y=118) */}
          <div className="mt-[16px] flex flex-col gap-[13px]">
            {CALENDAR_WEEKS.map((week, wIdx) => (
              <div key={wIdx} className="grid grid-cols-7 items-center justify-items-center">
                {week.map((cell, dIdx) => {
                  const isSelected = cell.currentMonth && cell.day === selectedDay;
                  return (
                    <button
                      key={dIdx}
                      type="button"
                      onClick={() => cell.currentMonth && setSelectedDay(cell.day)}
                      className={`w-[26px] h-[26px] rounded-full text-[12px] font-bold leading-[15px] flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-[#2563EB] text-white'
                          : cell.currentMonth
                          ? 'text-[#334155] hover:bg-[#EFF6FF]'
                          : 'text-[#CBD5E1] cursor-default'
                      }`}
                    >
                      {cell.day}
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Today's Meetings Card */}
        <div className="lg:col-span-6 xl:col-span-1 bg-white rounded-[16px] min-h-[370px] px-[20px] pt-[23px] pb-[20px] flex flex-col">
          {/* Card Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
              Today&apos;s Meetings
            </h2>
            <Link
              to="/attendance"
              className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="mt-[18px] flex flex-col gap-[12px]">
            {meetings.map((m) => (
              <div
                key={m.id}
                className={`w-full h-[76px] rounded-[12px] ${m.bg} flex items-center px-[14px]`}
              >
                <div className="w-[42px] shrink-0 flex flex-col">
                  <span className={`text-[12px] font-bold leading-[15px] ${m.accent}`}>
                    {m.time}
                  </span>
                  <span className={`text-[10px] font-bold leading-[12px] ${m.accent} mt-[1px]`}>
                    {m.period}
                  </span>
                </div>

                <div className={`w-[1.5px] h-[52px] ${m.divider} shrink-0`} />

                <div className="pl-[12px] flex flex-col min-w-0">
                  <p className={`text-[12px] font-bold leading-[15px] ${m.titleColor} truncate`}>
                    {m.title}
                  </p>
                  <div className="flex items-center gap-[4.5px] mt-[6px]">
                    {m.type === 'zoom' ? <FigmaIcons.MeetingZoom /> : <FigmaIcons.MeetingPin />}
                    <span className="text-[11px] font-normal leading-[13px] text-[#6B7280] truncate">
                      {m.location}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {showAddMeeting ? (
            <form
              onSubmit={handleAddMeeting}
              className="mt-3 p-2.5 rounded-[10px] bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col gap-2"
            >
              <input
                type="text"
                value={newMeetingTitle}
                onChange={(e) => setNewMeetingTitle(e.target.value)}
                placeholder="Meeting title..."
                className="h-[30px] px-2 rounded-[6px] border border-[#CBD5E1] bg-white text-[11.5px] focus:outline-none focus:border-[#2563EB]"
              />
              <div className="flex gap-1.5">
                <input
                  type="text"
                  value={newMeetingTime}
                  onChange={(e) => setNewMeetingTime(e.target.value)}
                  className="w-[70px] h-[30px] px-2 rounded-[6px] border border-[#CBD5E1] bg-white text-[11.5px]"
                />
                <button
                  type="submit"
                  className="flex-1 h-[30px] rounded-[6px] bg-[#2563EB] text-white text-[11.5px] font-bold"
                >
                  Add
                </button>
              </div>
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setShowAddMeeting(true)}
              className="mt-[14px] w-full h-[38px] rounded-[8px] bg-[#EFF6FF] hover:bg-[#DBEAFE] transition-colors flex items-center justify-center text-[12px] font-bold leading-[15px] text-[#2563EB]"
            >
              + Schedule Meeting
            </button>
          )}
        </div>
      </div>

      {/* ================= ROW 3: Attendance + Announcements + Recent Activity ================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.08fr)_minmax(0,1.3fr)] gap-[16px]">
        {/* Attendance Card (w=330, h=238) */}
        <div className="lg:col-span-6 xl:col-span-1 bg-white rounded-[16px] min-h-[238px] px-[24px] pt-[23px] pb-[24px] flex flex-col justify-between">
          <div>
            {/* Header */}
            <div className="flex items-center justify-between">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Attendance
              </h2>
              <Link
                to="/attendance"
                className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
              >
                View all
              </Link>
            </div>

            {/* Status & Timer */}
            <div className="mt-[14px] flex items-start justify-between">
              <div>
                <p className="text-[13px] font-bold leading-[16px] text-[#16A34A]">
                  {isClockedIn
                    ? isOnBreak
                      ? "You're On Break"
                      : "You're Clocked In"
                    : "You're Clocked Out"}
                </p>
                <p className="text-[34px] font-bold leading-[41px] text-[#0F172A] mt-[7px] tracking-tight tabular-nums">
                  {formatSeconds(elapsedSeconds)}
                </p>
                <p className="text-[12px] font-normal leading-[15px] text-[#6B7280] mt-[5px]">
                  Since 9:00 AM
                </p>
              </div>

              <div className="mt-[17px] mr-[18px] shrink-0">
                <FigmaIcons.AttendanceClockCircle />
              </div>
            </div>
          </div>

          {/* Action Buttons (y=168, each w=134, h=38) */}
          <div className="mt-[24px] grid grid-cols-2 gap-[14px]">
            <button
              type="button"
              onClick={() => setIsClockedIn((prev) => !prev)}
              className="h-[38px] rounded-[8px] bg-[#10B981] hover:bg-[#059669] transition-colors flex items-center justify-center gap-[12px] text-white text-[12px] font-bold leading-[15px]"
            >
              <FigmaIcons.ClockOut />
              <span>{isClockedIn ? 'Clock Out' : 'Clock In'}</span>
            </button>

            <button
              type="button"
              onClick={() => setIsOnBreak((prev) => !prev)}
              className={`h-[38px] rounded-[8px] border-[1.5px] transition-colors flex items-center justify-center gap-[12px] text-[12px] font-bold leading-[15px] ${
                isOnBreak
                  ? 'bg-[#FFF7ED] border-[#FDBA74] text-[#EA580C]'
                  : 'bg-white border-[#E5E7EB] hover:bg-[#F9FAFB] text-[#4B5563]'
              }`}
            >
              <FigmaIcons.BreakCoffee />
              <span>Break</span>
            </button>
          </div>
        </div>

        {/* Announcements Card (w=360, h=238) */}
        <div className="lg:col-span-6 xl:col-span-1 bg-white rounded-[16px] min-h-[238px] px-[24px] pt-[23px] pb-[24px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
              Announcements
            </h2>
            <Link
              to="/reports"
              className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
            >
              View all
            </Link>
          </div>

          {/* Announcement 1 (y=60) */}
          <div className="mt-[19px] flex items-start gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#F5F3FF] flex items-center justify-center shrink-0">
              <FigmaIcons.Announce1 />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[12px] font-bold leading-[15px] text-[#1E293B]">
                Company Offsite on July 10-12
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#64748B] mt-[2px]">
                Join us for our annual company offsite.
              </p>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                2 days ago
              </span>
            </div>
          </div>

          {/* Announcement 2 (y=136) */}
          <div className="mt-[32px] flex items-start gap-[12px]">
            <div className="w-[36px] h-[36px] rounded-[10px] bg-[#EFF6FF] flex items-center justify-center shrink-0">
              <FigmaIcons.Announce2 />
            </div>
            <div className="flex flex-col min-w-0">
              <p className="text-[12px] font-bold leading-[15px] text-[#1E293B]">
                New Performance Review Cycle
              </p>
              <p className="text-[11px] font-normal leading-[13px] text-[#64748B] mt-[2px]">
                Performance reviews start from July 1.
              </p>
              <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                5 days ago
              </span>
            </div>
          </div>
        </div>

        {/* Recent Activity Card (w=430, h=238) */}
        <div className="lg:col-span-12 xl:col-span-1 bg-white rounded-[16px] min-h-[238px] px-[24px] pt-[23px] pb-[20px] flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
              Recent Activity
            </h2>
            <Link
              to="/documents"
              className="text-[12px] font-bold leading-[15px] text-[#2563EB] hover:underline"
            >
              View all
            </Link>
          </div>

          {/* Activity List (y=59, 101, 143, 185) */}
          <div className="mt-[18px] flex flex-col gap-[15px]">
            {/* Activity 1 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#F0FDF4] flex items-center justify-center shrink-0 mt-[1px]">
                <FigmaIcons.ActCheck />
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B]">
                  You completed &ldquo;Checkout validation&rdquo; task
                </p>
                <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                  2 hours ago
                </span>
              </div>
            </div>

            {/* Activity 2 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-[1px]">
                <FigmaIcons.ActDoc />
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B]">
                  You uploaded &ldquo;OmniLaunch Brief.pdf&rdquo;
                </p>
                <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                  3 hours ago
                </span>
              </div>
            </div>

            {/* Activity 3 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FAF5FF] flex items-center justify-center shrink-0 mt-[1px]">
                <FigmaIcons.ActComment />
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B]">
                  Sarah commented on &ldquo;Mobile nav design&rdquo;
                </p>
                <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                  5 hours ago
                </span>
              </div>
            </div>

            {/* Activity 4 */}
            <div className="flex items-start gap-[8px]">
              <div className="w-[20px] h-[20px] rounded-full bg-[#FFF7ED] flex items-center justify-center shrink-0 mt-[1px]">
                <FigmaIcons.ActCalendar />
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold leading-[13px] text-[#1E293B]">
                  You requested leave on July 24
                </p>
                <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[2px]">
                  1 day ago
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
