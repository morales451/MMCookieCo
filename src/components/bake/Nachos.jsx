import { useId, useMemo } from 'react';
import { DoughFilter, GlossFilter, Inclusions, rng } from './bake.jsx';

// A cookie chip: a wedge cut from a round cookie, so its outer edge keeps the
// cookie's curve. Drawn tip-up in a 200-unit box; the tip is what gets dipped.
export const CHIP_PATH =
  'M91,32 Q100,12 109,32 L171,150 Q179,166 162,170 Q100,184 38,170 Q21,166 29,150 Z';

const DRIP =
  'M-10,-10 H210 V66 Q190,80 172,70 Q150,58 132,76 Q116,92 98,74 Q80,58 62,74 Q44,88 28,70 Q14,60 -10,72 Z';

export function NachoChip({ seed = 1, dipped = false, frosting = '#FFF6EA', edge = '#E8CFAF', uid, simple = false }) {
  const bits = useMemo(
    () => <Inclusions flavor="chocolateChip" rand={rng(seed * 17 + 3)} cx={100} cy={128} rMax={38} unit={0.75} density={1.9} />,
    [seed],
  );
  return (
    <g>
      <path d={CHIP_PATH} fill="#2B1610" opacity="0.25" transform="translate(4 8)" style={{ filter: 'blur(5px)' }} />
      <g filter={simple ? undefined : `url(#nd${uid})`}>
        <path d={CHIP_PATH} fill={`url(#ng${uid})`} />
      </g>
      {!simple && bits}
      <g clipPath={`url(#nc${uid})`}>
        <g className={`nacho-coat ${dipped ? 'is-dipped' : ''}`} filter={simple ? undefined : `url(#nb${uid})`}>
          <path d={DRIP} fill={simple ? frosting : `url(#nk${uid})`} stroke={edge} strokeWidth="2.5" />
          {!simple && <path d="M60,26 Q100,14 140,26" fill="none" stroke="#fff" strokeOpacity="0.8" strokeWidth="6" strokeLinecap="round" />}
        </g>
      </g>
    </g>
  );
}

// Shared defs for any SVG that draws chips: dough gradient, texture, clip, gloss.
export function NachoDefs({ uid }) {
  return (
    <>
      <linearGradient id={`ng${uid}`} x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#E9B677" />
        <stop offset="0.55" stopColor="#E7B171" />
        <stop offset="0.92" stopColor="#C88A45" />
        <stop offset="1" stopColor="#A9682B" />
      </linearGradient>
      <DoughFilter id={`nd${uid}`} />
      <linearGradient id={`nk${uid}`} x1="0.5" y1="0" x2="0.5" y2="1">
        <stop offset="0" stopColor="#FFFDF8" />
        <stop offset="0.6" stopColor="#FFF1DC" />
        <stop offset="1" stopColor="#EBD3B2" />
      </linearGradient>
      <GlossFilter id={`nb${uid}`} blur={2.4} surface={4} />
      <clipPath id={`nc${uid}`}>
        <path d={CHIP_PATH} />
      </clipPath>
    </>
  );
}

const SPRINKLES = ['#4FA3F7', '#FFD447', '#5CCB8F', '#FF8A3D', '#F06A93'];

// A bowl of buttercream dip, seen from above, centred on 0,0 with radius r.
export function DipBowl({ r = 300, uid, sprinkles = 26, seed = 4 }) {
  const rand = rng(seed);
  const swirls = [0.78, 0.6, 0.42, 0.24].map((k, i) => {
    const rr = r * k;
    const a0 = i * 1.3;
    return `M${Math.cos(a0) * rr},${Math.sin(a0) * rr} A${rr},${rr * 0.96} 0 1 1 ${Math.cos(a0 + 5.2) * rr * 0.98},${Math.sin(a0 + 5.2) * rr * 0.98}`;
  });
  return (
    <g>
      <circle r={r + 30} fill="#2B1610" opacity="0.3" transform="translate(10 22)" style={{ filter: 'blur(16px)' }} />
      <g filter={`url(#bb${uid})`}>
        <circle r={r + 26} fill="#C93A68" />
        <circle r={r + 4} fill="#A92D55" />
      </g>
      <g filter={`url(#bd${uid})`}>
        <circle r={r} fill="#FFF4E6" />
        {swirls.map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#EBD5B8" strokeWidth={r * 0.035} strokeLinecap="round" opacity="0.5" />
        ))}
      </g>
      {Array.from({ length: sprinkles }).map((_, i) => {
        const t = rand() * Math.PI * 2;
        const d = r * (0.8 + rand() * 0.14);
        const x = Math.cos(t) * d;
        const y = Math.sin(t) * d;
        return (
          <rect key={i} x={x - 7} y={y - 2.2} width="14" height="4.4" rx="2.2" fill={SPRINKLES[i % SPRINKLES.length]} transform={`rotate(${rand() * 180} ${x} ${y})`} />
        );
      })}
    </g>
  );
}

