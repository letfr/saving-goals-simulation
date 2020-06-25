import './CardButton.scss';

import * as React from 'react';

const CardButton: React.FC = () => (
  <div className="card">
    <div className="card-header">
      <img src={require('../../icons/house.svg')} alt="house icon" />
      <h1>Buy a house</h1>
      <h2>Saving goal </h2>
    </div>
    <slot></slot>
    <button className="btn">Confirm</button>
  </div>
);

export default CardButton;
