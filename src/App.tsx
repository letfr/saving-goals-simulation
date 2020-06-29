import * as React from 'react';
import './App.scss';
import CardButton from './components/cards/cardButton/CardButton';
import CardInfo from './components/cards/cardInfo/CardInfo';
import InputMoney from './components/inputMoney/InputMoney';
import MonthCalendar from './components/monthCalendar/MonthCalendar';

export class App extends React.Component {
  public render() {
    return (
      <main id="app">
        <header className="app-header">
          <figure>
            <img src={require('./icons/logo.svg')} alt="logo origin" />
          </figure>
        </header>
        <section id="content" className="wrapper flexbox">
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
            <CardInfo title="Monthly amount" value="$521">
              <p>
                You&apos;re planning <b>48 monthly deposits </b>
                to reach your <b>$25,000</b> goal by <b>October 2020.</b>
              </p>
            </CardInfo>
          </CardButton>
        </section>
      </main>
    );
  }
}

export default App;
