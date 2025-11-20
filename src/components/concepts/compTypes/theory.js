// ==========================================================
//                🔹 React Components - Theory 🔹
// ==========================================================

// What is a Component?
// --------------------
// A Component in React is a reusable, independent piece of UI.
// Each component contains its own structure (JSX), logic (JavaScript),
// and styling (CSS). Components make applications modular,
// scalable, and easier to maintain.
//
// React applications are built entirely using components.


// Why Components?
// ---------------
// ✔ Reusability – write once, use in multiple places
// ✔ Maintainability – small pieces of UI are easier to manage
// ✔ Separation of concerns – UI + behavior packaged together
// ✔ Better performance – React renders only updated components


// ==========================================================
//            🔹 Types of Components in React 🔹
// ==========================================================


// 1️⃣ Functional Components
// -------------------------
// Functional components are plain JavaScript functions
// that return JSX (UI). They are simple, easy to write,
// and preferred in modern React development.
//
// After the introduction of React Hooks (React 16.8),
// functional components can manage state, lifecycle,
// and other features without needing classes.


// Syntax (Normal Function Component)
import React from "react";

export function ComponentName() {
  return (
    <div>
      {/* JSX UI goes here */}
    </div>
  );
}

// export default ComponentName;


// Syntax (Arrow Function Component)
import React from "react";

export const ComponentName = () => {
  return (
    <div>
      {/* JSX UI goes here */}
    </div>
  );
};


// Interview Notes:
// ----------------
// - Lightweight and easy to understand
// - Uses hooks such as useState, useEffect, useRef, etc.
// - Recommended modern approach for building components


// ==========================================================
// 2️⃣ Class Components
// ==========================================================
// Class components are ES6 classes that extend React.Component.
// They must include a render() method that returns JSX.
//
// Before hooks existed, class components were the only way
// to use state and lifecycle methods like componentDidMount,
// componentDidUpdate, componentWillUnmount.

import React, { Component } from "react";

class ClassName extends Component {
  constructor() {
    super();
    // State can be initialized here (this.state = {...})
  }

  render() {
    return (
      <div>
        {/* JSX UI goes here */}
      </div>
    );
  }
}

export default ClassName;


// Interview Notes:
// ----------------
// - Still used in older/legacy projects
// - Provides lifecycle methods
// - Verbose compared to functional components


// ==========================================================
// 🔹 Functional vs Class Components (Interview Comparison)
// ==========================================================
//
// Functional Components:
// ----------------------
// ✔ Simple and clean syntax
// ✔ Better performance
// ✔ Hooks make them powerful
// ✔ Preferred in modern React
//
// Class Components:
// -----------------
// ✔ Useful in legacy codebases
// ✔ Supports lifecycle methods (older style)
// ✔ More boilerplate compared to functions


// Final Interview Line:
// ---------------------
// "Modern React development primarily uses functional components 
// with hooks because they are cleaner, more powerful, and offer
// better performance than class components."
