import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        isMobileMenuOpen &&
        !target.closest(`.${styles.navigation}`) &&
        !target.closest(`.${styles.mobileMenuToggle}`)
      ) {
        closeMobileMenu();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>
            <Link to="/">
              <img src="/docuxray-logo-v2.png" alt="DocuXray" />
            </Link>
          </div>
          <nav className={`${styles.navigation} ${isMobileMenuOpen ? styles.active : ''}`}>
            <ul>
              <li>
                <NavLink to="/pricing" onClick={closeMobileMenu}>
                  Pricing
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={closeMobileMenu}>
                  Blogs
                </NavLink>
              </li>
              <li>
                <a href="#about" onClick={closeMobileMenu}>
                  About Us
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.headerCta}>
            <button
              className={`${styles.btn} ${styles.btnSecondary}`}
              onClick={() => {
                // Placeholder for login page - to be implemented
                window.location.href = '#login';
              }}
            >
              Login
            </button>
          </div>
          <div
            className={`${styles.mobileMenuToggle} ${isMobileMenuOpen ? styles.active : ''}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;

