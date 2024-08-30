import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faYoutube, faTiktok } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>Bizimlə Əlaqə Qur</h3>
            <ul className="contact-list">
              <li>
                <FontAwesomeIcon icon={faLocationDot} />
                <span>Kazım Kazımzadə 105</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span>+994516332323</span>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>info@coolab.az</span>
              </li>
            </ul>
            <ul className="social-links">
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} />
                </a>
              </li>
              <li>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTiktok} />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4 cm5">
            <h3>Fəaliyyətlər</h3>
            <ul>
              <li>Şəxsi inkişaf</li>
              <li>Əyləncə</li>
              <li>İncəsənət</li>
              <li>İstirahət</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Məlumat Əldə Et</h3>
            <p>Ən son məlumatları almaq üçün emailinizi daxil edin</p>
            <form>
              <input type="email" placeholder="Email" />
              <button type="submit">Daxil edin</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
