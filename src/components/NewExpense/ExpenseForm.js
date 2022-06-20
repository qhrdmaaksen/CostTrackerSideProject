import React from 'react';
import './ExpenseForm.css'
import NewExpense from './NewExpense';

const ExpenseForm = () => {
	return (
			<form action="">
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>title</label>
						<input type="text"/>
					</div>
					<div className="new-expense__control">
						<label>amount</label>
						<input type="number" min="0" step="10"/>
					</div>
					<div className="new-expense__control">
						<label>date</label>
						<input type="date" min="1950-01-01" max="2022-06-10"/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">비용 추가</button>
				</div>
			</form>
	)
}
export default ExpenseForm;