import React, { Component } from 'react';
import Header from './Header';
import Article from './Article';
import Column from './Column';
import OtherArticles from './OtherArticles';
import Footer from './Footer';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
      <Header/>
    <main className="expanded row">
      <Article/>
      <Column/>
      <OtherArticles/>
    </main>
    <Footer/>
    </div>
    );
  }
}

export default App;
