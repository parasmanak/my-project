import React, { useState } from "react";

function App() {
  const [groceries, setGroceries] = useState([
    { id: 1, name: "Rice", quantity: 2 },
    { id: 2, name: "Milk", quantity: 1 },
    { id: 3, name: "Apples", quantity: 6 },
  ]);
  
  const [newName, setNewName] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  // Adding items
  const addItem = () => {
    if (newName.trim() === "" || newQuantity === "") return;

    const newItem = {
      id: Date.now(), 
      name: newName,
      quantity: parseInt(newQuantity),
    };

    setGroceries([...groceries, newItem]);
    setNewName("");
    setNewQuantity("");
  };

  // Deleting items
  const deleteItem = (id) => {
    setGroceries(groceries.filter((item) => item.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>🛒 Grocery List</h1>

      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Item name"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <input
          type="number"
          placeholder="Quantity"
          value={newQuantity}
          onChange={(e) => setNewQuantity(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={addItem}>Add Item</button>
      </div>

      <ul>
        {groceries.map((item) => (
          <li key={item.id}>
            {item.name} - {item.quantity}
            <button
              onClick={() => deleteItem(item.id)}
              style={{ marginLeft: "10px", color: "red" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
