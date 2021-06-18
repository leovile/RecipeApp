import React, { useEffect, useState } from "react";
import style from './RecipeInfo.module.css'


const RecipeInfo = ({ title, calories, button, totalDaily }) => {

  return (
    <div className={style.recipe}>
      <h1 className={style.title}>{title}</h1>
      <h3>Energetic value: {calories.toFixed(0)} Kcal</h3>
      <div className={style.list}>
        <table>
          <tr>
            <td>Nutriente</td>
            <td>%V.D.</td>
          </tr>

          {Object.keys(totalDaily).map((item, i) => (
            <tr>
              <td>{totalDaily[item].label} </td>
              <td>{totalDaily[item].quantity.toFixed(1)} {totalDaily[item].unit}</td>
            </tr>
          ))}
        </table>
      </div>
      <button className={style.infoButton} onClick={button}>Recipe</button>
    </div>
  );
};

export default RecipeInfo;
