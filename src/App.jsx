import { useState } from "react";
import "./App.css";

function App() {
  const [productCount, setProductCount] = useState([0, 0, 0, 0, 0]);

  function handlePlus(index) {
    const arr = [...productCount];
    arr[index] = arr[index] + 1;
    setProductCount([...arr]);
  }

  function handleMinus(index) {
    const arr = [...productCount];
    arr[index] = arr[index] - 1;
    setProductCount([...arr]);
  }

  const products = ["Oranges", "Apples", "Kiwifruit", "Grapes", "Strawberries"];
  return (
    <>
      <ul>
        {products.map((product, index) => (
          <li key={product}>
            <span>{product}</span> - <span>Votes: {productCount[index]}</span>
            <button onClick={() => handlePlus(index)}>+</button>
            <button onClick={() => handleMinus(index)}>-</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
