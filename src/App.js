import logo from './logo.svg';
import './App.css';
import LeagueTable from './Components/LeagueTable';
import Game from './Components/TicTacToe';

let App = () => {
  return (
    <div className="App">
      <LeagueTable></LeagueTable>
      <Game/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
