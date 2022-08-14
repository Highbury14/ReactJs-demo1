
let MatchResult = props => {
  switch(props.result) {
    case 2:
      return (
        <img src='img/win.svg' alt='result-win'/>
      );
    case 1:
      return (
        <img src='img/draw.svg' alt='result-draw'/>
      );
    default:
      return (
        <img src='img/loss.svg' alt='result-loss'/>
      );
}}

export default MatchResult
