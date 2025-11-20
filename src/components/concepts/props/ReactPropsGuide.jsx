import React from "react";

export default function ReactPropsGuide() {
  return (
    <div className="p-6 max-w-4xl mx-auto bg-white shadow-xl rounded-2xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
        React Props – Clear Guide + Production Usage
      </h1>

      {/* What are Props */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-indigo-600 mb-3">
          1. What are Props?
        </h2>
        <p className="text-gray-700 leading-relaxed">
          <strong>Props</strong> allow components to receive data from their parent.  
          They make components reusable, dynamic, and configurable.
        </p>
        <p className="text-gray-700 mt-2">
          Props are <strong>read-only</strong> — you cannot change them inside the component.
        </p>
      </section>

      {/* Passing + Receiving Props */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-green-600 mb-3">
          2. Passing & Receiving Props
        </h2>

        {/* Passing */}
        <div className="bg-gray-100 p-4 rounded-xl">
          <h3 className="font-bold text-gray-800 mb-2">Passing Props</h3>
          <pre className="font-mono text-sm overflow-auto">
{`<Welcome name="Vamsi" age={25} />`}
          </pre>
        </div>

        {/* Receiving */}
        <div className="bg-gray-100 p-4 rounded-xl mt-4">
          <h3 className="font-bold text-gray-800 mb-2">Receiving Props</h3>
          <pre className="font-mono text-sm overflow-auto">
{`function Welcome({ name, age }) {
  return <h2>Hello {name}, Age: {age}</h2>;
}`}
          </pre>
        </div>
      </section>

      {/* Default Props */}
      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-purple-600 mb-3">
          3. Default Props
        </h2>
        <div className="bg-gray-100 p-4 rounded-xl">
          <pre className="font-mono text-sm overflow-auto">
{`function User({ name = "Guest" }) {
  return <h3>Welcome {name}</h3>;
}

// Usage:
<User />`}
          </pre>
        </div>
      </section>

      {/* PRODUCTION LEVEL EXAMPLES */}
      <section>
        <h2 className="text-2xl font-semibold text-red-600 mb-4">
          4. Real Production-Level Examples
        </h2>

        {/* Example 1 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-8">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 1: Reusable Button Component (Real Project)</h3>
          <p className="text-gray-700 mb-3">
            Used in login forms, modals, dashboards.
          </p>
          <pre className="font-mono text-sm overflow-auto">
{`function Button({ text, onClick, type = "primary" }) {
  const base = "px-4 py-2 rounded-lg font-medium";

  const styles = {
    primary: base + " bg-blue-600 text-white",
    secondary: base + " bg-gray-200 text-black",
  };

  return <button className={styles[type]} onClick={onClick}>{text}</button>;
}

// Usage:
<Button text="Login" onClick={handleLogin} />
<Button text="Cancel" type="secondary" />`}
          </pre>
        </div>

        {/* Example 2 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-8">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 2: API Data Rendering (Common in Dashboards)</h3>
          <p className="text-gray-700 mb-3">
            We pass API response data to child components.
          </p>

          <pre className="font-mono text-sm overflow-auto">
{`function UserCard({ user }) {
  return (
    <div className="p-4 border rounded-xl shadow">
      <h3 className="text-lg font-semibold">{user.name}</h3>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
    </div>
  );
}

// Parent fetching data:
function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <div>
      {users.map(u => (
        <UserCard key={u.id} user={u} />
      ))}
    </div>
  );
}`}
          </pre>
        </div>

        {/* Example 3 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-8">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 3: Props in E-commerce Cards</h3>
          <p className="text-gray-700 mb-3">
            Used in Flipkart, Amazon UI.
          </p>
          <pre className="font-mono text-sm overflow-auto">
{`function ProductCard({ title, price, image }) {
  return (
    <div className="p-4 border rounded-xl shadow">
      <img src={image} className="h-32 mx-auto" />
      <h3 className="font-semibold mt-2">{title}</h3>
      <p className="text-green-600 font-bold">₹{price}</p>
    </div>
  );
}

// Usage:
<ProductCard 
  title="Boat Headphones"
  price={1299}
  image="/assets/boat.png"
/>`}
          </pre>
        </div>

        {/* Example 4 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner mb-8">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 4: Passing Functions as Props</h3>
          <p className="text-gray-700 mb-3">
            Used for delete, edit, onClick actions.
          </p>
          <pre className="font-mono text-sm overflow-auto">
{`function TodoItem({ todo, onDelete }) {
  return (
    <div className="flex justify-between p-3 border rounded-lg">
      <span>{todo.title}</span>
      <button 
        className="text-red-600"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

// Usage:
<TodoItem todo={item} onDelete={handleDelete} />`}
          </pre>
        </div>

        {/* Example 5 */}
        <div className="bg-gray-50 p-5 rounded-xl shadow-inner">
          <h3 className="font-bold mb-2 text-gray-800">📌 Example 5: Reusable Layout Component</h3>
          <p className="text-gray-700 mb-3">
            Used in dashboards, admin panels, portals.
          </p>
          <pre className="font-mono text-sm overflow-auto">
{`function PageLayout({ title, children }) {
  return (
    <div className="p-6 bg-gray-100 rounded-xl">
      <h1 className="text-xl font-bold mb-4">{title}</h1>
      <div>{children}</div>
    </div>
  );
}

// Usage:
<PageLayout title="User Dashboard">
  <DashboardCards />
  <RecentActivities />
</PageLayout>`}
          </pre>
        </div>

      </section>
    </div>
  );
}
