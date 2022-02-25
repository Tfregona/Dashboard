import "./grid.css";
import Axios from "axios";
import { useState, useRef } from "react";
import RecipeTile from "./RecipeTile";

function Food() {
  const [query, setquery] = useState("");
  const [recipes, setrecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("vegan");
  const labelsValue = useRef();

  const YOUR_APP_ID = process.env.REACT_APP_FOOD_ID;
  const YOUR_APP_KEY = process.env.REACT_APP_FOOD_SECRET;

  // eslint-disable-next-line no-undef
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthLabels}`;

  async function getRecipes() {
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="col-sm-8">
      <div className="Food">
        <h1>Food Recipe Plaza 🍔</h1>
        <form className="Food__searchForm" onSubmit={onSubmit}>
          <input
            type="text"
            className="app__input"
            placeholder="enter ingrident "
            value={query}
            onChange={(e) => setquery(e.target.value)}
          />

          <input className="app__submit" type="submit" value="Search" />

          <select
            className="Food_healthLabels"
            ref={labelsValue}
            onChange={() => sethealthLabels(labelsValue.current.value)}
          >
            <option value="vegan">Vegan</option>

            <option value="vegetarian">Vegetarian</option>

            <option value="paleo">paleo</option>

            <option value="dairy-free">dairy-free</option>

            <option value="gluten-free">gluten-free</option>

            <option value="low-sugar">low-sugar</option>

            <option value="wheat-free">wheat-free</option>

            <option value="egg-free">egg-free</option>

            <option value="peanut-free">peanut-free</option>

            <option value="tree-nut-free">tree-nut-free</option>

            <option value="soy-free">soy-free</option>

            <option value="fish-free">fish-free</option>

            <option value="shellfish-free">shellfish-free</option>
          </select>
        </form>

        <div className="Food__recipes">
          {recipes.map((recipe) => {
            return <RecipeTile recipe={recipe} key={recipe["recipe"]["url"]} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Food;
