
import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // ExpenseForm에서 올라온 데이터를 받는 핸들러이다.
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    console.log(expenseData);

    props.onAddExpense(expenseData);

  }


  return (
    <div className='new-expense'>
      {/* ExpenseForm 에서 state lifting. */}
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/> 
    </div>
  )
}

export default NewExpense;