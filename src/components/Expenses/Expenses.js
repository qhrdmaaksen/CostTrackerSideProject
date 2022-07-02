import React, {useState} from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../NewExpense/ExpensesFilter'

const Expenses = (props) => {
	const option = {
		style: `currency`, currency: `KRW`
	}
	const [filteredYear, setFilteredYear] = useState('2020')

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
		console.log('Expense.js filterChangeHandler');
		console.log(selectedYear);
	}
	const filteredExpenses = props.items.filter((selectedYear) => {
		return selectedYear.date.getFullYear().toString() === filteredYear;
	})
	let expenseContent = <p>해당 연도에 추가된 비용이 없습니다.</p>;
	if (filteredExpenses.length > 0 ) {
		expenseContent = filteredExpenses.map((expense) =>
				<ExpenseItem title={expense.title}
										 amount={expense.amount.toLocaleString('ko-KR', option)}
										 date={expense.date}
										 key={expense.id}
				/>)
	}

	return (
			<div>
				<Card className='expenses'>
					<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
					{expenseContent}
				</Card>
			</div>
	)
}

export default Expenses;