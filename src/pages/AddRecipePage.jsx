import React from 'react'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

const AddRecipePage = ({addRecipeSubmit}) => {
    const[title, setTitle]= useState('');
    const [type, setType] = useState('Non-Veg');
    const [image, setImage] =useState('');
    const [preptime, setPreptime] =useState('');
    const [procedure, setProcedure] = useState('');
    const [description, setDescription] = useState('');
    const [cookingIngredient, setCookingIngredient] = useState('');
    
    
    const navigate = useNavigate();


    const submitForm = (e) =>{
        e.preventDefault();
        const newRecipe = {
            title,
            type,
            image,
            preptime,
            description,
            procedure,
            cooking :{
                ingredient : cookingIngredient
               
            },
            
        }
        addRecipeSubmit(newRecipe);
        return navigate('/recipes');
    };


  return (
    <section className="bg-indigo-50">
    <div className="container m-auto max-w-2xl py-24">
      <div
        className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0"
      >
        <form onSubmit={submitForm}>
          <h2 className="text-3xl text-center font-semibold mb-6">Add Recipe</h2>

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
              >Preparation-Time</label >
            <input
              type="text"
              id="preptime"
              name="preptime"
              className="border rounded w-full py-2 px-3 mb-2"
              placeholder='Add the prepartion time'
              required
              value ={preptime}
              onChange={(e)=> setPreptime(e.target.value)}
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


          <div className="mb-4">
              <label htmlFor="image-url" className="block text-gray-700 font-bold mb-2">Add Image</label>
              <input
                type="text"
                id="image-url"
                name="image-url"
                className="border rounded w-full py-2 px-3"
                placeholder="Paste image URL here"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>

           
        

          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
              type="submit">
              Add Recipe
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
  )
}

export default AddRecipePage
