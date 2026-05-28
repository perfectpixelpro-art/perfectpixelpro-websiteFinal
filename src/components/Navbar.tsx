import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import logo from '../assets/logo.png';

interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export default function Navbar(): JSX.Element {
  const [hoveredDropdown, setHoveredDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    { label: 'Work', href: '#' },
    { label: 'About Us', href: '#' },
    {
      label: 'Life at PPP',
      href: '#',
      submenu: [
        { label: 'Our Culture', href: '#' },
        { label: 'Team & People', href: '#' },
        { label: 'Benefits & Perks', href: '#' },
      ],
    },
    {
      label: 'News',
      href: '#',
      submenu: [
        { label: 'Blog', href: '#' },
        { label: 'Press Releases', href: '#' },
        { label: 'Company Updates', href: '#' },
      ],
    },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <nav className="w-full bg-white" style={{ fontFamily: 'Archivo, sans-serif' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Layout - Works on all screens */}
        <div className="flex flex-col items-center justify-center py-6 sm:py-8">
          {/* Logo */}
          <div className="mb-6 sm:mb-10">
           <a href="#" className="inline-block">
  <img 
    src={logo} 
    alt="PPP Logo" 
    style={{ height: '50px', width: 'auto' }} 
  />
</a>
          </div>

          {/* Menu - Responsive and Centered */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-12">
            {menuItems.map((item: MenuItem) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => {
                  setHoveredLink(item.label);
                  item.submenu && setHoveredDropdown(item.label);
                }}
                onMouseLeave={() => {
                  setHoveredLink(null);
                  setHoveredDropdown(null);
                }}
              >
                <button
                  className="flex items-center space-x-1 font-medium text-xs sm:text-sm lg:text-base whitespace-nowrap py-1 sm:py-2 transition-colors duration-200"
                  style={{
                    color: hoveredLink === item.label ? '#F70D1A' : '#000000',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <span>{item.label}</span>
                  {item.submenu && (
                    <ChevronDown
                      size={14}
                      style={{
                        transform: hoveredDropdown === item.label ? 'rotate(180deg)' : 'rotate(0deg)',
                        color: hoveredLink === item.label ? '#F70D1A' : '#000000',
                        transition: 'transform 0.2s, color 0.2s',
                      }}
                    />
                  )}
                </button>

                {/* Desktop Dropdown */}
                {item.submenu && (
                  <div
                    style={{
                      position: 'absolute',
                      left: '50%',
                      transform: `translateX(-50%)`,
                      top: '100%',
                      marginTop: '4px',
                      width: 'auto',
                      backgroundColor: 'transparent',
                      borderRadius: '0px',
                      boxShadow: 'none',
                      border: 'none',
                      zIndex: 50,
                      opacity: hoveredDropdown === item.label ? 1 : 0,
                      visibility: hoveredDropdown === item.label ? 'visible' : 'hidden',
                      transition: 'all 0.2s ease-in-out',
                      padding: '0',
                      minWidth: '160px',
                    }}
                  >
                    {item.submenu.map((subitem: MenuItem) => (
                      <a
                        key={subitem.label}
                        href={subitem.href}
                        onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          const target = e.target as HTMLAnchorElement;
                          target.style.color = '#F70D1A';
                        }}
                        onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                          const target = e.target as HTMLAnchorElement;
                          target.style.color = '#000000';
                        }}
                        style={{
                          display: 'block',
                          padding: '8px 0',
                          color: '#000000',
                          textDecoration: 'none',
                          fontSize: '14px',
                          fontWeight: '500',
                          transition: 'color 0.2s',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {subitem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}