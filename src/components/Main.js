import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'
import Cart from './Cart'


function Main() {
  return (
    <main className='main'>
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/category/:id' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/cart' element={<Cart/>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
  </main>
  )
}

export default Main