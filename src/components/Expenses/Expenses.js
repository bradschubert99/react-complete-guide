import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import { useState } from "react";

function Expenses(props){

    const [filteredYear, setFilteredYear] = useState('2020')

    function filterChangeHandler(selectedYear){
        props.onChangeFilter(selectedYear);
    };

    return (
        <div>
            <div className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {props.items.map(expense => 
                    <ExpenseItem
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                    />    
                )}
            </div>        
        </div>
    );
}

export default Expenses;