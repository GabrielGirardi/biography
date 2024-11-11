import React, { useState, useEffect } from 'react';

const MouseFollower: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div
            className="fixed w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-50 pointer-events-none z-50 transition-transform duration-100 ease-out"
            style={{
                left: `${position.x}px`,
                top: `${position.y}px`,
                transform: 'translate(-50%, -50%)',
            }}
        />
    );
};

export default MouseFollower;