import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img
            src={logo}
            alt="danielle's logo"
            className="img-fluid danielle-logo"
          />
        </header>
        <main>
          <Dictionary defaultKeyword="moon" />
        </main>
        <footer className="p-3">
          <a
            href="https://github.com/danielle-zn/react-dictionary.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          {""} by Danielle Zamora Nieto
          <div>
            Get the{" "}
            <a
              href="https://codepen.io/P1N2O/pen/pyBNzX"
              target="_blank"
              rel="noreferrer"
              animated
              background
            >
              animated background
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
