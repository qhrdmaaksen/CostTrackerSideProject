import React, {useState, useRef} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	const [inputText, setInputText] = useState("")
	const inputFocusText = useRef();
	/*const [userInput, setUserInput] = useState({ 요로케 사용하기도함 state 들을 묶어서
		EnteredTitle: '',
		EnteredAmount: '',
		EnteredDate: '',
	})*/

	// ---- 제목 변경에대한 이벤트 함수 ----
	const titleChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredTitle: event.target.value,
		})*/
		/*setUserInput((prevState) => { 카운터같은 이전 상태를 의존하고있는 경우 사용
			return {...prevState, enteredTitle: event.target.value};
		})*/
		setEnteredTitle(event.target.value);
	}
	// ---- 가격 변경에대한 이벤트 함수 ----
	const amountChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredAmount: event.target.value,
		})*/
		setEnteredAmount(event.target.value);
	}
	// ---- 날짜 변경에대한 이벤트 함수 ----
	const dateChangeHandler = (event) => {
		/*setUserInput({
			...userInput,
			EnteredDate: event.target.value,
		})*/
		setEnteredDate(event.target.value);
	}
	// ---- form 에서 저장된 이벤트 데이터 처리 함수 ----
	const submitHandler = (event) => {
		event.preventDefault();
		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		}
		console.log(expenseData)
		props.onSaveExpenseData(expenseData); // NewExpense.js 부모 컴포넌트의 함수 호출
		// 입력 타이틀 금액 날짜 초기화
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}
	// ---- 입력 초기화 누를 시 입력된 필드 초기화 및 title focus 함수 ----
	const onResetText = () => {
		setInputText({enteredTitle: "", enteredAmount: "", enteredDate: ""});
		inputFocusText.current.focus();
	}
	return (
			<form action="" onSubmit={submitHandler}>
				<div className="new-expense__controls">
					<div className="new-expense__control">
						<label>Title</label>
						<input type="text" ref={inputFocusText} value={enteredTitle} onChange={titleChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Amount</label>
						<input type="number" value={enteredAmount} min="0" step="10" onChange={amountChangeHandler}/>
					</div>
					<div className="new-expense__control">
						<label>Date</label>
						<input type="date" value={enteredDate} min="1950-01-01" max="2022-06-10" onChange={dateChangeHandler}/>
					</div>
				</div>
				<div className="new-expense__actions">
					<button onClick={onResetText}>입력 초기화</button>
					<button type="submit">비용 추가</button>
					<button onCancel={props.onCancel}>취소</button>
				</div>
			</form>
	)
}
export default ExpenseForm;