import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

import Image from "next/image";

export default function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-content">
        <h1 className="about-title">NIMRA RASHEED</h1>
        <h3 className="about-subtitle">Front-end Developer</h3>
        <p className="about-description">
          {`Hi, I'm Nimra Rasheed, a beginner front-end developer passionate about creating clean, 
          responsive, and user-friendly websites. As I learn and grow, I focus on writing efficient code 
          and building great user experiences with HTML, CSS, and JavaScript. 
          I'm excited to keep improving and bringing ideas to life on the web!`}
        </p>
        <button className="about-button">
          <a href="/Nimra's Resume.pdf" download>
            Download CV
          </a>
        </button>
      </div>
      <div className="about-image-section">
        <Image
          className="profile-image"
          src="/img/nimra.jpg"
          alt="profile photo"
          width={200}
          height={200}
        />
        <ul className="social-links">
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faLinkedin} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faGithub} className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FontAwesomeIcon icon={faInstagram} className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
