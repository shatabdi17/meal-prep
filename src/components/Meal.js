import React, { Component } from "react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import cookbook from "../images/cookbook.png";
import measuringcup from "../images/measuringcup.png";
import Button from "./Button";

class Meal extends Component {
  state = {
    activeMeal: null
  };

  // Gets the individual meals

  async componentDidMount() {
    const mealId = this.props.location.state.meal;
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ activeMeal: this.normalize(data.meals[0]) });
  }

  // Normalizer function
  normalize = meal => {
    const rest = Object.keys(meal).reduce((acc, curr) => {
      if (/str(Ingredient|Measure)/.test(curr)) return acc;
      return {
        [curr]: meal[curr],
        ...acc
      };
    }, {});
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (!meal[`strIngredient${i}`]) continue;
      ingredients.push({
        ingredient: meal[`strIngredient${i}`],
        measurement: meal[`strMeasure${i}`]
      });
    }

    return {
      ...rest,
      ingredients
    };
  };
  render() {
    const meal = this.state.activeMeal;

    return meal ? (
      <section className="meal-container">
        <img
          className="meal-image"
          src={meal.strMealThumb}
          alt={meal.strTags}
        />
        <p className="meal-subtitle"> Cuisine: {meal.strArea}</p>
        <h3 className="meal-title">{meal.strMeal}</h3>
        <h3>
          <img
            className="icon-cookbook"
            src={cookbook}
            alt="CookBook from the Noun Project"
          />
          Instructions
        </h3>
        <p className="meal-card-text"> {meal.strInstructions}</p>
        <h2>
          <img
            className="icon-measuringcup"
            src={measuringcup}
            alt="Measuring Cup by Nook Fulloption from the Noun Project"
          />
          Ingredients
        </h2>
        <section className="meal-ingredients">
          {meal.ingredients.map(item => (
            <ul className="ingredients-list">
              <li className="meal-measurement">
                <span className="meal-ingredient-measurement">
                  {item.measurement}
                </span>
                {item.ingredient}
              </li>
            </ul>
          ))}
        </section>
        {meal.strYoutube ? (
          <ReactPlayer url={meal.strYoutube} width="100%" />
        ) : null}
        <div className="meal-button-wrapper">
          <Link to="/">
            <Button className={"meal-button"} text={"Go to HomePage"} />
          </Link>
        </div>
      </section>
    ) : null;
  }
}

export default Meal;
