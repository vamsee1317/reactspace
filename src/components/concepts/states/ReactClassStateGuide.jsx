import React, { Component } from "react";

export default class ReactClassStateGuide extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      username: "",
      products: [],
      loading: false,
    };
  }

  // Updating state example
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Controlled input example
  handleInputChange = (e) => {
    this.setState({ username: e.target.value });
  };

  // API example (componentDidMount lifecycle)
  componentDidMount() {
    this.fetchProducts();
  }

  async fetchProducts() {
    this.setState({ loading: true });
    try {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");
      const data = await response.json();
      this.setState({ products: data });
    } catch (error) {
      console.error("API Error:", error);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    return (
      <div className="p-6 max-w-4xl mx-auto bg-white shadow-lg rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Understanding State in Class Components
        </h1>

        {/* What is State */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-indigo-600">1. What is State?</h2>
          <p className="text-gray-700 leading-relaxed">
            State is a built-in object that stores dynamic data inside a class component. When
            state changes, the UI automatically re-renders.
          </p>
        </section>

        {/* Syntax */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-teal-600">2. State Syntax in Class Component</h2>

          <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm">
            <pre>{`class MyComponent extends Component {
  constructor() {
    super();
    this.state = { count: 0 };
  }
}`}</pre>
          </div>

          <h3 className="mt-4 font-semibold text-gray-700">Updating State:</h3>
          <div className="bg-gray-100 p-4 rounded-xl font-mono text-sm mt-2">
            <pre>{`this.setState({ count: this.state.count + 1 })`}</pre>
          </div>
        </section>

        {/* Real-Time Examples */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3 text-purple-600">
            3. Real-Time Production Examples
          </h2>

          {/* Counter Example */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
            <h3 className="font-semibold mb-2">Counter Example (UI update based on state)</h3>
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              onClick={this.handleIncrement}
            >
              Increment Count ({this.state.count})
            </button>
          </div>

          {/* Input Example */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner mb-4">
            <h3 className="font-semibold mb-2">Controlled Input Example</h3>
            <input
              className="border p-2 rounded"
              type="text"
              placeholder="Enter username"
              value={this.state.username}
              onChange={this.handleInputChange}
            />
            <p className="mt-2 text-gray-700">Hello, {this.state.username}</p>
          </div>

          {/* API Example */}
          <div className="bg-gray-50 p-4 rounded-xl shadow-inner">
            <h3 className="font-semibold mb-2">Fetching API Data</h3>

            {this.state.loading ? (
              <p className="text-teal-700 font-semibold">Loading products...</p>
            ) : (
              <ul className="list-disc ml-6">
                {this.state.products.map((product) => (
                  <li key={product.id} className="text-gray-700">
                    {product.title}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>

        {/* Notes */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 text-red-600">4. Important Notes</h2>
          {/* <ul className="list-disc ml-6 text-gray-700 leading-relaxed">
            <li><strong>Never modify state directly:</strong> ❌ this.state.count++</li>
            <li><strong>Always use setState():</strong> ✔ this.setState({{ count: this.state.count + 1 }})</li>
            <li>State updates are <strong>asynchronous</strong> and trigger re-render.</li>
            <li>Works with lifecycle methods like <strong>componentDidMount, componentDidUpdate, componentWillUnmount</strong></li>
          </ul> */}
        </section>
      </div>
    );
  }
}
