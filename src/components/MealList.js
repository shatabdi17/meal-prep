import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

import { baseUrl } from "./CategoryList";

class MealList extends Component {
  state = {
    mealList: []
  };

  // Gets the meal list for each category

  async componentDidMount() {
    const categoryName = this.props.location.state.category;
    const url = `${baseUrl}/filter.php?c=${categoryName}`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ mealList: data.meals });
  }

  render() {
    return (
      <div className="meallist-wrapper">
        <section className="card-container">
          {this.state.mealList.map(meals => (
            <div key={meals.idMeal}>
              <section className="card meallist-card">
                <img
                  className="meallist-image"
                  src={meals.strMealThumb}
                  alt={meals.strMeal}
                />
                <p className="meallist-title">{meals.strMeal}</p>
                <Link
                  to={{
                    pathname: `/meal/${meals.idMeal}`,
                    state: { meal: meals.idMeal }
                  }}
                  className={"card-link"}
                  tabIndex={-1}
                >
                  <Button
                    className={"card-button meallist-button"}
                    text={"View recipe"}
                  />
                </Link>
              </section>
            </div>
          ))}
        </section>
        <div className="meal-button-wrapper">
          <Link to="/">
            <Button className={"meal-button"} text={"Go to HomePage"} />
          </Link>
        </div>
      </div>
    );
  }
}
export default MealList;
