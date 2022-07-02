import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/Nav/Nav';
import Home from './component/Home/Home';
import Users from './component/Users/Users';
import User from './component/User/User';
import Details from './component/Details/Details';
import About from './component/About';
import NotFound from './component/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
	  <Nav></Nav>
		<Routes>
			<Route path='/' element={<Home/>}/>
			<Route path='home' element={<Home/>}/>
			<Route path='users' element={<Users/>}/>
			<Route path='about' element={<About/>}/>
			<Route path='details/:userId' element={<Details/>}/>
			<Route path='*' element={<NotFound/>}/>


		</Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
