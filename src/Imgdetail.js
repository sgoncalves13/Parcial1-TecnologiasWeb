import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Imgdetail(){

    const [urlimg, setUrlimg] =  useState(localStorage.getItem("img"));

    const [volver, setVolver] = useState(false);

    const {t, i18n} = useTranslation(["trad"])


    const regresar = () => {
        setVolver(true);
    }

    if (volver === true){
        return <Navigate to="/" />;
      }
    
    return(
        <div className="detalleimagen">
            <h1>{t("DetailImg")}</h1>
            <img src={urlimg} alt={urlimg} className="imgdetail"/>
            <div className="button" onClick={regresar}><button>{t("Return")}</button></div>
        </div>
    );
}

export default Imgdetail