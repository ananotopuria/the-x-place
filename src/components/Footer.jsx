import logo from "../assets/footerlogo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <img className="footer__logo" src={logo} alt="logo" />
          <div className="footer__year">&copy; TheXPlace 2024</div>
        </div>
        <div className="footer__list">
          <ul className="footer__list-first">
            <li className="footer__list-li">For Talent</li>
            <li className="footer__list-li">For Hiring</li>
            <li className="footer__list-li">For School</li>
          </ul>
          <ul className="footer__list-second">
            <li className="footer__list-li">About</li>
            <li className="footer__list-li">Blog</li>
            <li className="footer__list-li">FAQ</li>
          </ul>
          <ul className="footer__list-third">
            <li className="footer__list-li">Terms of Service</li>
            <li className="footer__list-li">Contact Us</li>
          </ul>
          <ul className="footer__list-icons">
            <li className="footer__list-li">
              <ion-icon name="logo-twitter"></ion-icon>
            </li>
            <li className="footer__list-li">
              <ion-icon name="logo-linkedin"></ion-icon>
            </li>
            <li className="footer__list-li">
              <ion-icon name="logo-facebook"></ion-icon>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
