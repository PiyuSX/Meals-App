const filterTypes = [
  { key: "c", label: "Category", example: "Seafood" },
  { key: "a", label: "Area", example: "Canadian" },
  { key: "i", label: "Ingredient", example: "Chicken" },
];

const SearchBar = ({ filterType, setFilterType, filterValue, setFilterValue }) => {
  const selectedFilter = filterTypes.find((f) => f.key === filterType);

  return (
    <div className="max-w-md mx-auto my-6 space-y-4">
      <select
        value={filterType}
        onChange={(e) => {
          setFilterType(e.target.value);
          setFilterValue(""); // reset input
        }}
        className="w-full px-4 py-2 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-orange-900"
      >
        <option value="" disabled>
          Select filter type
        </option>
        {filterTypes.map(({ key, label }) => (
          <option key={key} value={key}>
            {label}
          </option>
        ))}
      </select>

      <input
        type="text"
        placeholder={
          selectedFilter
            ? `Enter ${selectedFilter.label} (e.g., ${selectedFilter.example})`
            : "Select filter type first"
        }
        value={filterValue}
        onChange={(e) => setFilterValue(e.target.value)}
        disabled={!filterType}
        className={`w-full px-4 py-2 rounded-xl border ${
          filterType
            ? "border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
            : "border-gray-300 bg-gray-100 cursor-not-allowed"
        } text-orange-900 placeholder-orange-500`}
      />
    </div>
  );
};

export default SearchBar;
