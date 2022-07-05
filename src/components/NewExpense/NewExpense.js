import React, {useState} from 'react';
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false)
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		}
		props.onAddExpense(expenseData);
		setIsEditing(false) // 저장한 다음 비용 추가 form 닫기
		console.log(expenseData)
	}
	const startEditingHandler = () => {
		setIsEditing(true) //비용 추가 누르면 비용추가 폼 보여주기
	}
	const stopEditingHandler = () => {
		setIsEditing(false) // 취소 누르면 비용 추가 폼 안보이게함
	}
	return (
			<div className="new-expense">
				{!isEditing && <button onClick={startEditingHandler}>새로운 비용 추가</button>}
				{isEditing && <ExpenseForm onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}/>}
			</div>
	)
}
export default NewExpense;