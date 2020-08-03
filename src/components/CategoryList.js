import React, { Component } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

export const baseUrl = "https://www.themealdb.com/api/json/v1/1";

class CategoryList extends Component {
  state = {
    categories: []
  };

  // Gets all the meal categories

  async componentDidMount() {
    const url = `${baseUrl}/categories.php`;
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ categories: data.categories });
  }

  render() {
    return (
      <section className="card-container">
        {this.state.categories.map(category => {
          return (
            <div key={category.idCategory}>
              <div className="card">
                <div className="card-content">
                  <img
                    className="category-image"
                    src={category.strCategoryThumb}
                    alt={category.strCategory}
                  />
                  <div className="category-title">{category.strCategory}</div>
                  <p className="category-card-text">
                    {/* {category.strCategoryDescription} */}
                    {category.strCategoryDescription.length < 150
                      ? `${category.strCategoryDescription}`
                      : `${category.strCategoryDescription.substring(
                          0,
                          155
                        )} ...`}
                  </p>
                  <Link
                    to={{
                      pathname: `/category/${category.strCategory}`,
                      state: { category: category.strCategory }
                    }}
                    className={"card-link"}
                    tabIndex={-1}
                  >
                    <Button
                      className={"card-button"}
                      text={`View all ${category.strCategory} recipes`}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    );
  }
}
export default CategoryList;
