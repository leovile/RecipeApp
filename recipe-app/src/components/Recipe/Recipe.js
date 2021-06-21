import React, { useEffect, useState } from "react";
import style from './Recipe.module.css'

const Recipe = ({ title, image, ingredients, button }) => {

  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <div className={style.list}>
        {ingredients.map(ingredient => (
          <li key={ingredients.foodId}>{ingredient.text}</li>
        ))}
      </div>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;