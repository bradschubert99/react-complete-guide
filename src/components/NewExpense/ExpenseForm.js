import { useState } from 'react';
import './ExpenseForm.css'

function ExpenseForm(props){
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');

    function titleChangeHandle(event){
        setTitle(event.target.value);
    };

    function amountChangeHandle(event){
        setAmount(event.target.value);
    };

    function dateChangeHandle(event){
        setDate(event.target.value);
    };

    function submitHandler(event){
        event.preventDefault();

        const expenseData ={
            title: title,
            amount: amount,
            date: new Date(date)
        };

        console.log("ExpenseForm: " + JSON.stringify(expenseData));
        props.onSaveExpenseData(expenseData);

        setTitle('');
        setAmount('');
        setDate('');
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={title} onChange={titleChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"  value={amount} onChange={amountChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2023-12-31"  value={date} onChange={dateChangeHandle} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;