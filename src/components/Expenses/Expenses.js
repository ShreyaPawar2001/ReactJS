import React from 'react';
import Expenseltem from "./Expenseltem";
import Card from '../UI/card';
import './Expenses.css';

const Expenses = (props) => {
    return (
        <Card className='expenses'>
            <Expenseltem
                title={props.items[0].title}
                amount={props.items[0].amount}
                date={props.items[0].date}
            />
            <Expenseltem
                title={props.items[1].title}
                amount={props.items[1].amount}
                date={props.items[1].date}
            />
            <Expenseltem
                title={props.items[2].title}
                amount={props.items[2].amount}
                date={props.items[2].date}
            />
            <Expenseltem
                title={props.items[3].title}
                amount={props.items[3].amount}
                date={props.items[3].date}
            />
            </Card>
    );
};

export default Expenses;