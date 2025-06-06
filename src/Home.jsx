import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Meal from './components/Meal'

const Home = () => {
  const [filterType, setFilterType] = useState("")
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className="min-h-screen bg-orange-50 flex flex-col">
      <Header />

      <SearchBar
        filterType={filterType}
        setFilterType={setFilterType}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />

      <main className="flex-grow">
        <Meal filterType={filterType} filterValue={filterValue} />
      </main>

      <footer className="p-4 text-orange-700 select-none text-right">
        A app By Piyush
      </footer>
    </div>
  )
}

export default Home
