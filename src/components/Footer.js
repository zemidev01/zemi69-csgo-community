import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>ZEMI69.RO</h4>
            <p>Cea mai tare comunitate de CS:GO din România!</p>
            <div className="social-links">
              <a href="https://discord.gg/zemi69" className="social-link">Discord</a>
              <a href="https://steamcommunity.com/groups/zemi69ro" className="social-link">Steam</a>
              <a href="https://facebook.com/zemi69ro" className="social-link">Facebook</a>
              <a href="https://youtube.com/@zemi69ro" className="social-link">YouTube</a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Legături Rapide</h4>
            <ul className="footer-links">
              <li><a href="#despre">Despre Noi</a></li>
              <li><a href="#comunitate">Comunitate</a></li>
              <li><a href="#evenimente">Evenimente</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Server Info</h4>
            <ul className="footer-links">
              <li>IP: GO.ZEMI69.RO:27015</li>
              <li>128 Tick Rate</li>
              <li>Location: România</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Suport</h4>
            <ul className="footer-links">
              <li><a href="#contact">Contact</a></li>
              <li><button type="button" className="footer-link-btn">FAQ</button></li>
              <li><button type="button" className="footer-link-btn">Regulament</button></li>
              <li><button type="button" className="footer-link-btn">Raportează Bug</button></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2026 ZEMI69.RO. Toate drepturile rezervate.</p>
          </div>
          <div className="footer-credits">
            <p>Made with ❤️ for the CS:GO community</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;