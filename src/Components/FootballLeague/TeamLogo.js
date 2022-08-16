
let TeamLogo = props => {
  let imgsrc1 = props.teamid + ".png";
  return (
    <img src={'img/' + imgsrc1} width='50' alt='team-logo'/>
  )
}

export default TeamLogo;
