function formatDate(value){
    const date = new Date(value)
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`
}

function FoodListItem({item}){
    return(
        <div>
            <img src={item.imgUrl}></img>
            <div>
                <h1>{item.title}</h1>                
                <p>{item.calorie}</p>
                <p>{formatDate(item.createdAt)}</p>
                <p>{item.content}</p>
            </div>
        </div>

    )
}

function FoodList({items}){
    return( <ul>{items.map((item) =>{
        return <li><FoodListItem item={item} /></li>
    })}
    </ul>
    )
}

//title content calorie imgUrl createdAt updatedAt 

export default FoodList;