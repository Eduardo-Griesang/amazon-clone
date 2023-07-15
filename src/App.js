import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';

import HomePage from './pages/HomePage';
import MovieClicked from './components/MovieClicked'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/MovieClicked' element={<MovieClicked />}/>
        <Route path='*' element={<h1>404 NOT FOUND</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
