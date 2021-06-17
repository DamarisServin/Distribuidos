import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import firebase from "../firebase";
import { useListVals } from "react-firebase-hooks/database";
import "../css/Final.css";
import Chart from "react-google-charts";
import { useParams } from "react-router-dom";

function Final() {

  const params = useParams();

  const [ganadores, loading, error] = useListVals(
    firebase.ref("/sala/"+params._code+"/Ganadores")
  );

  function top5(){

    
  }

  useEffect(() => {
    console.log(ganadores);
      if (ganadores.length !== 0) {
        
      }
  }, [ganadores]);

  return (
    <React.Fragment>
      <br/>
      <br/>
    <div className="card shadow-lg bg-white rounded fullCard">
      <div className="card-body">

        <Chart
          width={"auto"}
          height={"300px"}
          chartType="Bar"
          loader={<div>Cargando</div>}
          data={[
            [" ", " "],
            ["2do", 1000],
            ["1er", 1170],
            ["3er", 1030],
          ]}
            
          options={{
            // Material design options
            legend: {position: 'none'},
            colors: ["purple"],
          }}

          // For tests
          rootProps={{ "data-testid": "2" }}
        />
      </div>
    </div>
    </React.Fragment>
  );
}

export default Final;
