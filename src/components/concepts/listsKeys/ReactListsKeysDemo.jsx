import React, { useState } from "react";

export default function ReactListsKeysDemo() {
  const [users] = useState([
    { id: 1, name: "Vamsi", role: "Developer" },
    { id: 2, name: "John", role: "UI Designer" },
    { id: 3, name: "Sara", role: "Tester" },
  ]);

  const [products] = useState([
    { id: "p1", title: "Laptop", price: 55000 },
    { id: "p2", title: "Mobile", price: 25000 },
    { id: "p3", title: "Headphones", price: 3500 },
  ]);

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React Lists & Keys Concept
      </h1>

      {/* What are Lists */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">1. What are Lists in React?</h2>
        <p className="text-gray-700 leading-relaxed">
          Lists are used to render multiple data items dynamically using{" "}
          <strong>Array.map()</strong>. Whenever we display dynamic repeated UI,
          we use lists.
        </p>
      </section>

      {/* Keys Explanation */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">2. What are Keys?</h2>
        <p className="text-gray-700">
          <strong>Keys are unique identifiers required to help React identify which list items change,
          are added, or removed.</strong>
        </p>
        <p className="mt-2 text-gray-700">
          Helps React improve performance & avoid unexpected UI behavior.
        </p>
      </section>

      {/* Syntax Example */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-purple-600">3. Basic Syntax Example</h2>

        <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm">
          <pre>{`{array.map((item) => (
  <p key={item.id}>{item.name}</p>
))}`}</pre>
        </div>
      </section>

      {/* Real-Time Production Examples */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-red-600">
          4. Real-Time Examples
        </h2>

        {/* Example Users List */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
          <h3 className="font-semibold mb-2">Team Members (map & keys example)</h3>
          <ul className="list-disc ml-6">
            {users.map((user) => (
              <li key={user.id} className="text-gray-700">
                {user.name} — <span className="italic">{user.role}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Example Products List */}
        <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
          <h3 className="font-semibold mb-2">Product Card Example</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {products.map((item) => (
              <div key={item.id} className="border p-3 rounded-lg shadow hover:shadow-md">
                <h4 className="font-bold text-blue-600">{item.title}</h4>
                <p className="text-gray-700 font-semibold">₹ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mistakes */}
      <section>
        <h2 className="text-2xl font-semibold mb-3 text-orange-600">5. Common Mistakes</h2>
        <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
          <li>❌ Using array index as key (e.g., key={`index`}) — causes bugs when list updates</li>
          <li>❌ Using duplicate keys</li>
          <li>✔ Always use unique id as key (e.g., product id, user id)</li>
        </ul>
      </section>
    </div>
  );
}
