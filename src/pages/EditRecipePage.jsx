import React from 'react'
import {useParams,useLoaderData, useNavigate} from 'react-router-dom';
import { useState } from 'react';

const EditRecipePage = ({updateRecipeSubmit}) => {
  const recipe = useLoaderData()
   const[title, setTitle]= useState(recipe.title);
   const [type, setType] = useState(recipe.type);
   const [ratings, setRatings] =useState(recipe.ratings);
   const [procedure, setProcedure] = useState(recipe.procedure);
   const [description, setDescription] = useState(recipe.description);
   const [cookingIngredient, setCookingIngredient] = useState(recipe.cooking.ingredient);
   


  const navigate = useNavigate();
  const {id} =useParams();

  const submitForm = (e) => {
    e.preventDefault();
        const updatedRecipe = {
            id,
            title,
            type,
            ratings,
            description,
            procedure,
            cooking :{
                ingredient : cookingIngredient
               
            }
        }
        updateRecipeSubmit(updatedRecipe);
        return navigate(`/recipes/${id}`);

  }




  return (
    <section className="bg-indigo-50">
    <div className="container m-auto max-w-2xl py-24">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitForm}>
          <h2 className="text-3xl text-center font-semibold mb-6">Update Recipe</h2>

          <div className="mb-4">
            <label htmlFor="type" className="block text-gray-700 font-bold mb-2"
              >Type</label
            >
            <select
              id="type"
              name="type"
              className="border rounded w-full py-2 px-3"
              required
              value ={type}
              onChange={(e)=> setType(e.target.value)}
            >
              <option value="Non-Veg">Non-Veg</option>
              <option value="Veg">Veg</option>
             
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
              >Dish Name</label >
            <input
              type="text"
              id="title"
              name="title"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="Name of the dish"
              required
              value ={title}
              onChange={(e)=> setTitle(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2"
              >Ratings</label >
            <input
              type="text"
              id="ratings"
              name="ratings"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder="eg.9.0"
              required
              value ={ratings}
              onChange={(e)=> setRatings(e.target.value)}
            />
          </div>


          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
              >Description</label
            >
            <textarea
              id="description"
              name="description"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add description"
              value ={description}
              onChange={(e)=> setDescription(e.target.value)}
            ></textarea>
          </div>





          <div className="mb-4">
            <label
              htmlFor="procedure"
              className="block text-gray-700 font-bold mb-2"
              >Procedure</label
            >
            <textarea
              id="procedure"
              name="procedure"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add procedure of the dish"
              value ={procedure}
              onChange={(e)=> setProcedure(e.target.value)}
            ></textarea>
          </div>

      

        

          <div className="mb-4">
            <label
              htmlFor="cooking-ingredients"
              className="block text-gray-700 font-bold mb-2"
              >Ingredients</label >
            <textarea
              id="cooking-ingredients"
              name="cooking-ingredients"
              className="border rounded w-full py-2 px-3"
              rows="4"
              placeholder="Add the ingredients"
              value ={cookingIngredient}
              onChange={(e)=> setCookingIngredient(e.target.value)}
            ></textarea>
          </div>

        

          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Update Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default EditRecipePage
