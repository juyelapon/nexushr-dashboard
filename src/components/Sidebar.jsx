import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { FigmaIcons } from './Icons';

const NAV_ITEMS = [
  { label: 'Dashboard', path: '/', icon: FigmaIcons.NavDashboard },
  { label: 'My Tasks', path: '/my-tasks', icon: FigmaIcons.NavTasks },
  { label: 'Projects', path: '/projects', icon: FigmaIcons.NavProjects },
  { label: 'Attendance', path: '/attendance', icon: FigmaIcons.NavAttendance },
  { label: 'Leave Requests', path: '/leave-requests', icon: FigmaIcons.NavLeave },
  { label: 'Team Directory', path: '/team-directory', icon: FigmaIcons.NavTeam },
  { label: 'Documents', path: '/documents', icon: FigmaIcons.NavDocuments },
  { label: 'Messages', path: '/messages', icon: FigmaIcons.NavMessages, badge: 3 },
  { label: 'Reports', path: '/reports', icon: FigmaIcons.NavReports },
  { label: 'Settings', path: '/settings', icon: FigmaIcons.NavSettings },
];

export default function Sidebar({ isOpen, onClose }) {
  const { pathname } = useLocation();
  const isSubPage = pathname !== '/';

  return (
    <>
      {/* Mobile Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-[1px] lg:hidden transition-opacity"
          onClick={onClose}
        />
      )}

      {/* Sidebar Container: 240px width on desktop, min-h-[960px] */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 w-[240px] shrink-0 bg-white flex flex-col justify-between min-h-screen lg:min-h-[960px] transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0 shadow-2xl' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div>
          {/* Brand Logo */}
          <div className="pt-[27px] pl-[23px] pr-[16px] pb-[42px] flex items-center justify-between">
            <NavLink to="/" className="inline-flex items-center" onClick={onClose}>
              <FigmaIcons.Logo />
            </NavLink>
            <button
              type="button"
              onClick={onClose}
              className="lg:hidden p-1.5 rounded-lg text-[#6B7280] hover:bg-[#F3F4F6]"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="px-[16px] flex flex-col gap-[8px]">
            {NAV_ITEMS.map((item) => {
              const IconComponent = item.icon;
              return (
                <NavLink
                  key={item.path}
                  to={item.path}
                  end={item.path === '/'}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `group flex items-center justify-between h-[42px] w-[208px] rounded-[8px] pl-[18px] pr-[12px] text-[14px] leading-[17px] transition-colors ${
                      isActive
                        ? 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                        : 'bg-transparent text-[#4B5563] font-normal hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      <div className="flex items-center min-w-0">
                        <span className="w-[18px] h-[18px] flex items-center justify-center shrink-0 mr-[12px]">
                          <IconComponent color={isActive ? '#2563EB' : '#6B7280'} />
                        </span>
                        <span className="truncate">{item.label}</span>
                      </div>

                      {item.badge && isSubPage && (
                        <span className="w-[16px] h-[16px] rounded-full bg-[#2563EB] text-white text-[10px] font-bold leading-[12px] flex items-center justify-center shrink-0">
                          {pathname === '/leave-requests' ||
                          pathname === '/team-directory' ||
                          pathname === '/documents' ||
                          pathname === '/messages' ||
                          pathname === '/reports' ||
                          pathname === '/settings'
                            ? 4
                            : item.badge}
                        </span>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>
        </div>

        {/* Bottom Support Card: x=16, y=856, w=208, h=80 */}
        <div className="px-[16px] pb-[24px] pt-[32px]">
          {isSubPage ? (
            <div className="w-[208px] h-[80px] rounded-[12px] bg-white border-[1.5px] border-[#F1F5F9] pl-[16px] pr-[16px] flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                  {pathname === '/my-tasks' ? (
                    <FigmaIcons.SupportShield />
                  ) : (
                    <FigmaIcons.SupportHeadset />
                  )}
                </div>
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold leading-[15px] text-[#0F172A]">
                    Need Help?
                  </span>
                  <a
                    href="#support"
                    onClick={(e) => e.preventDefault()}
                    className="text-[11px] font-normal leading-[13px] text-[#6B7280] mt-[2px] hover:underline"
                  >
                    Contact Support
                  </a>
                </div>
              </div>
              {pathname !== '/attendance' && pathname !== '/leave-requests' && (
                <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.5 0.5L5 5L0.5 9.5" stroke="#4B5563" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
            </div>
          ) : (
            <div className="w-[208px] h-[80px] rounded-[12px] bg-[#EFF6FF] pl-[16px] pr-[12px] flex items-center gap-[12px]">
              <div className="w-[36px] h-[36px] rounded-full bg-[#DBEAFE] flex items-center justify-center shrink-0">
                <FigmaIcons.SupportHeadset />
              </div>
              <div className="flex flex-col">
                <span className="text-[13px] font-bold leading-[16px] text-[#1E3A8A]">
                  Need Help?
                </span>
                <a
                  href="#support"
                  onClick={(e) => e.preventDefault()}
                  className="text-[11px] font-normal leading-[13px] text-[#2563EB] mt-[2px] hover:underline"
                >
                  Contact Support
                </a>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
