import React, { Component } from 'react'
import {PropTypes as T} from 'prop-types'

class End extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="end">
          <div className="game-text sm">{`_*_ Level ${this.props.level} - Score ${this.props.score} _*_`}</div>          
          <div className="game-text sm pointer" onClick={() => this.props.onRestart('game')}>{'* Retry *'}</div>  
        </div>
      )
  }
}

End.propTypes = {
  onRestart: T.func.isRequired,
  score: T.number.isRequired,
  level: T.number.isRequired
}

export default End
