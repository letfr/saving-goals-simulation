import * as React from 'react';
import CardButton from './components/cardButton/CardButton';
import './App.scss';
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
            Let's plan your <b>saving goal.</b>
          </h1>
          <CardButton />
        </section>
      </main>
    );
  }
}

export default App;
