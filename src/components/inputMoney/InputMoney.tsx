import './InputMoney.scss';
import * as React from 'react';

export interface PropertiesInputMoney
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
  placeholder: string;
}

const InputMoney: React.FC<PropertiesInputMoney> = (
  props: PropertiesInputMoney
) => (
  <div>
    <label htmlFor={props.name}>{props.label}</label>
    <div className="input-money-container">
      <span className="dollar-sign">$</span>
      <input name={props.name} type="number" placeholder={props.placeholder} />
    </div>
  </div>
);

export default InputMoney;
