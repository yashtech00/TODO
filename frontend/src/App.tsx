import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Welcome from './pages/Welcome'
import Signin from './pages/Signin'
import Home from './pages/Home'
import AddTodo from './pages/AddTodo'
import EditTodo from './pages/EditTodo'

const App = () => {
  return (
    <div>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Welcome/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/signin' element={<Signin/>}></Route>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/AddTodo' element={<AddTodo/>}></Route>
          <Route path='/EditTodo/:id' element={<EditTodo/>}></Route>
        </Routes>
        
        </BrowserRouter>
      </div>
      </div>
  )
}

export default App