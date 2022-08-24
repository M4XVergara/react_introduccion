import Name from "./Name";
import './tarjeta.css';

export default function Cards() {
  return (
    <div className="box">
      <div className='card-left'>
        <h2>tarjetas De Pruebas</h2>
        <img src="./logo512.png" className="img"></img>
        <p>Cargando...</p>
      </div>
      <div className='card-right'>
        <h2>tarjetas De Pruebas</h2>
        <Name />
      </div>
    </div>
  )
}