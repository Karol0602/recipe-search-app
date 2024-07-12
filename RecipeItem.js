import React from 'react';

const RecipeItem = ({ recipe }) => {
  return (
    <div className="recipe-item">
      <h2>{recipe.recipe.label}</h2>
      <p>{recipe.recipe.source}</p>
      <img src={recipe.recipe.image} alt={recipe.recipe.label} />
    </div>
  );
};

export default RecipeItem;
