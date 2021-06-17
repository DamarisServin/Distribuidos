import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { useListVals } from 'react-firebase-hooks/database';

function BotonA({color, texto}){
    return(
        <button className={color}>{texto}</button>
    );
}

function Ejemplo() {

  const db = firebase.ref("/partidas");
  const [partidas, loading, error] = useListVals (db);

  useEffect(() => {
    console.log(partidas);
  });

    const history = useHistory();
    function envia(){
        history.push("Label");
    }

  return (
    <div>
      <p>Hola Mundo</p>
      <button onClick={envia}>Enviar</button>
      <BotonA color="botonRojo" texto="Algo" />
      <BotonA color="botonAzul" texto="Azul"/>
    </div>
  );
}

export default Ejemplo;
