import React from 'react'
import Nav from './Nav'
import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate()
    const onMouseWheel = (e)=>{
    if(e.deltaY>0){
        navigate("/main")
    }
}
  return (
    <div class="header" onWheel={onMouseWheel}>
        <Nav/>
        <section class="header_section2">
            <article class="header_title">Quiero potenciar tu crecimiento</article>
            <article class="header_text">Cada marca tiene una historia única que merece ser compartida y estoy acá para ayudarte a hacerlo de la manera más efectiva posible.</article>
        </section>
    </div>
    
  )
}

export default Header