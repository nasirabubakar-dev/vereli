import { useEffect } from 'react';

const titles = {
  '/': 'VERELI — Flavors Worth Gathering For',
  '/about': 'About — VERELI',
  '/menu': 'Menu — VERELI',
  '/gallery': 'Gallery — VERELI',
  '/contact': 'Contact — VERELI',
  '/order': 'Order — VERELI',
};

export function useDocumentTitle(pathname) {
  useEffect(() => {
    document.title = titles[pathname] || 'VERELI — Flavors Worth Gathering For';
  }, [pathname]);
}
