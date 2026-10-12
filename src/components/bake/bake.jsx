import { useId, useMemo } from 'react';

// Everything here is drawn from directly above, in a 200-unit viewBox per
// cookie, so a cookie and a cookie cake share one scale and one light source.

export function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

// Closed, slightly lumpy outline: a baked edge never comes out a true circle.
function blobPath(cx, cy, r, rand, wobble = 0.025, points = 56) {
  const waves = [2, 3, 5, 7].map((k) => ({
    k,
    amp: wobble * (0.4 + rand()) / Math.sqrt(k / 2),
    phase: rand() * Math.PI * 2,
  }));
  const pts = [];
  for (let i = 0; i < points; i++) {
    const t = (i / points) * Math.PI * 2;
    let rr = 1;
    for (const w of waves) rr += w.amp * Math.sin(w.k * t + w.phase);
    pts.push([cx + Math.cos(t) * r * rr, cy + Math.sin(t) * r * rr]);
  }
  let d = '';
  for (let i = 0; i < points; i++) {
    const [x, y] = pts[i];
    const [nx, ny] = pts[(i + 1) % points];
    const mx = (x + nx) / 2;
    const my = (y + ny) / 2;
    d += i === 0 ? `M${mx.toFixed(2)},${my.toFixed(2)}` : '';
    d += `Q${nx.toFixed(2)},${ny.toFixed(2)} ${((nx + pts[(i + 2) % points][0]) / 2).toFixed(2)},${((ny + pts[(i + 2) % points][1]) / 2).toFixed(2)}`;
  }
  return d + 'Z';
}

function chunkPath(x, y, size, rand) {
  const n = 5 + Math.floor(rand() * 3);
  const rot = rand() * Math.PI * 2;
  let d = '';
  for (let i = 0; i < n; i++) {
    const t = rot + (i / n) * Math.PI * 2;
    const r = size * (0.65 + rand() * 0.45);
    d += `${i ? 'L' : 'M'}${(x + Math.cos(t) * r).toFixed(2)},${(y + Math.sin(t) * r).toFixed(2)}`;
  }
  return d + 'Z';
}

export const FLAVORS = {
  chocolateChip: {
    dough: ['#F0C98E', '#DDA15E', '#A9682B'],
    bits: 'chips',
    chip: '#3A1D12',
    salt: true,
  },
  funfetti: {
    dough: ['#FBE6BE', '#F1CF91', '#C99A56'],
    bits: 'sprinkles',
  },
  doubleChocolate: {
    dough: ['#7A4A33', '#5A3222', '#3A1D12'],
    bits: 'chunks',
    chip: '#1E0D08',
    chip2: '#8A5A3C',
  },
  snickerdoodle: {
    dough: ['#F6DDB0', '#E3B678', '#B98242'],
    bits: 'cinnamon',
  },
  redVelvet: {
    dough: ['#B8343F', '#8E1F2C', '#5E1119'],
    bits: 'whiteChips',
    chip: '#FFF4E6',
  },
};

const SPRINKLES = ['#4FA3F7', '#FFD447', '#5CCB8F', '#FF8A3D', '#F06A93', '#FFF4E6'];

function scatter(rand, count, rMin, rMax, cx = 100, cy = 100) {
  const out = [];
  for (let i = 0; i < count; i++) {
    const t = rand() * Math.PI * 2;
    const r = Math.sqrt(rMin * rMin + rand() * (rMax * rMax - rMin * rMin));
    out.push([cx + Math.cos(t) * r, cy + Math.sin(t) * r]);
  }
  return out;
}

// Shared light: a soft lumpy dough surface lit from the upper left.
export function DoughFilter({ id, scale = 1, strength = 1 }) {
  return (
    <filter id={id} x="-5%" y="-5%" width="110%" height="110%" colorInterpolationFilters="sRGB">
      <feTurbulence type="fractalNoise" baseFrequency={0.028 / scale} numOctaves="3" seed="7" result="noise" />
      <feDiffuseLighting in="noise" surfaceScale={1.3 * strength} diffuseConstant="1.08" lightingColor="#fff" result="lit">
        <feDistantLight azimuth="225" elevation="52" />
      </feDiffuseLighting>
      <feComposite in="lit" in2="SourceGraphic" operator="arithmetic" k1="1.06" k2="0" k3="0" k4="0" result="shaded" />
      <feComposite in="shaded" in2="SourceGraphic" operator="in" />
    </filter>
  );
}

