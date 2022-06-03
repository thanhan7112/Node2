
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
import User from './Pages/User';
import Login from './Pages/Login';
import SigninUser from './Pages/signupUser';
import Metamask from './Pages/Metamask/metamask';
import Sold from './Pages/Sold';
import Admin from './Components/Admin';
import { Email } from './ContractUs/ContactUs';
import CreateHome from './Components/Home/HomeCreate';
import HomeIndex from './Components/Home/HomeIndex';
import HomeEdit from './Components/Home/HomeEdit';
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Contact' element={<Email />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Login/user' element={<User />} />
        <Route path='/Login/admin' element={<Signup />} />
        <Route path='/Login/HomeEdit' element={<CreateHome />} />
        <Route path='/Login/Homeindex' element={<HomeIndex />} />
        <Route path='/Login/admin/pageadmin' element={<Admin />} />
        <Route exact path="/Login/user/signup" element={<SigninUser />} />
        <Route exact path="/Login/admin/signup" element={<Signin />} />
        <Route path='/Login/create' element={<Create />} />
        <Route path='/PayWithMetaMask/:productId' element={<Metamask />} />
        <Route path='Login/edit/:productId' element={<Edit />} />
        <Route path='Login/Homeedit/:homeId' element={<HomeEdit />} />
        <Route path='/Login/Sold/' element={<Sold />} />
        <Route path='/Login/index' element={<Index />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
