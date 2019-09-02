import React, { Component} from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import './styles/App.scss';

//Pages
import HomePage from './pages/HomePage'
import QuotePage from './pages/QuotePage'
import MyFavorite from './pages/MyFavorite'
import Top10 from './pages/Top10'

//Components
import Footer from './components/Footer'

const App  = () => {
  
    return ( <section className="app flex flex-center column">
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/category/:id" component={QuotePage} />
            <Route exact path="/favorite" component={MyFavorite} />
            <Route exact path="/top10" component={Top10} />
          </Switch>
          <Footer></Footer>
        </Router>
    </section>
  )
}

export default App;
