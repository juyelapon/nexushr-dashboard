import React, { useState } from 'react';

const CONVERSATIONS = [
  {
    id: 1,
    name: 'Michael Brown',
    role: 'Frontend Developer',
    time: '10:30 AM',
    preview: 'Hey Alex, can you share the...',
    unread: 2,
    online: true,
    category: 'Unread',
    avatarType: 'person',
    bgCircle: '#FCA5A5',
    hairColor: '#1E293B',
    shirtColor: '#EF4444',
    skinColor: '#FDE68A',
  },
  {
    id: 2,
    name: 'Sarah Wilson',
    role: 'UI/UX Designer',
    time: '9:15 AM',
    preview: 'Thanks for the update! 👍',
    unread: 1,
    online: true,
    category: 'Unread',
    avatarType: 'person',
    bgCircle: '#FDE047',
    hairColor: '#B45309',
    shirtColor: '#15803D',
    skinColor: '#FED7AA',
  },
  {
    id: 3,
    name: 'Design Team',
    role: 'Team Channel • 8 members',
    time: 'Yesterday',
    previewPrefix: 'You:',
    preview: ' Shared a file',
    unread: 0,
    online: false,
    category: 'Teams',
    avatarType: 'team-blue',
  },
  {
    id: 4,
    name: 'James Carter',
    role: 'Product Manager',
    time: 'Yesterday',
    preview: 'Can we reschedule the meeting?',
    unread: 0,
    online: true,
    category: 'All',
    avatarType: 'person',
    bgCircle: '#D8B4FE',
    hairColor: '#1E293B',
    shirtColor: '#15803D',
    skinColor: '#FDE68A',
  },
  {
    id: 5,
    name: 'HR Team',
    role: 'Team Channel • 5 members',
    time: 'May 15',
    preview: 'Please find the policy document.',
    unread: 0,
    online: false,
    category: 'Teams',
    avatarType: 'team-green',
  },
  {
    id: 6,
    name: 'Emily Davis',
    role: 'HR Manager',
    time: 'May 14',
    preview: "Let me know once it's done.",
    unread: 1,
    online: true,
    category: 'Unread',
    avatarType: 'person',
    bgCircle: '#FCA5A5',
    hairColor: '#3B0764',
    shirtColor: '#7E22CE',
    skinColor: '#FED7AA',
  },
  {
    id: 7,
    name: 'Project Alpha',
    role: 'Group Chat • 12 members',
    time: 'May 14',
    previewPrefix: 'You:',
    preview: ' Great work everyone! 🎉',
    unread: 0,
    online: false,
    category: 'Groups',
    avatarType: 'group-orange',
  },
  {
    id: 8,
    name: 'Robert Lee',
    role: 'QA Engineer',
    time: 'May 13',
    preview: "Sure, I'll check and get back.",
    unread: 0,
    online: true,
    category: 'All',
    avatarType: 'person',
    bgCircle: '#A5F3FC',
    hairColor: '#9A3412',
    shirtColor: '#EA580C',
    skinColor: '#FDE68A',
  },
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'them',
    type: 'text',
    text: 'Hey Alex, can you share the latest design mockups?',
    time: '10:26 AM',
  },
  {
    id: 2,
    sender: 'me',
    type: 'text',
    text: "Sure, I'll share them in a few minutes.",
    time: '10:27 AM',
  },
  {
    id: 3,
    sender: 'them',
    type: 'text',
    text: 'Also, do we have an update on the client feedback?',
    time: '10:27 AM',
  },
  {
    id: 4,
    sender: 'me',
    type: 'text',
    text: "Yes, the client loved the new layout! I'll send you the feedback document.",
    time: '10:28 AM',
  },
  {
    id: 5,
    sender: 'me',
    type: 'file',
    fileName: 'Client_Feedback.pdf',
    fileMeta: '2.4 MB • PDF',
    time: '10:28 AM',
  },
  {
    id: 6,
    sender: 'them',
    type: 'text',
    text: 'Perfect! Thanks a lot. 🙌',
    time: '10:30 AM',
  },
];

