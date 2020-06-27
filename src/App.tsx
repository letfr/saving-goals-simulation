import * as React from 'react';
import './App.scss';
import CardButton from './components/cards/cardButton/CardButton';
import InputMoney from './components/inputMoney/InputMoney';
import MonthCalendar from './components/monthCalendar/MonthCalendar';

export class App extends React.Component {
  public render() {
    return (
      <main id="app">
        <header>
          <figure>
            <img src={require('./icons/logo.svg')} alt="logo origin" />
          </figure>
        </header>
        <section id="content" className="wrapper">
          <h1 className="headline">
            Let&apos;s plan your <b>saving goal.</b>
          </h1>
          <CardButton>
            <div className="flexbox">
              <InputMoney
                name="amount-input"
                label="Total amount"
                placeholder="ex: 25,000"
              />
              <MonthCalendar label="Reach goal by" />
            </div>
          </CardButton>
        </section>
      </main>
    );
  }
}

export default App;
