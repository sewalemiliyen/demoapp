import './App.css';
//import the react router from router
import {Routes, Route} from 'react-router';
//import the pages
import Home from './pages/Home';
import Login from './pages/Login';
import AddEmployee from './pages/AddEmployee';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addemployee" element={<AddEmployee />} />
      </Routes>
    </div>
  );
}

export default App;
