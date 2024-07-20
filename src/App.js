import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
             <Route path='/' element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
