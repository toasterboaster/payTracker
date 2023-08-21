import React from 'react'
import './App.css'
import Calculator from './Calculator'
import Results from './Results'


export default function App() {
  return (
    <main>
      <div className='container'>
        <div className="title">
          <h1>This is the Title</h1>  
        </div>
      <Calculator />
      <Results />
      </div>
    </main>
  )
}
