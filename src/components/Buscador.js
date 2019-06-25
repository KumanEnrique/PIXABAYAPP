import React,{Component} from 'react'

class Buscador extends Component{
    BusquedaRef = React.createRef()
    obtenerDatos(e){
        e.preventDefault()

        const termino = this.BusquedaRef.current.value
        //le enviamos el contenido al componente principal
        this.props.datosBusqueda(termino)


        e.target.reset()
    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos.bind(this)}>
                <div className="row">
                    <div className="form-group col-md-8" >
                        <input type="text" ref={this.BusquedaRef} placeholder="Busca tu imagen" className="form-control form-control-lg"/>
                    </div>
                    <div className="form-group col-md-4" >
                        <input type="submit" value="Buscar" className="btn btn-primary btn-lg btn-block"/>
                    </div>
                </div>
            </form>
        )
    }
}
export default Buscador