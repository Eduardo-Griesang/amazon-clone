import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import MovieClicked from './pages/MovieClicked'
import Navigation from './components/Navigation';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navigation />

      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/MovieClicked' element={<MovieClicked />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
