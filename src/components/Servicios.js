import React from 'react'
import { useNavigate } from 'react-router-dom'

const Servicios = () => {
    const navigate = useNavigate()
    const onMouseWheel = (e)=>{
    if(e.deltaY>0){
        navigate("/proyectos")
    }else{
        navigate("/main")
    }
}
  return (
    <div class="servicios" onWheel={onMouseWheel}>
        Servicios
    </div>
  )
}

export default Servicios