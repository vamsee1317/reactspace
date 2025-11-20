import React from "react";

export default function ReactComponentsGuide() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React Components – Types, Syntax & Real-Time Examples
      </h1>

      {/* What are Components */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
          1. What is a Component?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          A <strong>component</strong> is a reusable piece of UI. Each component has its own
          structure, logic, and styling. React apps are built by combining multiple
          components like Lego blocks.
        </p>
      </section>

      {/* Types of Components */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          2. Types of Components
        </h2>

        <ul className="list-disc ml-6 text-gray-700">
          <li className="mb-2">
            <strong>Functional Components</strong> – simple JavaScript functions that return JSX.
          </li>
          <li className="mb-2">
            <strong>Class Components</strong> – ES6 classes that contain render() method (Older).
          </li>
        </ul>

        {/* Syntax Comparison */}
        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <h3 className="font-bold mb-2 text-gray-800">Functional Component Syntax</h3>
          <pre className="font-mono text-sm overflow-auto">
{`function Welcome() {
  return <h2>Hello User</h2>;
}

export default Welcome;`}
          </pre>
        </div>

        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <h3 className="font-bold mb-2 text-gray-800">Class Component Syntax</h3>
          <pre className="font-mono text-sm overflow-auto">
{`import React, { Component } from "react";

class Welcome extends Component {
  render() {
    return <h2>Hello User</h2>;
  }
}

export default Welcome;`}
          </pre>
        </div>
      </section>

      {/* JSX */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-600 mb-3">3. JSX Syntax</h2>

        <p className="text-gray-700 leading-relaxed">
          JSX allows writing HTML-like code inside JavaScript. It makes UI easier to build.
        </p>

        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <pre className="font-mono text-sm overflow-auto">
{`function Demo() {
  const name = "Vamsi";
  return <h3>Welcome {name}</h3>;
}`}
          </pre>
        </div>
      </section>

      {/* Real-time Usage Examples */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-3">
          4. Real-Time Usage Examples
        </h2>

        {/* Example 1 */}
        <div className="mb-6 bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 1: Button Component</h3>
          <pre className="font-mono text-sm overflow-auto">
{`export function Button({ label }) {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
      {label}
    </button>
  );
}

// Usage:
<Button label="Login" />`}
          </pre>
        </div>

        {/* Example 2 */}
        <div className="mb-6 bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 2: Card Component</h3>
          <pre className="font-mono text-sm overflow-auto">
{`function UserCard({ name, age }) {
  return (
    <div className="p-4 border rounded-xl shadow">
      <h3 className="text-lg font-semibold">{name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

// Usage:
<UserCard name="John Doe" age={28} />`}
          </pre>
        </div>

        {/* Example 3 */}
        <div className="mb-6 bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 3: List Rendering</h3>
          <pre className="font-mono text-sm overflow-auto">
{`const skills = ["React", "Node", "MongoDB"];

function SkillsList() {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index} className="text-blue-600">{skill}</li>
      ))}
    </ul>
  );
}

// Usage:
<SkillsList />`}
          </pre>
        </div>

        {/* Example 4 */}
        <div className="mb-6 bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 4: Props + Reusability</h3>
          <pre className="font-mono text-sm overflow-auto">
{`function Greeting({ user }) {
  return <h2>Hello {user}</h2>;
}

// Usage:
<Greeting user="Vamsi" />`}
          </pre>
        </div>

        {/* Example 5 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 5: Small Dashboard Component</h3>
          <pre className="font-mono text-sm overflow-auto">
{`function Dashboard({ totalUsers, activeUsers }) {
  return (
    <div className="p-4 bg-green-100 rounded-xl">
      <h3 className="font-bold">Dashboard</h3>
      <p>Total Users: {totalUsers}</p>
      <p>Active Users: {activeUsers}</p>
    </div>
  );
}

// Usage:
<Dashboard totalUsers={1200} activeUsers={958} />`}
          </pre>
        </div>

      </section>
    </div>
  );
}
