import { Star } from "phosphor-react";
import React from "react";
import { useDispatch } from "react-redux";
import { mealSingle } from "../App";
import styles from "./CardMeal.module.css";

type Props = Omit<mealSingle, "id">;

const CardMeal = ({ title, description, price, picture, popular }: Props) => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {
        dispatch({
          type: "addMeal",
          meal: { name: title, priceUnit: Number(price), count: 1 },
        });
      }}
      className={styles.card_meal}
    >
      <div
        style={{ width: !picture ? "100%" : "250" }}
        className={styles.col_1}
      >
        <p className={styles.line_1}>{title}</p>
        <p className={styles.line_2}>{description}</p>
        <p className={styles.line_3}>
          <span>{price} €</span>{" "}
          {popular && (
            <span className={styles.popular}>
              <span>
                <Star size={15} weight="fill" />
              </span>
              <span> Populaire</span>
            </span>
          )}
        </p>
      </div>
      {picture && (
        <div className={styles.col_2}>
          <img src={picture} alt={title} />
        </div>
      )}
    </div>
  );
};

export default CardMeal;
