import React, { Component } from 'react'
import {PropTypes as T} from 'prop-types'

class Home extends Component {
  constructor(props) {
    super(props)

    this.initialState = {
      view: 'home',
      score: 0,
      level: 1,
      sequence: []
    }
  
    this.state = this.initialState
  }

  render() {
    return(
      <div className="home">
        <div className="game-text lg">Super Simple Simon Game</div>            
        <span className="game-text md pointer" onClick={() => this.props.onStart('game')}>Start</span>          
      </div>
    )
  }
}

Home.propTypes = {
  onStart: T.func.isRequired
}

export default Home
