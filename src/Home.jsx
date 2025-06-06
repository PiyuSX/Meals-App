import { useState } from 'react'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Meal from './components/Meal'

const Home = () => {
  const [filterType, setFilterType] = useState("")
  const [filterValue, setFilterValue] = useState("")

  return (
    <div className="min-h-screen bg-orange-50">
      <Header />
      <SearchBar
        filterType={filterType}
        setFilterType={setFilterType}
        filterValue={filterValue}
        setFilterValue={setFilterValue}
      />
      <Meal filterType={filterType} filterValue={filterValue} />
    </div>
  )
}

export default Home
