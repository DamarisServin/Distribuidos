import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { useListVals } from "react-firebase-hooks/database";
import "../css/Final.css";
import Chart from "react-google-charts";
import { useParams } from "react-router-dom";

function Final() {
  const aux=[["Nombre", "Puntuacion"]];
  const [top, setTop] = useState(aux);

  const params = useParams();

  const [ganadores, loading, error] = useListVals(
    firebase.ref("/sala/"+params._code+"/Ganadores")
  );

  const history = useHistory();


  function regresar(){

    history.push("/");
  }
  

  useEffect(() => {
  //  console.log(ganadores); 
      if (ganadores.length !== 0) {
        var name;
        var point;
    
        for (var i = 0; i <ganadores.length; i++) {
          name=ganadores[i].nombre;
          point=ganadores[i].puntuacion;
          aux.push([name, point]); 
       }
       setTop(aux);
       console.log(top);
      }else{
        
      }

  }, [ganadores]);

  return (
    <React.Fragment>
      <br/>
      <h1>
            Resultados
          </h1>
      <br/>
    <div className="card shadow-lg bg-white rounded fullCard">
      <div className="card-body">

        <Chart
          width={"auto"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Cargando</div>}
          data={top}
            
          options={{
            // Material design options
            legend: {position: 'none'},
            colors: ["purple"],
          }}

          // For tests
          rootProps={{ "data-testid": "2" }}
        />
            <br/>
            <br/>

    <button className="w-25 btn btn-lg btn-blue" type="submit" onClick={regresar}>
              Jugar otra partida
            </button>
            <br/>
            <br/>

            </div>
    </div>
    </React.Fragment>
  );
}

export default Final;

