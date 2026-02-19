import { FiEdit, FiTrash2 } from "react-icons/fi";
import "./SingleItem.css";

const SingleItem = ({ item, editCompleted, removeItem,setEditId }) => {
  return (
    <div className="single-item">
     
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
  );
};

export default SingleItem;