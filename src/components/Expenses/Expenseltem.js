import React from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/card';
import './Expenseltem.css';


const Expenseltem = (props) => { // props are used for passinf data from a to b file.
  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />

      <div className='expense-item__description'>
        <h2 >{props.title}</h2>
        <div className='expense-item__description'>{props.location}</div>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
    </Card>
  );
}
export default Expenseltem;