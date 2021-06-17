import React from "react";
import style from './Recipe.module.css'


const Recipe = ({ title, calories, image, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.list}>
        {ingredients.map(ingredient => (
          <li key={ingredients.foodId}>{ingredient.text}</li>
        ))}
      </div>
      <p>{calories.toFixed(0)} Kcal</p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
