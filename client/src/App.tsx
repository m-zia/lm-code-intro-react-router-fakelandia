import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import { Misdemeanours } from './components/misdemeanour';
import Confession from './components/confession';
import NotFound from './components/NotFound';
import Header from './components/header';

function App() {
  return (
    <Router>
      <div className="App">

      <Header />
        

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