import './App.css';
import { Route, Routes } from "react-router-dom";

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-up.component';
import Header from './components/header/header.components';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
      <Route exact path='/' element={<HomePage/>}/>
      <Route path='/shop' element={<ShopPage/>}/>
      <Route path='/signin' element={<SignInAndSignUpPage/>}/>
    </Routes>
    </div>
  );
}

export default App;
