import type { CSSProperties } from "react";

type P = { className?: string; style?: CSSProperties };

export function Pumpkin({ className, style }: P) {
  return (
    <svg viewBox="0 0 120 104" className={className} style={style} aria-hidden>
      <defs>
        <radialGradient id="pk" cx="50%" cy="40%" r="70%">
          <stop offset="0" stopColor="#ffa23a" />
          <stop offset="0.7" stopColor="#f2670c" />
          <stop offset="1" stopColor="#b8420a" />
        </radialGradient>
      </defs>
      <path d="M56 18c0-8 5-14 15-15l2 6c-7 1-9 4-9 9z" fill="#4a6b24" />
      <ellipse cx="32" cy="62" rx="27" ry="36" fill="url(#pk)" />
      <ellipse cx="88" cy="62" rx="27" ry="36" fill="url(#pk)" />
      <ellipse cx="60" cy="60" rx="31" ry="40" fill="url(#pk)" />
      <path d="M60 22v76M42 26c-6 20-6 52 0 70M78 26c6 20 6 52 0 70" stroke="#b8420a" strokeOpacity=".45" strokeWidth="2" fill="none" />
      <g fill="#ffe39a" style={{ filter: "drop-shadow(0 0 6px #ffb340)" }}>
        <path d="M36 54l14-2-6-14z" />
        <path d="M84 54l-14-2 6-14z" />
        <path d="M56 66h8l-4-9z" />
        <path d="M32 70l9 8 8-8 11 11 11-11 8 8 9-8-4 16c-14 9-34 9-48 0z" />
      </g>
    </svg>
  );
}

const BAT = "M24 20c-1-4-3-6-5-7-3 1-5 4-8 4 1-3 0-6-3-8 4 0 7-2 10-4 3 1 5 3 6 6 1-3 3-5 6-6 3 2 6 4 10 4-3 2-4 5-3 8-3 0-5-3-8-4-2 1-4 3-5 7z";
const TREE = "M150 800C148 700 156 640 140 560M142 600C100 570 70 560 40 520M146 580C190 550 215 520 235 470M140 650C100 640 75 620 50 600M150 620C195 600 220 590 250 560M70 560L50 530M215 520L250 505M40 520L25 480M235 470L232 440";
const EYES = [[770, 812], [455, 842], [1372, 838], [250, 828]];
const WINDOWS = [[1086, 586, 30, 42], [1196, 586, 30, 42], [1246, 508, 24, 36], [1002, 636, 26, 34]];