export function BowlDefs({ uid }) {
  return (
    <>
      <GlossFilter id={`bb${uid}`} blur={5} surface={6} />
      <GlossFilter id={`bd${uid}`} blur={6} surface={3} />
    </>
  );
}

// One individually packed serving: a clear clamshell holding chips and a cup of dip.
export function NachoPack({ className = '', simple = false, seed = 2, sticker = '' }) {
  const uid = useId().replace(/:/g, '');
  const chips = [
    { x: 70, y: 150, rot: -62 },
    { x: 108, y: 112, rot: -38 },
    { x: 150, y: 96, rot: -12 },
    { x: 92, y: 210, rot: -88 },
    { x: 150, y: 190, rot: -70 },
  ];
  return (
    <svg viewBox="0 0 440 320" className={className} aria-hidden="true">
      <defs>
        <NachoDefs uid={uid} />
        <BowlDefs uid={uid} />
        <linearGradient id={`glare${uid}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#fff" stopOpacity="0.38" />
          <stop offset="0.4" stopColor="#fff" stopOpacity="0.05" />
          <stop offset="1" stopColor="#fff" stopOpacity="0.16" />
        </linearGradient>
      </defs>
      <rect x="18" y="22" width="404" height="282" rx="44" fill="#2B1610" opacity="0.3" style={{ filter: 'blur(10px)' }} transform="translate(6 12)" />
      <rect x="18" y="18" width="404" height="282" rx="44" fill="#FFF4E6" opacity="0.92" />
      {chips.slice(0, simple ? 3 : 5).map((c, i) => (
        <g key={i} transform={`translate(${c.x + 30} ${c.y}) rotate(${c.rot + 90}) scale(0.62) translate(-100 -100)`}>
          <NachoChip seed={seed * 9 + i} uid={uid} simple={simple} />
        </g>
      ))}
      <g transform="translate(322 160)">
        <DipBowl r={66} uid={uid} sprinkles={simple ? 6 : 12} seed={seed} />
      </g>
      <rect x="18" y="18" width="404" height="282" rx="44" fill={`url(#glare${uid})`} stroke="#fff" strokeOpacity="0.75" strokeWidth="5" />
      <path d="M60 48 Q200 30 380 52" fill="none" stroke="#fff" strokeOpacity="0.6" strokeWidth="7" strokeLinecap="round" />
      {!simple && !sticker && (
        <g transform="translate(76 262) rotate(-8)">
          <circle r="36" fill="#F06A93" stroke="#2B1610" strokeWidth="4" />
          <text textAnchor="middle" y="-4" fontFamily="'Leckerli One', cursive" fontSize="17" fill="#2B1610">MM</text>
          <text textAnchor="middle" y="14" fontFamily="'Leckerli One', cursive" fontSize="11" fill="#2B1610">Cookie Co.</text>
        </g>
      )}
      {!simple && sticker && (
        // A client's name on the lid: the sticker widens to fit, the type shrinks past that.
        <g transform="translate(220 258) rotate(-3)">
          <rect x={-Math.min(170, 30 + sticker.length * 9)} y="-30" width={Math.min(340, 60 + sticker.length * 18)} height="60" rx="30" fill="#F06A93" stroke="#2B1610" strokeWidth="4" />
          <text
            textAnchor="middle"
            y="9"
            fontFamily="'Leckerli One', cursive"
            fontSize={Math.max(14, Math.min(28, 520 / Math.max(sticker.length, 1)))}
            fill="#2B1610"
          >
            {sticker}
          </text>
        </g>
      )}
    </svg>
  );
}
