import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <nav>
             
             <Link to='/library'><span className="icon ion-android-menu"></span></Link>
           </nav>
           <Link to='/'><img className="logo" src='/assets/images/bloc_jams_logo.png' alt="Bloc jams logo" style={{ textDecoration: 'none' }} /></Link>
         </header>
         <main>
           <Route exact path="/" component={Landing} />
           <Route path="/library" component={Library} />
           <Route path="/album/:slug" component={Album} />
         </main>
      </div>
    );
  }
}
export default App;
