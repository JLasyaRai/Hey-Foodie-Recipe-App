import React from 'react'
import Hero from '../components/Hero';
import Homecard from '../components/Homecard';
import Recipelistings from '../components/Recipelistings';
import ViewallRecipes from '../components/ViewallRecipes';


const Homepage = () => {
  return (
    <>
<Hero />
<Homecard />
<Recipelistings isHome= {true} />
<ViewallRecipes/>



    </>
  )
}

export default Homepage
