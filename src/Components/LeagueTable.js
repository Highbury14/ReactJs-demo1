import 'bootstrap/dist/css/bootstrap.css';
import './LeagueTable.css';
import footballdata from '../LeagueData';
import TeamLogo from './TeamLogo';
import MatchResult from './MatchResult';

let LeagueTable = () => {
  // console.log(footballdata[0])
  return (
    <div>
      <h1>Football League Table</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Team</th>
            <th scope="col">M.P</th>
            <th scope="col">W</th>
            <th scope="col">D</th>
            <th scope="col">L</th>
            <th scope="col">P</th>
            <th scope="col">G.F</th>
            <th scope="col">G.A</th>
            <th scope="col">G.D</th>
            <th scope="col">Last 6 matches</th>
          </tr>
        </thead>
        <tbody>
          {footballdata.map((item,index) => (
            <tr className={(index%2)?'table-success':'table-info'}>
              <th scope="row">{item.id}</th>
              <td><TeamLogo teamid={item.team}/>{item.team}</td>
              <td>{item.mp}</td>
              <td>{item.w}</td>
              <td>{item.d}</td>
              <td>{item.l}</td>
              <td>{item.p}</td>
              <td>{item.gf}</td>
              <td>{item.ga}</td>
              <td>{item.gd}</td>
              <td>{item.results.map(itemi => (<MatchResult result={itemi}/>))}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueTable;
