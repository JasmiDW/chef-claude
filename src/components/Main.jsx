import { useState } from "react"

export default function Main(){
    const [ingredients, setIngredients] = useState(["Poulet", "Citron", "Olives"])
    

    function handleSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const newIngredient = formData.get("ingredient")
        //pour des tableaux
        setIngredients(prev => [...prev, newIngredient])   

        //pour des objets 
        /*setContact(prevIngredients => {
            return {
                ...prevIngredients,
                isFavorite: !prevIngredients.isFavorite
            }
        })*/
 
    }
    
    return (
        <>
            <form className='form-ingredient' onSubmit={handleSubmit}>
                <input name="ingredient" id="input" type="text" placeholder="exemple: basilic" aria-label="Ajouter ingrédient"></input>
                <button>+ Ajouter un ingrédient</button>
            </form>
            <h2>Liste des ingrédients</h2>
            <ul>
                {ingredients.map((ingredient, index) => 
                    <li key={index}>{ingredient}</li>)}
            </ul>
        </>

    )
}

