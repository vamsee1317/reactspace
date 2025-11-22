import React from 'react'
import ReactSetupGuide from './components/concepts/introduction/ReactSetupGuide'
import ReactComponentsGuide from './components/concepts/compTypes/ReactComponentsGuide'
import ReactPropsGuide from './components/concepts/props/ReactPropsGuide'
import ReactStateGuide from './components/concepts/states/ReactStateGuide'
import './App.css'
import Counter from './components/concepts/states/Counter'
import ReactClassStateGuide from './components/concepts/states/ReactClassStateGuide'
import ReactUseEffectGuide from './components/hooks/ReactUseEffectGuide'
import TodoApp from './components/hooks/TodoApp'
import ReactListsKeysDemo from './components/concepts/listsKeys/ReactListsKeysDemo'
import ReactConditionalRendering from './components/concepts/cr/ReactConditionalRendering'

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
        <Counter />
        <ReactClassStateGuide />
      </div>

      <div className="component-block">
          <ReactUseEffectGuide />
          <TodoApp />
      </div>

      <div className="component-block">
        <ReactListsKeysDemo />
      </div>

      <div className="component-block">
        <ReactConditionalRendering />
      </div>

    </div>
  )
}
