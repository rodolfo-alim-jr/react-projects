import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'

 
const Search = () => {
    const [search, setSearch] = useState('')
    const [recipes, setRecipes] = useState([])
    const [query, setQuery] = useState('chicken')
    const [isLoading, setIsloading] = useState(true)

    const app_id = 'bba4dd62'
    const api_key = 'e91d0f8bdfa2de6d8d02a9db9d2ba773'

    const searchRecipe = `https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${api_key}`
    // https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}

    useEffect(() => {
        fetchRecipe();
        setIsloading(false)
        setQuery('')
    }, [query])
    
    const fetchRecipe = async () => {
        try {
            const response = await fetch(searchRecipe)
            const data = await response.json()
            console.log(data.hits)
            setRecipes(data.hits)
            
        } catch (error) {
            throw Error
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setQuery(search)
        setSearch('')
    }

    if (isLoading) {
        return <h1>Loading recipes...</h1>
    }

    return <>
        <div>
            <h1><FontAwesomeIcon icon={faUtensils} />  Recipe App</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="search" placeholder="Enter a recipe..." value={search} onChange={(e) => setSearch(e.target.value)}/>
                <button type="submit">Search</button>
            </form>
            {
                recipes.map((recipe, index) => {
                    return <Recipe key={index} {...recipe} />
                })
            }
        </div>
    </>
}

export default Search