import axios from 'axios'
import { useState, useEffect } from 'react'

const Meal = ({ filterType, filterValue }) => {
  const [meal, setMeal] = useState([])

  useEffect(() => {
    if (filterType && filterValue) {
      axios
        .get(`https://www.themealdb.com/api/json/v1/1/filter.php?${filterType}=${filterValue}`)
        .then((res) => {
          setMeal(res.data.meals || [])
        })
        .catch((err) => {
          console.error("Error fetching meals:", err)
          setMeal([])
        });
    }
  }, [filterType, filterValue])

  if (!filterValue) return null;

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 bg-orange-50 min-h-screen'>
      {meal.length > 0 ? (
        meal.map((item, index) => (
          <div className='bg-orange-100 rounded-xl shadow-md' key={item.idMeal}>
            <h2 className='pl-4 pt-3 pb-2 text-lg font-medium text-orange-900'>
              {index + 1}. {item.strMeal}
            </h2>
            <img className='p-4 rounded-4xl' src={item.strMealThumb} alt={item.strMeal} />
          </div>
        ))
      ) : (
        <p className="text-center text-orange-700 col-span-full text-lg font-medium">
          No meals found for "{filterValue}"
        </p>
      )}
    </div>
  )
}

export default Meal
