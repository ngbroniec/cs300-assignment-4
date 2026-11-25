const options = [
  { value: "all", label: "All" },
  { value: "unread", label: "In my backlog" },
  { value: "read", label: "Read" },
];

export default function FilterBar({ status, changeStatus }) {
  return (
    <fieldset className="filter-bar">
      <legend>Show</legend>
      {options.map((option) => (
        <label key={option.value} className="filter-option">
          <input
            type="radio"
            name="status-filter"
            value={option.value}
            checked={status === option.value}
            onChange={() => changeStatus(option.value)}
          />
          {option.label}
        </label>
      ))}
    </fieldset>
  );
}