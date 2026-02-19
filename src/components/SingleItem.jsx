import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItems.css";

const SingleItem = ({ item, removeItem, setEditId }) => {
  return (
    <div className="single-item">
      <p className="item-name">{item.name}</p>
      <div className="item-actions">
        <button
          className="btn icon-btn remove-btn"
          type="button"
          onClick={() => removeItem(item.id)}
        >
          <FiTrash2 size={18} />
        </button>
        <button
          className="btn icon-btn"
          type="button"
          onClick={() => setEditId(item.id)}
        >
          <FiEdit size={18} />
        </button>
      </div>
    </div>
  );
};

export default SingleItem;