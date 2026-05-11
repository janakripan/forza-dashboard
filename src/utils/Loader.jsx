const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <div className="w-[160px] h-[160px] max-sm:w-[110px] max-sm:h-[110px] relative">

        <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            {/* Purple gradient for the main circle */}
            <linearGradient id="loaderBgGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B6EE8" />
              <stop offset="100%" stopColor="#5A47C4" />
            </linearGradient>

            {/* Radial gradient for subtle depth / highlight */}
            <radialGradient id="loaderDepth" cx="38%" cy="32%" r="65%">
              <stop offset="0%" stopColor="#8B7EF0" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#4A38B0" stopOpacity="0.0" />
            </radialGradient>

            {/* Soft glow filter for the ghost arc layer */}
            <filter id="arcGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* ── Main circle ── */}
          <circle cx="100" cy="100" r="84" fill="url(#loaderBgGradient)" />
          <circle cx="100" cy="100" r="84" fill="url(#loaderDepth)" />

          {/*
            ── Stylized "F" — matching requested logo ──

            1. Floating top horizontal bar
            2. Vertical stem starting from the middle bar going down
            3. Middle horizontal bar attached to the stem

            Sub-paths drawn with M (move) commands:
              ─ top bar:     M 80 68 H 120
              └ lower shape: M 80 132 V 100 H 110
          */}
          <path
            d="M 76.25 68 H 120  M 80 122 V 102 Q 80 92 90 92 H 110"
            stroke="white"
            strokeWidth="7.5"
            fill="none"
            opacity="0.95"
          />

          {/*
            ── Windows-style spinning arc ──
            Layered arcs for depth / taper illusion:
              1. Ghost arc  — blurred, wider stroke → glow
              2. Main arc   — primary spinner
              3. Tip arc    — bright leading edge

            Keyframe "arcSpin" uses sinusoidal velocity:
              • slow + short arc at 12 o'clock (top)
              • fast + long arc at 6 o'clock (bottom)
          */}

          {/* Layer 1 — blurred ghost for glow / taper illusion */}
          <circle
            cx="100" cy="100" r="94"
            stroke="#9588F8"
            strokeWidth="6"
            fill="none"
            strokeLinecap="round"
            filter="url(#arcGlow)"
            className="animate-arc-spin"
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* Layer 2 — main arc */}
          <circle
            cx="100" cy="100" r="94"
            stroke="#7C6CF0"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
            className="animate-arc-spin"
            style={{ transformOrigin: "100px 100px" }}
          />

          {/* Layer 3 — bright leading tip */}
          <circle
            cx="100" cy="100" r="94"
            stroke="#B8AFFF"
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            className="animate-arc-tip"
            style={{ transformOrigin: "100px 100px" }}
          />

        </svg>
      </div>
    </div>
  );
};

export default Loader;