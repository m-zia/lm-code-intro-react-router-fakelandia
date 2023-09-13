import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Misdemeanours from './components/misdemeanour';
import Confession from './components/confession';
import NotFound from './components/NotFound';


function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/misdemeanours">Misdemeanours</Link>
            </li>
            <li>
              <Link to="/confession">Confession</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/misdemeanours" element={<Misdemeanours />} />
          <Route path="/confession" element={<Confession />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;