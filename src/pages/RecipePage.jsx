import React from 'react'
import {useParams, useLoaderData, useNavigate} from 'react-router-dom';
import { FaArrowLeft, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material'; 
import DeleteIcon from '@mui/icons-material/Delete';



const RecipePage = ({deleteRecipe}) => {
    const navigate = useNavigate();
    const {id} =useParams();
    const recipe = useLoaderData();
    const onDeleteClick =(recipeId) => {
        const confirm = window.confirm('Are you sure you want to delete this recipe?')
        if(!confirm) return;
        deleteRecipe(recipeId);
       
        navigate('/recipes');
    }
  return (
    <>
     <section>
      <div className="container m-auto py-6 px-6">
        <Link
          to="/recipes"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <FaArrowLeft className='mr-2'/> Back to Recipe Page
        </Link>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{recipe.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {recipe.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaClock className='text-orange-700 mr-1'/>
                <p className="text-orange-700">{recipe.preptime}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Description
              </h3>

              <p className="mb-4">
               {recipe.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Procedure</h3>

              <p className="mb-4"> {recipe.procedure}</p>
            </div>
          </main>

          
          <aside>
        
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Ingredients</h3>

             

              <p className="my-2">
                {recipe.cooking.ingredient}
              </p>

              <hr className="my-4" />

           
            </div>

{/*         
            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Recipe</h3>
              <Link
                to={`/recipes/edit/${recipe.id}`}
               // className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                </Link>
              <button onClick={ ()=> onDeleteClick (recipe.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Recipe
              </button>
            </div> */}

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Recipe</h3>
                    <Link to={`/edit-recipe/${recipe.id}`}>
                        <Button variant="contained" color="primary" fullWidth>Edit Recipe</Button>
                    </Link>
                    <Button variant="contained"
                            color="error"
                            startIcon={<DeleteIcon />}
                            fullWidth
                            sx={{ mt: 2 }}
                            onClick={() => onDeleteClick(recipe.id)}
                            >
                            Delete Recipe
                    </Button>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
  
}

const RecipeLoader = async ({params}) =>{
    const res = await fetch(`/api/recipes/${params.id}`);
    const data = await res.json();
    return data;
}
export {RecipePage as default, RecipeLoader};