/** Full-bleed hero art: moon, haunted house, dead trees, graveyard, glowing eyes. */
export function HeroScene({ className, percent }: P & { percent?: number }) {
  return (
    <div className={`${className} overflow-hidden`} style={{ containerType: "size" }} aria-hidden>
      {/* Scene is sized by height (never taller than ~1.1x the box, so the moon is not cropped) and pinned bottom-right; ground paths extend left to fill any gap. */}
      <svg
        viewBox="0 0 1440 900"
        className="absolute bottom-0 right-0"
        style={{ width: "clamp(160cqh, 100cqw, 178cqh)", height: "auto", aspectRatio: "1440 / 900", overflow: "visible" }}
      >
        <defs>
          <radialGradient id="moonFill" cx="38%" cy="35%" r="75%">
            <stop offset="0" stopColor="#fff3c9" />
            <stop offset="0.6" stopColor="#ffc861" />
            <stop offset="1" stopColor="#f08a2c" />
          </radialGradient>
          <radialGradient id="moonGlow">
            <stop offset="0.45" stopColor="#ffb347" stopOpacity="0.4" />
            <stop offset="1" stopColor="#ffb347" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="5" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
          <symbol id="bat" viewBox="0 0 48 22"><path fill="currentColor" d={BAT} /></symbol>
          <g id="tree" fill="none" stroke="#0d0716" strokeLinecap="round">
            <path d={TREE} strokeWidth="9" />
          </g>
        </defs>

        {/* moon + bats crossing it */}
        <circle cx="1080" cy="300" r="320" fill="url(#moonGlow)" />
        <circle cx="1080" cy="300" r="190" fill="url(#moonFill)" />
        <g fill="#c9822c" opacity=".35">
          <circle cx="1020" cy="250" r="30" /><circle cx="1130" cy="340" r="22" /><circle cx="1170" cy="230" r="14" /><circle cx="1000" cy="360" r="12" />
        </g>
        {percent !== undefined && (
          <g
            fill="#e8150f"
            textAnchor="middle"
            style={{ fontFamily: "var(--font-wet), var(--font-body), sans-serif", filter: "drop-shadow(0 4px 10px rgb(90 0 0 / .45))" }}
          >
            <text x="1080" y="262" fontSize="128">{percent}%</text>
            <text x="1080" y="386" fontSize="128">OFF</text>
          </g>
        )}

        {/* hills */}
        <path fill="#2a1848" d="M-3000 700H0C240 640 420 700 660 690S1000 640 1440 690V900H-3000z" />
        <path fill="#1a0f30" d="M820 770C940 690 1100 680 1240 702c100 14 160 40 200 52V900H820z" />

        {/* haunted house */}
        <g fill="#0d0716">
          <rect x="1060" y="560" width="200" height="152" />
          <path d="M1040 560l120-122 120 122z" />
          <rect x="1230" y="470" width="72" height="242" />
          <path d="M1220 470l46-82 46 82z" />
          <rect x="980" y="610" width="96" height="102" />
          <path d="M968 610l60-66 60 66z" />
          <rect x="1098" y="470" width="24" height="70" />
          <rect x="1262" y="380" width="8" height="30" />
        </g>
        <g className="flicker" filter="url(#glow)" fill="#ffc94d">
          {WINDOWS.map(([x, y, w, h]) => (
            <rect key={x} x={x} y={y} width={w} height={h} rx="2" />
          ))}
          <circle cx="1160" cy="500" r="14" />
          <path d="M1138 712v-44a22 22 0 0 1 44 0v44z" fill="#ff8a1f" />
        </g>
        <g stroke="#0d0716" strokeWidth="3">
          <path d="M1101 586v42M1086 607h30M1211 586v42M1196 607h30M1258 508v36M1002 653h26" />
        </g>

        {/* dead trees */}
        <use href="#tree" />

        {/* ground, graves, bushes */}
        <path fill="#0a0510" d="M-3000 790H0C200 750 380 780 560 800S900 770 1100 790s250-10 340-26V900H-3000z" />
        <g fill="#0a0510">
          <path d="M300 800v-52a22 22 0 0 1 44 0v52z" />
          <path d="M372 806v-34a15 15 0 0 1 30 0v34z" />
          <path d="M640 796v-40a18 18 0 0 1 36 0v40z" />
          <path d="M1010 790v-62h30v62zM1018 728v-18h14v18M1009 718h32" />
          <path d="M1396 790v-48a20 20 0 0 1 40 0v48z" />
          <ellipse cx="770" cy="818" rx="62" ry="30" />
          <ellipse cx="455" cy="850" rx="70" ry="28" />
          <ellipse cx="1372" cy="846" rx="56" ry="26" />
          <ellipse cx="250" cy="836" rx="60" ry="28" />
        </g>
        <g fill="#ff7a1a" filter="url(#glow)">
          {EYES.map(([x, y]) => (
            <g key={x}>
              <path d={`M${x - 24} ${y}q9-11 19-1-9 4-19 1z`} />
              <path d={`M${x + 5} ${y - 1}q10-10 19 1-10 3-19-1z`} />
            </g>
          ))}
        </g>
      </svg>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-violet/25 to-transparent" />
      {/* foreground pumpkins */}
      <Pumpkin className="flicker absolute bottom-[3%] left-[4%] w-24 md:h-[16vh] md:w-auto" />
      <Pumpkin className="flicker absolute bottom-[1%] left-[22%] hidden md:block md:h-[9vh] md:w-auto" style={{ animationDelay: "-1s" }} />
      <Pumpkin className="flicker absolute bottom-[2%] left-[56%] hidden md:block md:h-[8vh] md:w-auto" style={{ animationDelay: "-2s" }} />
      <Pumpkin className="flicker absolute bottom-[2%] right-[18%] w-16 md:h-[14vh] md:w-auto" style={{ animationDelay: "-1.4s" }} />
      <Pumpkin className="flicker absolute -bottom-[1%] right-[2%] w-20 md:h-[16vh] md:w-auto" style={{ animationDelay: "-.6s" }} />
    </div>
  );
}

