import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { whatsappLink } from '../data';
import { useCart } from '../context/CartContext';
import './Navbar.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className={`navbar ${scrolled || menuOpen ? 'navbar--scrolled' : ''}`}>
      <nav className="navbar__inner" aria-label="Main navigation">
        <Link to="/" className="navbar__logo">
          VERELI
        </Link>

        <ul className="navbar__links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar__actions">
          <Link to="/order" className="navbar__cart-link" aria-label={`View cart, ${totalItems} items`}>
            <ShoppingBag size={22} strokeWidth={1.5} />
            {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
          </Link>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__cta">
            Order Now
          </a>
        </div>

        <button
          className="navbar__toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`navbar__mobile ${menuOpen ? 'navbar__mobile--open' : ''}`} id="mobile-menu">
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                }
                end={link.to === '/'}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/order" className="navbar__mobile-link navbar__mobile-link--cart">
              Order <ShoppingBag size={20} strokeWidth={1.5} />
              {totalItems > 0 && <span className="navbar__cart-badge">{totalItems}</span>}
            </Link>
          </li>
        </ul>
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary navbar__mobile-cta">
          Order on WhatsApp
        </a>
      </div>
      {menuOpen && <div className="navbar__overlay" onClick={() => setMenuOpen(false)} />}
    </header>
  );
}
