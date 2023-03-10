import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';

function NewExpense(props){

    function saveExpenseDataHandler(enteredExpenseData){
        const expenseData ={
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        console.log("NewExpense: " + JSON.stringify(expenseData));

        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;