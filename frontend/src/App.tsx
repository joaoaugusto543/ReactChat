import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import { useAppSelector } from './store'
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container'

function App() {

  const {token}=useAppSelector(state => state.auth)

  return (
    <>
      <Container>
        <NavBar/>
        <Routes>
          <Route path='/' element={token ? <Home/> : <Navigate to='/login'/>}/>
          <Route path='/login' element={!token ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/register' element={!token ? <Register/> : <Navigate to='/'/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
