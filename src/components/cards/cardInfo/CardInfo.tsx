import './CardInfo.scss';
import * as React from 'react';

export interface PropertiesCardInfo {
  title: string;
  value: string;
  children: React.ReactNode;
}

const CardInfo: React.FC<PropertiesCardInfo> = (props: PropertiesCardInfo) => (
  <div className="card-info">
    <header className="card-info-header flexbox">
      <h1 className="card-info-title">{props.title}</h1>
      <span className="text-emphasis">{props.value}</span>
    </header>
    <div className="card-info-text">{props.children}</div>
  </div>
);

export default CardInfo;
