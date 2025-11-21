import React, { useState } from 'react'

export default function Counter() {

    const [count, setCount] = useState(0);

    const [formData, setFormData] = useState("");

    const handleChange = (e)=>{
        setFormData(e.target.value);
    }

    const handleDecrement = () => {
        setCount((prev)=> prev - 1);
    }

    const handleIncrement = () => {
        setCount((prev)=> prev + 1);
    }

  return (
    <div className="bg-white/30 backdrop-blur-md shadow-xl border border-white/40 p-8 rounded-2xl w-fit mx-auto mt-10 text-center">

      <input 
        type="text" 
        value={formData} 
        onChange={handleChange}
        className="w-64 p-3 mb-5 border border-gray-300 rounded-xl outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-300 transition"
        placeholder="Enter text"
      />

      <p className="mb-6 text-gray-700 border border-gray-300 rounded-xl p-3">{formData}</p>
      
      <h2 className="text-2xl font-bold text-gray-800 mb-6 tracking-wide">Counter Example</h2>

      <div className="flex items-center gap-6">
        <button className="px-5 py-2.5 bg-red-500 text-white text-2xl font-bold rounded-xl hover:bg-red-600 transition-all" onClick={handleDecrement}>
          -
        </button>

        <h2 className="text-4xl font-bold min-w-[70px] text-center text-gray-900">
          {count}
        </h2>

        <button className="px-5 py-2.5 bg-green-500 text-white text-2xl font-bold rounded-xl hover:bg-green-600 transition-all" onClick={handleIncrement}>
          +
        </button>
      </div>

    </div>
  )
}
