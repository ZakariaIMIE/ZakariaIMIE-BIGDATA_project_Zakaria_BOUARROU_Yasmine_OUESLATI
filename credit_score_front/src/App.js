//import {Routes, Route} from 'react-router-dom'; // pour les routes de notre page 
import './App.css';

//boostrap
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './component/Menu.js';
//import Login from'./component/Login.js';
import Footer from './component/Footer.js'


function App() {
  return (
    <div className='App'>
      <Menu />
      <Footer />       
    </div>
  );
}

export default App;
