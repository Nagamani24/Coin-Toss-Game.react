// Write your code here
import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {
    heads: 0,
    tails: 0,
    total: 0,
    imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
  }

  onClick = () => {
    const {heads, tails, tota, imgUrl} = this.state

    const tossResult = Math.floor(Math.random() * 2)

    if (tossResult === 0) {
      this.setState(prevState => ({
        heads: prevState.heads + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/heads-img.png',
      }))
    } else {
      this.setState(prevState => ({
        tails: prevState.heads + 1,
        total: prevState.total + 1,
        imgUrl: 'https://assets.ccbp.in/frontend/react-js/tails-img.png',
      }))
    }
  }

  render() {
    const {heads, tails, total, imgUrl} = this.state
    return (
      <div className="bg-container">
        <div className="container">
          <h1>Coin Toss Game</h1>
          <p className="toss">Heads (or) Tails</p>
          <img src={imgUrl} alt="toss result" className="image" />
          <button type="button" onClick={this.onClick}>
            Toss Coin
          </button>
          <div className="counter">
            <p className="count">Total:{total}</p>
            <p className="count">Heads:{heads}</p>
            <p className="count">Tails:{tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
