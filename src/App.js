import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import './App.css';
import "./components/Button.css"

function App() {
  return (
   <>
     <BrowserRouter>
    <Navbar/>
     <Routes>

      <Route path="/"  element={<Home/>}></Route>
      <Route path='/services' element={<Services/>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/sign-up' element={<SignUp/>}></Route>
     </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