export function Web({ className, style }: P) {
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} aria-hidden fill="none" stroke="currentColor" strokeWidth="1">
      <path d="M0 0L200 0M0 0L190 70M0 0L150 150M0 0L70 190M0 0L0 200" />
      <path d="M40 0Q30 30 0 40M80 0Q60 60 0 80M120 0Q90 90 0 120M160 0Q120 120 0 160" />
      <path d="M0 0" />
    </svg>
  );
}

export function Spider({ className, style }: P) {
  return (
    <svg viewBox="0 0 40 90" className={className} style={style} aria-hidden>
      <path d="M20 0v52" stroke="currentColor" strokeWidth="1" opacity=".6" />
      <g fill="#1a1026" stroke="#a78bfa" strokeWidth="1.2">
        <ellipse cx="20" cy="62" rx="7" ry="8" />
        <circle cx="20" cy="52" r="4.5" />
        <path d="M13 60l-9-6M13 64l-10 2M13 68l-8 8M27 60l9-6M27 64l10 2M27 68l8 8" fill="none" />
      </g>
    </svg>
  );
}

/** Layered graveyard skyline that sits at the bottom of the hero. */
export function Graveyard({ className }: P) {
  return (
    <svg viewBox="0 0 1440 260" preserveAspectRatio="none" className={className} aria-hidden>
      <path fill="#2a1848" d="M0 150c200-50 360-20 540 10s360 40 520-10 260-30 380 0v110H0z" />
      <g fill="#0f0819">
        <path d="M0 200c160-30 320-10 480 5s300 10 480-15 330-5 480 15v55H0z" />
        {/* dead tree, left */}
        <path d="M118 210l6-120-22-38 12 4-6-24 12 20 4-30 6 32 20-26-12 34 24-6-26 22 4 132z" />
        <path d="M122 120l-40-26M126 100l34-34M122 150l40-20" stroke="#0f0819" strokeWidth="5" fill="none" />
        {/* dead tree, right */}
        <path d="M1296 210l-5-110 18-30-10 3 5-22-10 18-3-27-5 30-17-22 10 31-21-6 22 19-3 116z" />
        <path d="M1294 110l36-24M1292 140l-34-18" stroke="#0f0819" strokeWidth="5" fill="none" />
        {/* tombstones */}
        <path d="M300 214v-48a20 20 0 0 1 40 0v48z" />
        <path d="M420 214v-34a16 16 0 0 1 32 0v34z" />
        <path d="M880 214v-40a18 18 0 0 1 36 0v40z" />
        <path d="M1010 214v-56h34v56zM1021 158v-16h12v16M1015 150h24" />
        <path d="M720 214v-30a14 14 0 0 1 28 0v30z" />
      </g>
    </svg>
  );
}


const MINI_BAT = "M24 20c-1-4-3-6-5-7-3 1-5 4-8 4 1-3 0-6-3-8 4 0 7-2 10-4 3 1 5 3 6 6 1-3 3-5 6-6 3 2 6 4 10 4-3 2-4 5-3 8-3 0-5-3-8-4-2 1-4 3-5 7z";

/** Hero art: a big glowing moon showing the discount, with a witch flying across it. */
export function HeroMoon({ percent, className }: P & { percent: number }) {
  return (
    <div className={`${className ?? ""} relative aspect-square`} role="img" aria-label={`${percent} percent off`}>
      <svg viewBox="0 0 600 600" className="size-full overflow-visible">
        <defs>
          <radialGradient id="hm-fill" cx="38%" cy="32%" r="80%">
            <stop offset="0" stopColor="#fff1d0" />
            <stop offset="0.55" stopColor="#ffc86a" />
            <stop offset="1" stopColor="#f59a3c" />
          </radialGradient>
          <radialGradient id="hm-glow">
            <stop offset="0.5" stopColor="#ff9a3c" stopOpacity="0.35" />
            <stop offset="1" stopColor="#ff9a3c" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="300" cy="300" r="300" fill="url(#hm-glow)" />
        <circle cx="300" cy="300" r="225" fill="url(#hm-fill)" />
        <g fill="#c98a3a" opacity=".3">
          <circle cx="410" cy="190" r="42" /><circle cx="200" cy="400" r="30" /><circle cx="395" cy="430" r="20" />
        </g>
        <text x="300" y="364" textAnchor="middle" fontSize="150" fontWeight="700" fill="#3a1a08" style={{ fontFamily: "var(--font-body), sans-serif" }}>
          {percent}%
        </text>
        <rect x="248" y="384" width="104" height="38" rx="19" fill="none" stroke="#3a1a08" strokeOpacity=".6" strokeWidth="2.5" />
        <text x="300" y="411" textAnchor="middle" fontSize="20" fontWeight="700" letterSpacing="7" fill="#3a1a08" style={{ fontFamily: "var(--font-body), sans-serif" }}>
          OFF
        </text>

        {/* witch on a broom */}
        <g transform="translate(104 100) scale(1.7)" fill="#1a0b12"><g className="float">
          <path d="M-4 80 L124 52" stroke="#1a0b12" strokeWidth="3.5" strokeLinecap="round" fill="none" />
          <path d="M112 50 L152 38 L158 66 L116 58z" />
          <path d="M62 60 C64 44 80 36 94 44 L100 58 C86 63 74 64 62 60z" />
          <path d="M70 62 L62 78 L70 80 L80 64z" />
          <circle cx="80" cy="33" r="7.5" />
          <ellipse cx="80" cy="29" rx="14" ry="3.6" />
          <path d="M71 28 C74 18 80 8 90 0 C86 10 86 20 89 28z" />
        </g></g>

        <g fill="#1a0b12" opacity=".85">
          <path transform="translate(70 70) scale(1.1)" d={MINI_BAT} />
          <path transform="translate(500 40) scale(0.8)" d={MINI_BAT} />
        </g>
      </svg>
    </div>
  );
}

