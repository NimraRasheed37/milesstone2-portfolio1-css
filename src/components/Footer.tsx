export default function Footer() {
  return (
    <>
      <footer className="footer">
        {/* Moto Section */}
        <div className="moto-section">
          <h4>Nimra Rasheed</h4>
          <p>
            {`Crafting meaningful web experiences with passion and care.`}
          </p>
        </div>

        {/* Links Section */}
        <div className="links-section">
          <h4>Explore Portfolio</h4>
          <div>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>

        {/* Connect Section */}
        <div className="connect-section">
          <h4>{`Let's connect`}</h4>
          <div>
            <a
              href="https://www.linkedin.com/in/nimra-rasheed-45a362125"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/NimraRasheed37"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              Github
            </a>
            <button aria-label="Email">Email</button>
          </div>
        </div>
      </footer>
    </>
  );
}
