import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ChevronDown, Menu, X, GraduationCap } from 'lucide-react';

const menuItems = [
  {
    title: 'About Us',
    path: '/about',
    submenu: [
      { title: 'Vision & Mission', path: '/about/vision-mission' },
      { title: 'Leadership', path: '/about/leadership' },
      { title: 'Departments', path: '/about/departments' }
    ]
  },
  {
    title: 'Academics',
    path: '/academics',
    submenu: [
      { title: 'Undergraduate', path: '/academics/undergraduate' },
      { title: 'Postgraduate', path: '/academics/postgraduate' },
      { title: 'PhD', path: '/academics/phd' }
    ]
  },
  {
    title: 'Admissions',
    path: '/admissions',
    submenu: [
      { title: 'Eligibility', path: '/admissions/eligibility' },
      { title: 'Application Process', path: '/admissions/application-process' },
      { title: 'Important Dates', path: '/admissions/important-dates' }
    ]
  },
  {
    title: 'Research',
    path: '/research',
    submenu: [
      { title: 'Research Areas', path: '/research/areas' },
      { title: 'Publications', path: '/research/publications' }
    ]
  },
  {
    title: 'Campus Life',
    path: '/campus-life'
  },
  {
    title: 'Placements',
    path: '/placements'
  },
  {
    title: 'Contact Us',
    path: '/contact'
  }
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedMobileItem, setExpandedMobileItem] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const toggleMobileSubmenu = (title) => {
    if (expandedMobileItem === title) {
      setExpandedMobileItem(null);
    } else {
      setExpandedMobileItem(title);
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="nav-brand">
        <GraduationCap size={32} />
        <span>Amrut's Phoenix Uni</span>
      </Link>

      <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <ul className={`nav-menu ${isOpen ? 'open' : ''}`}>
        {menuItems.map((item, index) => (
          <li 
            key={index} 
            className={`nav-item ${expandedMobileItem === item.title ? 'mobile-expanded' : ''}`}
          >
            {item.submenu ? (
              <>
                <div 
                  className="nav-link" 
                  onClick={() => toggleMobileSubmenu(item.title)}
                >
                  <NavLink to={item.path} onClick={(e) => {
                     // prevent navigation on mobile toggle click, let mobile menu toggle handle it
                     if (window.innerWidth <= 968) {
                        e.preventDefault();
                     }
                  }}>
                    {item.title}
                  </NavLink>
                  <ChevronDown className="dropdown-icon" />
                </div>
                <div className="dropdown-menu">
                  {item.submenu.map((sub, idx) => (
                    <NavLink 
                      key={idx} 
                      to={sub.path} 
                      className={({ isActive }) => `dropdown-item ${isActive ? 'active' : ''}`}
                      onClick={() => setIsOpen(false)}
                    >
                      {sub.title}
                    </NavLink>
                  ))}
                </div>
              </>
            ) : (
              <NavLink 
                to={item.path} 
                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
