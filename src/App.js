import Expenseltem from "./components/Expenseltem";

function App() {
  const expenses = [
    {
      id: 'e1',
      title: 'Food',
      amount: 10,
      date: new Date(2016, 5, 13),
      location:'Mumbai',
    },
    { id: 'e2', title: 'New TV', amount: 100, date: new Date(2016, 5, 13),location:'Satara '},
    {
      id: 'e3',
      title: 'Petrol',
      amount: 200,
      date: new Date(2017, 5, 13),
      location:'Delhi',

    },
    {
      id: 'e4',
      title: 'Car',
      amount: 300,
      date: new Date(2018, 5, 13),
      location:'Pune',

    },
  ];
  const expenseltems = [];
  for (let i = 0; i < expenses.length; i++) {
    expenseltems.push(
      <Expenseltem
        key={expenses[i].id}
        title={expenses[i].title}
        amount={expenses[i].amount}
        date={expenses[i].date}
        location={expenses[i].location}
      />
    );
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      {expenseltems}
      
      {/* <Expenseltem  //These are custom elements
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        location={expenses[0].location}
      ></Expenseltem>
      <Expenseltem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        location={expenses[1].location}
      ></Expenseltem>
      <Expenseltem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        location={expenses[2].location}
      ></Expenseltem>
      <Expenseltem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
        location={expenses[3].location}
      ></Expenseltem> */}
    </div>
  );
}

export default App;
