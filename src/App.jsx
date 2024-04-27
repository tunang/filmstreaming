import './App.css'
import Home from './components/HomePage/Home'
import Aside from './components/aside/Aside'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Header from './components/header/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Helmet} from 'react-helmet';
import ShowCategory from './components/ShowCategory/ShowCategory'
import Index from './components/ShowCategory'






function App() {

  return (

    <Router>
      <ToastContainer />
      <div>
        <Helmet>
          <style>{'body { background-color: black; }'}</style>
        </Helmet>

        <header className='fixed w-full top-0 z-10'>
          <Header />
        </header>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movies' element={<Index />} />
          <Route path='/cartoons' element={<Index />} />
          <Route path='/tv_shows' element={<Index />} />
          <Route path='/tv_series' element={<Index />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
