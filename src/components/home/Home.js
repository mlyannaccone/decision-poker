import React from 'react'
import ExampleComponent from '../exampleComponent/ExampleComponent'
import './Home.css'

function Home () {
  return (
    <div className="home-container">
        <ExampleComponent />
        <ExampleComponent />
        <ExampleComponent />
    </div>
  )
}

export default Home
