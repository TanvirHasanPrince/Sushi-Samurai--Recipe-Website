import React, { useState } from 'react';
import Modal from './Modal';

const RecipeModal = () => {
 const [showModal, setShowModal] = useState(false)
 return (
   <div>
     <h1>Hello World</h1>
     <button onClick={() => setShowModal(true)} className="ml-1 inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-red-600 shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]">
       Click Me
     </button>
     <Modal isVisible ={showModal} onClose={()=> setShowModal(false)} />
   </div>
 );
};

export default RecipeModal;