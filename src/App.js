import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Awesome Weather App</h1>
        <Search />
      </header>
      <small className="App-footer">
        Developed by Marta Dias | Open Sourced on{" "}
        <a
          className="App-source"
          href="https://github.com/MDias04/awesome-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </small>
    </div>
  );
}

export default App;
