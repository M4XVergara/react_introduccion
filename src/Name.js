import { useState } from "react";
import './name.css';

export default function Name() {
  const [Nombre, setName] = useState('');

  function onChange(e) {
    console.log(e);
    setName(e.target.value);
  }

  return (
    <div className="Name">
      <p>Bienvenido</p>
      <label htmlFor="Nombre">Nombre:</label>
      <input type="text" name="name" onChange={onChange} />
      <p>! {Nombre} !</p>

    </div>
  )
}