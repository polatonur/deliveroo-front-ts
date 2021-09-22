import React from "react";
import MealList from "./MealList";
import Cart from "./Cart";
import styles from "./Menu.module.css";
import { Data } from "../App";

export type Category = Pick<Data, "categories">;

const Menu = ({ categories }: Category) => {
  return (
    <div className={`${styles.menu}`}>
      <main className={`container`}>
        <div className={styles.menu_list}>
          {categories.map((elem, index) => {
            return (
              elem.meals.length > 0 && (
                <MealList key={index} name={elem.name} meals={elem.meals} />
              )
            );
          })}
        </div>
        <Cart />
      </main>
    </div>
  );
};

export default Menu;
