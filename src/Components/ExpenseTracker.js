import Card from '../UI/Card';
import Expenses from './Expenses';
import 'bootstrap/dist/css/bootstrap.css';

let ExpenseTracker = () => {
  return (
    <Card>
      <h1>My Expenses-Tracker</h1>
      <Expenses></Expenses>
    </Card>
  );
}

export default ExpenseTracker;
