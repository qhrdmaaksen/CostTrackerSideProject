import Expenses from './components/Expenses';

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
				<div>
					<Expenses item={expenses}/>
				</div>
			</div>
	);
}

export default App;
