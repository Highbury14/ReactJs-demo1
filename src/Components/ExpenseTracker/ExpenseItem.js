import Card from './UI/Card';
import ExpenseDate from './ExpenseDate';

let ExpenseItem = () => {
  return (
    <Card bstrpclass="row">
      <ExpenseDate></ExpenseDate>
      <h4 className="col-sm-3">Title text</h4>
      <div className="col-sm-3">Price $12.0</div>
      <button className='col-sm-3 btn btn-primary'>Update title</button>
    </Card>
  );
}

export default ExpenseItem
