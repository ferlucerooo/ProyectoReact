import React from 'react'
import Container from './Container'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './ItemDetailContainer'


function Main() {
  return (
    <main className='main'>
      <h2> Stock de la tienda</h2>
        {/*<p>Lorem ipsum dolor sit amet</p>
        <img src="/logo192.png" alt="" /> */}
        <Routes>
          <Route path='/' element={<Container/>}/>
          <Route path='/cat/:id' element={<Container/>}/>
          <Route path='/carrito' element={<p>Carrito</p>} />
          <Route path='/detalles/:id' element={<ItemDetailContainer/>}/>
        </Routes>
  </main>
  )
}

export default Main