import { Link } from 'react-router-dom';
import { InstagramIcon, FacebookIcon, TikTokIcon } from './SocialIcons';
import { businessInfo, phoneLink, emailLink, directionsLink } from '../data';
import './Footer.css';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Menu', to: '/menu' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Contact', to: '/contact' },
  { label: 'Order', to: '/order' },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <Link to="/" className="footer__logo">VERELI</Link>
            <p className="footer__desc">
              A fictional modern restaurant brand serving thoughtfully crafted dishes in a warm,
              contemporary dining experience.
            </p>
            <div className="footer__socials">
              <a href="#" className="footer__social" aria-label="Instagram">
                <InstagramIcon size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social" aria-label="Facebook">
                <FacebookIcon size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="footer__social" aria-label="TikTok">
                <TikTokIcon size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className="footer__nav">
            <h3 className="footer__heading">Navigation</h3>
            <ul className="footer__nav-list">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="footer__link">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__contact">
            <h3 className="footer__heading">Contact</h3>
            <ul className="footer__contact-list">
              <li>{businessInfo.address}</li>
              <li><a href={phoneLink}>{businessInfo.phone}</a></li>
              <li><a href={emailLink}>{businessInfo.email}</a></li>
            </ul>
          </div>

          <div className="footer__hours">
            <h3 className="footer__heading">Opening Hours</h3>
            <ul className="footer__hours-list">
              {businessInfo.hours.map((entry) => (
                <li key={entry.days}>
                  <span>{entry.days}</span>
                  <span>{entry.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">© 2026 VERELI. Fictional portfolio project.</p>
          <a href={directionsLink} target="_blank" rel="noopener noreferrer" className="footer__directions">
            Get Directions
          </a>
        </div>
      </div>
    </footer>
  );
}
