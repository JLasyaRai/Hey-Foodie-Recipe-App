import React from 'react'
import Card from './Card'
import {Link } from 'react-router-dom';
import {Button} from '@mui/material';
const Homecard = () => {
  return (
    <section className="py-4">
    <div className="container-xl lg:container m-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
       <Card>
       <h2 className="text-2xl font-bold">Explore Delicious Recipes</h2>
          <p className="mt-2 mb-4">
          Browse. Cook. Enjoy. The perfect recipe is just a tap away!
          </p>
          <Button
                  component={Link}
                  to="/recipes"
                  variant="contained"
                  sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "gray" },textTransform :'none' }}
                >
                  Browse Recipe
                </Button>
       </Card>
        <Card bg='bg-indigo-100'>
        <h2 className="text-2xl font-bold">Share Your Recipe with the World</h2>
          <p className="mt-2 mb-4">
          Good food is meant to be shared—add your recipe today!
          </p>
          {/* <Link
            to="/add-recipe"
            className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700">
            Add Recipe
          </Link> */}
          <Button
                  component={Link}
                  to="/add-recipe"
                  variant="contained"
                  sx={{ backgroundColor: "black", color: "white", "&:hover": { backgroundColor: "gray" },textTransform :'none' }}
                >
                  Add Recipe
                </Button>
        </Card>
      </div>
    </div>
  </section>
  )
}

export default Homecard
