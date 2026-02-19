import SingleItem from "./SingleItem";
import "./Items.css";

const Items = ({ items, removeItem, setEditId }) => {
  return (
    <div className="items">
      {items.map((item) => {
        return (
          <SingleItem
            key={item.id}
            item={item}
            removeItem={removeItem}
            setEditId={setEditId}
          />
        );
      })}
    </div>
  );
};

export default Items;