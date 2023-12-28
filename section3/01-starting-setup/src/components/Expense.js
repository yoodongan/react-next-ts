import ExpenseItem from './ExpenseItem';
import Card from './Card';

const Expense = ({expenses}) => {
    return (
        <Card className="expenses">
            {expenses.map(expense => (
                <ExpenseItem key={expense.id} date={expense.date} title={expense.title} amount={expense.amount}></ExpenseItem>
            ))}
        </Card>  
    )
}

export default Expense;