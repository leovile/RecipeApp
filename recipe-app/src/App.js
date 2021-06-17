import React, { useEffect, useState } from "react";
import "./App.css";
import Recipe from "./components/Recipe/Recipe";
const App = () => {
  const api = {
    key: "a7c6a5f1973401030fece57676386185",
    id: "4cd56ebc",
    baseUrl: "https://api.edamam.com/api/recipes/v2",
  };

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('pizza');

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


  return (
    <div className="App">
      <div className="margin">
        <form onSubmit={getSearch} className="search-form">
          <input className="search-bar" type="text" value={search} onChange={updateSearch} />
          <button className="search-button" type="submit">Search</button>
        </form>
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.url}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
