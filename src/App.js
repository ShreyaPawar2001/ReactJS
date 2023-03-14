import React from 'react';

import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      amount: 10,
      date: new Date(2016, 4, 13),
      location: 'Mumbai',
    },
    { id: 'e2', title: 'New TV', amount: 100, date: new Date(2016, 6, 13), location: 'Satara ' },
    {
      id: 'e3',
      title: 'Petrol',
      amount: 200,
      date: new Date(2017, 7, 13),
      location: 'Delhi',

    },
    {
      id: 'e4',
      title: 'Car',
      amount: 300,
      date: new Date(2018, 8, 13),
      location: 'Pune',

    },
  ];

  // const expenseltems = [];
  // for (let i = 0; i < expenses.length; i++) {
  //   expenseltems.push(
  //     <Expenseltem
  //       key={expenses[i].id}
  //       title={expenses[i].title}
  //       amount={expenses[i].amount}
  //       date={expenses[i].date}
  //       location={expenses[i].location}
  //     />
  //   );
  // }


  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let get started"),
  //   React.createElement(Expenses, {items: expenses})
  // ); 

  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
