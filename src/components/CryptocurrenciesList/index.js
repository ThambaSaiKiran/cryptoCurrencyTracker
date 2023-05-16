// Write your JS code here
import './index.css'

import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

class CryptocurrenciesList extends Component {
  state = {currencyList: [], isLoading: true}

  componentDidMount() {
    this.fetchFunc()
  }

  fetchFunc = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data)
    const updatedData = data.map(item => ({
      id: item.id,
      currencyName: item.currency_name,
      usdValue: item.usd_value,
      euroValue: item.euro_value,
      currencyLogo: item.currency_logo,
    }))
    this.setState({currencyList: updatedData, isLoading: false})
  }

  render() {
    const {currencyList, isLoading} = this.state
    return (
      <div>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="mainCont">
            <h1>Cryptocurrency Tracker</h1>
            <img
              className="img1"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
              alt="cryptocurrency"
            />
            <div className="itemsList">
              <div className="headItem">
                <p>Coin Type</p>
                <div className="headLast">
                  <p className="usd">USD</p>
                  <p>EURO</p>
                </div>
              </div>
              <ul className="currencyItems">
                {currencyList.map(eachItem => (
                  <CryptocurrencyItem
                    key={eachItem.id}
                    currencyItem={eachItem}
                  />
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
