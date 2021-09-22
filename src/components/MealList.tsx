import React from "react";
import { MealType } from "../App";
import CardMeal from "./CardMeal";
import styles from "./MealList.module.css";

const MealList = ({ name, meals }: MealType) => {
  return (
    <div className={styles.meal_list}>
      <h2>{name}</h2>
      <div className={styles.meals}>
        {meals.map((elem) => {
          return (
            <CardMeal
              description={elem.description}
              price={elem.price}
              key={elem.id}
              title={elem.title}
              picture={elem.picture}
              popular={elem.popular}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MealList;
