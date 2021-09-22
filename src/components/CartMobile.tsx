import React, { Fragment, useEffect, useState } from "react";
import styles from "./CartMobil.module.css";
import { MinusCircle, PlusCircle, X } from "phosphor-react";
import { RootState } from "../store/store";
import { useDispatch, useSelector } from "react-redux";

const CartMobile = () => {
  const state = useSelector((state: RootState) => state.meals);
  const dispatch = useDispatch();
  const [displayCart, setDisplayCart] = useState(false);
  useEffect(() => {
    return () => {
      if (state.length === 0) {
        setDisplayCart(false);
      }
    };
  }, [state.length]);

  const total = () => {
    let total = 0;
    state.forEach((meal) => (total += meal.priceTotal));
    return total;
  };

  const totalItem = () => {
    let total = 0;
    state.forEach((meal) => (total += meal.count));
    return total;
  };
  return (
    <div className={styles.cart_mobile}>
      {displayCart && state.length > 0 && (
        <Fragment>
          <p className={styles.close_icon_p}>
            <X
              className={styles.close_icon}
              size={20}
              onClick={() => setDisplayCart(false)}
            />
          </p>
          <div className={styles.add_meal}>
            {state.map((elem) => (
              <div key={elem.name} className={styles.add_meal_line}>
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
      {state.length === 0 || displayCart ? (
        <div
          className={`${styles.cart_btn_inactive} ${
            state.length > 0 ? styles.active : ""
          }`}
        >
          Voir le panier
        </div>
      ) : (
        <div
          onClick={() => setDisplayCart(true)}
          className={`${styles.cart_btn_active}`}
        >
          <span className={styles.total_count}>{totalItem()}</span>
          <span>Voir le panier</span>
          <span>{(total() + 2.5).toFixed(2)}€</span>
        </div>
      )}
    </div>
  );
};

export default CartMobile;
