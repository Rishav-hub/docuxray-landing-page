import { Link } from 'react-router-dom';
import logoUrl from '@assets/docuxray-logo-v2.png';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerLogo}>
            <img src={logoUrl} alt="DocuXray" />
            <p>Enterprise Document AI Solutions</p>
          </div>
          <div className={styles.footerLinks}>
            <div className={styles.footerSection}>
              <h4>Product</h4>
              <ul>
                <li><a href="#features">Features</a></li>
                <li><Link to="/pricing">Pricing</Link></li>
                <li><a href="#security">Security</a></li>
                <li><a href="#api">API</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Company</h4>
              <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className={styles.footerSection}>
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#docs">Documentation</a></li>
                <li><a href="#status">Status</a></li>
                <li><a href="#community">Community</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>
            &copy; 2025 DocuXray. All rights reserved. |{' '}
            <a href="#privacy">Privacy Policy</a> |{' '}
            <a href="#terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

