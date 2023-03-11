import './Expenseltem.css';

function Expenseltem(props) {
  // const expenseDate =new Date(2016,5,13);
  // const expenseTitle ='Food';
  // const expenseAmount =10;
  // const expenseLocation =pune;
  return (
    <div className='expense-item'>
      <div>{props.date.toISOString()}</div>
      <div className='expense-item__description'>
        <h2 >{props.title}</h2>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>${props.amount}</div>
        
      </div>
    </div>
  );
}
export default Expenseltem;