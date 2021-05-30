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
        Coded and designed by <a href="https://www.linkedin.com/in/krasucka/">Kasia Krasucka</a>: <a href="https://github.com/kasia16/dictionary-app" rel="noreferrer noopener" target="_blank" >Open-source code</a><br />
      Drawing sourced from <a href="https://undraw.co/" rel="noreferrer noopener" target="_blank" >unDraw</a>
      </footer>
    </div></div>
  );
}

export default App;