const SHARED_FILES = [
  {
    id: 1,
    badge: 'DOC',
    badgeClass: 'bg-[#EFF6FF] text-[#2563EB]',
    name: 'Project_Requirements.docx',
    meta: '1.8 MB • DOCX',
  },
  {
    id: 2,
    badge: 'FIG',
    badgeClass: 'bg-[#FFF7ED] text-[#EA580C]',
    name: 'Design_System.fig',
    meta: '12.5 MB • Figma',
  },
  {
    id: 3,
    badge: 'PDF',
    badgeClass: 'bg-[#FEE2E2] text-[#DC2626]',
    name: 'Client_Feedback.pdf',
    meta: '2.4 MB • PDF',
  },
];

function ChatAvatar({ item, size = 38, showStatus = true }) {
  if (item.avatarType === 'team-blue') {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#EFF6FF] flex items-center justify-center shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="5.5" r="2.5" fill="#2563EB" />
          <path d="M3.5 13C3.5 10.8 5.5 9.3 8 9.3C10.5 9.3 12.5 10.8 12.5 13" fill="#2563EB" />
        </svg>
      </div>
    );
  }
  if (item.avatarType === 'team-green') {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#DCFCE7] flex items-center justify-center shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="5.5" r="2.5" fill="#16A34A" />
          <path d="M3.5 13C3.5 10.8 5.5 9.3 8 9.3C10.5 9.3 12.5 10.8 12.5 13" fill="#16A34A" />
        </svg>
      </div>
    );
  }
  if (item.avatarType === 'group-orange') {
    return (
      <div
        style={{ width: size, height: size }}
        className="rounded-full bg-[#FFEDD5] flex items-center justify-center shrink-0"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="5.5" r="2.5" fill="#EA580C" />
          <path d="M3.5 13C3.5 10.8 5.5 9.3 8 9.3C10.5 9.3 12.5 10.8 12.5 13" fill="#EA580C" />
        </svg>
      </div>
    );
  }

  return (
    <div style={{ width: size, height: size }} className="relative shrink-0">
      <svg
        width={size}
        height={size}
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="28" cy="28" r="28" fill={item.bgCircle || '#FCA5A5'} />
        <mask
          id={`chat-mask-${item.id}-${size}`}
          style={{ maskType: 'alpha' }}
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="56"
          height="56"
        >
          <circle cx="28" cy="28" r="28" fill="white" />
        </mask>
        <g mask={`url(#chat-mask-${item.id}-${size})`}>
          <path
            d="M12 56C12 45.5 19 40 28 40C37 40 44 45.5 44 56H12Z"
            fill={item.shirtColor || '#EF4444'}
          />
          <rect x="24.5" y="33" width="7" height="9" rx="3" fill={item.skinColor || '#FDE68A'} />
          <circle cx="28" cy="26" r="9.5" fill={item.skinColor || '#FDE68A'} />
          <path
            d="M18.5 25C18.5 18.5 22.5 14.5 28 14.5C33.5 14.5 37.5 18.5 37.5 25C35.5 21.5 32 20 28 20C24 20 20.5 21.5 18.5 25Z"
            fill={item.hairColor || '#1E293B'}
          />
        </g>
      </svg>
      {showStatus && item.online && (
        <span
          className={`rounded-full bg-[#10B981] border-2 border-white absolute bottom-0 right-0 ${
            size >= 60
              ? 'w-[14px] h-[14px]'
              : size >= 36
              ? 'w-[10px] h-[10px]'
              : 'w-[8px] h-[8px]'
          }`}
        />
      )}
    </div>
  );
}

