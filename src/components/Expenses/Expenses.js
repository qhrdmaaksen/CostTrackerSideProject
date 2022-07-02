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
	const filteredExpenses = props.items.filter(expense => {
		return expense.date.getFullYear().toString() === filteredYear;
	})
	let expensesContent = <p>No expenses found</p>

	if (filteredExpenses.length > 0) {
		expensesContent = filteredExpenses.map((expense) => (
			<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
		))
	}

	return (
			<div>
				<Card className='expenses'>
					<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
					{props.items.map((expense) =>
							<ExpenseItem title={expense.title}
													 amount={expense.amount.toLocaleString('ko-KR', option)}
													 date={expense.date}/>)}
					{expensesContent}
				</Card>
			</div>
	)
}

export default Expenses;