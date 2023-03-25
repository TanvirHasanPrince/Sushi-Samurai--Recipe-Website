import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const Receipies = () => {
 const [data, setData] = useState([]);


 useEffect(() => {
   fetch("sushiReceipes.json")
     .then((response) => response.json())
     .then((data) => setData(data))
     .catch((error) => console.error(error));
 }, []);

 console.log(data);

 return (
   <div className="p-20">
     <h1 className="text-5xl font-[imported] text-red-600 text-center">
       Receipes
     </h1>
     <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:grid-cols-3">
       {data.map((recipe) => (
         <RecipeCard recipe={recipe}></RecipeCard>
       ))}
     </div>
   </div>
 );
};

export default Receipies;