import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Appwork from './pages/Appwork'
import Register from './pages/Register'
import Layout from './Layouts/Layout';
import Pricing from './pages/Pricing';
import UserProfile from './pages/UserProfile';

function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route index element = {<Layout/>}/>
      <Route path='/HowItWorks' element = {<Appwork/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/pricing' element = {<Pricing/>}/>
      <Route path='/UserProfile' element = {<UserProfile/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App
