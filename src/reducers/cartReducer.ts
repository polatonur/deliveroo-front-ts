type meal = {
  name: string;
  priceUnit: number;
  priceTotal: number;
  count: number;
};
type CartMeals = {
  meals: Array<meal>;
};

export type Action = {
  type: "addMeal" | "removeMeal";
  meal: {
    name: string;
    priceUnit: number;
    count: number;
  };
  count: 1;
};
const cartReducer = (state: CartMeals = { meals: [] }, action: Action) => {
  const stateToUpdate = { ...state, meals: [...state.meals] };
  const meals = stateToUpdate.meals;
  if (action.type === "addMeal") {
    let found = false;
    meals.forEach((meal, index) => {
      if (meal.name === action.meal.name) {
        found = true;
        meals[index] = {
          count: meals[index].count + 1,
          name: action.meal.name,
          priceUnit: Number(action.meal.priceUnit),
          priceTotal: meals[index].priceTotal + Number(action.meal.priceUnit),
        };
        // console.log(meals[index]);

        stateToUpdate.meals = meals;
        return stateToUpdate;
      }
    });
    !found &&
      stateToUpdate.meals.push({
        ...action.meal,
        priceTotal: action.meal.priceUnit,
      });
    return stateToUpdate;
  } else if ((action.type = "removeMeal")) {
    meals.forEach((meal, index) => {
      if (meal.name === action.meal.name) {
        // console.log("found");
        // console.log("pricesss===>", action.meal.priceUnit);

        if (meals[index].count === 1) {
          meals.splice(index, 1);
        } else
          meals[index] = {
            count: meals[index].count - 1,
            name: action.meal.name,
            priceUnit: Number(action.meal.priceUnit),
            priceTotal: meals[index].priceTotal - Number(action.meal.priceUnit),
          };
        // console.log(meals[index]);

        stateToUpdate.meals = meals;
        return stateToUpdate;
      }
    });
    return stateToUpdate;
  } else {
    return stateToUpdate;
  }
};

export default cartReducer;
