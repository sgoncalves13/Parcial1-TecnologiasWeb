import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import { Suspense } from 'react';

function Perfil() {
    const [username, setUsername] = useState(localStorage.getItem("Username"));
    const [firstname, setFirstname] = useState(localStorage.getItem("FirstName"));
    const [lastname, setLastname] = useState(localStorage.getItem("LastName"));
    const [description, setDescription] = useState(localStorage.getItem("Description"));
    const [website, setWebsite] = useState(localStorage.getItem("website"));

    const [volver, setVolver] = useState(false);

    const {t, i18n} = useTranslation(["trad"])

    const regresar = () => {
        setVolver(true);
    }

    if (volver === true){
        return <Navigate to="/" />;
      }

    var random_boolean = Math.random() < 0.5;

    if (random_boolean === true){
        return(
            <Suspense>
                <div className="detalleperfil">
                                <div className="formulario">
                                    <div className="imgdetalle">
                                    <img className="imguser" src="https://picsum.photos/350" alt="imgperfil" />
                                    </div>
                                    <div className="detalleusuario">
                                        <p1>{t("Username")}: </p1>
                                        <p className="info">{username}</p>
                                        <p1>{t("Name")}: </p1>
                                        <p className="info">{firstname + " " + lastname}</p>
                                        <p1>{t("Description")}: </p1>
                                        <p className="info">{description}</p>
                                        <p1>{t("URL")}: </p1>
                                        <p className="info">{website}</p>
                                    </div>
                                    <div className="button" onClick={regresar}><button>{t("Save")}</button></div>
                                </div>
                            </div>
            </Suspense>
        );
    }
    else{
        return(
            <div className="detalleperfil">
                <div className="formulario">
                    <div className="imgdetalle">
                    <img className="imguser" src="https://picsum.photos/350" alt="imgperfil" />
                    </div>
                    <div className="detalleusuario">
                        <p1>{t("Username")}: </p1>
                        <p><input Value={username} className="inputusuario"></input></p>
                        <p1>{t("Name")}: </p1>
                        <p><input Value={firstname + " " + lastname} className="inputusuario"></input></p>
                        <p1>{t("Description")}: </p1>
                        <p><input Value={description} className="inputusuario"></input></p>
                        <p1>{t("URL")}: </p1>
                        <p><input Value={website} className="inputusuario"></input></p>
                    </div>
                    <div className="button" onClick={regresar}><button>{t("Save")}</button></div>
                </div>
            </div>
        );
    }
}

export default Perfil;