import React from 'react';
import './Expenses.css';
const ExpenseDate = (props) => {
	const year = props.date.getFullYear()
	const month = props.date.toLocaleString('en-US', {month: 'long'});
	const day = props.date.toLocaleString('en-US', {day: '2-digit'});
	console.log('year:::', year)
	console.log('month:::', year)
	console.log('day:::', year)

	return (
			<div className='expense-date'>
				<div className='expense-date__month'>{month}</div>
				<div className='expense-date__year'>{year}년</div>
				<div className='expense-date__day'>{day}</div>
			</div>
	)
}

export default ExpenseDate;