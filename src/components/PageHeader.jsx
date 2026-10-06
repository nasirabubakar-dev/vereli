import { useReveal } from '../hooks/useReveal';
import './PageHeader.css';

export default function PageHeader({ label, title, subtitle, image, imageAlt }) {
  const ref = useReveal();

  return (
    <section className="page-header" ref={ref}>
      {image && (
        <div className="page-header__image-wrapper">
          <img src={image} alt={imageAlt} className="page-header__image" />
          <div className="page-header__overlay" />
        </div>
      )}
      <div className="page-header__content">
        <div className="container">
          {label && <span className="page-header__label">{label}</span>}
          <h1 className="page-header__title">{title}</h1>
          {subtitle && <p className="page-header__subtitle">{subtitle}</p>}
        </div>
      </div>
    </section>
  );
}
