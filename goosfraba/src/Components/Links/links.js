import "./links.css";

function Links() {

  return (
    <footer className="footer">
        {/* <p className="links"> */}
        <a data-testid="react-link" target="_blank" rel="noreferrer" href="https://reactjs.org/">
            <img className="links-logo" src="/Pictures/react-logo.png" alt="react"/>
        </a>
        <a data-testid="w3-link" target="_blank" rel="noreferrer" href="https://www.w3schools.com/">
            <img className="links-logo" src="/Pictures/w3schools-logo.png" alt="w3schools"/>
        </a>
        <a data-testid="codeWars-link" target="_blank" rel="noreferrer" href="https://www.codewars.com/dashboard">
            <img className="links-logo" src="/Pictures/codewars-logo.png" alt="codewars"/>
        </a>
        <a data-testid="npm-link" target="_blank" rel="noreferrer" href="https://www.npmjs.com/">
            <img className="links-logo" src="/Pictures/npm-logo.png" alt="npm"/>
        </a>
        <a data-testid="freeCodeCamp-link" target="_blank" rel="noreferrer" href="https://www.freecodecamp.org/">
            <img className="links-logo" src="/Pictures/freecodecamp-logo.png" alt="freecodecamp"/>
        </a>
        <a data-testid="gitHub-link" target="_blank" rel="noreferrer" href="https://github.com/">
            <img className="links-logo" src="/Pictures/github-logo.png" alt="github"/>
        </a>
        <a data-testid="SoC-link" target="_blank" rel="noreferrer" href="https://www.schoolofcode.com/">
            <img className="links-logo" src="/Pictures/soc-logo.png" alt="soc"/>
        </a>
        {/* </p> */}
    </footer>
  );
}

export default Links;