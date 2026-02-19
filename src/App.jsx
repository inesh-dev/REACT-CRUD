import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);
  const getLocalStorage = () => {
  let list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list);
  }
  return [];
};

const setLocalStorage = (items) => {
  localStorage.setItem("grocery-list", JSON.stringify(items));
};

const initialList = getLocalStorage(initialList);
   const [editId, setEditId] = useState(null);
  const inputRef = useRef(null);
const updateItemName = (newName) => {
    const newItems = items.map((item) => {
      if (item.id === editId) {
        return { ...item, name: newName };
      }
      return item;
    });


    setItems(newItems);
    setEditId(null);
    setLocalStorage(newItems);
    toast.success("item updated");
  };

  const editCompleted = (itemId) => {
    // ...
    setLocalStorage(newItems);
  };

 

  

  const removeItem = (itemId) => {
     setLocalStorage(newItems);
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };


  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    };
    const newItems = [...items, newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success("grocery item added");
  };

    return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Form
        addItem={addItem}
        updateItemName={updateItemName}
        editItemId={editId}
        itemToEdit={items.find((item) => item.id === editId)}
        inputRef={inputRef}
      />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
        setEditId={setEditId}
      />
    </section>
  );
}

export default App;