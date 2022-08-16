let Card = props => {

  return (
    <div className={props.bstrpclass ? props.bstrpclass : ''}>
        {props.children}
    </div>
  );
};

export default Card;
