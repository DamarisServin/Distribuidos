import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "../css/Quiz.css";
import firebase from "../firebase";
import { useListVals, useObject } from "react-firebase-hooks/database";
import { useParams } from "react-router-dom";


function Quiz() {
  const [contador, setContador] = useState(1);

  const [puntuacion, setPuntuacion] = useState(0);

  let params = useParams();


  const [preguntaAct, setPreguntaAct] = useState(null);

  const [sala, loading, error] = useListVals(
    firebase.ref("/sala/" + params._code)
  );

  const history = useHistory();

  //  const [tiempo, setTiempo] = useState(-1);

  useEffect(() => {
    console.log(sala);
      if (sala.length !== 0) {
        setPreguntaAct(sala[2][0]);
      }
  }, [sala]);



  const checaRespuesta = (num) => (evt)=> {
    evt.preventDefault();

    setContador(contador + 1);

    if (preguntaAct.opciones[num]===preguntaAct.respuesta) {
      setPuntuacion(puntuacion + 1);
      alert('Correcto :)');
    }else{
      alert('Incorrecto la respuesta correcta es: '+preguntaAct.respuesta);
      
    }

    if (contador < sala[4]) {
      setPreguntaAct(sala[2][contador]);
      
    } else{ 

      try {
        firebase.ref("/sala/" + params._code + "/Ganadores/").push( { "nombre":params._nombre, "puntuacion":puntuacion });

     } catch (error) {
       console.error(error);
     }

     history.push("/Final/"+params._code);
    }
  }

  const Preguntas = () => {

    if (preguntaAct !== null)
      return (
        <React.Fragment>
          <h1>
            {sala[1]} - Pregunta {contador}
          </h1>
          <div className="grid">
            <h2>{preguntaAct.enunciado}</h2>
          </div>
          <div className="container">
            <div className="row align-items-end">
              <div className="col">
              <button className="w-100 btn btn-lg btn-green shadow" onClick={checaRespuesta(0)}>{preguntaAct.opciones[0]}</button>
              <button className="w-100 btn btn-lg btn-purple shadow" onClick={checaRespuesta(1)}>{preguntaAct.opciones[1]}</button>
              <button className="w-100 btn btn-lg btn-pink shadow" onClick={checaRespuesta(2)}>{preguntaAct.opciones[2]}</button>
              <button className="w-100 btn btn-lg btn-orange shadow" onClick={checaRespuesta(3)}>{preguntaAct.opciones[3]}</button>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    else
      return (
        <div className="justify-content-center ">

          <h2>Cargando...</h2>
        </div>
      );
  };

  return (
    <div>
      <Preguntas />
    </div>
  );
}

export default Quiz;
