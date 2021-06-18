import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe/Recipe";
import RecipeInfo from "./components/RecipeInfo/RecipeInfo";
const App = () => {

  const api = {
    key: "a7c6a5f1973401030fece57676386185",
    id: "4cd56ebc",
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('burger');
  const [displayInfo, setDisplayInfo] = useState(false);

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${api.id}&app_key=${api.key}`
    );
    const data = await response.json();
    console.log(data)
    setRecipes(data.hits);
  };

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  const changeInfo = () => {
    setDisplayInfo(!displayInfo);
  }

  return (

    <div className="App">
      {!displayInfo &&
        <div className="margin">
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">Search</button>
          </form>
          <div>
            <div>
              {recipes.map((recipe) => (
                <Recipe
                  key={recipe.recipe.url}
                  title={recipe.recipe.label}
                  image={recipe.recipe.image}
                  ingredients={recipe.recipe.ingredients}
                  button={changeInfo}
                />
              ))}
            </div>
          </div>
        </div>
      }
      {displayInfo &&
        <div className="margin">
          <form onSubmit={getSearch} className="search-form">
            <input className="search-bar" type="text" value={search} onChange={updateSearch} />
            <button className="search-button" type="submit">Search</button>
          </form>
          <div>
            <div>
              {recipes.map((recipe) => (
                <RecipeInfo
                  title={recipe.recipe.label}
                  button={changeInfo}
                  calories={recipe.recipe.calories}
                  totalDaily={recipe.recipe.totalDaily}
                >
                </RecipeInfo>
              ))}
            </div>
          </div>
        </div>
      }
    </div>
  );
};

export default App;
