import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './Components/LandingPage/LandingPage';
import RegistrationPage from './Components/RegistrationPage/RegistrationPage';
import LoginPage from './Components/Loginpage/LoginPage';
import ProfilePage from './Components/Loginpage/NavBar/Profile/ProfilePage';
import AboutPage from './Components/Loginpage/NavBar/About/AboutPage';
import FooterPage from './Components/Footer/FooterPage';
import ContectUs from './Components/Loginpage/NavBar/ContectUs/ContectUs';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/userregistration' element={<RegistrationPage/>}/>
      <Route path='/loginpage/:id' element={<LoginPage/>}/>
      <Route path="/user-profile/:id" element={<ProfilePage/>}/>
      <Route path='/about-page/:id' element={<AboutPage/>}/>
      <Route path='/contect-us/:id' element={<ContectUs/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
