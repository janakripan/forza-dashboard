const Logo = () => {
  return (
    <svg
      viewBox="0 0 200 200"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="bgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#6D5BD0" />
          <stop offset="100%" stopColor="#5A47C4" />
        </linearGradient>
      </defs>

      {/* Main Circle */}
      <circle cx="100" cy="100" r="85" fill="url(#bgGradient)" />

      {/* Stylized F — matching requested logo */}
      <path
        d="M 76.25 68 H 120  M 80 122 V 102 Q 80 92 90 92 H 110"
        stroke="white"
        strokeWidth="7.5"
        fill="none"
      />

      {/* Rotating Arc */}
      <circle
        cx="100"
        cy="100"
        r="95"
        stroke="#7C6CF0"
        strokeWidth="4"
        fill="none"
        strokeDasharray="220 400"
        className="spin-arc"
      />
    </svg>
  );
};

export default Logo;