// Buttercream: blurred alpha as a height map, then a wet specular highlight.
export function GlossFilter({ id, blur = 2.2, surface = 4 }) {
  return (
    <filter id={id} x="-10%" y="-10%" width="120%" height="120%" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceAlpha" stdDeviation={blur} result="height" />
      <feDiffuseLighting in="height" surfaceScale={surface} diffuseConstant="1" lightingColor="#fff" result="diffuse">
        <feDistantLight azimuth="225" elevation="60" />
      </feDiffuseLighting>
      <feComposite in="diffuse" in2="SourceGraphic" operator="arithmetic" k1="1" k2="0" k3="0" k4="0" result="body" />
      <feSpecularLighting in="height" surfaceScale={surface} specularConstant="0.9" specularExponent="22" lightingColor="#fff" result="spec">
        <feDistantLight azimuth="225" elevation="48" />
      </feSpecularLighting>
      <feComposite in="spec" in2="SourceAlpha" operator="in" result="specIn" />
      <feComposite in="body" in2="specIn" operator="arithmetic" k1="0" k2="1" k3="0.55" k4="0" result="lit" />
      <feComposite in="lit" in2="SourceAlpha" operator="in" />
    </filter>
  );
}

export const FROSTINGS = {
  strawberry: { name: 'Strawberry pink', fill: '#F48FB0', ridge: '#D9577F', ink: '#C93A68' },
  vanilla: { name: 'Vanilla white', fill: '#FFF6EA', ridge: '#E8CFAF', ink: '#FFF6EA' },
  chocolate: { name: 'Chocolate', fill: '#6E3B26', ridge: '#3E1E12', ink: '#4A2416' },
  sky: { name: 'Sky blue', fill: '#8CC4FA', ridge: '#4F8FD8', ink: '#2F6FC4' },
};

// One star-tip rosette, as the logo's cake wears them: tapered ridges that
// spiral up to a peak, shaded by the gloss filter rather than outlines.
function ridgePath(r) {
  return `M0,0 Q${r * 0.42},${-r * 0.36} ${r * 0.9},${-r * 0.16} Q${r * 1.06},${-r * 0.02} ${r * 0.92},${r * 0.14} Q${r * 0.5},${r * 0.16} 0,0Z`;
}

function crestPath(r) {
  return `M${r * 0.12},${-r * 0.03} Q${r * 0.48},${-r * 0.2} ${r * 0.86},${-r * 0.06}`;
}

function RosetteShape({ frosting, r = 100 }) {
  const f = FROSTINGS[frosting];
  const ridges = (count, len, twist) =>
    Array.from({ length: count }).map((_, i) => (
      <g key={`${count}-${i}`} transform={`rotate(${(i / count) * 360 + twist})`}>
        <path d={ridgePath(len)} fill={f.fill} />
        <path d={crestPath(len)} fill="none" stroke="#fff" strokeOpacity="0.45" strokeWidth={len * 0.07} strokeLinecap="round" />
      </g>
    ));
  return (
    <>
      <circle r={r * 0.9} fill={f.ridge} />
      {ridges(8, r, 0)}
      {ridges(6, r * 0.62, 28)}
      {ridges(4, r * 0.32, 64)}
    </>
  );
}

// Each frosting's rosette is drawn once here and reused everywhere with <use>,
// which keeps a page of piped borders to a few thousand nodes instead of tens.
export function RosetteSprite() {
  return (
    <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true" focusable="false">
      <defs>
        {Object.keys(FROSTINGS).map((id) => (
          <symbol key={id} id={`rosette-${id}`} viewBox="-100 -100 200 200" overflow="visible">
            <RosetteShape frosting={id} />
          </symbol>
        ))}
      </defs>
    </svg>
  );
}

export function Rosette({ x, y, r, frosting, rotate = 0, sprinkles = 0, seed = 1 }) {
  const id = FROSTINGS[frosting] ? frosting : 'strawberry';
  const rand = rng(seed);
  return (
    <g transform={`translate(${x} ${y}) rotate(${rotate})`}>
      <use href={`#rosette-${id}`} x={-r} y={-r} width={r * 2} height={r * 2} />
      {Array.from({ length: sprinkles }).map((_, i) => {
        const t = rand() * Math.PI * 2;
        const d = r * (0.2 + rand() * 0.5);
        const sx = Math.cos(t) * d;
        const sy = Math.sin(t) * d;
        return (
          <rect
            key={i}
            x={sx - r * 0.11}
            y={sy - r * 0.035}
            width={r * 0.22}
            height={r * 0.07}
            rx={r * 0.035}
            fill={SPRINKLES[Math.floor(rand() * SPRINKLES.length)]}
            transform={`rotate(${Math.floor(rand() * 180)} ${sx} ${sy})`}
          />
        );
      })}
    </g>
  );
}

