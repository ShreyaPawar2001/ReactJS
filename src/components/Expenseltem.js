import ExpenseDate from './ExpenseDate';
import './Expenseltem.css';


function Expenseltem(props) { // props are used for passinf data from a to b file.
  
  
  return (
    <div className='expense-item'>
      <ExpenseDate date={props.date}/>
  
      <div className='expense-item__description'>
        <h2 >{props.title}</h2>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>${props.amount}</div>
        
      
      </div>
    </div>
  );
}
export default Expenseltem;