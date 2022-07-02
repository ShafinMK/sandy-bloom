
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Location from './components/Location/Location';
import NotFound from './components/NotFound/NotFound';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Reservation from './components/Reservation/Reservation';
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import Slider from './components/Slider/Slider';
import AuthProvider from './context/AuthProvider';

function App() {
  return (
    <div className="">



      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path='/' element={<Home></Home>}></Route>
            <Route path='/home' element={<Home></Home>}></Route>
            <Route path='/signin' element={<SignIn></SignIn>}></Route>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/reservation' element={<Reservation></Reservation>}></Route>
            <Route path='/booking' element={<PrivateRoute><Booking></Booking></PrivateRoute>}></Route>
            <Route path='/location' element={<Location></Location>}></Route>
            <Route path='*' element={<NotFound></NotFound>}></Route>
 
          </Routes>
          <Footer></Footer>
        </AuthProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
