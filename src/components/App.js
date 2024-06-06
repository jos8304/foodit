import FoodList from "./FoodList";
//import mockItems from "../mock.json";
import { useEffect, useState } from "react";
import { getFoods } from "../api";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleCalorieClick = () => setOrder("calorie");
  const handleNewClick = () => setOrder("createdAt");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async () => {
    const { foods } = await getFoods();
    setItems(foods);
  };

  useEffect(() => {
    handleLoad();
  }, []);

  return (
    <div>
      <div>
        <button onClick={handleNewClick}>최신순</button>
        <button onClick={handleCalorieClick}>칼로리순</button>
      </div>
      <FoodList items={sortedItems} onDelete={handleDelete} />
      <button onClick={handleLoad}>불려오기</button>
    </div>
  );
}

export default App;
