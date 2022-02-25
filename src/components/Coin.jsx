import React from 'react';

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange
}) => {
  return (
    <div className='coin-container'>
      <div className='coin-row'>
        <div className='coin'>
          <img src={image} alt='crypto' />
          <p className='coin-symbol'>{name}</p>
          <p className='coin-symbol'>{symbol}</p>
        </div>
        <div className='coin-data'>
          <p className='coin-price'>${price} | ${volume.toLocaleString()} | 
          {priceChange < 0 ? (
            <span className='coin-percent red'> {priceChange.toFixed(2)}%</span>
          ) : (
            <span className='coin-percent green'> {priceChange.toFixed(2)}%</span>
          )} | Mkt Cap: ${marketcap.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;