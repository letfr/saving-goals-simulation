import './CardButton.scss';
import * as React from 'react';

export interface PropertiesCardButton {
  children: React.ReactNode;
}
const CardButton: React.FC<PropertiesCardButton> = (
  props: PropertiesCardButton
) => (
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
