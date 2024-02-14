import { Navigate, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Home from './pages/Home/Home'
import { useAppSelector } from './store'
import NavBar from './components/NavBar/NavBar'
import Container from './components/Container/Container'
import Contact from './pages/Contact/Contact'
import Group from './pages/Group/Group'
import CreateGroup from './pages/CreateGroup/CreateGroup'

function App() {

  const {token}=useAppSelector(state => state.auth)

  return (
    <>
      <Container token={token}>
        {token && <NavBar/>}
        <Routes>
          <Route path='/' element={token ? <Home/> : <Navigate to='/login'/>}/>
          <Route path='/contact/:id' element={token ? <Contact/> : <Navigate to='/login'/>}/>
          <Route path='/group/:id' element={token ? <Group/> : <Navigate to='/login'/>}/>
          <Route path='/createGroup' element={token ? <CreateGroup/> : <Navigate to='/login'/>}/>
          <Route path='/login' element={!token ? <Login/> : <Navigate to='/'/>}/>
          <Route path='/register' element={!token ? <Register/> : <Navigate to='/'/>}/>
        </Routes>
      </Container>
    </>
  )
}

export default App
