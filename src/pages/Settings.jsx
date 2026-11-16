import React, { useState } from 'react';

const SETTINGS_NAV = [
  {
    id: 'profile',
    title: 'Profile Settings',
    subtitle: 'Update personal info',
    icon: (active) => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="4.5" r="2.5" fill={active ? '#2563EB' : '#475569'} />
        <path
          d="M2.5 12C2.5 9.8 4.5 8.4 7 8.4C9.5 8.4 11.5 9.8 11.5 12"
          fill={active ? '#2563EB' : '#475569'}
        />
      </svg>
    ),
  },
  {
    id: 'security',
    title: 'Security',
    subtitle: 'Change password & 2FA',
    icon: (active) => (
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="6" width="9" height="7" rx="1.5" fill={active ? '#2563EB' : '#475569'} />
        <path
          d="M4 6V4.2C4 2.8 5.1 1.8 6.5 1.8C7.9 1.8 9 2.8 9 4.2V6"
          stroke={active ? '#2563EB' : '#475569'}
          strokeWidth="1.4"
        />
      </svg>
    ),
  },
  {
    id: 'notifications',
    title: 'Notifications',
    subtitle: 'Email & push preferences',
    icon: (active) => (
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 1.5C4.3 1.5 2.5 3.3 2.5 5.5V8.5L1.2 10.2V11H11.8V10.2L10.5 8.5V5.5C10.5 3.3 8.7 1.5 6.5 1.5ZM5.2 11.8C5.2 12.5 5.8 13 6.5 13C7.2 13 7.8 12.5 7.8 11.8H5.2Z"
          fill={active ? '#2563EB' : '#475569'}
        />
      </svg>
    ),
  },
  {
    id: 'privacy',
    title: 'Privacy',
    subtitle: 'Manage data & visibility',
    icon: (active) => (
      <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z"
          fill={active ? '#2563EB' : '#475569'}
        />
        <path d="M4.5 7.2L5.8 8.5L8.6 5.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'appearance',
    title: 'Appearance',
    subtitle: 'Themes & accent colors',
    icon: (active) => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="5.5" fill={active ? '#2563EB' : '#475569'} />
        <circle cx="5" cy="5.5" r="0.9" fill="white" />
        <circle cx="7.2" cy="4.5" r="0.9" fill="white" />
        <circle cx="9.2" cy="6" r="0.9" fill="white" />
      </svg>
    ),
  },
  {
    id: 'language',
    title: 'Language & Region',
    subtitle: 'Localization settings',
    icon: (active) => (
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="5.5" stroke={active ? '#2563EB' : '#475569'} strokeWidth="1.3" />
        <ellipse cx="7" cy="7" rx="2.5" ry="5.5" stroke={active ? '#2563EB' : '#475569'} strokeWidth="1.2" />
        <path d="M1.8 7H12.2" stroke={active ? '#2563EB' : '#475569'} strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    id: 'integrations',
    title: 'Integrations',
    subtitle: 'Connected apps & APIs',
    icon: (active) => (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M3 3L11 11M11 3L3 11"
          stroke={active ? '#2563EB' : '#475569'}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    id: 'billing',
    title: 'Billing & Sub',
    subtitle: 'View plan & invoices',
    icon: (active) => (
      <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="9" rx="1.5" stroke={active ? '#2563EB' : '#475569'} strokeWidth="1.3" />
        <path d="M1 4.2H13" stroke={active ? '#2563EB' : '#475569'} strokeWidth="1.3" />
      </svg>
    ),
  },
];

const ACCENT_COLORS = [
  { id: 'blue', hex: '#2563EB' },
  { id: 'green', hex: '#16A34A' },
  { id: 'purple', hex: '#7C3AED' },
  { id: 'orange', hex: '#EA580C' },
  { id: 'red', hex: '#EF4444' },
  { id: 'cyan', hex: '#06B6D4' },
];

const QUICK_LINKS = [
  {
    id: 'download',
    label: 'Download My Data',
    icon: (
      <svg width="15" height="12" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M12.6 4.8C12.3 2.5 10.3 0.8 7.7 0.8C5.5 0.8 3.6 2.2 3 4.2C1.3 4.5 0 6 0 7.8C0 9.8 1.6 11.4 3.6 11.4H12.4C14.1 11.4 15.5 10 15.5 8.3C15.5 6.6 14.3 5.2 12.6 4.8ZM7.7 9.6L4.8 6.4H6.6V4H8.8V6.4H10.6L7.7 9.6Z"
          fill="#2563EB"
        />
      </svg>
    ),
  },
  {
    id: 'devices',
    label: 'Connected Devices',
    icon: (
      <svg width="13" height="12" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="12" height="8.5" rx="1.5" fill="#2563EB" />
        <path d="M4.5 12H9.5M7 9.5V12" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'privacy',
    label: 'Privacy Policy',
    icon: (
      <svg width="12" height="13" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z"
          fill="#2563EB"
        />
      </svg>
    ),
  },
  {
    id: 'terms',
    label: 'Terms of Service',
    icon: (
      <svg width="11" height="13" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2 1H7.5L10.5 4V12C10.5 12.55 10.05 13 9.5 13H2C1.45 13 1 12.55 1 12V2C1 1.45 1.45 1 2 1Z"
          fill="#2563EB"
        />
        <path d="M3 6.5H8M3 9H6.5" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: (
      <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="7" cy="7" r="6" fill="#2563EB" />
        <path
          d="M5.6 5.4C5.6 4.6 6.2 4 7 4C7.8 4 8.4 4.6 8.4 5.4C8.4 6 7.9 6.4 7.4 6.7C7.1 6.9 7 7.2 7 7.6V8M7 10H7.01"
          stroke="white"
          strokeWidth="1.3"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

function ToggleSwitch({ checked, onChange }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`w-[36px] h-[20px] rounded-full p-[2px] transition-colors shrink-0 flex items-center ${
        checked ? 'bg-[#2563EB] justify-end' : 'bg-[#CBD5E1] justify-start'
      }`}
    >
      <span className="w-[16px] h-[16px] rounded-full bg-white shadow-sm block" />
    </button>
  );
}

export default function Settings() {
  const [activeNav, setActiveNav] = useState('profile');

  // Profile form state
  const [fullName, setFullName] = useState('Alex Johnson');
  const [jobTitle, setJobTitle] = useState('Product Designer');
  const [employeeId, setEmployeeId] = useState('EMP-1024');
  const [department, setDepartment] = useState('Design Team');
  const [email, setEmail] = useState('alex.johnson@nexurhr.com');
  const [phone, setPhone] = useState('+1 (555) 123-4567');

  // Toggles & Appearance state
  const [twoFactor, setTwoFactor] = useState(true);
  const [emailNotif, setEmailNotif] = useState(true);
  const [pushNotif, setPushNotif] = useState(true);
  const [taskReminders, setTaskReminders] = useState(true);
  const [theme, setTheme] = useState('Light');
  const [accentColor, setAccentColor] = useState('blue');
  const [savedNotice, setSavedNotice] = useState(false);

  const handleSaveProfile = () => {
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2500);
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      {/* Page Title */}
      <div className="mb-[20px]">
        <h1 className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
          Settings
        </h1>
        <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
          Manage your account preferences and application settings
        </p>
      </div>

      {/* 3-Column Settings Layout */}
      <div className="flex flex-col xl:flex-row gap-[24px] items-start">
        {/* Column 1: Settings Sub-Navigation (w=196px) */}
        <div className="w-full xl:w-[196px] bg-white rounded-[16px] p-[12px] flex flex-row xl:flex-col gap-[6px] overflow-x-auto xl:overflow-visible shrink-0 xl:min-h-[756px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          {SETTINGS_NAV.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveNav(item.id)}
                className={`w-full min-w-[160px] xl:min-w-0 rounded-[10px] px-[12px] py-[11px] flex items-start gap-[10px] text-left transition-colors ${
                  isActive
                    ? 'bg-[#EFF6FF]'
                    : 'bg-transparent hover:bg-[#F8FAFC]'
                }`}
              >
                <span className="mt-[2px] shrink-0">{item.icon(isActive)}</span>
                <div className="flex flex-col min-w-0">
                  <span
                    className={`text-[12px] font-bold leading-[14px] truncate ${
                      isActive ? 'text-[#2563EB]' : 'text-[#0F172A]'
                    }`}
                  >
                    {item.title}
                  </span>
                  <span
                    className={`text-[9.5px] font-normal leading-[12px] mt-[2px] truncate ${
                      isActive ? 'text-[#60A5FA]' : 'text-[#94A3B8]'
                    }`}
                  >
                    {item.subtitle}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Column 2: Center Settings Cards Stack */}
        <div className="flex-1 w-full flex flex-col gap-[18px] min-w-0">
          {/* Card 1: Profile Settings */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-[12px] mb-[18px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="4.5" r="2.5" fill="#2563EB" />
                  <path d="M2.5 12C2.5 9.8 4.5 8.4 7 8.4C9.5 8.4 11.5 9.8 11.5 12" fill="#2563EB" />
                </svg>
              </div>
              <div>
                <h2 className="text-[14.5px] font-bold leading-[18px] text-[#0F172A]">
                  Profile Settings
                </h2>
                <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[2px]">
                  Update your personal information and how it&apos;s displayed.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-[16px] gap-y-[14px]">
              {/* Full Name */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Full Name
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 px-[12px] text-[12.5px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Job Title */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Job Title
                </label>
                <input
                  type="text"
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 px-[12px] text-[12.5px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Employee ID */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Employee ID
                </label>
                <input
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 px-[12px] text-[12.5px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Department */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Department
                </label>
                <div className="relative">
                  <select
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 pl-[12px] pr-[28px] text-[12.5px] text-[#0F172A] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB] focus:bg-white"
                  >
                    <option value="Design Team">Design Team</option>
                    <option value="Product Design">Product Design</option>
                    <option value="Engineering">Engineering</option>
                    <option value="Marketing">Marketing</option>
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
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Email Address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 px-[12px] text-[12.5px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-[11px] font-semibold leading-[13px] text-[#475569] mb-[6px]">
                  Phone Number
                </label>
                <input
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full h-[38px] rounded-[8px] border border-[#E2E8F0] bg-[#F8FAFC]/50 px-[12px] text-[12.5px] text-[#0F172A] focus:outline-none focus:border-[#2563EB] focus:bg-white"
                />
              </div>
            </div>

            <div className="mt-[16px] flex items-center gap-3">
              <button
                type="button"
                onClick={handleSaveProfile}
                className="h-[36px] px-[18px] rounded-[8px] border-[1.5px] border-[#2563EB] bg-white hover:bg-[#EFF6FF] text-[#0F172A] text-[12px] font-bold leading-[15px] transition-colors"
              >
                Save Changes
              </button>
              {savedNotice && (
                <span className="text-[12px] font-bold text-[#16A34A]">
                  ✓ Changes saved!
                </span>
              )}
            </div>
          </div>

          {/* Card 2: Security Settings */}
          <div className="bg-white rounded-[16px] p-[20px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-[12px] mb-[10px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z"
                    fill="#16A34A"
                  />
                  <path d="M4.5 7.2L5.8 8.5L8.6 5.6" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div>
                <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                  Security Settings
                </h2>
                <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[1px]">
                  Manage your password and account security.
                </p>
              </div>
            </div>

            {/* Password Row */}
            <div className="flex items-center justify-between py-[10px] border-b border-[#F1F5F9]">
              <div className="flex items-center gap-[20px]">
                <span className="text-[12px] font-bold text-[#0F172A]">
                  Password
                </span>
                <span className="text-[12px] tracking-[2px] text-[#475569] select-none">
                  ••••••••••••
                </span>
              </div>

              <button
                type="button"
                className="h-[28px] px-[12px] rounded-[6px] border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#F1F5F9] text-[11px] font-bold text-[#0F172A] transition-colors"
              >
                Change Password
              </button>
            </div>

            {/* Two-Factor Authentication Row */}
            <div className="flex items-center justify-between pt-[10px]">
              <div>
                <span className="block text-[12px] font-bold leading-[15px] text-[#0F172A]">
                  Two-Factor Authentication
                </span>
                <span className="block text-[10.5px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                  Add an extra layer of security to your account.
                </span>
              </div>

              <ToggleSwitch checked={twoFactor} onChange={setTwoFactor} />
            </div>
          </div>

          {/* Card 3: Notification Preferences */}
          <div className="bg-white rounded-[16px] p-[20px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-[12px] mb-[8px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#F3E8FF] flex items-center justify-center shrink-0">
                <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6.5 1.5C4.3 1.5 2.5 3.3 2.5 5.5V8.5L1.2 10.2V11H11.8V10.2L10.5 8.5V5.5C10.5 3.3 8.7 1.5 6.5 1.5ZM5.2 11.8C5.2 12.5 5.8 13 6.5 13C7.2 13 7.8 12.5 7.8 11.8H5.2Z"
                    fill="#7C3AED"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                  Notification Preferences
                </h2>
                <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[1px]">
                  Choose how you want to receive notifications.
                </p>
              </div>
            </div>

            <div className="divide-y divide-[#F1F5F9]">
              <div className="py-[10px] flex items-center justify-between">
                <div>
                  <span className="block text-[12px] font-bold leading-[15px] text-[#0F172A]">
                    Email Notifications
                  </span>
                  <span className="block text-[10.5px] text-[#94A3B8] mt-[1px]">
                    Receive notifications via email
                  </span>
                </div>
                <ToggleSwitch checked={emailNotif} onChange={setEmailNotif} />
              </div>

              <div className="py-[10px] flex items-center justify-between">
                <div>
                  <span className="block text-[12px] font-bold leading-[15px] text-[#0F172A]">
                    Push Notifications
                  </span>
                  <span className="block text-[10.5px] text-[#94A3B8] mt-[1px]">
                    Receive push notifications in the app
                  </span>
                </div>
                <ToggleSwitch checked={pushNotif} onChange={setPushNotif} />
              </div>

              <div className="pt-[10px] flex items-center justify-between">
                <div>
                  <span className="block text-[12px] font-bold leading-[15px] text-[#0F172A]">
                    Task Reminders
                  </span>
                  <span className="block text-[10.5px] text-[#94A3B8] mt-[1px]">
                    Get reminded about upcoming and due tasks
                  </span>
                </div>
                <ToggleSwitch checked={taskReminders} onChange={setTaskReminders} />
              </div>
            </div>
          </div>

          {/* Card 4: Appearance */}
          <div className="bg-white rounded-[16px] p-[20px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center gap-[12px] mb-[12px]">
              <div className="w-[32px] h-[32px] rounded-full bg-[#FFEDD5] flex items-center justify-center shrink-0">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="5.5" fill="#EA580C" />
                  <circle cx="5" cy="5.5" r="0.9" fill="white" />
                  <circle cx="7.2" cy="4.5" r="0.9" fill="white" />
                  <circle cx="9.2" cy="6" r="0.9" fill="white" />
                </svg>
              </div>
              <div>
                <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                  Appearance
                </h2>
                <p className="text-[11px] font-normal leading-[14px] text-[#64748B] mt-[1px]">
                  Customize how the application looks for you.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4">
              {/* Theme Switcher */}
              <div className="flex items-center gap-[8px]">
                <span className="text-[11.5px] font-semibold text-[#475569] mr-[4px]">
                  Theme
                </span>
                {['Light', 'Dark', 'System'].map((t) => {
                  const isActive = theme === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      onClick={() => setTheme(t)}
                      className={`h-[28px] px-[14px] rounded-[6px] text-[11px] leading-[13px] transition-colors ${
                        isActive
                          ? 'border-[1.5px] border-[#2563EB] bg-[#EFF6FF] text-[#0F172A] font-bold'
                          : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#475569] font-semibold hover:bg-[#F1F5F9]'
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>

              {/* Accent Color Swatches */}
              <div className="flex items-center gap-[8px]">
                <span className="text-[11.5px] font-semibold text-[#475569] mr-[4px]">
                  Accent Color
                </span>
                {ACCENT_COLORS.map((col) => {
                  const isSelected = accentColor === col.id;
                  return (
                    <button
                      key={col.id}
                      type="button"
                      onClick={() => setAccentColor(col.id)}
                      style={{ backgroundColor: col.hex }}
                      className="w-[18px] h-[18px] rounded-full flex items-center justify-center focus:outline-none transition-transform hover:scale-110"
                      aria-label={`Select ${col.id} accent color`}
                    >
                      {isSelected && (
                        <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 3.5L3.2 5.7L8 1" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Column 3: Right Profile Summary + Quick Links (w=310px) */}
        <div className="w-full xl:w-[310px] flex flex-col gap-[24px] shrink-0">
          {/* Card 1: Profile Summary */}
          <div className="bg-white rounded-[16px] p-[24px] flex flex-col items-center shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            {/* Avatar with Camera Edit Badge */}
            <div className="relative w-[72px] h-[72px]">
              <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="36" cy="36" r="36" fill="#FDBA74" />
                <mask id="settings-avatar-mask" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                  <circle cx="36" cy="36" r="36" fill="white" />
                </mask>
                <g mask="url(#settings-avatar-mask)">
                  <path d="M16 72C16 58 25 51 36 51C47 51 56 58 56 72H16Z" fill="#1E3A8A" />
                  <rect x="31.5" y="42" width="9" height="11" rx="4" fill="#FDE68A" />
                  <circle cx="36" cy="33" r="12" fill="#FDE68A" />
                  <path
                    d="M24 31.5C24 23 29 18 36 18C43 18 48 23 48 31.5C45.5 27 41 25 36 25C31 25 26.5 27 24 31.5Z"
                    fill="#1E293B"
                  />
                </g>
              </svg>

              <button
                type="button"
                className="w-[22px] h-[22px] rounded-full bg-[#2563EB] border-2 border-white text-white flex items-center justify-center absolute bottom-0 right-0 shadow-sm"
                aria-label="Change avatar"
              >
                <svg width="10" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="2.5" width="10" height="6.5" rx="1.2" stroke="white" strokeWidth="1.2" />
                  <circle cx="6" cy="5.8" r="1.5" stroke="white" strokeWidth="1.1" />
                </svg>
              </button>
            </div>

            <h3 className="text-[16px] font-bold leading-[19px] text-[#0F172A] mt-[12px]">
              {fullName}
            </h3>
            <span className="text-[12px] font-normal leading-[15px] text-[#64748B] mt-[2px]">
              {jobTitle}
            </span>

            <div className="mt-[8px] px-[10px] py-[2.5px] rounded-full bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold leading-[12px] flex items-center gap-[4px]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#16A34A]" />
              <span>Active</span>
            </div>

            {/* Metadata Rows */}
            <div className="w-full mt-[20px] pt-[16px] border-t border-[#F8FAFC] flex flex-col gap-[12px] text-[12px]">
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">Member Since</span>
                <span className="font-bold text-[#0F172A]">Jan 15, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">Employee ID</span>
                <span className="font-bold text-[#0F172A]">{employeeId}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">Department</span>
                <span className="font-bold text-[#0F172A]">{department}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[#94A3B8]">Location</span>
                <span className="font-bold text-[#0F172A]">New York, USA</span>
              </div>
            </div>

            <button
              type="button"
              className="w-full mt-[20px] h-[38px] rounded-[8px] border-[1.5px] border-[#2563EB] bg-white hover:bg-[#EFF6FF] text-[#2563EB] text-[12.5px] font-bold leading-[15px] transition-colors"
            >
              View Profile
            </button>
          </div>

          {/* Card 2: Quick Links */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mb-[16px]">
              Quick Links
            </h2>

            <div className="flex flex-col gap-[10px]">
              {QUICK_LINKS.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className="w-full rounded-[10px] border border-[#F1F5F9] bg-[#F8FAFC]/80 hover:bg-[#EFF6FF]/60 hover:border-[#DBEAFE] px-[12px] py-[11px] flex items-center justify-between text-left transition-all"
                >
                  <div className="flex items-center gap-[10px]">
                    <span className="w-[20px] flex items-center justify-center shrink-0">
                      {link.icon}
                    </span>
                    <span className="text-[12px] font-bold leading-[15px] text-[#0F172A]">
                      {link.label}
                    </span>
                  </div>

                  <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1L5 5L1 9" stroke="#94A3B8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
