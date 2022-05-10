
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
function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Menu' element={<Menu />} />
        <Route path='/Login' element={<Signup />} />
        <Route path='*' element={<PageNotFound />} />
        <Route exact path="/signup" element={<Signin />} />
        <Route path='/Login/create' element={<Create/>} />
        <Route path='Login/edit/:postId' element={<Edit/>} />
        <Route path='/Login/index' element={<Index/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
