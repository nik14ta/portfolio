import React, { useEffect, useState } from 'react';

export default function SpotlightCursor({ isDark }) {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        background: isDark
          ? `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(244, 114, 182, 0.05), transparent 80%)`
          : `radial-gradient(450px circle at ${pos.x}px ${pos.y}px, rgba(251, 113, 133, 0.04), transparent 80%)`,
      }}
    />
  );
}
