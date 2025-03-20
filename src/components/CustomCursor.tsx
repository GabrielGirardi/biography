import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateCursorPosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseEnter = () => setVisible(true);
    const handleMouseLeave = () => setVisible(false);

    const handleLinkHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isLink = target.tagName.toLowerCase() === 'a' ||
                     target.tagName.toLowerCase() === 'button' ||
                     target.closest('a') ||
                     target.closest('button') ||
                     target.getAttribute('role') === 'button' ||
                     target.classList.contains('cursor-hover');

      setIsHovering(Boolean(isLink));
    };

    window.addEventListener('mousemove', updateCursorPosition);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('mouseover', handleLinkHover);

    // Clean up
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleLinkHover);
    };
  }, []);

  const cursorSize = isHovering ? 40 : isClicking ? 16 : 24;

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 1 : 0,
        }}
      />
      <div
        className="fixed z-50 pointer-events-none rounded-full border border-white/80 mix-blend-difference"
        style={{
          width: `${cursorSize + 10}px`,
          height: `${cursorSize + 10}px`,
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 0.5 : 0,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.3s, height 0.3s, opacity 0.3s',
        }}
      />
    </>
  );
};

export default CustomCursor;
