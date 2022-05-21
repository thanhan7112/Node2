
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import About from './Pages/About';
import Menu from './Pages/Menu';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/Navbar';
import Signup from './Pages/signin';
import Signin from './Pages/signup';
import Create from './Components/create.component';
import Edit from './Components/edit.component';
import Index from './Components/index.component';
import Payment from './Pages/Payment';
import User from './Pages/User';
import Login from './Pages/Login';
import SigninUser from './Pages/signupUser';
import Metamask from './Pages/Metamask/metamask';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Payment' element={<Payment />} />
        <Route path='/PaymentMetaMask' element={<Metamask />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Login/user' element={<User />} />       
        <Route path='/Login/admin' element={<Signup />} />
        <Route exact path="/Login/user/signup" element={<SigninUser />} />
        <Route exact path="/Login/admin/signup" element={<Signin />} />
        <Route path='/Login/create' element={<Create/>} />
        <Route path='Login/edit/:postId' element={<Edit/>} />
        <Route path='/Login/index' element={<Index/>} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
