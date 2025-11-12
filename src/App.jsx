
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Body from './Body'
import Login from './Login'
import Profile from './Profile'
import { Provider } from 'react-redux'
import appStore from './utils/appStore'

function App() {
  return (
    <div data-theme="dark" className='min-h-screen bg-base-100'>
      <Provider store={appStore}>
          <BrowserRouter basename='/'>
            <Routes>
              <Route path="/" element={<Body/>} >
                <Route path="/login" element={<Login/>} />
                <Route path="/profile" element={<Profile/>} />
              </Route>
            </Routes>
          </BrowserRouter>
      {/* <NavBar/>    */}
      </Provider>
    </div>
  )
}

export default App
