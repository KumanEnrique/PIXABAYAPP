import React,{Component} from 'react';
import Buscador from './components/Buscador'
import Resultado from './components/Resultado'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      termino:"",
      imagenes:[],
      pagina:""
    }
  }
  consultarApi(){
    const url  = `https://pixabay.com/api/?key=12855090-59cd4b72f781b2479ba90911f&q=${this.state.termino}&per_page=30&page=${this.state.pagina}`/* 
    console.log(url) */
    fetch(url)
      .then(respuesta=>respuesta.json())
      .then(resultado=>{
        this.setState({
          imagenes: resultado.hits
        })
      })
  }
  datosBusqueda = (termino)=>{
    this.setState({
      termino,
      pagina:1
    },()=>{
      this.consultarApi()
    })
  }
  paginaAnterior = ()=>{
    if(this.state.pagina === 1){
      return null
    }else if(this.state.pagina >1){
      this.setState((prevState)=>{
        return {pagina:prevState.pagina - 1}
      },()=>{
        this.consultarApi()
      })
      console.log(this.state.pagina)
    }
  }
  paginaSiguiente = ()=>{
    this.setState((prevState)=>{
      return {pagina:prevState.pagina + 1}
    },()=>{
      this.consultarApi()
    })
    console.log(this.state.pagina)
  }
  render(){
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center" >Buscador de imagenes</p>
          <Buscador 
          datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
      </div>
    );
  }
}

export default App;