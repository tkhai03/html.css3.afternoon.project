import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
    constructor() {
        super()

        this.state = {
            display: false
        }
        this.handleResize = this.handleResize.bind(this)
    }

    handleResize() {
        this.setState({
            display: !this.state.display
        })
    }


    render() {
        return (
            <div>
                <header className='header'>
                    <div className='navBar'>
                        <h1 className='webName'>Start Bootstrap</h1>
                        <div className='burger' onClick={this.handleResize}>&#x2630;</div>
                        <div className='button-container'>
                            <button className='button'>About</button>
                            <button className='button'>Projects</button>
                            <button className='button'>Contact</button>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}