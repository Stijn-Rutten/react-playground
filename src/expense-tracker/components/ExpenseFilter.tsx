import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

function ExpenseFilter({ onSelectCategory }: Props) {
  return (
    <select
      className="form-select"
      onChange={(event) => onSelectCategory(event.target.value)}
    >
      <option value="">All categories</option>
      {categories.map((category) => (
        <option value={category} key={category}>
          {category}
        </option>
      ))}
    </select>
  );
}

export default ExpenseFilter;
