import React, { useState } from "react";

export default function ReactConditionalRendering() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [cartItems, setCartItems] = useState(2);
  const [showMessage, setShowMessage] = useState(true);
  const [status, setStatus] = useState("loading");

  // 4️⃣ Element Variable example
  let message;
  if (status === "loading") {
    message = <p className="text-blue-600">⏳ Loading...</p>;
  } else if (status === "success") {
    message = <p className="text-green-600">✅ Data Loaded Successfully</p>;
  } else {
    message = <p className="text-red-600">❌ Failed to load data</p>;
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl border">
      <h1 className="text-3xl font-bold mb-4">🔀 Conditional Rendering in React</h1>

      <p className="text-gray-700 mb-4">
        Conditional Rendering allows us to control <b>what UI should appear based on conditions</b>.
        Just like IF statements in real life — "If it rains, take an umbrella ☔", 
        "If logged in, show dashboard".
      </p>

      <h2 className="text-xl font-bold mb-2">📌 Methods of Conditional Rendering in React</h2>

      <ol className="list-decimal ml-5 space-y-2 text-gray-800">
        <li>
          <b>IF / ELSE:</b> used when we need to return different UI elements based on state.
        </li>
        <li>
          <b>Ternary operator ( ? : ):</b> for inline conditions inside JSX.
        </li>
        <li>
          <b>Short-circuit evaluation ( && ):</b> only render something when the condition is true.
        </li>
        <li>
          <b>Element Variables:</b> store JSX in a variable and return it conditionally.
        </li>
      </ol>

      <hr className="my-4" />

      {/* 🔹 1. IF / ELSE example */}
      <h3 className="text-lg font-semibold">1️⃣ IF / ELSE Example</h3>
      <div className="mb-3">
        {isLoggedIn ? (
          <p className="text-green-600 font-medium">Welcome User 😊</p>
        ) : (
          <p className="text-red-600 font-medium">Please Login 🙏</p>
        )}

        <button
          onClick={() => setIsLoggedIn(!isLoggedIn)}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-lg"
        >
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      <hr className="my-4" />

      {/* 🔹 2. Ternary operator */}
      <h3 className="text-lg font-semibold">2️⃣ Ternary Operator ( ? : )</h3>
      <p className="text-gray-800">
        {cartItems > 0 ? `🛒 Cart Items: ${cartItems}` : "Cart is Empty"}
      </p>
      <button
        className="mt-2 px-4 py-2 bg-purple-600 text-white rounded-lg"
        onClick={() => setCartItems(cartItems + 1)}
      >
        Add to Cart
      </button>

      <hr className="my-4" />

      {/* 🔹 3. Short-circuit && */}
      <h3 className="text-lg font-semibold">3️⃣ Short-Circuit ( && ) Example</h3>
      {showMessage && (
        <p className="text-yellow-600 font-medium">⚠ Update your profile!</p>
      )}
      <button
        onClick={() => setShowMessage(!showMessage)}
        className="mt-2 px-4 py-2 bg-gray-700 text-white rounded-lg"
      >
        Toggle Message
      </button>

      <hr className="my-4" />

      {/* 🔹 4. Element Variables */}
      <h3 className="text-lg font-semibold">4️⃣ Element Variable Example</h3>
      {message}
      <div className="flex gap-3 mt-3">
        <button
          onClick={() => setStatus("loading")}
          className="px-3 py-2 bg-blue-600 text-white rounded-lg"
        >
          Loading
        </button>
        <button
          onClick={() => setStatus("success")}
          className="px-3 py-2 bg-green-600 text-white rounded-lg"
        >
          Success
        </button>
        <button
          onClick={() => setStatus("error")}
          className="px-3 py-2 bg-red-600 text-white rounded-lg"
        >
          Error
        </button>
      </div>
    </div>
  );
}
