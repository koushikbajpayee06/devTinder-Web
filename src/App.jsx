
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'

function App() {
  return (
    <div data-theme="dark" className='min-h-screen bg-base-100'>
      <BrowserRouter basename='/'>
        <Routes>
          
          <Route path="/" element={<Body/>} >
            <Route path="/login" element={<Login/>} />
            <Route path="/profile" element={<Profile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <NavBar/>    */}
    </div>
  )
}

export default App