export default function Messages({ searchQuery = '' }) {
  const [activeConvId, setActiveConvId] = useState(1);
  const [convFilter, setConvFilter] = useState('All');
  const [localSearch, setLocalSearch] = useState('');
  const [threadsByConv, setThreadsByConv] = useState({
    1: INITIAL_MESSAGES,
    2: [
      { id: 201, sender: 'them', type: 'text', text: 'Hey Alex, I updated the onboarding wireframes.', time: '9:10 AM' },
      { id: 202, sender: 'me', type: 'text', text: 'Awesome! Checking them right now.', time: '9:12 AM' },
      { id: 203, sender: 'them', type: 'text', text: 'Thanks for the update! 👍', time: '9:15 AM' },
    ],
    3: [
      { id: 301, sender: 'them', type: 'text', text: 'Team, please review the new Figma tokens.', time: 'Yesterday' },
      { id: 302, sender: 'me', type: 'text', text: 'Shared the updated spacing tokens file.', time: 'Yesterday' },
    ],
  });
  const [draft, setDraft] = useState('');

  const activeConv =
    CONVERSATIONS.find((c) => c.id === activeConvId) || CONVERSATIONS[0];

  const messages = threadsByConv[activeConvId] || [
    {
      id: 901,
      sender: 'them',
      type: 'text',
      text: activeConv.preview,
      time: activeConv.time,
    },
  ];

  const combinedQuery = (localSearch || searchQuery).trim().toLowerCase();

  const filteredConversations = CONVERSATIONS.filter((c) => {
    const matchesTab =
      convFilter === 'All' ||
      (convFilter === 'Unread' && c.unread > 0) ||
      c.category === convFilter;
    const matchesSearch =
      !combinedQuery ||
      c.name.toLowerCase().includes(combinedQuery) ||
      c.preview.toLowerCase().includes(combinedQuery);
    return matchesTab && matchesSearch;
  });

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!draft.trim()) return;
    const newMsg = {
      id: Date.now(),
      sender: 'me',
      type: 'text',
      text: draft.trim(),
      time: 'Just now',
    };
    setThreadsByConv((prev) => ({
      ...prev,
      [activeConvId]: [...(prev[activeConvId] || messages), newMsg],
    }));
    setDraft('');
  };

  return (
    <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-[24px] pt-[24px] pb-[32px]">
      <div className="flex flex-col lg:flex-row gap-[24px] items-stretch min-h-[820px]">
        {/* Left Panel: Conversations List (w=296px) */}
        <div className="w-full lg:w-[296px] bg-white rounded-[16px] p-[20px] flex flex-col shrink-0 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-[14px]">
            <h1 className="text-[18px] font-bold leading-[22px] text-[#0F172A]">
              Messages
            </h1>
            <button
              type="button"
              className="w-[28px] h-[28px] rounded-[7px] border-[1.5px] border-[#2563EB] bg-white hover:bg-[#EFF6FF] text-[#2563EB] flex items-center justify-center transition-colors"
              aria-label="New message"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.5 2L10 4.5L3.5 11H1V8.5L7.5 2Z"
                  stroke="#2563EB"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Search Conversations */}
          <div className="h-[36px] rounded-[8px] bg-[#F8FAFC] border border-[#E2E8F0] px-[12px] flex items-center gap-[8px] mb-[14px]">
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.2" cy="6.2" r="4.8" stroke="#94A3B8" strokeWidth="1.4" />
              <path d="M9.8 9.8L12.8 12.8" stroke="#94A3B8" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
              placeholder="Search conversations..."
              className="w-full bg-transparent text-[12px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-[6px] mb-[16px] overflow-x-auto pb-1">
            {['All', 'Unread', 'Teams', 'Groups'].map((tab) => {
              const isActive = convFilter === tab;
              return (
                <button
                  key={tab}
                  type="button"
                  onClick={() => setConvFilter(tab)}
                  className={`h-[26px] px-[10px] rounded-full text-[11px] leading-[13px] flex items-center gap-[4px] whitespace-nowrap transition-colors ${
                    isActive
                      ? 'bg-[#EFF6FF] text-[#2563EB] font-bold'
                      : 'border border-[#E2E8F0] bg-white text-[#475569] font-semibold hover:bg-[#F8FAFC]'
                  }`}
                >
                  <span>{tab}</span>
                  {tab === 'Unread' && (
                    <span className="w-[15px] h-[15px] rounded-full bg-[#2563EB] text-white text-[9px] font-bold flex items-center justify-center">
                      4
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Conversation Items */}
          <div className="flex flex-col gap-[6px] flex-1 overflow-y-auto">
            {filteredConversations.map((conv) => {
              const isSelected = conv.id === activeConvId;
              return (
                <button
                  key={conv.id}
                  type="button"
                  onClick={() => setActiveConvId(conv.id)}
                  className={`w-full rounded-[12px] px-[12px] py-[10px] flex items-center gap-[10px] text-left transition-colors ${
                    isSelected
                      ? 'bg-[#EFF6FF]'
                      : 'bg-transparent hover:bg-[#F8FAFC]'
                  }`}
                >
                  <ChatAvatar item={conv} size={38} showStatus={true} />

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-[12.5px] font-bold leading-[15px] text-[#0F172A] truncate">
                        {conv.name}
                      </span>
                      <span className="text-[10px] font-normal text-[#94A3B8] shrink-0">
                        {conv.time}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-[4px]">
                      <p className="text-[11px] leading-[14px] text-[#64748B] truncate">
                        {conv.previewPrefix && (
                          <strong className="font-bold text-[#334155]">
                            {conv.previewPrefix}
                          </strong>
                        )}
                        {conv.preview}
                      </p>

                      {conv.unread > 0 && (
                        <span className="w-[16px] h-[16px] rounded-full bg-[#2563EB] text-white text-[9.5px] font-bold flex items-center justify-center shrink-0">
                          {conv.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center Panel: Active Chat Thread */}
        <div className="flex-1 bg-white rounded-[16px] flex flex-col justify-between min-w-0 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          {/* Chat Header */}
          <div className="px-[20px] py-[16px] border-b border-[#F1F5F9] flex items-center justify-between">
            <div className="flex items-center gap-[12px]">
              <ChatAvatar item={activeConv} size={38} showStatus={true} />
              <div className="flex flex-col">
                <span className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
                  {activeConv.name}
                </span>
                <div className="flex items-center gap-[5px] mt-[2px]">
                  <span className="w-[6px] h-[6px] rounded-full bg-[#10B981]" />
                  <span className="text-[11px] font-semibold leading-[13px] text-[#10B981]">
                    Online
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-[8px]">
              {/* Call */}
              <button
                type="button"
                className="w-[30px] h-[30px] rounded-[7px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors"
                aria-label="Audio call"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 2C3.3 1.7 3.8 1.7 4.1 2L5.6 3.5C5.9 3.8 5.9 4.3 5.6 4.6L4.7 5.5C5.4 6.9 6.6 8.1 8 8.8L8.9 7.9C9.2 7.6 9.7 7.6 10 7.9L11.5 9.4C11.8 9.7 11.8 10.2 11.5 10.5L10.6 11.4C9.7 12.3 8.2 12.4 7 11.8C4.3 10.5 2.7 8.9 1.4 6.2C0.8 5 0.9 3.5 1.8 2.6L3 2Z"
                    fill="#334155"
                  />
                </svg>
              </button>

              {/* Video */}
              <button
                type="button"
                className="w-[30px] h-[30px] rounded-[7px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors"
                aria-label="Video call"
              >
                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="1" y="1" width="8.5" height="8" rx="1.5" fill="#334155" />
                  <path d="M9.5 3.8L13 1.8V8.2L9.5 6.2V3.8Z" fill="#334155" />
                </svg>
              </button>

              {/* Info */}
              <button
                type="button"
                className="w-[30px] h-[30px] rounded-[7px] border border-[#E2E8F0] bg-white hover:bg-[#F8FAFC] text-[#475569] flex items-center justify-center transition-colors"
                aria-label="Conversation info"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="7" cy="7" r="5.8" fill="#334155" />
                  <path d="M7 6.2V10M7 4.2H7.01" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages Stream */}
          <div className="flex-1 px-[20px] py-[18px] flex flex-col gap-[16px] overflow-y-auto">
            {/* Today Pill */}
            <div className="flex justify-center">
              <span className="px-[14px] py-[4px] rounded-full bg-[#F1F5F9] text-[#475569] text-[11px] font-bold leading-[13px]">
                Today
              </span>
            </div>

            {messages.map((msg) => {
              if (msg.sender === 'them') {
                return (
                  <div key={msg.id} className="flex items-start gap-[10px]">
                    <ChatAvatar item={activeConv} size={26} showStatus={false} />
                    <div className="flex flex-col items-start max-w-[270px]">
                      <div className="rounded-[12px] rounded-tl-[4px] bg-[#F1F5F9] px-[14px] py-[10px] text-[12px] leading-[17px] text-[#0F172A]">
                        {msg.text}
                      </div>
                      <span className="text-[10px] text-[#94A3B8] mt-[4px] ml-[2px]">
                        {msg.time}
                      </span>
                    </div>
                  </div>
                );
              }

              return (
                <div key={msg.id} className="flex flex-col items-end">
                  {msg.type === 'file' ? (
                    <div className="rounded-[12px] border border-[#E2E8F0] bg-[#F8FAFC] p-[12px] w-[240px] flex items-center justify-between gap-[10px]">
                      <div className="flex items-center gap-[10px] min-w-0">
                        <div className="w-[34px] h-[34px] rounded-[8px] bg-[#FEE2E2] text-[#DC2626] text-[9px] font-bold flex items-center justify-center shrink-0">
                          PDF
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="text-[11.5px] font-bold leading-[14px] text-[#0F172A] truncate">
                            {msg.fileName}
                          </span>
                          <span className="text-[10px] leading-[12px] text-[#94A3B8] mt-[2px]">
                            {msg.fileMeta}
                          </span>
                        </div>
                      </div>

                      <button
                        type="button"
                        className="w-[26px] h-[26px] rounded-full bg-[#EFF6FF] hover:bg-[#DBEAFE] text-[#2563EB] flex items-center justify-center shrink-0 transition-colors"
                        aria-label="Download file"
                      >
                        <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 2V8.5M6 8.5L3.5 6M6 8.5L8.5 6M2 10.2H10" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div className="rounded-[12px] rounded-tr-[4px] bg-[#2563EB] text-white px-[14px] py-[10px] max-w-[295px] text-[12px] leading-[17px]">
                      {msg.text}
                    </div>
                  )}

                  <div className="flex items-center gap-[4px] mt-[4px] mr-[2px]">
                    <span className="text-[10px] text-[#94A3B8]">{msg.time}</span>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 4.2L3.5 6.7L9 1.2" stroke="#2563EB" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Chat Composer Bar */}
          <div className="px-[16px] py-[14px] border-t border-[#F1F5F9]">
            <form
              onSubmit={handleSendMessage}
              className="h-[44px] rounded-full bg-[#F8FAFC] border border-[#E2E8F0] pl-[14px] pr-[6px] flex items-center justify-between"
            >
              <div className="flex items-center gap-[10px] text-[#64748B] shrink-0">
                {/* Attachment Paperclip */}
                <button type="button" className="hover:text-[#0F172A] transition-colors" aria-label="Attach file">
                  <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M11 6.5L5.8 11.7C4.5 13 2.5 13 1.2 11.7C-0.1 10.4 -0.1 8.4 1.2 7.1L6.8 1.5C7.7 0.6 9.1 0.6 10 1.5C10.9 2.4 10.9 3.8 10 4.7L4.8 9.9C4.3 10.4 3.6 10.4 3.1 9.9C2.6 9.4 2.6 8.7 3.1 8.2L7.8 3.5"
                      stroke="currentColor"
                      strokeWidth="1.3"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>

                {/* Emoji */}
                <button type="button" className="hover:text-[#0F172A] transition-colors" aria-label="Emoji">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="7" cy="7" r="5.8" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="5.2" cy="5.8" r="0.7" fill="currentColor" />
                    <circle cx="8.8" cy="5.8" r="0.7" fill="currentColor" />
                    <path d="M4.8 8.5C5.3 9.4 6.1 9.8 7 9.8C7.9 9.8 8.7 9.4 9.2 8.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                  </svg>
                </button>

                {/* GIF */}
                <button
                  type="button"
                  className="px-[4px] py-[1px] rounded-[3px] border border-[#64748B] text-[8px] font-bold leading-[10px] hover:text-[#0F172A] hover:border-[#0F172A] transition-colors"
                >
                  GIF
                </button>

                {/* Image */}
                <button type="button" className="hover:text-[#0F172A] transition-colors" aria-label="Upload photo">
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1.5" y="1.5" width="11" height="11" rx="2" stroke="currentColor" strokeWidth="1.3" />
                    <circle cx="4.8" cy="4.8" r="1" fill="currentColor" />
                    <path d="M2 10.8L5.2 7.8L7.5 9.8L9.8 7.5L12 9.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <input
                type="text"
                value={draft}
                onChange={(e) => setDraft(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-[12px] bg-transparent text-[12.5px] text-[#0F172A] placeholder-[#94A3B8] focus:outline-none"
              />

              <button
                type="submit"
                className="w-[32px] h-[32px] rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white flex items-center justify-center shrink-0 transition-colors"
                aria-label="Send message"
              >
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12.5 1.5L6.2 7.8M12.5 1.5L8.5 12.5L6.2 7.8M12.5 1.5L1.5 5.5L6.2 7.8"
                    stroke="white"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div>

        {/* Right Panel: Conversation Info (w=276px) */}
        <div className="w-full xl:w-[276px] bg-white rounded-[16px] p-[20px] flex flex-col shrink-0 shadow-[0_1px_2px_rgba(15,23,42,0.03)]">
          {/* Header */}
          <div className="flex items-center justify-between mb-[18px]">
            <h2 className="text-[14px] font-bold leading-[17px] text-[#0F172A]">
              Conversation Info
            </h2>
            <button
              type="button"
              className="p-1 rounded-lg text-[#94A3B8] hover:text-[#475569] hover:bg-[#F1F5F9]"
              aria-label="More options"
            >
              <svg width="3" height="13" viewBox="0 0 4 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="2" cy="2" r="1.4" fill="currentColor" />
                <circle cx="2" cy="7" r="1.4" fill="currentColor" />
                <circle cx="2" cy="12" r="1.4" fill="currentColor" />
              </svg>
            </button>
          </div>

          {/* Profile Avatar & Details */}
          <div className="flex flex-col items-center">
            <ChatAvatar item={activeConv} size={68} showStatus={true} />

            <h3 className="text-[15px] font-bold leading-[18px] text-[#0F172A] mt-[12px]">
              {activeConv.name}
            </h3>
            <span className="text-[11.5px] font-normal leading-[14px] text-[#64748B] mt-[3px]">
              {activeConv.role}
            </span>

            <div className="mt-[8px] px-[10px] py-[3px] rounded-full bg-[#DCFCE7] text-[#15803D] text-[10px] font-bold leading-[12px] flex items-center gap-[5px]">
              <span className="w-[5px] h-[5px] rounded-full bg-[#16A34A]" />
              <span>Online</span>
            </div>
          </div>

          {/* 4 Quick Action Buttons */}
          <div className="grid grid-cols-4 gap-[8px] mt-[18px] pb-[18px] border-b border-[#F1F5F9]">
            {[
              {
                label: 'Call',
                icon: (
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M3 2C3.3 1.7 3.8 1.7 4.1 2L5.6 3.5C5.9 3.8 5.9 4.3 5.6 4.6L4.7 5.5C5.4 6.9 6.6 8.1 8 8.8L8.9 7.9C9.2 7.6 9.7 7.6 10 7.9L11.5 9.4C11.8 9.7 11.8 10.2 11.5 10.5L10.6 11.4C9.7 12.3 8.2 12.4 7 11.8C4.3 10.5 2.7 8.9 1.4 6.2C0.8 5 0.9 3.5 1.8 2.6L3 2Z"
                      fill="#334155"
                    />
                  </svg>
                ),
              },
              {
                label: 'Video',
                icon: (
                  <svg width="13" height="9" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="8.5" height="8" rx="1.5" fill="#334155" />
                    <path d="M9.5 3.8L13 1.8V8.2L9.5 6.2V3.8Z" fill="#334155" />
                  </svg>
                ),
              },
              {
                label: 'Email',
                icon: (
                  <svg width="13" height="10" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="12" height="9" rx="1.5" fill="#334155" />
                    <path d="M1.5 2L7 6L12.5 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
                  </svg>
                ),
              },
              {
                label: 'More',
                icon: (
                  <svg width="12" height="4" viewBox="0 0 12 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2" cy="2" r="1.2" fill="#334155" />
                    <circle cx="6" cy="2" r="1.2" fill="#334155" />
                    <circle cx="10" cy="2" r="1.2" fill="#334155" />
                  </svg>
                ),
              },
            ].map((btn) => (
              <button
                key={btn.label}
                type="button"
                className="flex flex-col items-center group focus:outline-none"
              >
                <div className="w-[36px] h-[36px] rounded-full border border-[#E2E8F0] bg-[#F8FAFC] group-hover:bg-[#EFF6FF] flex items-center justify-center transition-colors">
                  {btn.icon}
                </div>
                <span className="text-[10px] font-normal text-[#64748B] mt-[6px]">
                  {btn.label}
                </span>
              </button>
            ))}
          </div>

          {/* About */}
          <div className="py-[16px] border-b border-[#F1F5F9]">
            <h4 className="text-[12.5px] font-bold leading-[15px] text-[#0F172A] mb-[6px]">
              About
            </h4>
            <p className="text-[11px] font-normal leading-[16px] text-[#64748B]">
              Frontend Developer with 6+ years of experience in React, JavaScript and UI/UX.
            </p>
          </div>

          {/* Shared Files */}
          <div className="py-[16px] border-b border-[#F1F5F9]">
            <div className="flex items-center justify-between mb-[12px]">
              <h4 className="text-[12.5px] font-bold leading-[15px] text-[#0F172A]">
                Shared Files
              </h4>
              <button
                type="button"
                className="text-[11px] font-bold text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="flex flex-col gap-[12px]">
              {SHARED_FILES.map((file) => (
                <div key={file.id} className="flex items-center gap-[10px]">
                  <div
                    className={`w-[30px] h-[30px] rounded-[7px] text-[8.5px] font-bold flex items-center justify-center shrink-0 ${file.badgeClass}`}
                  >
                    {file.badge}
                  </div>
                  <div className="flex flex-col min-w-0">
                    <span className="text-[11.5px] font-bold leading-[14px] text-[#0F172A] truncate">
                      {file.name}
                    </span>
                    <span className="text-[10px] leading-[12px] text-[#94A3B8] mt-[2px]">
                      {file.meta}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Photos */}
          <div className="pt-[16px]">
            <div className="flex items-center justify-between mb-[12px]">
              <h4 className="text-[12.5px] font-bold leading-[15px] text-[#0F172A]">
                Photos
              </h4>
              <button
                type="button"
                className="text-[11px] font-bold text-[#2563EB] hover:underline"
              >
                View All
              </button>
            </div>

            <div className="grid grid-cols-4 gap-[8px]">
              {/* Photo 1 */}
              <div className="h-[48px] rounded-[8px] bg-[#E2E8F0] relative overflow-hidden flex items-end justify-center">
                <circle cx="10" cy="10" r="4" />
                <span className="w-[7px] h-[7px] rounded-full bg-[#F59E0B] absolute top-[10px] right-[12px]" />
                <svg className="w-full h-[26px]" viewBox="0 0 48 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 26L15 8L28 20L36 12L48 26H0Z" fill="#64748B" />
                </svg>
              </div>

              {/* Photo 2 */}
              <div className="h-[48px] rounded-[8px] bg-[#DBEAFE] flex items-center justify-center">
                <div className="w-[26px] h-[18px] rounded-[2px] bg-[#3B82F6] border-b-[3px] border-[#475569] flex items-center justify-center">
                  <span className="w-[4px] h-[4px] rounded-full bg-[#FDE047]" />
                </div>
              </div>

              {/* Photo 3 */}
              <div className="h-[48px] rounded-[8px] bg-[#E2E8F0] flex items-end justify-center pb-[6px]">
                <div className="w-[20px] h-[18px] bg-[#64748B] rounded-t-[2px] border-b-[3px] border-[#334155]" />
              </div>

              {/* Photo 4 (+12) */}
              <button
                type="button"
                className="h-[48px] rounded-[8px] bg-[#64748B] hover:bg-[#475569] flex items-center justify-center transition-colors"
              >
                <span className="w-[30px] h-[30px] rounded-full bg-[#1E3A8A]/80 text-white text-[10px] font-bold flex items-center justify-center">
                  +12
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
