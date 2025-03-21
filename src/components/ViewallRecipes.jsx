import React from 'react'
import {Link} from 'react-router-dom';
import {Button, Box} from '@mui/material';

const ViewallRecipes = () => {
  return (
    
    // <section className="m-auto max-w-lg my-10 px-6">
    //   <Link
    //     to='/recipes'
    //     className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700" >View All Recipes
    //     </Link>
      
    // </section>
    <Box 
      sx={{
        maxWidth: 400,  
        margin: 'auto',
        my: 3,  
        px: 1
      }}
    >
      <Button
        component={Link}
        to="/recipes"
        variant="contained"
        fullWidth
        sx={{
          backgroundColor: 'black',
          py: 2,  // Equivalent to py-4
          borderRadius: 2,  
          textTransform: 'none',  
          fontSize: '1rem', 
          '&:hover': {
            backgroundColor: 'grey.700'
          }
        }}
      >
        View All Recipes
      </Button>
    </Box>


  )
}

export default ViewallRecipes
