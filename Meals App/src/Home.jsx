import Header from './components/Header'
import SearchBar from './components/SearchBar'
import Meal from './components/Meal'

const Home = () => {
    return (
        <div className="min-h-screen bg-orange-50">
                <Header />
                <SearchBar />
                <Meal />
        </div>
    )
}

export default Home
