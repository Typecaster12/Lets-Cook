import { FaFacebook, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="footer-container">
        <p className="footer-para">
          All Rights Reserved © Harsh Mishra, 2025;
        </p>

        <div className="socials">
          <a
            href="https://www.facebook.com/profile.php?id=100028074483539"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="https://www.instagram.com/hlo_harsh_"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="https://github.com/Typecaster12"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link github"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
