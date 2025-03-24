import React from 'react'

import {FaStar} from 'react-icons/fa';
import {Link} from 'react-router-dom';

const Recipelisting = ({recipe}) => {
    let description = recipe.description;
  
  return (
    <div className="bg-white rounded-xl shadow-md relative">
         {recipe.image && (
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-48 object-cover rounded-t-xl"
        />
      )}
                 <div className="p-4">
                   <div className="mb-6">
                     <div className="text-gray-600 my-2">{recipe.type}</div>
                     <h3 className="text-xl font-bold">{recipe.title}</h3>
                   </div>
     
                   <div className="mb-5">
                    {description}
                   </div>
     
                   <div className="border border-gray-100 mb-5"></div>
     
                   <div className="flex flex-col lg:flex-row justify-between mb-4">
                     <div className="text-gray-600 mb-3">
                      <FaStar className='text-yellow-600 inline text-lg mb-1 mr-1'/>
                       {recipe.ratings}
                     </div>
                     <Link
                       to={`/recipes/${recipe.id}`}
                       className="h-[36px] bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm"
                     >
                      Read More
                     </Link>
                   </div>
                 </div>
               </div>

  )
}

export default Recipelisting
