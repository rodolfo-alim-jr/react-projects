import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Recipe = ({recipe}) => {
    return <>
        <div className="recipe-container">
            <h3>{recipe.label}</h3>
            <img src={recipe.image} alt={recipe.label} />
            <p><FontAwesomeIcon icon={faShoppingCart} /><i><strong>  Ingredients</strong></i> </p>
            <ul>
                {
                    recipe.ingredients.map((ingredient, index) => {
                        return <li key={index} style={{ 'listStyle': 'none'}}><i>{ingredient.text}</i></li>
                    })
                }
            </ul>
        </div>        
    </>
}

export default Recipe