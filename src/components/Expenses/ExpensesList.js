import React from 'react';
import './ExpensesList.css'
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
	const option = {
		style: `currency`, currency: `KRW`
	}
	if (props.items.length === 0) {
		return <h2 className="expenses-list__fallback">해당 연도에 추가된 비용이 없습니다.</h2>
	}
	return (
			<ul className="expenses-list">
				<li>
					{
						props.items.map((expense) =>
								<ExpenseItem title={expense.title}
														 amount={expense.amount.toLocaleString('ko-KR', option)}
														 date={expense.date}
														 key={expense.id}
								/>)
					}
				</li>
			</ul>
	)
}
export default ExpensesList;