import React from 'react';

function Food(props) {
  return (
    <ul className="food-list">
      {props.food.map((item, index) => (
        <li key={index} className="food-item">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default Food;
