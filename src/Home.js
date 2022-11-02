import './App.css';
import Header from './components/SuperHeader/Header'
import Footer from './components/SuperHeader/Header'
import MainContent from './components/MainContent/MainContent'
import { Route, Routes } from 'react-router-dom';
import DetailsCarRent from './components/DetailsCarRent/DetailsCarRent';

function Home() {
  return ( <div className="App">
    <Header/>
    <MainContent/>
    <Footer/>
  </div>
    

  );
}

export default Home;
