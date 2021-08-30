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
          <Dictionary />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/danielle-zn/react-dictionary.git"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>
          , by Danielle Zamora Nieto
        </footer>
      </div>
    </div>
  );
}

export default App;
