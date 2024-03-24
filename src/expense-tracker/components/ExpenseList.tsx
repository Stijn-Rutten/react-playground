import Expense from "../expense";

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (!expenses.length) {
    return <strong>No expenses</strong>;
  }

  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>${expense.amount.toFixed(2)}</td>
            <td>{expense.category}</td>
            <td>
              <button
                onClick={() => onDelete(expense.id)}
                className="btn btn-outline-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            <strong>
              $
              {expenses
                .reduce((acc, expense) => (acc += expense.amount), 0)
                .toFixed(2)}
            </strong>
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
