export default function EmptyState({ isFiltered }) {
  return (
    <p className="empty-state">
      {isFiltered
        ? "None of the available books match this filter"
        : "Your list is empty"}
    </p>
  );
}