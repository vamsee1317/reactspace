import React, { useEffect, useState } from "react";

export default function ReactUseEffectGuide() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  // Example 1: Runs on every render when count changes
  useEffect(() => {
    console.log("Counter updated:", count);
  }, [count]);

  // Example 2: API call, runs only on component mount
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    setLoading(true);
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        Understanding useEffect Hook
      </h1>

      {/* Theory */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-indigo-600">1. What is useEffect?</h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>useEffect</strong> is a React Hook that allows you to perform side effects in functional components,
          such as API calls, timers, event listeners, updating document titles etc.
        </p>
        <p className="mt-2 text-gray-700">
          It replaces lifecycle methods like <strong>componentDidMount</strong>, <strong>componentDidUpdate</strong>,
          and <strong>componentWillUnmount</strong>.
        </p>
      </section>

      {/* Syntax */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-teal-600">2. Syntax</h2>
        <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm">
          <pre>{`useEffect(() => {
   // Side Effect Code Here
}, [dependency]);`}</pre>
        </div>

        <ul className="list-disc ml-6 text-gray-700 mt-3">
          <li><strong>No dependency []</strong> → Runs only once (component mount)</li>
          <li><strong>With dependencies [data]</strong> → Runs on dependency change</li>
          <li><strong>Without dependency</strong> → Runs on every render</li>
        </ul>
      </section>

      {/* Real-Time Example */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3 text-purple-600">3. Real-Time Production Example</h2>

        <p className="text-gray-700 mb-3">Updating UI & fetching data:</p>

        <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
          <h3 className="font-semibold mb-2">Counter Example (dependency update)</h3>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg"
            onClick={() => setCount(count + 1)}
          >
            Increment Count ({count})
          </button>
        </div>

        <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
          <h3 className="font-semibold mb-2">API Fetch Example (runs on mount)</h3>

          {loading ? (
            <p className="text-teal-700 font-semibold">Loading users...</p>
          ) : (
            <ul className="list-disc ml-6">
              {users.map((user) => (
                <li key={user.id} className="text-gray-700">{user.name}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </div>
  );
}
