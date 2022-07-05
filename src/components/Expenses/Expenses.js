import React, {useState} from 'react';
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../NewExpense/ExpensesFilter'
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState('2020')

	// ---- ExpensesFilter 에서 연도 변경 시 이벤트 값을 받아 상태 변환 해주는 함수 ----
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
		console.log('Expense.js filterChangeHandler');
		console.log(selectedYear);
	}
	// ---- 선택된 연도에 따른 데이터 출력 함수 ----
	const filteredExpenses = props.items.filter((selectedYear) => {
		return selectedYear.date.getFullYear().toString() === filteredYear;
	})

	return (
			<li>
				<Card className='expenses'>
					<ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
					<ExpensesList items={filteredExpenses}/>
				</Card>
			</li>
	)
}

export default Expenses;