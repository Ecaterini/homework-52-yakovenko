import { FaInstagram, FaTelegramPlane, FaViber } from "react-icons/fa"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h3>Магазин для кондитерів</h3>
          <p>м. Одеса, вул. Солодка, 15</p>
          <p>+380 99 123 45 67</p>
          <p>info@konditer.ua</p>
        </div>

        <div className="footer-right">
          <h4>Соцмережі</h4>
          <div className="footer-icons">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaViber /></a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Магазин для кондитерів
      </div>
    </footer>
  )
}

export default Footer
