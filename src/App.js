import React, {useState} from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [{
	id: 'e1',
	title: '자동차 보험',
	amount: 1430000,
	date: new Date(2021, 3, 21)
}, {
	id: 'e2',
	title: '치과 보험',
	amount: 30000,
	date: new Date(2021, 5, 2)
}, {
	id: 'e3',
	title: '친구 생일',
	amount: 130000,
	date: new Date(2021, 9, 30)
}, {
	id: 'e4',
	title: '자동차 기름 값',
	amount: 50000,
	date: new Date(2021, 11, 21)
}];

function App() {
	const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

	const addExpenseHandler = (expenses) => {
		console.log('App js 임')
		setExpenses((prevExpenses) => {
				return [expenses, ...prevExpenses]
			}
		)
		console.log(expenses)
	}
	return (
			<div>
				<NewExpense onAddExpense={addExpenseHandler}/>
				<Expenses items={expenses}/>
			</div>
	);
}

export default App;