// The bits baked into the top of a cookie.
function Inclusions({ flavor, rand, rMax, rMin = 0, density = 1, cx = 100, cy = 100, unit = 1 }) {
  const f = FLAVORS[flavor];
  const area = (rMax * rMax - rMin * rMin) / (78 * 78);
  if (f.bits === 'chips' || f.bits === 'chunks' || f.bits === 'whiteChips') {
    const n = Math.round((f.bits === 'chunks' ? 16 : 14) * area * density);
    const chips = scatter(rand, n, rMin, rMax, cx, cy).map(([x, y], i) => {
      const size = (f.bits === 'chunks' ? 7 : 5.5) * unit * (0.7 + rand() * 0.6);
      return { x, y, size, color: f.chip2 && i % 3 === 0 ? f.chip2 : f.chip, shape: blobPath(x, y, size, rand, 0.16, 12) };
    });
    return (
      <>
        <g opacity="0.3" style={{ filter: `blur(${1.4 * unit}px)` }}>
          {chips.map((c, i) => (
            <path key={i} d={c.shape} fill="#2B1610" transform={`translate(${0.8 * unit} ${1.1 * unit})`} />
          ))}
        </g>
        {chips.map((c, i) => (
          <g key={i}>
            <path d={c.shape} fill={c.color} />
            <ellipse cx={c.x - c.size * 0.28} cy={c.y - c.size * 0.3} rx={c.size * 0.32} ry={c.size * 0.18} fill="#fff" opacity={f.bits === 'whiteChips' ? 0.55 : 0.18} />
          </g>
        ))}
      </>
    );
  }
  if (f.bits === 'sprinkles') {
    const n = Math.round(42 * area * density);
    return scatter(rand, n, rMin, rMax, cx, cy).map(([x, y], i) => (
      <rect
        key={i}
        x={x - 3.4 * unit}
        y={y - 1.1 * unit}
        width={6.8 * unit}
        height={2.2 * unit}
        rx={1.1 * unit}
        fill={SPRINKLES[i % SPRINKLES.length]}
        transform={`rotate(${Math.floor(rand() * 180)} ${x} ${y})`}
      />
    ));
  }
  if (f.bits === 'cinnamon') {
    const n = Math.round(110 * area * density);
    return scatter(rand, n, rMin, rMax, cx, cy).map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r={(0.5 + rand() * 1.3) * unit} fill={i % 5 === 0 ? '#FFF6EA' : '#8A4B1E'} opacity={i % 5 === 0 ? 0.85 : 0.55} />
    ));
  }
  return null;
}

// A single cookie, seen from directly above.
export function Cookie({ flavor = 'chocolateChip', seed = 1, className = '', style, title }) {
  const uid = useId().replace(/:/g, '');
  const f = FLAVORS[flavor];
  const shape = useMemo(() => blobPath(100, 100, 86, rng(seed), 0.03), [seed]);
  const bits = useMemo(() => <Inclusions flavor={flavor} rand={rng(seed * 31 + 7)} rMax={76} />, [flavor, seed]);
  const salt = useMemo(
    () =>
      f.salt
        ? scatter(rng(seed + 99), 9, 0, 70).map(([x, y], i) => (
            <rect key={i} x={x} y={y} width="2.6" height="2.2" rx="0.4" fill="#fff" opacity="0.9" transform={`rotate(${i * 37} ${x} ${y})`} />
          ))
        : null,
    [f.salt, seed],
  );
  return (
    <svg viewBox="0 0 200 200" className={className} style={style} role={title ? 'img' : undefined} aria-label={title} aria-hidden={title ? undefined : true}>
      <defs>
        <radialGradient id={`g${uid}`} cx="44%" cy="40%" r="62%">
          <stop offset="0" stopColor={f.dough[0]} />
          <stop offset="0.7" stopColor={f.dough[1]} />
          <stop offset="1" stopColor={f.dough[2]} />
        </radialGradient>
        <DoughFilter id={`d${uid}`} />
      </defs>
      <path d={shape} fill="#000" opacity="0.28" transform="translate(4 7)" style={{ filter: 'blur(5px)' }} />
      <g filter={`url(#d${uid})`}>
        <path d={shape} fill={`url(#g${uid})`} />
      </g>
      {bits}
      {salt}
    </svg>
  );
}

export { blobPath, Inclusions, chunkPath };
