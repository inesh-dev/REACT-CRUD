import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const App = () => {
  const [items, setItems] = useState(groceryItems);


  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    toast.success("item deleted");
  };

  return (
    <section className="section-center">
      <ToastContainer position="top-center" />
      <Items
        items={items}
        editCompleted={editCompleted}
        removeItem={removeItem}
      />
    </section>
  );
};

export default App;