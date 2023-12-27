import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Login from './components/Login/Login';
import NoPage from './components/NoPage/NoPage';
import Signup from './components/Signup/Signup';
import Layout from './components/layout/Layout';
import VerifyOtp from './components/verifyotp/VerifyOtp';
import Attendance from './pages/Attendance';
import Class from './pages/Class';
import Home from './pages/Home';
import Profile from './pages/Profile';
import TotalStudent from './pages/TotalStudent';
import TotalTeacher from './pages/TotalTeacher';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='profile' element={<Profile />} />
          <Route path='class' element={<Class />} />
          <Route path='total-students' element={<TotalStudent />} />
          <Route path='total-teachers' element={<TotalTeacher />} />
          <Route path='attendance' element={<Attendance />} />
          <Route path='login' element={<Login />} />
          <Route path='signup' element={<Signup />} />
          <Route path='verify' element={<VerifyOtp />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
