import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Suppression du logo ou remplacement : */}
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <h1>Bienvenue sur mon super site React !</h1>
        <p>Ceci est une version de production servie par Nginx.</p>
        <a
          className="App-link"
          href="https://mon-site.example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visiter mon site
        </a>
      </header>
    </div>
  );
}


export default App;
