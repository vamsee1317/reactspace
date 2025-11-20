import React from 'react'
import ReactSetupGuide from './components/concepts/introduction/ReactSetupGuide'
import './App.css'
import ReactComponentsGuide from './components/concepts/compTypes/ReactComponentsGuide'
import ReactPropsGuide from './components/concepts/props/ReactPropsGuide'

export default function App() {
  return (
    <div>
      <ReactSetupGuide />
      <ReactComponentsGuide />
      <ReactPropsGuide />
    </div>
  )
}
