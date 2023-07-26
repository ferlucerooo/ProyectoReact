import React from 'react'

function Footer() {
  return (
    <footer className='footer'>
      <p>Copyright  &copy; - developed by <a href="https://www.linkedin.com/in/fernando-lucero-47796a26a/" target="_blank" className=" linkedin">Fernando Lucero<i class="bi bi-linkedin icono"></i></a></p>
      <div class="f__div">
            <a class="div__a" href="http://www.instagram.com/fernandolucerooo" target="_blank"><i className="bi bi-instagram icono" ></i></a>
            <a class="div__a" href="http://www.facebook.com/fercjs14" target="_blank"><i className="bi bi-facebook icono" ></i></a>
            <a class="div__a" href="https://api.whatsapp.com/send?phone=2616319693" target="_blank"><i className="bi bi-whatsapp icono" ></i></a>
        </div>
    </footer>
  )
}

export default Footer