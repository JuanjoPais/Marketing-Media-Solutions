import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
  const navigate = useNavigate()
    const onMouseWheel = (e)=>{
    if(e.deltaY>0){
        navigate("/")
    }else{
        navigate("/proyectos")
    }
}
  return (
    <div class="servicios" onWheel={onMouseWheel}>
      Footer
    </div>
  )
}

export default Footer