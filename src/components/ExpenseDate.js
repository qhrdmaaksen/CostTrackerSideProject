import './ExpenseDate.css';

function ExpenseDate(props) {
	const Year = props.date.getFullYear()
	const Month = props.date.toLocaleString('ko-KR', {month: 'long'});
	const Day = props.date.toLocaleString('ko-KR', {day: '2-digit'});

	return (
			<div className='expense-date'>
				<div className='expense-date__year'>{Year}년</div>
				<div className='expense-date__month'>{Month}</div>
				<div className='expense-date__day'>{Day}</div>
			</div>
	)
}

export default ExpenseDate;