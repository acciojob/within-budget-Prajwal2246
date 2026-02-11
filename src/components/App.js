import React, { useEffect, useState } from "react";
import "./../styles/App.css";

const App = () => {
  const [input, setInput] = useState("");

  const items = [
    { name: "Apple", price: 20 },
    { name: "Banana", price: 10 },
    { name: "Neutella", price: 30 },
    { name: "Razor", price: 5 },
    { name: "CornFlakes", price: 15 },
    { name: "SoundBar", price: 50 },
    { name: "Iphone", price: 80 },
  ];

  const budget = Number(input);

  return (
    <div>
      {/* Do not remove the main div */}
      <input
        type="number"
        placeholder="enter value"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <p>Items you can buy are in green color</p>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td
                style={{
                  color: budget && item.price <= budget ? "green" : "red",
                }}
              >
                {item.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
