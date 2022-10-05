import './App.css';
import Header from './components/SuperHeader/Header'
import Footer from './components/SuperHeader/Header'
import MainContent from './components/MainContent/MainContent'

function App() {
  return (
    <div className="App">
      <Header/>
      <MainContent/>
      <Footer/>
    </div>
  );
}

export default App;
