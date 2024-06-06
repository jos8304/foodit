function FoodList({items}){
    return( <ul>{items.map((item) =>{
        return <li>{item.title}</li>
    })}
    </ul>
    )
}

//title content calorie imgUrl createdAt updatedAt 

export default FoodList;