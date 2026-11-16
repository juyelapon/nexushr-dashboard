import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import MyTasks from './pages/MyTasks';
import Projects from './pages/Projects';
import Attendance from './pages/Attendance';
import LeaveRequests from './pages/LeaveRequests';
import TeamDirectory from './pages/TeamDirectory';
import Documents from './pages/Documents';
import Messages from './pages/Messages';
import Reports from './pages/Reports';
import Settings from './pages/Settings';
import SignIn from './pages/SignIn';
import AccountDetails from './pages/AccountDetails';
import PersonalDetails from './pages/PersonalDetails';
import WorkDetails from './pages/WorkDetails';

function SectionPlaceholder({ title }) {
  return (
    <div className="w-full max-w-[1200px] p-4 sm:p-[24px]">
      <div className="bg-white rounded-[16px] p-8 flex flex-col items-center justify-center min-h-[420px] text-center">
        <div className="w-12 h-12 rounded-[12px] bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center font-bold text-lg mb-4">
          {title.charAt(0)}
        </div>
        <h1 className="text-[20px] font-bold text-[#0F172A]">{title}</h1>
        <p className="text-[14px] text-[#6B7280] mt-2 max-w-md">
          Ready for the next Figma section! Share the link or node for <span className="font-semibold text-[#0F172A]">{title}</span> to convert and connect it here.
        </p>
        <Link
          to="/"
          className="mt-6 px-4 py-2 rounded-[8px] bg-[#2563EB] text-white text-[13px] font-bold hover:bg-[#1D4ED8] transition-colors"
        >
          Back to Dashboard
        </Link>
      </div>
    </div>
  );
}

function AppLayout() {
  const { pathname } = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const isAuthRoute =
    pathname === '/signin' ||
    pathname === '/signup' ||
    pathname === '/account-details' ||
    pathname === '/personal-details' ||
    pathname === '/work-details';

  if (isAuthRoute) {
    return (
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<AccountDetails />} />
        <Route path="/account-details" element={<AccountDetails />} />
        <Route path="/personal-details" element={<PersonalDetails />} />
        <Route path="/work-details" element={<WorkDetails />} />
      </Routes>
    );
  }

  return (
    <div className="min-h-screen bg-[#F4F6FA] flex flex-col lg:flex-row font-sans text-[#0F172A]">
      {/* Left Navigation Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Right Main Area: Top Header + Routed Page Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <Header
          onOpenSidebar={() => setIsSidebarOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard searchQuery={searchQuery} />} />
            <Route path="/my-tasks" element={<MyTasks searchQuery={searchQuery} />} />
            <Route path="/projects" element={<Projects searchQuery={searchQuery} />} />
            <Route path="/attendance" element={<Attendance searchQuery={searchQuery} />} />
            <Route path="/leave-requests" element={<LeaveRequests searchQuery={searchQuery} />} />
            <Route path="/team-directory" element={<TeamDirectory searchQuery={searchQuery} />} />
            <Route path="/documents" element={<Documents searchQuery={searchQuery} />} />
            <Route path="/messages" element={<Messages searchQuery={searchQuery} />} />
            <Route path="/reports" element={<Reports searchQuery={searchQuery} />} />
            <Route path="/settings" element={<Settings searchQuery={searchQuery} />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}
