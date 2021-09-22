import React, { Fragment } from "react";
import styles from "./Cart.module.css";
import { MinusCircle, PlusCircle } from "phosphor-react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const Cart = () => {
  const state = useSelector((state: RootState) => state.meals);
  const dispatch = useDispatch();

  const total = () => {
    let total = 0;
    state.forEach((meal) => (total += meal.priceTotal));
    return total;
  };

  return (
    <div className={styles.cart}>
      <button
        className={`${styles.cart_btn} ${
          state.length === 0 ? styles.inactive : ""
        }`}
      >
        Valider mon panier
      </button>
      {state.length === 0 ? (
        <div className={styles.empty_cart}>Votre panier est vide</div>
      ) : (
        <Fragment>
          <div className={styles.add_meal}>
            {state.map((elem, index) => (
              <div key={index} className={styles.add_meal_line}>
                <div className={styles.col_1}>
                  <span className={styles.minus}>
                    <MinusCircle
                      size={20}
                      onClick={() => {
                        dispatch({
                          type: "removeMeal",
                          meal: {
                            name: elem.name,
                            priceUnit: elem.priceUnit,
                            count: 1,
                          },
                        });
                      }}
                    />
                  </span>
                  <span>{elem.count}</span>
                  <span className={styles.plus}>
                    <PlusCircle
                      size={20}
                      onClick={() => {
                        dispatch({
                          type: "addMeal",
                          meal: {
                            name: elem.name,
                            priceUnit: elem.priceUnit,
                            count: 1,
                          },
                        });
                      }}
                    />
                  </span>
                  <span className={styles.meal_name}>{elem.name}</span>
                </div>
                <div className={styles.col_2}>
                  {elem.priceTotal.toFixed(2) + " €"}{" "}
                </div>
              </div>
            ))}
          </div>
          <div className={styles.delivery_fee}>
            <p>
              <span>Sous-total</span> <span>{total().toFixed(2)}€</span>
            </p>
            <p>
              <span>Frais de livraison</span> <span>{`2.50`}€</span>
            </p>
          </div>
          <div className={styles.total_order}>
            <p>
              <span>Total</span> <span>{(total() + 2.5).toFixed(2)}€</span>
            </p>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
