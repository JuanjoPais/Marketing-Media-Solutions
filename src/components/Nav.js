import React from 'react'
import Contacto from './Contacto'

const Nav = () => {
  return (
    <div class="nav">
        <section class="nav_logo">
            <article>Sofia soza</article>
            <article>Marketing Media Solutions</article>
        </section>
        <section class="nav_nav">
            <ul>
                <li>¿QUIEN SOY?</li>
                <li>SERVICIOS</li>
                <li>PROYECTOS</li>
                <li>CONTACTO</li>
            </ul>
        </section>
        <Contacto/>
    </div>
  )
}

export default Nav