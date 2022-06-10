import './ExpenseItem.css';

function ExpenseItem(){
	return (
			<div className="expense-item">
				<div>2021 년 3 월 28 일</div>
				<div className="expense-item__description">
					<h2>자동차 보험</h2>
					<div className="expense-item__price">1,430,000 원</div>
				</div>
			</div>
	)
}

export default ExpenseItem;