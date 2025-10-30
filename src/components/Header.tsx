'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [currentDate, setCurrentDate] = useState('');
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      setCurrentDate(now.toLocaleDateString());
      setCurrentTime(now.toLocaleTimeString());
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white py-1">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <span className="text-sm">
                <i className="fas fa-calendar"></i>
                <span className="ml-2">{currentDate}</span>
              </span>
              <span className="text-sm">
                <i className="fas fa-clock"></i>
                <span className="ml-2">{currentTime}</span>
              </span>
            </div>
            <div className="flex space-x-4">
              <a href="#" className="text-sm hover:text-gray-200">
                <i className="fab fa-facebook"></i>
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-sm hover:text-gray-200">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Header with Logo */}
      <header className="bg-white py-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-3xl font-bold text-red-600">
              News Portal
            </Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search news..."
                className="px-4 py-2 border rounded-full w-64"
              />
              <button className="absolute right-3 top-2">
                <i className="fas fa-search text-gray-500"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}