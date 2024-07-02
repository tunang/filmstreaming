import './App.css'

import Home from './components/HomePage/Home'
import Login from './components/auth/login/Login'
import Register from './components/auth/register/Register'
import Header from './components/header/Header'

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Helmet } from 'react-helmet';

import Index from './components/ShowCategory'
import WatchPage from './components/WatchPage/WatchPage'
import SearchFilms from './components/SearchFilms/SearchFilms'
import Favorite from './components/favorite/Favorite'
import Aside from './components/aside/Aside'



const AppLayout = () => (
  <>
    <div className='absolute w-full grid md:grid-cols-4 lg:grid-cols-5 gap-5 mt-24 md:mt-32 px-4 lg:px-12 z-1'>
      <header className='fixed w-full top-0 z-10'>
        <Header />
      </header>
      <Aside />
      <Outlet />
    </div>
  </>
);

const NoAsideLayout = () => (
  <>
    <div className='absolute w-full grid md:grid-cols-4 lg:grid-cols-5 gap-5 z-1'>
      <header className='fixed w-full top-0 z-10'>
        <Header />
      </header>
      <div className='block md:hidden'>
        <Aside />
      </div>
      <Outlet />
    </div>
    <div className='h-20 w-12'>

    </div>
  </>
);



function App() {

  return (
    <>
      <Router>
        <ToastContainer />
        <div>
          <Helmet>
            <style>{'body { background-color: black; }'}</style>
          </Helmet>

          {/* <header className='fixed w-full top-0 z-10'>
          <Header />
        </header> */}

          <Routes>

            <Route element={<AppLayout />}>
              <Route path='/' element={<Home />} />
              <Route path='/movies' element={<Index />} />
              <Route path='/cartoons' element={<Index />} />
              <Route path='/tv_shows' element={<Index />} />
              <Route path='/tv_series' element={<Index />} />
              <Route path='/search/:name' element={<SearchFilms />} />
              <Route path='/favorite' element={<Favorite />} />
            </Route>

            <Route element={<NoAsideLayout />}>
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/play/:id/:slug' element={<WatchPage />} />
            </Route>

            {/* <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/movies' element={<Index />} />
          <Route path='/cartoons' element={<Index />} />
          <Route path='/tv_shows' element={<Index />} />
          <Route path='/tv_series' element={<Index />} />
          <Route path='/play/:id/:slug' element={<WatchPage />} />
          <Route path='/search/:name' element = {<SearchFilms />}/>
          <Route path='/favorite' element = {<Favorite />}/> */}
          </Routes>


        </div>
      </Router>
    </>


  )
}

export default App
