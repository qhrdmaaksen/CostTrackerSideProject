import React from 'react';
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesFilter from '../NewExpense/ExpensesFilter'

const Expenses = (props) => {
	const option = {
		style: 'currency', currency: 'KRW'
	}
	return (
			<div>
				<ExpensesFilter />
				<Card className='expenses'>
					<ExpenseItem title={props.items[0].title}
											 amount={props.items[0].amount.toLocaleString('ko-KR', option)}
											 date={props.items[0].date}/>
					<ExpenseItem title={props.items[1].title}
											 amount={props.items[1].amount.toLocaleString('ko-KR', option)}
											 date={props.items[1].date}/>
					<ExpenseItem title={props.items[2].title}
											 amount={props.items[2].amount.toLocaleString('ko-KR', option)}
											 date={props.items[2].date}/>
					<ExpenseItem title={props.items[3].title}
											 amount={props.items[3].amount.toLocaleString('ko-KR', option)}
											 date={props.items[3].date}/>
				</Card>
			</div>
	)
}

export default Expenses;