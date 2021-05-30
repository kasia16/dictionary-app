import './App.css';
import Dictionary from "./Dictionary";
import logo from "./logo.svg";

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
     <img src={logo} className="App-logo img-fluid" alt="logo" size={50} />
      </header>
  
      <main>
        <Dictionary defaultKeyword="code"/>
      </main>
      <footer className="text-center">
        <small>Coded and designed by Kasia Krasucka: <a href="https://github.com/kasia16/Vanilla-weather-app" target="_blank">Open-source code</a></small>
        
      </footer>
    </div></div>
  );
}

export default App;
