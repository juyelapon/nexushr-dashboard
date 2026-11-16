import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import { FigmaIcons } from './Icons';

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    title: 'Leave request approved',
    desc: 'Your Sick Leave for 15 Jun 2026 was approved.',
    time: '10m ago',
    unread: true,
    path: '/leave-requests',
  },
  {
    id: 2,
    title: 'New comment from Sarah Wilson',
    desc: 'Commented on "Design review: Mobile nav"',
    time: '1h ago',
    unread: true,
    path: '/my-tasks',
  },
  {
    id: 3,
    title: 'Project deadline reminder',
    desc: 'OmniLaunch Website Redesign due in 2 days.',
    time: '3h ago',
    unread: true,
    path: '/projects',
  },
];

export default function Header({ onOpenSidebar, searchQuery, onSearchChange }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  const [openMenu, setOpenMenu] = useState(null); // 'notifications' | 'profile' | null
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && (e.key === 'k' || e.key === '/')) {
        e.preventDefault();
        searchInputRef.current?.focus();
      } else if (e.key === 'Escape') {
        setOpenMenu(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    setOpenMenu(null);
  }, [pathname]);

  const unreadCount = notifications.filter((n) => n.unread).length;
  const isMyTasksPage = pathname === '/my-tasks';
  const isProjectsPage = pathname === '/projects';
  const isAttendanceOnly = pathname === '/attendance';
  const isLeaveRequestsPage = pathname === '/leave-requests';
  const isTeamDirectoryPage = pathname === '/team-directory';
  const isDocumentsPage = pathname === '/documents';
  const isMessagesPage = pathname === '/messages';
  const isReportsPage = pathname === '/reports';
  const isSettingsPage = pathname === '/settings';
  const isAttendancePage =
    isAttendanceOnly ||
    isLeaveRequestsPage ||
    isTeamDirectoryPage ||
    isDocumentsPage ||
    isMessagesPage ||
    isReportsPage ||
    isSettingsPage;
  const isCompactSearch = isMyTasksPage || isProjectsPage || isAttendancePage;

  const getSearchPlaceholder = () => {
    if (isProjectsPage) return 'Search projects, tasks, files...';
    if (isLeaveRequestsPage || isDocumentsPage) return 'Search employees, tasks, documents...';
    if (isTeamDirectoryPage) return 'Search by name, designation, department...';
    if (isMessagesPage) return 'Search messages, people...';
    if (isReportsPage) return 'Search reports, analytics...';
    if (isSettingsPage) return 'Search anything...';
    if (isAttendanceOnly) return 'Search employees, documents...';
    return 'Search tasks...';
  };

  const getShortcutLabel = () => {
    if (
      isLeaveRequestsPage ||
      isTeamDirectoryPage ||
      isDocumentsPage ||
      isMessagesPage ||
      isReportsPage ||
      isSettingsPage
    )
      return '⌘ K';
    if (isProjectsPage || isAttendanceOnly) return '⌘ /';
    return '/';
  };

  return (
    <header
      className={`h-[72px] w-full bg-white border-b ${
        isCompactSearch ? 'border-[#F1F5F9]' : 'border-[#E5E7EB]'
      } px-4 sm:px-[24px] flex items-center justify-between sticky top-0 z-30`}
    >
      {/* Left: Menu Button + Search Bar */}
      <div
        className={`flex items-center gap-[16px] flex-1 ${
          isTeamDirectoryPage || isMessagesPage || isReportsPage || isSettingsPage
            ? 'max-w-[380px]'
            : isAttendancePage
            ? 'max-w-[320px]'
            : isCompactSearch
            ? 'max-w-[280px]'
            : 'max-w-[456px]'
        }`}
      >
        <button
          type="button"
          onClick={onOpenSidebar}
          className={`${
            isAttendancePage ? 'flex' : 'lg:hidden'
          } p-1.5 -ml-1 rounded-lg text-[#4B5563] hover:bg-[#F3F4F6] focus:outline-none shrink-0`}
          aria-label="Toggle sidebar"
        >
          {isSettingsPage ? (
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 1L1 7L7 13" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H17M1 7H17M1 13H17" stroke="#334155" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          )}
        </button>

        {isCompactSearch ? (
          /* Compact Search Input */
          <div
            className={`relative w-full ${
              isTeamDirectoryPage || isMessagesPage || isReportsPage || isSettingsPage
                ? 'max-w-[340px]'
                : 'max-w-[280px]'
            } h-[40px] rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] flex items-center pl-[15px] pr-[16px]`}
          >
            <span className="shrink-0 mr-[7.5px] flex items-center justify-center">
              <FigmaIcons.Search color="#94A3B8" />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder={getSearchPlaceholder()}
              className="w-full bg-transparent text-[13px] leading-[16px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none font-normal pr-9"
            />
            <span
              className={`absolute right-[10px] ${
                isProjectsPage || isAttendancePage ? 'w-[28px]' : 'w-[20px]'
              } h-[20px] rounded-[4px] bg-white border border-[#E2E8F0] text-[#94A3B8] text-[10px] font-bold leading-[12px] flex items-center justify-center select-none`}
            >
              {getShortcutLabel()}
            </span>
          </div>
        ) : (
          /* Dashboard Search Input: w=456, h=40, rounded-full, bg=#F3F4F6 */
          <div className="relative w-full h-[40px] rounded-full bg-[#F3F4F6] flex items-center pl-[19px] pr-4">
            <span className="shrink-0 mr-[11.5px] flex items-center justify-center">
              <FigmaIcons.Search color="#9CA3AF" />
            </span>
            <input
              ref={searchInputRef}
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange?.(e.target.value)}
              placeholder="Search projects, tasks, documents..."
              className="w-full bg-transparent text-[14px] leading-[17px] text-[#0F172A] placeholder-[#9CA3AF] focus:outline-none font-normal"
            />
          </div>
        )}
      </div>

      {/* Right Controls */}
      <div
        className={`relative flex items-center gap-[20px] sm:gap-[24px] ml-3 ${
          isCompactSearch ? 'xl:pr-[5px]' : 'xl:pr-[12px]'
        }`}
      >
        {/* Bell Icon + Badge */}
        <div className="relative">
          <button
            type="button"
            onClick={() =>
              setOpenMenu((prev) => (prev === 'notifications' ? null : 'notifications'))
            }
            className="relative w-[21px] h-[25px] flex items-end justify-start text-[#4B5563] hover:opacity-80 transition-opacity"
            aria-label="Notifications"
          >
            <FigmaIcons.Bell />
            {unreadCount > 0 && (
              <span className="absolute -top-[1px] left-[5.5px] w-[15px] h-[15px] rounded-full bg-[#EF4444] text-white text-[9px] font-bold leading-[11px] flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </button>

          {openMenu === 'notifications' && (
            <div className="absolute right-0 mt-3 w-[300px] bg-white rounded-[14px] shadow-xl border border-[#E2E8F0] p-3 z-50">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-[#F1F5F9]">
                <span className="text-[13px] font-bold text-[#0F172A]">Notifications</span>
                <button
                  type="button"
                  onClick={() =>
                    setNotifications((prev) => prev.map((n) => ({ ...n, unread: false })))
                  }
                  className="text-[11px] font-bold text-[#2563EB] hover:underline"
                >
                  Mark all read
                </button>
              </div>
              <div className="flex flex-col gap-1.5">
                {notifications.map((n) => (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => {
                      setNotifications((prev) =>
                        prev.map((item) =>
                          item.id === n.id ? { ...item, unread: false } : item
                        )
                      );
                      setOpenMenu(null);
                      navigate(n.path);
                    }}
                    className={`w-full text-left p-2.5 rounded-[10px] transition-colors ${
                      n.unread ? 'bg-[#EFF6FF]/70 hover:bg-[#EFF6FF]' : 'hover:bg-[#F8FAFC]'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[12px] font-bold text-[#0F172A] truncate">
                        {n.title}
                      </span>
                      <span className="text-[10px] text-[#94A3B8] shrink-0">{n.time}</span>
                    </div>
                    <p className="text-[11px] text-[#64748B] mt-0.5 line-clamp-2">{n.desc}</p>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Mail / Message Icon + Badge (Navigates to /messages) */}
        {!isMyTasksPage && (
          <button
            type="button"
            onClick={() => navigate('/messages')}
            className="relative w-[23px] h-[25px] flex items-end justify-start text-[#4B5563] hover:opacity-80 transition-opacity"
            aria-label="Messages"
          >
            {isProjectsPage || isLeaveRequestsPage ? (
              <FigmaIcons.NavMessages color="#4B5563" />
            ) : (
              <FigmaIcons.Mail />
            )}
            <span className="absolute top-[1px] left-[7.5px] w-[15px] h-[15px] rounded-full bg-[#EF4444] text-white text-[9px] font-bold leading-[11px] flex items-center justify-center">
              {isLeaveRequestsPage || isTeamDirectoryPage || isReportsPage || isSettingsPage
                ? '3'
                : '2'}
            </span>
          </button>
        )}

        {/* Calendar Icon */}
        {(isLeaveRequestsPage ||
          isTeamDirectoryPage ||
          isMessagesPage ||
          isReportsPage ||
          isSettingsPage) && (
          <button
            type="button"
            onClick={() => navigate('/attendance')}
            className="w-[20px] h-[20px] flex items-center justify-center text-[#4B5563] hover:opacity-80 transition-opacity"
            aria-label="Calendar"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2.8" width="12" height="11.2" rx="2" stroke="#4B5563" strokeWidth="1.4" />
              <path d="M2 6.2H14" stroke="#4B5563" strokeWidth="1.4" />
              <path d="M5.2 1.5V3.5M10.8 1.5V3.5" stroke="#4B5563" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        )}

        {/* Cloud Upload Icon on Documents Header */}
        {isDocumentsPage && (
          <button
            type="button"
            onClick={() => navigate('/documents')}
            className="w-[22px] h-[20px] flex items-center justify-center text-[#4B5563] hover:opacity-80 transition-opacity"
            aria-label="Cloud storage"
          >
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.2 5.8C13.8 3.2 11.6 1.2 8.8 1.2C6.3 1.2 4.2 2.8 3.5 5C1.7 5.3 0.5 6.9 0.5 8.8C0.5 11 2.2 12.8 4.4 12.8H13.8C15.7 12.8 17.2 11.3 17.2 9.4C17.2 7.6 15.9 6.1 14.2 5.8Z"
                stroke="#4B5563"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 10V6M9 6L7.2 7.8M9 6L10.8 7.8"
                stroke="#4B5563"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        )}

        {/* User Profile + Dropdown */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setOpenMenu((prev) => (prev === 'profile' ? null : 'profile'))}
            className="flex items-center text-left group focus:outline-none sm:pl-[2px]"
          >
            {isTeamDirectoryPage || isMessagesPage || isReportsPage || isSettingsPage ? (
              <div className="relative w-[36px] h-[36px] shrink-0">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="18" fill="#FDBA74" />
                  <path d="M8 36C8 29 12.5 25.5 18 25.5C23.5 25.5 28 29 28 36H8Z" fill="#1D4ED8" />
                  <circle cx="18" cy="16.5" r="6" fill="#FDE68A" />
                  <path d="M12 16C12 11.8 14.5 9.2 18 9.2C21.5 9.2 24 11.8 24 16C22.8 13.8 20.5 12.8 18 12.8C15.5 12.8 13.2 13.8 12 16Z" fill="#1E293B" />
                </svg>
                <span className="w-[10px] h-[10px] rounded-full bg-[#10B981] border-[1.5px] border-white absolute -bottom-[1px] -right-[1px]" />
              </div>
            ) : (
              <div
                className={`relative w-[36px] h-[36px] rounded-full ${
                  isCompactSearch ? 'bg-[#3B82F6]' : 'bg-[#1E3A8A]'
                } border-[1.5px] border-[#E2E8F0] flex items-center justify-center shrink-0`}
              >
                <span className="text-white text-[12px] font-bold leading-[15px]">AJ</span>
                {isAttendancePage && (
                  <span className="w-[10px] h-[10px] rounded-full bg-[#10B981] border-[1.5px] border-white absolute -bottom-[1px] -right-[1px]" />
                )}
              </div>
            )}
            <div className="hidden sm:flex flex-col ml-[8px] mr-[14px]">
              <span className="text-[14px] font-bold leading-[17px] text-[#0F172A] whitespace-nowrap">
                Alex Johnson
              </span>
              <span className="text-[11px] font-normal leading-[13px] text-[#6B7280] mt-[1px] whitespace-nowrap">
                Product Designer
              </span>
            </div>
            <span className="hidden sm:flex items-center justify-center text-[#4B5563]">
              <FigmaIcons.ChevronDown />
            </span>
          </button>

          {openMenu === 'profile' && (
            <div className="absolute right-0 mt-3 w-[200px] bg-white rounded-[12px] shadow-xl border border-[#E2E8F0] py-1.5 z-50">
              <Link
                to="/settings"
                onClick={() => setOpenMenu(null)}
                className="block px-4 py-2 text-[12.5px] font-semibold text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
              >
                Profile &amp; Settings
              </Link>
              <Link
                to="/work-details"
                onClick={() => setOpenMenu(null)}
                className="block px-4 py-2 text-[12.5px] font-semibold text-[#334155] hover:bg-[#F8FAFC] hover:text-[#2563EB]"
              >
                Onboarding / Work Details
              </Link>
              <div className="my-1 border-t border-[#F1F5F9]" />
              <Link
                to="/signin"
                onClick={() => setOpenMenu(null)}
                className="block px-4 py-2 text-[12.5px] font-bold text-[#DC2626] hover:bg-[#FEF2F2]"
              >
                Sign Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
