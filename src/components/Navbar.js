import React, { useState, useEffect } from 'react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'hobbies', label: 'Hobbies' },
];

function Navbar() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      for (const section of [...sections].reverse()) {
        const el = document.getElementById(section.id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActive(section.id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="site-nav">
      <span className="nav-logo">PS</span>
      <ul className="nav-links">
        {sections.map((s) => (
          <li key={s.id}>
            <button
              className={`nav-link ${active === s.id ? 'nav-active' : ''}`}
              onClick={() => scrollTo(s.id)}
            >
              {s.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