export function Bat({ className, style }: P) {
  return (
    <svg viewBox="0 0 48 22" className={className} style={style} aria-hidden>
      <path fill="currentColor" d={MINI_BAT} />
    </svg>
  );
}

/** Big soft ghost silhouette, like a shadow cast on a wall. */
export function GhostShadow({ className }: P) {
  return (
    <svg viewBox="0 0 300 340" className={className} aria-hidden>
      <path
        fill="currentColor"
        d="M150 10C84 10 44 62 44 128v150c0 14 10 20 20 12l24-20 24 20c8 7 18 7 26 0l24-20 24 20c8 7 18 7 26 0l24-20 24 20c10 8 20 2 20-12V128C256 62 216 10 150 10zM8 150c20-30 44-30 40-6-4 24-26 40-40 6zM292 150c-20-30-44-30-40-6 4 24 26 40 40 6z"
      />
      <ellipse cx="116" cy="118" rx="14" ry="22" fill="#2a1a5e" />
      <ellipse cx="184" cy="118" rx="14" ry="22" fill="#2a1a5e" />
      <ellipse cx="150" cy="176" rx="14" ry="26" fill="#2a1a5e" />
    </svg>
  );
}

export function BatWing({ className }: P) {
  return (
    <svg viewBox="0 0 80 28" className={className} aria-hidden>
      <path fill="currentColor" d="M80 14C66 6 50 4 36 0c6 4 8 8 8 12-4-2-9-3-14-3 3 2 5 5 5 8-6-2-14-2-22 2 10 0 14 4 16 9 2-4 6-7 12-7 6 0 11 3 14 7 1-5 3-9 7-11 4-2 8-2 12-2z" />
    </svg>
  );
}

/** Witch on a broom, flat silhouette. */
export function Witch({ className, style }: P) {
  return (
    <svg viewBox="0 0 170 100" className={className} style={style} aria-hidden>
      <g fill="currentColor">
        <path d="M0 80 L128 52" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M112 50 L152 38 L158 66 L116 58z" />
        <path d="M62 60 C64 44 80 36 94 44 L100 58 C86 63 74 64 62 60z" />
        <path d="M70 62 L62 78 L70 80 L80 64z" />
        <circle cx="80" cy="33" r="7.5" />
        <ellipse cx="80" cy="29" rx="14" ry="3.6" />
        <path d="M71 28 C74 18 80 8 90 0 C86 10 86 20 89 28z" />
      </g>
    </svg>
  );
}

/** Crow in flight, flat silhouette. */
export function Crow({ className, style }: P) {
  return (
    <svg viewBox="0 0 64 28" className={className} style={style} aria-hidden>
      <path fill="currentColor" d="M32 14c-4-6-12-10-22-10 6 2 9 5 10 9-4-1-8-1-12 1 5 0 9 2 11 5l5 3c1 2 3 3 5 3s4-1 5-3l5-3c2-3 6-5 11-5-4-2-8-2-12-1 1-4 4-7 10-9-10 0-18 4-22 10z" />
    </svg>
  );
}
