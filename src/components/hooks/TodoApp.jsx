import React, { useEffect, useState } from 'react'

export default function TodoApp() {

  const [todos, setTodos] = useState([]);

  const ApiEndPoint = "https://jsonplaceholder.typicode.com/todos";

  useEffect(() => {
    async function getTodos() {
      fetch(ApiEndPoint)
        .then(res => res.json())
        .then(data => setTodos(data))
        .catch(err => console.log(err));
    }

    getTodos();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600">
        Todo List Table
      </h2>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-3 text-left font-semibold">S.No</th>
            <th className="border p-3 text-left font-semibold">Title</th>
            <th className="border p-3 text-left font-semibold">Status</th>
          </tr>
        </thead>

        <tbody>
          {todos.map((item) => (
            <tr key={item.id} className="hover:bg-gray-100 transition">
              <td className="border p-3">{item.id}</td>
              <td className="border p-3">{item.title}</td>
              <td className="border p-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium 
                  ${item.completed ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                  {item.completed ? "Completed" : "Pending"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
