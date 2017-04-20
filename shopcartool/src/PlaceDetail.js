import React from 'react';
import './App.css';

const PlaceDetail = ({currentBook, addToCar}) => {
  if (!currentBook) return <div className='col-md-4'><h2>选择景区</h2></div>
  return (
    <div className='col-md-4'>
      <h2>景区详情</h2>
      <h3>{currentBook.title}</h3>
      <p>地址:{currentBook.place}</p>
      <p>价格:{currentBook.price}</p>
      <p>介绍:{currentBook.p}</p>
      <button onClick={() => addToCar(currentBook)}>
        加入订单
      </button>
    </div>
  );
};

export default PlaceDetail;
