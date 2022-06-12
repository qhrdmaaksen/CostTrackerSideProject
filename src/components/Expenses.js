import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
function Expenses(props) {
	const option = {
		style: 'currency', currency: 'KRW'
	}
	return (
			<div className = 'expenses'>
				<ExpenseItem title={props.item[0].title}
										 amount={props.item[0].amount.toLocaleString('ko-KR', option)}
										 date={props.item[0].date}/>
				<ExpenseItem title={props.item[1].title}
										 amount={props.item[1].amount.toLocaleString('ko-KR', option)}
										 date={props.item[1].date}/>
				<ExpenseItem title={props.item[2].title}
										 amount={props.item[2].amount.toLocaleString('ko-KR', option)}
										 date={props.item[2].date}/>
				<ExpenseItem title={props.item[3].title}
										 amount={props.item[3].amount.toLocaleString('ko-KR', option)}
										 date={props.item[3].date}/>
			</div>
	)
}

export default Expenses;