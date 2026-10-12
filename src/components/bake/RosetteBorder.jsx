import { useId } from 'react';
import { GlossFilter, Rosette } from './bake.jsx';

// A piped shell border laid across the seam between two sections.
export default function RosetteBorder({ frosting = 'strawberry', className = '', count = 44 }) {
  const uid = useId().replace(/:/g, '');
  const step = 2000 / count;
  return (
    <div className={`pointer-events-none relative z-10 -my-6 h-12 overflow-hidden ${className}`} aria-hidden="true">
      <svg viewBox="0 0 2000 50" preserveAspectRatio="xMidYMid slice" className="h-full w-full">
        <defs>
          <GlossFilter id={`rb${uid}`} blur={2} surface={4} />
        </defs>
        <g filter={`url(#rb${uid})`}>
          {Array.from({ length: count + 1 }).map((_, i) => (
            <Rosette key={i} x={i * step} y={25} r={step * 0.62} frosting={frosting} rotate={i * 41} sprinkles={2} seed={i + 3} />
          ))}
        </g>
      </svg>
    </div>
  );
}
