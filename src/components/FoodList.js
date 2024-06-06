function formatDate(value) {
  const date = new Date(value);
  return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
}

function FoodListItem({ item, onDelete }) {
  const handleDeleteClick = () => onDelete(item.id);
  return (
    <div>
      <img src={item.imgUrl}></img>
      <div>
        <h1>{item.title}</h1>
        <p>{item.calorie}</p>
        <p>{formatDate(item.createdAt)}</p>
        <p>{item.content}</p>
        <button onClick={handleDeleteClick}>Delete</button>
      </div>
    </div>
  );
}

function FoodList({ items, onDelete }) {
  return (
    <ul>
      {items.map((item) => {
        return (
          <li key={item.id}>
            <FoodListItem item={item} onDelete={onDelete} />
          </li>
        );
      })}
    </ul>
  );
}

//title content calorie imgUrl createdAt updatedAt

export default FoodList;
