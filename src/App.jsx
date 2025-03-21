
import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import React from 'react'

import Homepage from './pages/Homepage';
import Mainlayout from './layouts/Mainlayout';
import Recipespage from './pages/Recipespage';
// import Notfound from './pages/Notfound';
import RecipePage, {RecipeLoader} from './pages/RecipePage';
import AddRecipePage from './pages/AddRecipePage';
import EditRecipePage from './pages/EditRecipePage';


const App = () => {
  const addRecipe = async(newRecipe) =>{
    const res = await fetch('/api/recipes', {
      method : 'POST',
      headers :{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newRecipe)
  });
  return;
  }
  
  const deleteRecipe = async (id) =>{
    const res = await fetch(`/api/recipes/${id}`, {
      method : 'DELETE',
  
  });
  return;
  };

 const updateRecipe = async(recipe) =>
 {
    const res = await fetch(`/api/recipes/${recipe.id}`, {
      method : 'PUT',
      headers :{
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(recipe)
  });
  return;
 }


  const router =createBrowserRouter(
    createRoutesFromElements(
    <Route path ='/' element={<Mainlayout />}>
    <Route index element={<Homepage/>} />
    <Route path ='/recipes' element={<Recipespage/>} />
    <Route path ='/recipes/:id' element ={<RecipePage deleteRecipe={deleteRecipe}/>} loader ={RecipeLoader}/>
    <Route path ='/edit-recipe/:id' element ={<EditRecipePage updateRecipeSubmit={updateRecipe}/>} loader ={RecipeLoader}/> 
    <Route path ='/add-recipe' element={<AddRecipePage addRecipeSubmit={addRecipe}/>} />
   
    </Route>)
  )
  return <RouterProvider router ={router}/>;
};

export default App
