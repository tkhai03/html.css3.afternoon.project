import React, { Component } from 'react'
import "./components/reset.css"
import './App.css'
import NavBar from './components/NavBar'

export default class App extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <div>
        <header className='header'>
          <NavBar />
        </header>
      </div>
    )
  }
}
