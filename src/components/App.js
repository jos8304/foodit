import FoodList from "./FoodList"
import items from '../mock.json'
import { useState } from "react";

function App() {
    const [order, setOrder] = useState('createdAt')
    const sortedItems = items.sort((a, b) => b[order] - a[order]);

    const handleCalorieClick = () => setOrder('calorie')
    const handleNewClick = () => setOrder('createdAt')

    return (
        <div>
            <div>
                <button onClick={handleNewClick}>최신순</button>
                <button onClick={handleCalorieClick}>칼로리순</button>
            </div>
            <FoodList items={sortedItems} />
        </div>
    ) 
}



export default App