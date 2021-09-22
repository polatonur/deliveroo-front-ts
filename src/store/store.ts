import cartReducer from "../reducers/cartReducer";
import { createStore } from "redux";

export const store = createStore(
  cartReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export type RootState = ReturnType<typeof store.getState>;
