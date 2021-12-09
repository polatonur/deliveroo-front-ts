import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import * as z from "zod";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Loading from "./components/Loading";
import CartMobile from "./components/CartMobile";

const MealSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  price: z.string(),
  picture: z.string(),
  popular: z.boolean(),
});

export type mealSingle = z.infer<typeof MealSchema>;

const MealCategorySchema = z.object({
  name: z.string(),
  meals: z.array(MealSchema),
});

export type MealType = z.infer<typeof MealCategorySchema>;

const DataSchema = z.object({
  categories: z.array(MealCategorySchema),
  restaurant: z.object({
    name: z.string(),
    description: z.string(),
    picture: z.string(),
  }),
});

export type Data = z.infer<typeof DataSchema>;

function App() {
  const [data, setData] = useState<Data | null>(null);

  useEffect(() => {
    fetch("https://deliveroo-back.api.dotonur.dev")
      .then((res) => res.json())
      .then((data: Data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  return !data ? (
    <Loading />
  ) : (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Hero
          name={data.restaurant.name}
          descriptiom={data.restaurant.description}
          picture={data.restaurant.picture}
        />
        <Menu categories={data.categories} />
        <CartMobile />
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
