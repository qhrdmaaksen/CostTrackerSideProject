import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
	const expenses = [{
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
		date: new Date(2021, 9, 31)
	}, {
		id: 'e4',
		title: '자동차 기름 값',
		amount: 50000,
		date: new Date(2021, 11, 21)
	}];

	// return React.createElement(
	// 		'div',
	// 		{},
	// 		React.createElement('h2',{}, '리액트 스타트!'),
	// 		React.createElement(Expenses,{items:expenses})
	// );
	const addExpenseHandler = expense =>{
		console.log('App js 임')
		console.log(expenses)
	}
	return (
			<div>
				<NewExpense onAddExpense={addExpenseHandler} />
				<Expenses items={expenses} />
			</div>
	);
}

export default App;
