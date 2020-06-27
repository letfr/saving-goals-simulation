import './CardButton.scss';
import * as React from 'react';

export interface PropertiesCard {
  children: React.ReactNode;
}
const CardButton: React.FC = (props: PropertiesCard) => (
  <div className="card">
    <div className="card-header">
      <img src={require('../../../icons/house.svg')} alt="house icon" />
      <h1>Buy a house</h1>
      <h2>Saving goal </h2>
    </div>
    {props.children}
    <button className="btn">Confirm</button>
  </div>
);

export default CardButton;
