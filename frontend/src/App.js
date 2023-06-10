import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllMovies from './pages/allMovies/AllMovies';
import NewMovie from './pages/newMovie/NewMovie';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/all-movies' element={<AllMovies/>}/>
        <Route path='/add-movie' element={<NewMovie />} />

      </Routes>
      <ToastContainer />
    </BrowserRouter>

  );
}

export default App;
