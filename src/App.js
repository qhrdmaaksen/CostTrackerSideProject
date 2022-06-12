import ExpenseItem from './components/ExpenseItem'

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
	}]
	return (
			<div>
				<h2>Let's get started!</h2>
				<ExpenseItem title={expenses[0].title}
										 amount={expenses[0].amount.toLocaleString('ko-KR', {style: 'currency', currency: 'KRW'})}
										 date={expenses[0].date}/>
				<ExpenseItem title={expenses[1].title}
										 amount={expenses[1].amount.toLocaleString('ko-KR', {style: 'currency', currency: 'KRW'})}
										 date={expenses[1].date}/>
				<ExpenseItem title={expenses[2].title}
										 amount={expenses[2].amount.toLocaleString('ko-KR', {style: 'currency', currency: 'KRW'})}
										 date={expenses[2].date}/>
				<ExpenseItem title={expenses[3].title}
										 amount={expenses[3].amount.toLocaleString('ko-KR', {style: 'currency', currency: 'KRW'})}
										 date={expenses[3].date}/>
			</div>
	);
}

export default App;
