import React from 'react'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router'
import AddProduct from './Components/AddProduct/AddProduct'
import ViewProduct from './Components/ViewProduct/ViewProduct'
import EditProduct from './Components/EditProduct/EditProduct'
import LogIn from './Components/Login/LogIn'
import SignUp from './Components/SignUp/SignUp'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<AddProduct />} />
        <Route path='/view' element={<ViewProduct />} />
        <Route path='/edit/:id' element={<EditProduct />} />
        <Route path='/login' element={<LogIn />} />
        <Route path='/signup' element={<SignUp />} />

      </Routes>
    </>
  )
}

export default App