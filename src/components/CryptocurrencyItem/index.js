// Write your JS code here

import './index.css'

const CryptocurrencyItem = props => {
  const {currencyItem} = props
  const {id, currencyName, euroValue, usdValue, currencyLogo} = currencyItem
  return (
    <li className="currencyItem">
      <div className="itemStart">
        <img className="currencyLogo" src={currencyLogo} alt={currencyName} />
        <p>{currencyName}</p>
      </div>
      <div className="itemLast">
        <p className="usd">{usdValue}</p>
        <p>{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
