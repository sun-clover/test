import React, { Component } from 'react';

import PlaceList from './PlaceList';
import PlaceDetail from './PlaceDetail';
import Car from './Car';

class Place extends Component {
  constructor() {
    super()
    this.handleListClick = this.handleListClick.bind(this);
    this.handleAddToCar = this.handleAddToCar.bind(this);

    this.state = {
      currentBook: null,
      car: [],
      totalNum: 0,
      total: 0
    };
  }

  handleListClick(place) {
    this.setState({
      currentBook: place
    });
  }

  handleAddToCar(currentBook) {
    let totalNum = this.state.totalNum;
    let car = this.state.car;
    let total = this.state.total;

    let exist = false;

    if (car.length) {
      car.forEach(place => {
        if (place.p === currentBook.p) {
          place.number += 1;
          totalNum += 1;
          exist = true;
          this.setState({
            totalNum
          });
        }
      });
    }

    if (!exist) {
      car = car.concat(Object.assign({}, currentBook, {number:1}));
      totalNum += 1;
      this.setState({
          car,
          totalNum
      }); 
    }

    total = car.map(place => (place.price * place.number)).reduce((prev, cur) => prev + cur);
    this.setState({
      total
    });
  }

  render() {
    return (

      <div className='row'>
        <PlaceList place={this.props.place} listClick={this.handleListClick} />
        <PlaceDetail currentBook={this.state.currentBook} addToCar={this.handleAddToCar} />
        
        <Car {...this.state} />
      </div>
    );

  }
}

Place.defaultProps = {
    place: [
    {
      id: '1',
      category: '景区',
      title: '鄱阳湖景区',
      place: '江西',
      price: 42
    },
    {
      id: '2',
      category: '景区',
      title: '庐山风景区',
      place: '江西',
      price: 69
    },
    {
      id: '3',
      category: '景区',
      title: '龙凤山风景区',
      place: '江西',
      price: 25
    }
  ]
};

export default Place;
