import { useEffect, useState } from 'react';

export default function BrandIntro() {
  const [phase, setPhase] = useState('show'); // show -> fading -> gone

  useEffect(() => {
    if (
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setPhase('gone');
      return;
    }
    document.body.style.overflow = 'hidden';
    const fadeTimer = setTimeout(() => setPhase('fading'), 850);
    const removeTimer = setTimeout(() => {
      setPhase('gone');
      document.body.style.overflow = '';
    }, 1500);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
      document.body.style.overflow = '';
    };
  }, []);

  if (phase === 'gone') return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-cream transition-opacity duration-700 ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        <img
          src="/unnamed.png"
          alt=""
          className="mx-auto h-28 w-28 md:h-32 md:w-32 rounded-full object-cover shadow-soft animate-[fadeIn_500ms_ease-out]"
        />
        <p className="mt-5 font-serif text-2xl md:text-3xl text-brown tracking-tight">
          MM Cookie Co.
        </p>
        <p className="mt-2 text-xs uppercase tracking-widest text-tan">
          Houston, Texas
        </p>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
