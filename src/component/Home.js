import React, { useEffect, useState} from "react";
import { useHistory } from "react-router-dom";
import "../css/Home.css";
import firebase from "../firebase";
import { useListVals } from 'react-firebase-hooks/database';

function Home() {

  const initValues={
    nombre: "",
    code: ""
  };

  const [values, setValues] = useState(initValues);

  const [partidas, loading, error] = useListVals (firebase.ref("/partidas"));

  const history = useHistory();

  useEffect(() => {
    console.log(partidas);
  }, []
  );

  function verCodigo(evt){
      evt.preventDefault();
      if( partidas.includes(values.code)){
        if (values.nombre !== ""){
          history.push("/Quiz/"+values.code+"/"+values.nombre);

        }
        else
          alert('Por favor ingresa tu nombre');
      }else 
        alert('No existe la partida');
  }

  function handleChange(evt){
    const {name, value} = evt.target;
    setValues({...values, [name]: value});
  }

  return (
    <main className="form-signin">
      <form>
        <div className="card shadow-lg p-3 mb-5 bg-white rounded">
          <div className="card-body">
            <img
              className="mb-4"
              src="http://escom.ipn.mx/images/logoESCOM2x.png"
              alt="logo_escom"
              width="72"
              height="57"
            />
            <h1 className="h3 mb-3 fw-normal">Ingresar a un Quiz</h1>

            <div className="form-floating">
              <input
                type="text"
                className="form-control"
                name="code"
                onChange={handleChange}
                placeholder="Código del Quiz"
                value={values.code}
              />
              <label>Código del Quiz</label>
            </div>
            <div className="form-floating">
              <input
                type="text"
                name="nombre"
                className="form-control"
                onChange={handleChange}
                placeholder="Nombre"
                value={values.nombre}
              />
              <label >Nombre</label>
            </div>
            <button className="w-100 btn btn-lg btn-blue" type="submit" onClick={verCodigo}>
              Entrar
            </button>
            <p className="mt-5 mb-3 text-muted">EXPO ESCOM 2021</p>
          </div>
        </div>
      </form>
    </main>
  );
}

export default Home;
