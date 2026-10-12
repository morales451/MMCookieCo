import { useId, useMemo } from 'react';
import { DoughFilter, GlossFilter, Inclusions, Rosette, blobPath, rng } from './bake.jsx';

// A cookie cake seen from directly above: chocolate-chip dough with a ring of
// star-tip rosettes, drawn in a 1000-unit viewBox.
export default function CookieCake({
  frosting = 'strawberry',
  rosettes = 44,
  sprinkles = 3,
  seed = 11,
  chipDensity = 1.6,
  clearCenter = 0.8,
  chipsBelow = -1,
  className = '',
  style,
}) {
  const uid = useId().replace(/:/g, '');
  const shape = useMemo(() => blobPath(500, 500, 440, rng(seed), 0.012, 96), [seed]);
  const chips = useMemo(
    () => (
      <Inclusions
        flavor="chocolateChip"
        rand={rng(seed * 13)}
        cx={500}
        cy={500}
        rMin={440 * clearCenter}
        rMax={405}
        unit={2.1}
        density={chipDensity * 0.19}
        keep={chipsBelow > -1 ? (x, y) => y > 500 - 440 * chipsBelow : undefined}
      />
    ),
    [seed, chipDensity, clearCenter, chipsBelow],
  );
  const ring = useMemo(
    () =>
      Array.from({ length: rosettes }).map((_, i) => {
        const t = (i / rosettes) * Math.PI * 2;
        return { x: 500 + Math.cos(t) * 452, y: 500 + Math.sin(t) * 452, rot: (i * 47) % 360, seed: seed + i };
      }),
    [rosettes, seed],
  );
  const rosetteR = (Math.PI * 2 * 452) / rosettes / 1.6;

  return (
    <svg viewBox="-20 -20 1040 1040" className={className} style={style} aria-hidden="true">
      <defs>
        <radialGradient id={`cg${uid}`} cx="45%" cy="42%" r="60%">
          <stop offset="0" stopColor="#F1C88C" />
          <stop offset="0.72" stopColor="#E1A862" />
          <stop offset="0.93" stopColor="#C2823C" />
          <stop offset="1" stopColor="#9C5E25" />
        </radialGradient>
        <DoughFilter id={`cd${uid}`} scale={2.2} strength={1.1} />
        <GlossFilter id={`cr${uid}`} blur={3} surface={5} />
      </defs>
      <path d={shape} fill="#2B1610" opacity="0.32" transform="translate(10 22)" style={{ filter: 'blur(14px)' }} />
      <g filter={`url(#cd${uid})`}>
        <path d={shape} fill={`url(#cg${uid})`} />
      </g>
      {chips}
      <g filter={`url(#cr${uid})`}>
        {ring.map((p, i) => (
          <Rosette key={i} x={p.x} y={p.y} r={rosetteR} frosting={frosting} rotate={p.rot} sprinkles={sprinkles} seed={p.seed} />
        ))}
      </g>
    </svg>
  );
}

// The message, piped in buttercream. Each line draws left to right in turn.
export function PipedMessage({ text, frosting = 'strawberry', pipeKey = 0, className = '' }) {
  const uid = useId().replace(/:/g, '');
  const lines = useMemo(() => splitLines(text), [text]);
  const longest = Math.max(...lines.map((l) => l.length), 6);
  const size = Math.min(lines.length > 1 ? 92 : 150, 1700 / longest);
  const lineH = size * 1.08;
  const height = lineH * lines.length + size * 0.5;
  const ink = {
    strawberry: { fill: '#F48FB0', edge: '#B8305C' },
    vanilla: { fill: '#FFF6EA', edge: '#B98A57' },
    chocolate: { fill: '#5A2E1C', edge: '#24100A' },
    sky: { fill: '#8CC4FA', edge: '#2F6FC4' },
  }[frosting];

  return (
    <svg viewBox={`0 0 1000 ${height}`} className={className} aria-hidden="true" style={{ overflow: 'visible' }}>
      <defs>
        <GlossFilter id={`pg${uid}`} blur={2.4} surface={4.5} />
        <mask id={`pm${uid}`} maskUnits="userSpaceOnUse">
          {lines.map((_, i) => (
            <rect
              key={`${pipeKey}-${i}`}
              className="pipe-sweep"
              x="0"
              y={i * lineH - size * 0.2}
              width="1000"
              height={lineH + size * 0.4}
              fill="#fff"
              style={{ animationDelay: `${i * 0.75}s` }}
            />
          ))}
        </mask>
      </defs>
      <g mask={`url(#pm${uid})`}>
        <g filter={`url(#pg${uid})`}>
          {lines.map((line, i) => (
            <text
              key={i}
              x="500"
              y={i * lineH + size * 0.95}
              textAnchor="middle"
              fontFamily="'Leckerli One', cursive"
              fontSize={size}
              fill={ink.fill}
              stroke={ink.edge}
              strokeWidth={size * 0.035}
              paintOrder="stroke"
              strokeLinejoin="round"
            >
              {line}
            </text>
          ))}
        </g>
      </g>
    </svg>
  );
}

function splitLines(text) {
  const clean = text.trim().replace(/\s+/g, ' ');
  if (clean.length <= 15) return [clean];
  const words = clean.split(' ');
  if (words.length === 1) return [clean];
  let best = [clean];
  let bestScore = Infinity;
  for (let i = 1; i < words.length; i++) {
    const a = words.slice(0, i).join(' ');
    const b = words.slice(i).join(' ');
    const score = Math.max(a.length, b.length);
    if (score < bestScore) {
      bestScore = score;
      best = [a, b];
    }
  }
  return best;
}
