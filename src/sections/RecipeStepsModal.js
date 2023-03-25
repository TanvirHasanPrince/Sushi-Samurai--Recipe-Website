import React from 'react';

const RecipeStepsModal = ({ recipeSteps }) => {
 const {  image, name, ingredients, equipment, steps, tips } =
   recipeSteps;
  return (
    <div className="">
      <input type="checkbox" id="recipe-modal" className="modal-toggle" />
      <label htmlFor="recipe-modal" className="modal cursor-pointer">
        <label className="modal-box relative m-auto" htmlFor="">
          <h3 className="text-red-600 text-lg font-bold text-center font-[imported]">
            {name}
          </h3>
          <div className="flex justify-center">
            <img src={image} className="w-32 h-32 rounded" alt="" />
          </div>

          <p className="py-4">
            <h1 className="font-bold font-[imported] text-red-600">
              Ingredients
            </h1>
            {ingredients}
          </p>
          <p className="py-4">
            <h1 className="font-bold font-[imported] text-red-600">
              Equipments
            </h1>
            {equipment}
          </p>

          <p className="py-4">
            <h1 className="font-bold font-[imported] text-red-600">Steps</h1>
            {steps}
          </p>

          <p className="py-4">
            <h1 className="font-bold font-[imported] text-red-600">Tips</h1>
            {tips}
          </p>
        </label>
      </label>
    </div>
  );
};

export default RecipeStepsModal;