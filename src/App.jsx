import { useState, useRef } from "react";
import { nanoid } from "nanoid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Items from "./components/Items";
import Form from "./components/Form";
import { groceryItems } from "./data/grocery-items";
import "./App.css";

const getLocalStorage = () => {
  const list = localStorage.getItem("grocery-list");
  if (list) {
    return JSON.parse(list);
  }
  return groceryItems;
};

const setLocalStorage = (items) => {
  localStorage.setItem("grocery-list", JSON.stringify(items));
};

const App = () => {
  const [items, setItems] = useState(getLocalStorage);
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

  const removeItem = (itemId) => {
    const newItems = items.filter((item) => item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
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
      <Items items={items} removeItem={removeItem} setEditId={setEditId} />
    </section>
  );
};

export default App;