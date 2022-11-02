import './App.css';
import { Route, Routes } from 'react-router-dom';
import DetailsCarRent from './components/DetailsCarRent/DetailsCarRent';
import Home from './Home';

function App() {
  return ( <div>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/:make' element={<DetailsCarRent  />}/>
    </Routes>
  </div>
  );
}

export default App;
