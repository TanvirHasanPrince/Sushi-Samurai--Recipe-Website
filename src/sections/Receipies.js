import React, { useEffect, useState } from 'react';

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
  <div>
    {console.log(data)}
   {data.length}
  </div>
 );
};

export default Receipies;