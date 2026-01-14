// src/components/Footer.jsx
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Sereno TI. All rights reserved.</p>
        <p className="footer-right">Made with precision & vision.</p>
      </div>
    </footer>
  );
}
