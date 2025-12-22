import React, { useState } from "react";


export default function ReactAxiosConcept() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [error, setError] = useState("");

  // 📡 Axios API Call
  const fetchUsers = async () => {
    setStatus("loading");

    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setUsers(response.data);
      setStatus("success");
    } catch (err) {
      setError("Failed to fetch users");
      setStatus("error");
    }
  };

  // 🔹 Element Variable for Conditional Rendering
  let content;
  if (status === "loading") {
    content = <p className="text-blue-600">⏳ Fetching Users...</p>;
  } else if (status === "success") {
    content = (
      <ul className="space-y-2">
        {users.map((user) => (
          <li
            key={user.id}
            className="p-3 bg-gray-100 rounded-lg border"
          >
            <p className="font-semibold">{user.name}</p>
            <p className="text-sm text-gray-600">{user.email}</p>
          </li>
        ))}
      </ul>
    );
  } else if (status === "error") {
    content = <p className="text-red-600">❌ {error}</p>;
  } else {
    content = (
      <p className="text-gray-600">
        Click the button to load users 📡
      </p>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl border">
      <h1 className="text-3xl font-bold mb-4">🌐 Axios in React</h1>

      <p className="text-gray-700 mb-4">
        Axios is used to <b>communicate with backend APIs</b>.  
        Just like ordering food 🍔 — request goes to server, response comes back.
      </p>

      <h2 className="text-xl font-bold mb-2">📌 Axios Concepts Covered</h2>

      <ol className="list-decimal ml-5 space-y-2 text-gray-800">
        <li>Making API calls using Axios</li>
        <li>Handling Loading state</li>
        <li>Handling Success response</li>
        <li>Handling Error cases</li>
        <li>Rendering API data in UI</li>
      </ol>

      <hr className="my-4" />

      {/* 🔘 Fetch Button */}
      <button
        onClick={fetchUsers}
        className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded-lg"
      >
        Fetch Users
      </button>

      {/* 📊 API Result */}
      <div className="mt-4">{content}</div>
    </div>
  );
}
