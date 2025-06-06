import axos from 'axios'
import { useState, useEffect } from 'react'

const Meal = () => {

    const [meal, setMeal] = useState([])

    useEffect(() => {
        axos.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
            .then((res) => {
                setMeal(res.data.meals)
            })
    }, [])

    const mealItem = meal.map((item, index) => {
        return (
            <div className='bg-orange-100 rounded-xl shadow-md' key={item.idMeal}>
                <h2 className='pl-4 pt-3 pb-2 text-lg font-medium text-orange-900'>
                    {index + 1}. {item.strMeal}
                </h2>
                <img className='p-4 rounded-4xl' src={item.strMealThumb} alt={item.strMeal} />
            </div>
        )
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 p-5 bg-orange-50 min-h-screen'>
            {mealItem}
        </div>
    )
}

export default Meal
