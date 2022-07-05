import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
	// ---- 선택된 연도 이벤트 처리 함수 ----
	const dropDownChangeHandler = (event) => {
		props.onChangeFilter(event.target.value)
		console.log(event.target.value)
	}
	return (
			<div className='expenses-filter'>
				<div className='expenses-filter__control'>
					<label>연도를 선택해 주세요.</label>
					<select value={props.selected} onChange={dropDownChangeHandler}> {/*연도 양방향 바인딩 주고받기*/}
						<option value='2022'>2022</option>
						<option value='2021'>2021</option>
						<option value='2020'>2020</option>
						<option value='2019'>2019</option>
					</select>
				</div>
			</div>
	);
};

export default ExpensesFilter;