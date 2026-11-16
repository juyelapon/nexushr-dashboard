import React from 'react';

export default function AuthBrandPanel({ variant = 'signup' }) {
  const isSignIn = variant === 'signin';

  const subtitle = isSignIn
    ? 'Stay organized, stay connected, and achieve excellence every day.'
    : 'Create your account and take the first step towards a more organized and productive work life.';

  const features = isSignIn
    ? [
        {
          title: 'One Platform',
          desc: 'All your work essentials in one place.',
          icon: (
            <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="5" r="2.6" fill="#2563EB" />
              <path d="M1.8 13.2C1.8 10.9 3.9 9.2 6.5 9.2C9.1 9.2 11.2 10.9 11.2 13.2" fill="#2563EB" />
              <circle cx="12.5" cy="5.5" r="2" fill="#2563EB" />
              <path d="M11.5 9.5C13.6 9.7 15.2 11.1 15.2 13.2" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: 'Smart Insights',
          desc: 'Track progress and make better decisions.',
          icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="12" height="12" rx="2.5" fill="#16A34A" />
              <path d="M4.2 9.8V7.2M7 9.8V4.5M9.8 9.8V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: 'Secure & Reliable',
          desc: 'Your data is protected with enterprise security.',
          icon: (
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z" fill="#7C3AED" />
              <path d="M4.5 7.2L5.8 8.5L8.6 5.6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ]
    : [
        {
          title: 'All-in-One Platform',
          desc: 'Manage tasks, attendance, leaves and more – all in one place.',
          icon: (
            <svg width="16" height="14" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="6.5" cy="5" r="2.6" fill="#2563EB" />
              <path d="M1.8 13.2C1.8 10.9 3.9 9.2 6.5 9.2C9.1 9.2 11.2 10.9 11.2 13.2" fill="#2563EB" />
              <circle cx="12.5" cy="5.5" r="2" fill="#2563EB" />
              <path d="M11.5 9.5C13.6 9.7 15.2 11.1 15.2 13.2" stroke="#2563EB" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: 'Smart Insights',
          desc: 'Get real-time insights that help you and your team grow.',
          icon: (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="12" height="12" rx="2.5" fill="#16A34A" />
              <path d="M4.2 9.8V7.2M7 9.8V4.5M9.8 9.8V6" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          ),
        },
        {
          title: 'Secure & Private',
          desc: 'Your data is protected with enterprise-grade security.',
          icon: (
            <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.5 1L1.5 3.2V6.8C1.5 10 3.6 12.6 6.5 13.5C9.4 12.6 11.5 10 11.5 6.8V3.2L6.5 1Z" fill="#7C3AED" />
              <path d="M4.5 7.2L5.8 8.5L8.6 5.6" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ),
        },
      ];

  return (
    <div
      className="relative w-full lg:w-1/2 min-h-[540px] lg:min-h-screen overflow-hidden flex flex-col justify-between p-8 sm:p-12 lg:p-[52px]"
      style={{
        background:
          'linear-gradient(180deg, #CFD6F6 0%, #BCC5F2 42%, #9EA8EC 72%, #8590E5 100%)',
      }}
    >
      {/* Background Mountain & Victory Person Illustration */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 w-full h-[380px] sm:h-[430px] object-cover"
        viewBox="0 0 720 430"
        fill="none"
        preserveAspectRatio="xMidYMax slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="360" cy="210" r="115" fill="white" fillOpacity="0.14" />
        <circle cx="360" cy="210" r="76" fill="white" fillOpacity="0.16" />

        <path d="M-20 355L135 215L310 355H-20Z" fill="#777FE0" />
        <path d="M400 355L575 200L740 355H400Z" fill="#6D74DC" />
        <path d="M220 355L425 230L610 355H220Z" fill="#5D64D2" />

        <path d="M-20 430L360 195L740 430H-20Z" fill="#2A2678" />
        <path d="M360 195L740 430H420L360 195Z" fill="#1C1856" />
        <path d="M-20 430L360 195L260 430H-20Z" fill="#231F66" />

        <g transform="translate(360, 195)">
          <path d="M-4 0L-6 -26M4 0L6 -26" stroke="#151238" strokeWidth="4.2" strokeLinecap="round" />
          <path d="M-7 -24L-8 -52H8L7 -24H-7Z" fill="#151238" />
          <circle cx="0" cy="-60" r="6" fill="#151238" />
          <path d="M-7 -48L-36 -75M7 -48L36 -75" stroke="#151238" strokeWidth="4" strokeLinecap="round" />
        </g>
      </svg>

      {/* Top & Middle Content */}
      <div className="relative z-10 max-w-[440px]">
        <div className="text-[#2563EB] mb-[18px]">
          <svg width="28" height="22" viewBox="0 0 28 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.2 0L6.8 11.4H11.5V22H0.5V11.6L5.5 0H11.2ZM26.5 0L22.1 11.4H26.8V22H15.8V11.6L20.8 0H26.5Z"
              fill="#2563EB"
            />
          </svg>
        </div>

        <h1 className="text-[32px] sm:text-[38px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#0F172A]">
          Great teams
          <br />
          achieve more
          <br />
          together.
        </h1>

        <p className="text-[14.5px] font-normal leading-[1.6] text-[#334155] mt-[16px] max-w-[360px]">
          {subtitle}
        </p>

        <div className="w-[34px] h-[2px] bg-[#2563EB] rounded-full mt-[16px]" />

        <div className="mt-[26px] flex flex-col gap-[20px]">
          {features.map((feat) => (
            <div key={feat.title} className="flex items-start gap-[14px]">
              <div className="w-[34px] h-[34px] rounded-full bg-white shadow-sm flex items-center justify-center shrink-0 mt-[2px]">
                {feat.icon}
              </div>
              <div>
                <h3 className="text-[14px] font-bold leading-[18px] text-[#0F172A]">
                  {feat.title}
                </h3>
                <p className="text-[12px] font-normal leading-[17px] text-[#334155] mt-[2px]">
                  {feat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Floating Testimonial Quote Card */}
      <div className="relative z-10 mt-10 lg:mt-0 w-full max-w-[270px] rounded-[16px] bg-white/85 backdrop-blur-md p-[20px] shadow-[0_8px_24px_rgba(15,23,42,0.08)]">
        <svg
          className="mb-[6px]"
          width="14"
          height="11"
          viewBox="0 0 28 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.2 0L6.8 11.4H11.5V22H0.5V11.6L5.5 0H11.2ZM26.5 0L22.1 11.4H26.8V22H15.8V11.6L20.8 0H26.5Z"
            fill="#2563EB"
          />
        </svg>
        <p className="text-[11.5px] font-medium leading-[17px] text-[#1E293B]">
          The strength of the team is each individual member. The strength of each member is the team.
        </p>
        <span className="block text-[10.5px] font-bold text-[#2563EB] mt-[10px]">
          - Phil Jackson
        </span>
      </div>
    </div>
  );
}
