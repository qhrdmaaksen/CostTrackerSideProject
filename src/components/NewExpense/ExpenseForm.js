import React, {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = () => {
	const titleChangeHandler = (event) => {
		console.log(event.target.value);
	}
	const [enteredTitle, setEnteredTitle] = useState('');
	const amountChangeHandler = (event) => {
		console.log(event.target.value);
	}
	const dateChangeHandler = (event) => {
		console.log(event.target.value)
	}
	return (
			<form action="">
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>title</label>
						<input type="text" onChange={titleChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>amount</label>
						<input type="number" min="0" step="10" onChange={amountChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>date</label>
						<input type="date" min="1950-01-01" max="2022-06-10" onChange={dateChangeHandler}/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button type="submit">비용 추가</button>
				</div>
			</form>
	)
}
export default ExpenseForm;