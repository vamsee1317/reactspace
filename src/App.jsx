import React from 'react'
import ReactSetupGuide from './components/concepts/introduction/ReactSetupGuide'
import ReactComponentsGuide from './components/concepts/compTypes/ReactComponentsGuide'
import ReactPropsGuide from './components/concepts/props/ReactPropsGuide'
import ReactStateGuide from './components/concepts/states/ReactStateGuide'
import './App.css'

export default function App() {
  return (
    <div className="app-container">
      
      <div className="component-block">
        <ReactSetupGuide />
      </div>

      <div className="component-block">
        <ReactComponentsGuide />
      </div>

      <div className="component-block">
        <ReactPropsGuide />
      </div>

      <div className="component-block">
        <ReactStateGuide />
      </div>

    </div>
  )
}
