import React from 'react';
import './ExpenseItem.css';
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card'

const ExpenseItem = (props) => {
	/*const [title, setTitle] = useState(props.title);
	const clickHandler = () => {
		setTitle('Update');
		console.log(title);
	} demo version*/
	console.log(`ExpenseItem.js`)
	return (
			<Card className="expense-item">
				<ExpenseDate date={props.date}/>
				<div className="expense-item__description">
					<h2>{props.title}</h2>
					<div className="expense-item__price">{props.amount} 원</div>
				</div>
				{/*<button onClick={clickHandler}>Change Title</button> demo version*/}
			</Card>
	)
}

export default ExpenseItem;