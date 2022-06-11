import './ExpenseItem.css';

function ExpenseItem(){
	const expenseDate = new Date(2021, 5, 28);
	const expenseTitle = '자동차 보험';
	const expenseAmount = 1430000;

	return (
			<div className="expense-item">
				<div>{expenseDate.toISOString()}</div>
				<div className="expense-item__description">
					<h2>{expenseTitle}</h2>
					<div className="expense-item__price">{expenseAmount} 원</div>
				</div>
			</div>
	)
}

export default ExpenseItem;