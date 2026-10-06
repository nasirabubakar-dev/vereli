import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import './pages.css';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container not-found__inner">
        <span className="not-found__code">404</span>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link to="/" className="btn btn-primary not-found__btn">
          <Home size={18} /> Back to Home
        </Link>
      </div>
    </section>
  );
}
