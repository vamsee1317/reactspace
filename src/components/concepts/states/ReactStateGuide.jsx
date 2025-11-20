import React, { useState } from "react";

export default function ReactStateGuide() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md space-y-6">

      {/* Title */}
      <h2 className="text-3xl font-bold text-blue-600">React State</h2>

      {/* What is State */}
      <section>
        <h3 className="text-xl font-semibold mb-2">What is State?</h3>
        <p className="text-gray-700 leading-relaxed">
          State is a built-in React concept that allows a component to hold 
          and update its own data. Whenever the state changes, React automatically 
          re-renders the UI. State is used for dynamic data such as counters, 
          input values, toggles, API loading status, etc.
        </p>
      </section>

      {/* Syntax */}
      <section>
        <h3 className="text-xl font-semibold mb-2">State Syntax</h3>

        <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`import { useState } from 'react';

const [stateName, setStateName] = useState(initialValue);`}
        </pre>
      </section>

      {/* Simple Example */}
      <section>
        <h3 className="text-xl font-semibold mb-2">Simple Example</h3>

        <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`const [count, setCount] = useState(0);

function increment() {
  setCount(count + 1);
}`}
        </pre>
      </section>

      {/* Real-time Examples */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Real-Time Production Examples</h3>
        <ul className="list-disc ml-6 text-gray-700 space-y-2">
          <li>Tracking button clicks (analytics)</li>
          <li>Handling form input values</li>
          <li>Show/hide sidebar</li>
          <li>Loader while fetching API</li>
          <li>Dark mode toggle</li>
        </ul>
      </section>

      {/* Practical Production Code Section */}
      <section>
        <h3 className="text-xl font-semibold mb-3">Production Level Examples</h3>

        {/* 1. Button Counter */}
        <div>
          <h4 className="font-semibold mb-1">1. Counter (Tracking User Actions)</h4>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`const [clicks, setClicks] = useState(0);

<button onClick={() => setClicks(clicks + 1)}>
  User Clicked: {clicks} times
</button>`}
          </pre>
        </div>

        {/* 2. Form Handling */}
        <div>
          <h4 className="font-semibold mb-1">2. Form Input Management</h4>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`const [name, setName] = useState("");

<input 
  type="text" 
  value={name} 
  onChange={(e) => setName(e.target.value)}
/>`}
          </pre>
        </div>

        {/* 3. API Loading State */}
        <div>
          <h4 className="font-semibold mb-1">3. API Loading State</h4>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`const [isLoading, setIsLoading] = useState(false);

async function getData() {
  setIsLoading(true);
  const res = await axios.get('/api/users');
  setIsLoading(false);
}` }
          </pre>
        </div>

        {/* 4. Toggle */}
        <div>
          <h4 className="font-semibold mb-1">4. Show/Hide Toggle</h4>
          <pre className="bg-gray-900 text-green-200 p-4 rounded-lg text-sm overflow-x-auto">
{`const [isOpen, setIsOpen] = useState(false);

<button onClick={() => setIsOpen(!isOpen)}>
  Toggle Menu
</button>`}
          </pre>
        </div>
      </section>
    </div>
  );
}
