const SearchBar = () => {
  return (
    <div className="max-w-md mx-auto my-6">
      <input
        type="text"
        placeholder="Search meals..."
        className="w-full px-4 py-2 rounded-xl border border-orange-300 focus:outline-none focus:ring-2 focus:ring-orange-400 text-orange-900 placeholder-orange-500"
      />
    </div>
  )
}

export default SearchBar
