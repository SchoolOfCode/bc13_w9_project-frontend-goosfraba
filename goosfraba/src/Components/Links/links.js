import './links.css';

/** Links Docs
 * Imports needed: CSS (style)
 * This function is the footer, where the quick links are
 * @returns The seven images with their links, open in new tab when clicked (React, w3Schools, CodeWars, npm, FreeCodeCamp, GitHub, SoC)
 */
function Links() {
  return (
    <footer className="footer">
      <a
        data-testid="react-link"
        target="_blank"
        rel="noreferrer"
        href="https://reactjs.org/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/react-logo.png"
          alt="react"
        />
      </a>
      <a
        data-testid="w3-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.w3schools.com/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/w3schools-logo.png"
          alt="w3schools"
        />
      </a>
      <a
        data-testid="codeWars-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.codewars.com/dashboard"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/codewars-logo.png"
          alt="codewars"
        />
      </a>
      <a
        data-testid="npm-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.npmjs.com/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/npm-logo.png"
          alt="npm"
        />
      </a>
      <a
        data-testid="freeCodeCamp-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.freecodecamp.org/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/freecodecamp-logo.png"
          alt="freecodecamp"
        />
      </a>
      <a
        data-testid="gitHub-link"
        target="_blank"
        rel="noreferrer"
        href="https://github.com/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/github-logo.png"
          alt="github"
        />
      </a>
      <a
        data-testid="SoC-link"
        target="_blank"
        rel="noreferrer"
        href="https://www.schoolofcode.com/"
      >
        <img
          data-testid="logo-img"
          className="links-logo"
          src="/Pictures/soc-logo.png"
          alt="soc"
        />
      </a>
    </footer>
  );
}

export default Links;
