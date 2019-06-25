import React,{Component} from 'react'
import Imagen from './Imagen'
import Paginacion from './Paginacion'

class Resultado extends Component{
    mostrarImagenes = ()=>{
        const imgs = this.props.imagenes
        if(imgs.length === 0 ) return null
        return(
            <React.Fragment>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
                <div className="col-12 p-5 row">
                    {imgs.map(imagen=>{
                        return <Imagen imagen={imagen} key={imagen.id}/>
                    })}
                </div>
                <Paginacion
                    paginaAnterior={this.props.paginaAnterior}
                    paginaSiguiente={this.props.paginaSiguiente}
                />
            </React.Fragment>
        )
    }
    
    render(){
        return(
            <>{this.mostrarImagenes()}</>
        )
    }
}
export default Resultado