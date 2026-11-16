import React, { useState } from 'react';

const SUMMARY_CARDS = [
  {
    id: 'total',
    label: 'Total Documents',
    value: '128',
    subtext: 'Across all categories',
    iconBg: 'bg-[#EFF6FF]',
    icon: (
      <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.5 3C1.5 2.17 2.17 1.5 3 1.5H6.2L7.8 3.2H13C13.83 3.2 14.5 3.87 14.5 4.7V11C14.5 11.83 13.83 12.5 13 12.5H3C2.17 12.5 1.5 11.83 1.5 11V3Z"
          fill="#2563EB"
        />
      </svg>
    ),
  },
  {
    id: 'my-docs',
    label: 'My Documents',
    value: '45',
    subtext: 'Documents uploaded by you',
    iconBg: 'bg-[#DCFCE7]',
    icon: (
      <svg width="13" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M2.5 1.5H8.8L12.5 5.2V13.5C12.5 14.33 11.83 15 11 15H2.5C1.67 15 1 14.33 1 13.5V3C1 2.17 1.67 1.5 2.5 1.5Z"
          fill="#16A34A"
        />
        <path d="M8.5 1.5V5.5H12.5" fill="#BBF7D0" />
        <path d="M4 8.5H9.5M4 11H7.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'shared',
    label: 'Shared with Me',
    value: '23',
    subtext: 'Documents shared by others',
    iconBg: 'bg-[#FFEDD5]',
    icon: (
      <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M8 1L10.02 5.1L14.55 5.76L11.27 8.95L12.05 13.46L8 11.33L3.95 13.46L4.73 8.95L1.45 5.76L5.98 5.1L8 1Z"
          fill="#EA580C"
        />
      </svg>
    ),
  },
  {
    id: 'downloads',
    label: 'Recent Downloads',
    value: '12',
    subtext: 'In the last 30 days',
    iconBg: 'bg-[#F3E8FF]',
    icon: (
      <svg width="17" height="14" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M14.2 5.8C13.8 3.1 11.5 1 8.6 1C6.1 1 3.9 2.6 3.2 5C1.4 5.3 0 6.9 0 8.9C0 11.2 1.8 13 4.1 13H13.9C15.9 13 17.5 11.4 17.5 9.4C17.5 7.5 16.1 6 14.2 5.8ZM9 10.8L6 7.5H8V4.8H10V7.5H12L9 10.8Z"
          fill="#7C3AED"
        />
      </svg>
    ),
  },
];

const INITIAL_DOCUMENTS = [
  {
    id: 1,
    name: 'Company Policies',
    subLabel: '12 files',
    iconType: 'folder',
    type: 'Folder',
    category: 'HR Policies',
    categoryClass: 'bg-[#F3E8FF] text-[#7C3AED]',
    uploaderInitials: 'HR',
    uploaderBadgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    uploadedBy: 'HR Team',
    updatedDate: '20 May 2024',
    updatedTime: '10:30 AM',
    size: '—',
  },
  {
    id: 2,
    name: 'Employee Handbook.pdf',
    subLabel: '',
    iconType: 'pdf',
    type: 'PDF',
    category: 'HR Policies',
    categoryClass: 'bg-[#F3E8FF] text-[#7C3AED]',
    uploaderInitials: 'HR',
    uploaderBadgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    uploadedBy: 'HR Team',
    updatedDate: '18 May 2024',
    updatedTime: '02:15 PM',
    size: '2.4 MB',
  },
  {
    id: 3,
    name: 'Code of Conduct.docx',
    subLabel: '',
    iconType: 'docx',
    type: 'DOCX',
    category: 'HR Policies',
    categoryClass: 'bg-[#F3E8FF] text-[#7C3AED]',
    uploaderInitials: 'HR',
    uploaderBadgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    uploadedBy: 'HR Team',
    updatedDate: '18 May 2024',
    updatedTime: '11:45 AM',
    size: '1.8 MB',
  },
  {
    id: 4,
    name: 'Benefits Guide.pdf',
    subLabel: '',
    iconType: 'pdf',
    type: 'PDF',
    category: 'Benefits',
    categoryClass: 'bg-[#DCFCE7] text-[#15803D]',
    uploaderInitials: 'HR',
    uploaderBadgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    uploadedBy: 'HR Team',
    updatedDate: '15 May 2024',
    updatedTime: '09:20 AM',
    size: '3.2 MB',
  },
  {
    id: 5,
    name: 'Salary Structure.xlsx',
    subLabel: '',
    iconType: 'xlsx',
    type: 'XLSX',
    category: 'Compensation',
    categoryClass: 'bg-[#FFEDD5] text-[#C2410C]',
    uploaderInitials: 'FT',
    uploaderBadgeClass: 'bg-[#DCFCE7] text-[#15803D]',
    uploadedBy: 'Finance Team',
    updatedDate: '12 May 2024',
    updatedTime: '04:30 PM',
    size: '412 KB',
  },
  {
    id: 6,
    name: 'Project Guidelines',
    subLabel: '8 files',
    iconType: 'folder',
    type: 'Folder',
    category: 'Projects',
    categoryClass: 'bg-[#DBEAFE] text-[#2563EB]',
    uploaderInitials: 'AJ',
    uploaderBadgeClass: 'bg-[#2563EB] text-white',
    uploadedBy: 'Alex Johnson',
    updatedDate: '10 May 2024',
    updatedTime: '01:10 PM',
    size: '—',
  },
  {
    id: 7,
    name: 'Onboarding Presentation.pptx',
    subLabel: '',
    iconType: 'pptx',
    type: 'PPTX',
    category: 'Training',
    categoryClass: 'bg-[#FCE7F3] text-[#BE185D]',
    uploaderInitials: 'HR',
    uploaderBadgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    uploadedBy: 'HR Team',
    updatedDate: '08 May 2024',
    updatedTime: '10:05 AM',
    size: '5.6 MB',
  },
  {
    id: 8,
    name: 'Office Map.png',
    subLabel: '',
    iconType: 'png',
    type: 'PNG',
    category: 'General',
    categoryClass: 'bg-[#F1F5F9] text-[#475569]',
    uploaderInitials: 'AT',
    uploaderBadgeClass: 'bg-[#F1F5F9] text-[#475569]',
    uploadedBy: 'Admin Team',
    updatedDate: '05 May 2024',
    updatedTime: '03:25 PM',
    size: '1.2 MB',
  },
];

const CATEGORIES_SIDEBAR = [
  { name: 'HR Policies', count: 32, iconType: 'hr' },
  { name: 'Projects', count: 24, iconType: 'projects' },
  { name: 'Benefits', count: 18, iconType: 'benefits' },
  { name: 'Training', count: 16, iconType: 'training' },
  { name: 'Compensation', count: 12, iconType: 'compensation' },
  { name: 'General', count: 10, iconType: 'general' },
];

const RECENT_ACTIVITIES = [
  {
    id: 1,
    type: 'upload',
    actor: 'You',
    action: 'uploaded',
    target: 'Benefits Guide.pdf',
    actorBold: false,
    time: '15 May 2024, 09:20 AM',
  },
  {
    id: 2,
    type: 'share',
    actor: 'Sarah Wilson',
    action: 'shared',
    target: 'Code of Conduct.docx',
    actorBold: true,
    time: '14 May 2024, 04:30 PM',
  },
  {
    id: 3,
    type: 'download',
    actor: 'Mike Brown',
    action: 'downloaded',
    target: 'Employee Handbook.pdf',
    actorBold: true,
    time: '14 May 2024, 11:15 AM',
  },
  {
    id: 4,
    type: 'folder',
    actor: 'You',
    action: 'created folder',
    target: 'Project Guidelines',
    actorBold: false,
    time: '10 May 2024, 01:10 PM',
  },
];

function DocumentRowIcon({ type }) {
  if (type === 'folder') {
    return (
      <div className="w-[28px] h-[28px] rounded-[7px] bg-[#FEF3C7] flex items-center justify-center shrink-0">
        <svg width="14" height="12" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1 2.2C1 1.54 1.54 1 2.2 1H5.2L6.6 2.5H11.8C12.46 2.5 13 3.04 13 3.7V9.8C13 10.46 12.46 11 11.8 11H2.2C1.54 11 1 10.46 1 9.8V2.2Z"
            fill="#D97706"
          />
        </svg>
      </div>
    );
  }
  if (type === 'pdf') {
    return (
      <div className="w-[28px] h-[28px] rounded-[7px] bg-[#FEE2E2] flex items-center justify-center shrink-0">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="12" rx="1.8" fill="#EF4444" />
          <path d="M3.5 5H8.5M3.5 7.5H8.5M3.5 10H6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'docx') {
    return (
      <div className="w-[28px] h-[28px] rounded-[7px] bg-[#DBEAFE] flex items-center justify-center shrink-0">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="12" rx="1.8" fill="#2563EB" />
          <path d="M3.5 5H8.5M3.5 7.5H8.5M3.5 10H6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'xlsx') {
    return (
      <div className="w-[28px] h-[28px] rounded-[7px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="12" rx="1.8" fill="#16A34A" />
          <path d="M3.5 5H8.5M3.5 7.5H8.5M3.5 10H6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'pptx') {
    return (
      <div className="w-[28px] h-[28px] rounded-[7px] bg-[#FFE4E6] flex items-center justify-center shrink-0">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="10" height="12" rx="1.8" fill="#E11D48" />
          <path d="M3.5 5H8.5M3.5 7.5H8.5M3.5 10H6.5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-[28px] h-[28px] rounded-[7px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="10" height="10" rx="1.8" fill="#16A34A" />
        <circle cx="4.2" cy="4.2" r="1" fill="white" />
        <path d="M2.5 9.2L5.2 6.5L7.2 8.2L8.8 6.8L10 8.2V9.2H2.5Z" fill="white" />
      </svg>
    </div>
  );
}

function CategorySidebarIcon({ type }) {
  if (type === 'hr') {
    return (
      <div className="w-[22px] h-[22px] rounded-[6px] bg-[#F3E8FF] flex items-center justify-center shrink-0">
        <svg width="10" height="11" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="1" y="1" width="8" height="10" rx="1.4" fill="#7C3AED" />
          <path d="M3 4H7M3 6.5H7M3 9H5.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'projects') {
    return (
      <div className="w-[22px] h-[22px] rounded-[6px] bg-[#EFF6FF] flex items-center justify-center shrink-0">
        <svg width="11" height="9" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 2C1 1.45 1.45 1 2 1H4.5L5.7 2.2H10C10.55 2.2 11 2.65 11 3.2V8C11 8.55 10.55 9 10 9H2C1.45 9 1 8.55 1 8V2Z" fill="#2563EB" />
        </svg>
      </div>
    );
  }
  if (type === 'benefits') {
    return (
      <div className="w-[22px] h-[22px] rounded-[6px] bg-[#DCFCE7] flex items-center justify-center shrink-0">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5" fill="#16A34A" />
          <path d="M4 6.1L5.3 7.4L8.2 4.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (type === 'training') {
    return (
      <div className="w-[22px] h-[22px] rounded-[6px] bg-[#FCE7F3] flex items-center justify-center shrink-0">
        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1L1 3.8L6 6.6L11 3.8L6 1Z" fill="#DB2777" />
          <path d="M3 5.5V7.8C3 8.5 4.3 9.2 6 9.2C7.7 9.2 9 8.5 9 7.8V5.5" stroke="#DB2777" strokeWidth="1.2" />
        </svg>
      </div>
    );
  }
  if (type === 'compensation') {
    return (
      <div className="w-[22px] h-[22px] rounded-[6px] bg-[#FFEDD5] flex items-center justify-center shrink-0">
        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="6" cy="6" r="5" fill="#EA580C" />
          <path d="M6 3.5V8.5M4.8 4.8H6.5C7 4.8 7.3 5.1 7.3 5.5C7.3 5.9 7 6.1 6.5 6.1H5.3C4.8 6.1 4.5 6.4 4.5 6.8C4.5 7.2 4.8 7.5 5.3 7.5H7" stroke="white" strokeWidth="1.1" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-[22px] h-[22px] rounded-[6px] bg-[#F1F5F9] flex items-center justify-center shrink-0">
      <svg width="10" height="11" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="1" y="1" width="8" height="10" rx="1.4" fill="#64748B" />
        <path d="M3 4H7M3 6.5H7M3 9H5.5" stroke="white" strokeWidth="1" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function ActivityIcon({ type }) {
  if (type === 'upload') {
    return (
      <div className="w-[28px] h-[28px] rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0 mt-[1px]">
        <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6 4.8C12.3 2.5 10.3 0.8 7.7 0.8C5.5 0.8 3.6 2.2 3 4.2C1.3 4.5 0 6 0 7.8C0 9.8 1.6 11.4 3.6 11.4H12.4C14.1 11.4 15.5 10 15.5 8.3C15.5 6.6 14.3 5.2 12.6 4.8ZM8.8 7.4V9.8H6.6V7.4H4.8L7.7 4.2L10.6 7.4H8.8Z"
            fill="#2563EB"
          />
        </svg>
      </div>
    );
  }
  if (type === 'share') {
    return (
      <div className="w-[28px] h-[28px] rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0 mt-[1px]">
        <svg width="13" height="12" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="5.5" cy="4" r="2.2" fill="#16A34A" />
          <path d="M1.5 11C1.5 9 3.3 7.6 5.5 7.6C7.7 7.6 9.5 9 9.5 11" fill="#16A34A" />
          <path d="M11 3.5V7.5M9 5.5H13" stroke="#16A34A" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  if (type === 'download') {
    return (
      <div className="w-[28px] h-[28px] rounded-full bg-[#FFE4E6] flex items-center justify-center shrink-0 mt-[1px]">
        <svg width="14" height="11" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.6 4.8C12.3 2.5 10.3 0.8 7.7 0.8C5.5 0.8 3.6 2.2 3 4.2C1.3 4.5 0 6 0 7.8C0 9.8 1.6 11.4 3.6 11.4H12.4C14.1 11.4 15.5 10 15.5 8.3C15.5 6.6 14.3 5.2 12.6 4.8ZM7.7 9.6L4.8 6.4H6.6V4H8.8V6.4H10.6L7.7 9.6Z"
            fill="#E11D48"
          />
        </svg>
      </div>
    );
  }
  return (
    <div className="w-[28px] h-[28px] rounded-full bg-[#FEF3C7] flex items-center justify-center shrink-0 mt-[1px]">
      <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1 2.2C1 1.54 1.54 1 2.2 1H5.2L6.6 2.5H11.8C12.46 2.5 13 3.04 13 3.7V9.8C13 10.46 12.46 11 11.8 11H2.2C1.54 11 1 10.46 1 9.8V2.2Z"
          fill="#D97706"
        />
      </svg>
    </div>
  );
}

export default function Documents({ searchQuery = '' }) {
  const [docs, setDocs] = useState(INITIAL_DOCUMENTS);
  const [localSearch, setLocalSearch] = useState('');
  const [selectedType, setSelectedType] = useState('All Types');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [sortBy, setSortBy] = useState('Sort: Recent');
  const [viewMode, setViewMode] = useState('list');

  const combinedQuery = (localSearch || searchQuery).trim().toLowerCase();

  const filteredDocs = docs.filter((doc) => {
    const matchesType = selectedType === 'All Types' || doc.type === selectedType;
    const matchesCat =
      selectedCategory === 'All Categories' || doc.category === selectedCategory;
    const matchesSearch =
      !combinedQuery ||
      doc.name.toLowerCase().includes(combinedQuery) ||
      doc.category.toLowerCase().includes(combinedQuery) ||
      doc.uploadedBy.toLowerCase().includes(combinedQuery);
    return matchesType && matchesCat && matchesSearch;
  });

  const handleNewFolder = () => {
    const folderName = window.prompt('Enter new folder name:', 'New Project Folder');
    if (!folderName || !folderName.trim()) return;
    setDocs((prev) => [
      {
        id: Date.now(),
        name: folderName.trim(),
        subLabel: '0 files',
        iconType: 'folder',
        type: 'Folder',
        category: 'Projects',
        categoryClass: 'bg-[#DBEAFE] text-[#2563EB]',
        uploaderInitials: 'AJ',
        uploaderBadgeClass: 'bg-[#2563EB] text-white',
        uploadedBy: 'Alex Johnson',
        updatedDate: '20 May 2024',
        updatedTime: 'Just now',
        size: '—',
      },
      ...prev,
    ]);
  };

  const handleUploadFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const ext = file.name.split('.').pop()?.toUpperCase() || 'FILE';
    const sizeKb = Math.max(1, Math.round(file.size / 1024));
    const sizeLabel = sizeKb > 1024 ? `${(sizeKb / 1024).toFixed(1)} MB` : `${sizeKb} KB`;
    setDocs((prev) => [
      {
        id: Date.now(),
        name: file.name,
        subLabel: '',
        iconType: ext === 'PDF' ? 'pdf' : ext === 'XLSX' ? 'xlsx' : ext === 'PNG' || ext === 'JPG' ? 'png' : 'docx',
        type: ext,
        category: 'Projects',
        categoryClass: 'bg-[#DBEAFE] text-[#2563EB]',
        uploaderInitials: 'AJ',
        uploaderBadgeClass: 'bg-[#2563EB] text-white',
        uploadedBy: 'Alex Johnson',
        updatedDate: 'Today',
        updatedTime: 'Just now',
        size: sizeLabel,
      },
      ...prev,
    ]);
    e.target.value = '';
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      {/* Page Title & Action Buttons Row */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-[20px]">
        <div>
          <h1 className="text-[24px] font-bold leading-[29px] text-[#0F172A]">
            Documents
          </h1>
          <p className="text-[13px] font-normal leading-[16px] text-[#64748B] mt-[5px]">
            Access, manage and share your important documents
          </p>
        </div>

        <div className="flex items-center gap-[12px] self-start sm:self-auto">
          <button
            type="button"
            onClick={handleNewFolder}
            className="h-[40px] px-[18px] rounded-[8px] border border-[#CBD5E1] bg-white hover:bg-[#F8FAFC] text-[#2563EB] text-[13px] font-bold leading-[16px] flex items-center gap-[6px] transition-colors"
          >
            <span>+ New Folder</span>
          </button>

          <label className="h-[40px] px-[18px] rounded-[8px] bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-[13px] font-bold leading-[16px] flex items-center gap-[8px] cursor-pointer transition-colors shadow-sm">
            <input type="file" onChange={handleUploadFile} className="hidden" />
            <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M12.8 4.8C12.5 2.5 10.5 0.8 8 0.8C5.7 0.8 3.8 2.2 3.1 4.2C1.4 4.5 0 6 0 7.8C0 9.8 1.6 11.4 3.6 11.4H12.6C14.3 11.4 15.8 10 15.8 8.3C15.8 6.6 14.5 5.2 12.8 4.8ZM9 7.4V9.8H6.8V7.4H5L7.9 4.2L10.8 7.4H9Z"
                fill="white"
              />
            </svg>
            <span>Upload Document</span>
          </label>
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
              <span className="text-[11px] font-normal leading-[14px] text-[#94A3B8] mt-[6px]">
                {card.subtext}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Two-Column Main Layout */}
      <div className="flex flex-col xl:flex-row gap-[24px] items-start">
        {/* Left Column: All Documents Card */}
        <div className="w-full flex-1 min-w-0 bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          <h2 className="text-[16px] font-bold leading-[19px] text-[#0F172A] mb-[16px]">
            All Documents
          </h2>

          {/* Search, Filters & View Toggle Row */}
          <div className="flex flex-wrap items-center gap-[10px] mb-[18px]">
            {/* Search Input */}
            <div className="flex-1 min-w-[200px] h-[38px] rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[12px] flex items-center gap-[8px]">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="6.2" cy="6.2" r="4.8" stroke="#94A3B8" strokeWidth="1.4" />
                <path d="M9.8 9.8L12.8 12.8" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
              </svg>
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Search documents..."
                className="w-full bg-transparent text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
              />
            </div>

            {/* All Types */}
            <div className="relative">
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="h-[38px] pl-[12px] pr-[26px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-semibold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                <option value="All Types">All Types</option>
                <option value="Folder">Folder</option>
                <option value="PDF">PDF</option>
                <option value="DOCX">DOCX</option>
                <option value="XLSX">XLSX</option>
                <option value="PPTX">PPTX</option>
                <option value="PNG">PNG</option>
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

            {/* All Categories */}
            <div className="relative">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="h-[38px] pl-[12px] pr-[26px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-semibold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                <option value="All Categories">All Categories</option>
                <option value="HR Policies">HR Policies</option>
                <option value="Projects">Projects</option>
                <option value="Benefits">Benefits</option>
                <option value="Training">Training</option>
                <option value="Compensation">Compensation</option>
                <option value="General">General</option>
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

            {/* Sort: Recent */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-[38px] pl-[12px] pr-[26px] rounded-[8px] border border-[#E2E8F0] bg-white text-[12px] font-semibold text-[#334155] appearance-none cursor-pointer focus:outline-none focus:border-[#2563EB]"
              >
                <option value="Sort: Recent">Sort: Recent</option>
                <option value="Sort: Name">Sort: Name</option>
                <option value="Sort: Size">Sort: Size</option>
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

            {/* Grid & List View Buttons */}
            <div className="flex items-center gap-[6px]">
              <button
                type="button"
                onClick={() => setViewMode('grid')}
                className={`w-[34px] h-[38px] rounded-[8px] flex items-center justify-center transition-colors ${
                  viewMode === 'grid'
                    ? 'border-[1.5px] border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                    : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:bg-[#F1F5F9]'
                }`}
                aria-label="Grid view"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1.5" y="1.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="8" y="1.5" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="1.5" y="8" width="4.5" height="4.5" rx="1" fill="currentColor" />
                  <rect x="8" y="8" width="4.5" height="4.5" rx="1" fill="currentColor" />
                </svg>
              </button>
              <button
                type="button"
                onClick={() => setViewMode('list')}
                className={`w-[34px] h-[38px] rounded-[8px] flex items-center justify-center transition-colors ${
                  viewMode === 'list'
                    ? 'border-[1.5px] border-[#2563EB] bg-[#EFF6FF] text-[#2563EB]'
                    : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#64748B] hover:bg-[#F1F5F9]'
                }`}
                aria-label="List view"
              >
                <svg width="13" height="11" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3.5 2H12.5M3.5 6H12.5M3.5 10H12.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="1.5" cy="2" r="1" fill="currentColor" />
                  <circle cx="1.5" cy="6" r="1" fill="currentColor" />
                  <circle cx="1.5" cy="10" r="1" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>

          {/* Documents Table */}
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="text-left text-[11px] font-semibold leading-[13px] text-[#94A3B8] border-b border-[#F1F5F9]">
                  <th className="pb-[10px] font-semibold w-[33%]">Name</th>
                  <th className="pb-[10px] font-semibold w-[9%]">Type</th>
                  <th className="pb-[10px] font-semibold w-[15%]">Category</th>
                  <th className="pb-[10px] font-semibold w-[16%]">Uploaded By</th>
                  <th className="pb-[10px] font-semibold w-[14%]">Updated</th>
                  <th className="pb-[10px] font-semibold w-[8%]">Size</th>
                  <th className="pb-[10px] font-semibold text-right w-[5%]">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#F1F5F9]">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="group hover:bg-[#F8FAFC]/60 transition-colors">
                    {/* Name */}
                    <td className="py-[13px] pr-2">
                      <div className="flex items-center gap-[10px]">
                        <DocumentRowIcon type={doc.iconType} />
                        <div className="flex flex-col min-w-0">
                          <span className="text-[12.5px] font-bold leading-[15px] text-[#0F172A] truncate">
                            {doc.name}
                          </span>
                          {doc.subLabel && (
                            <span className="text-[10.5px] font-normal leading-[13px] text-[#94A3B8] mt-[1px]">
                              {doc.subLabel}
                            </span>
                          )}
                        </div>
                      </div>
                    </td>

                    {/* Type */}
                    <td className="py-[13px] pr-2 text-[11.5px] font-normal text-[#64748B]">
                      {doc.type}
                    </td>

                    {/* Category */}
                    <td className="py-[13px] pr-2">
                      <span
                        className={`inline-flex items-center justify-center px-[9px] py-[3px] rounded-[6px] text-[10.5px] font-bold leading-[13px] whitespace-nowrap ${doc.categoryClass}`}
                      >
                        {doc.category}
                      </span>
                    </td>

                    {/* Uploaded By */}
                    <td className="py-[13px] pr-2">
                      <div className="flex items-center gap-[8px]">
                        <span
                          className={`w-[22px] h-[22px] rounded-full text-[9.5px] font-bold flex items-center justify-center shrink-0 ${doc.uploaderBadgeClass}`}
                        >
                          {doc.uploaderInitials}
                        </span>
                        <span className="text-[12px] font-normal text-[#475569] whitespace-nowrap">
                          {doc.uploadedBy}
                        </span>
                      </div>
                    </td>

                    {/* Updated */}
                    <td className="py-[13px] pr-2">
                      <div className="flex flex-col">
                        <span className="text-[11.5px] font-bold leading-[14px] text-[#0F172A] whitespace-nowrap">
                          {doc.updatedDate}
                        </span>
                        <span className="text-[10px] font-normal leading-[12px] text-[#94A3B8] mt-[1px]">
                          {doc.updatedTime}
                        </span>
                      </div>
                    </td>

                    {/* Size */}
                    <td className="py-[13px] pr-2 text-[11.5px] font-normal text-[#475569] whitespace-nowrap">
                      {doc.size}
                    </td>

                    {/* Actions */}
                    <td className="py-[13px] text-right">
                      <button
                        type="button"
                        className="p-1.5 rounded-lg text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9] transition-colors inline-flex items-center justify-center"
                        aria-label="Document actions"
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
          <div className="mt-[20px] pt-[14px] border-t border-[#F1F5F9] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-[12px] font-normal text-[#94A3B8]">
              Showing 1 to {filteredDocs.length} of 128 documents
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
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC] text-[12px] font-bold flex items-center justify-center"
              >
                3
              </button>
              <span className="px-1 text-[12px] text-[#94A3B8] select-none">...</span>
              <button
                type="button"
                className="w-[26px] h-[26px] rounded-[6px] border border-[#E2E8F0] bg-white text-[#334155] hover:bg-[#F8FAFC] text-[12px] font-bold flex items-center justify-center"
              >
                16
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

        {/* Right Column: Storage Overview + Categories + Recent Activity */}
        <div className="w-full xl:w-[336px] flex flex-col gap-[24px] shrink-0">
          {/* Card 1: Storage Overview */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Storage Overview
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View Details
              </button>
            </div>

            <div className="flex items-center justify-between mb-[8px]">
              <span className="text-[12px] leading-[15px]">
                <strong className="font-bold text-[#0F172A]">10.2 GB</strong>
                <span className="text-[#64748B]"> used of 50 GB</span>
              </span>
              <span className="text-[12px] font-bold text-[#2563EB]">20%</span>
            </div>

            <div className="w-full h-[6px] rounded-full bg-[#F1F5F9] overflow-hidden mb-[16px]">
              <div className="h-full rounded-full bg-[#2563EB]" style={{ width: '20%' }} />
            </div>

            <div className="flex flex-col gap-[8px]">
              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-[8px] text-[#475569]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#2563EB]" />
                  <span>Used</span>
                </div>
                <span className="font-bold text-[#0F172A]">10.2 GB</span>
              </div>

              <div className="flex items-center justify-between text-[12px]">
                <div className="flex items-center gap-[8px] text-[#475569]">
                  <span className="w-[7px] h-[7px] rounded-full bg-[#CBD5E1]" />
                  <span>Available</span>
                </div>
                <span className="font-bold text-[#0F172A]">39.8 GB</span>
              </div>
            </div>
          </div>

          {/* Card 2: Categories */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Categories
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-[13px]">
              {CATEGORIES_SIDEBAR.map((cat) => (
                <div
                  key={cat.name}
                  className="flex items-center justify-between text-[12.5px] leading-[15px]"
                >
                  <div className="flex items-center gap-[10px]">
                    <CategorySidebarIcon type={cat.iconType} />
                    <span className="font-bold text-[#0F172A]">{cat.name}</span>
                  </div>
                  <span className="font-bold text-[#334155] text-[12px]">
                    {cat.count}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Recent Activity */}
          <div className="bg-white rounded-[16px] p-[24px] shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
            <div className="flex items-center justify-between mb-[16px]">
              <h2 className="text-[15px] font-bold leading-[18px] text-[#0F172A]">
                Recent Activity
              </h2>
              <button
                type="button"
                className="text-[11px] font-bold leading-[13px] text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-[16px]">
              {RECENT_ACTIVITIES.map((act) => (
                <div key={act.id} className="flex items-start gap-[10px]">
                  <ActivityIcon type={act.type} />
                  <div className="flex flex-col min-w-0">
                    <p className="text-[11.5px] leading-[15px] text-[#475569]">
                      <span className={act.actorBold ? 'font-bold text-[#0F172A]' : ''}>
                        {act.actor}
                      </span>{' '}
                      {act.action}{' '}
                      <strong className="font-bold text-[#0F172A]">
                        {act.target}
                      </strong>
                    </p>
                    <span className="text-[10px] font-normal leading-[13px] text-[#94A3B8] mt-[2px]">
                      {act.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
