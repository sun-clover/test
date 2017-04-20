import React from 'react';

const PlaceList = ({place, listClick}) => {
  return (
    <div className='col-md-2'>
      <h2>景区列表</h2>
        <ul>
          {place.map((place) => {
            return (
              <li key={place.id} onClick={() => listClick(place)}>
                {place.title}
              </li>
            )            
          })}
        </ul>
    </div>
  );
};

export default PlaceList;
