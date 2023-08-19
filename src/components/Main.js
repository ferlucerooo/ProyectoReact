import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'
import ItemListContainer from './ItemListContainer'


function Main() {
  return (
    <main className='main'>
      <h2> Stock de la tienda</h2>
        {/*<p>Lorem ipsum dolor sit amet</p>
        <img src="/logo192.png" alt="" /> */}
        <Routes>
          <Route path='/' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/category/:id' element={<ItemListContainer  greeting="Bienvenido "/>}/>
          <Route path='/carrito' element={<p>Carrito</p>} />
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
        </Routes>
  </main>
  )
}

export default Main