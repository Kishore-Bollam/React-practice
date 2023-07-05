import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './Dashboard';
import Blog from './Blog';
import Contact from './Contact';
import Home from './Home';
import Navbar from './Navbar';

function App() {
  
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/Dashboard' element={<Dashboard/>}></Route>
     <Route path='/Blog' element={<Blog/>}></Route>
     <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </Router>
    
     
    </div>
  );
}

export default App;
