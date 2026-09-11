import React from 'react';

export default function CanvasBackground({ isDark }) {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
    >
      {/* Subtle warm ambient background gradients */}
      <div
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] rounded-full blur-3xl opacity-40 transition-colors duration-500 ${
          isDark
            ? 'bg-gradient-to-b from-teal-900/20 via-slate-900/10 to-transparent'
            : 'bg-gradient-to-b from-teal-100/60 via-slate-100/40 to-transparent'
        }`}
      />
      {/* Subtle fine dot grid texture */}
      <div
        className={`absolute inset-0 opacity-[0.03] dark:opacity-[0.05]`}
        style={{
          backgroundImage: `radial-gradient(currentColor 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
        }}
      />
    </div>
  );
}
