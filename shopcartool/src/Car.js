import React from 'react';
import './App.css';

const Car = ({car, totalNum, total}) => {
  let result = car.length ? <p>共{totalNum}张 总价为{total}</p>: <p>订单为空</p>;
  return (
    <div className='col-md-6'>
      <h2>订单</h2>
      <ul>
        {
          car.map((place, index) => {
            return <li key={index}>
              {place.title} 价格为: {place.price} 已选择{place.number}张
            </li>
          })
        }
      </ul>
      {result}
    </div>
  );
};

export default Car;
