import React from 'react'

function Paginacion(props){
    return(
        <div className="py-3">
            <button className="btn btn-info mr-1" onClick={props.paginaAnterior}>&larr; Anterior</button>
            <button className="btn btn-info" onClick={props.paginaSiguiente}>Siguente &rarr;</button>
        </div>
    )
}

export default Paginacion