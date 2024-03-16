import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

function Imgdetail(){

    const [urlimg, setUrlimg] =  useState(localStorage.getItem("img"));

    const [volver, setVolver] = useState(false);

    const regresar = () => {
        setVolver(true);
    }

    if (volver === true){
        return <Navigate to="/" />;
      }
    
    return(
        <div className="detalleimagen">
            <h1>Detalle de la imagen</h1>
            <img src={urlimg} alt={urlimg} className="imgdetail"/>
            <div className="button" onClick={regresar}><button>Volver</button></div>
        </div>
    );
}

export default Imgdetail