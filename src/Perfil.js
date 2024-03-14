import React, { useEffect, useState } from "react";

function Perfil() {
    const [username, setUsername] = useState(localStorage.getItem("Username"));
    const [firstname, setFirstname] = useState(localStorage.getItem("FirstName"));
    const [lastname, setLastname] = useState(localStorage.getItem("LastName"));
    const [description, setDescription] = useState(localStorage.getItem("Description"));
    const [website, setWebsite] = useState(localStorage.getItem("website"));

    var random_boolean = Math.random() < 0.5;

    if (random_boolean === true){
        return(
            <div className="detalleperfil">
                <img className="imguser" src="https://picsum.photos/350" alt="imgperfil" />
                <h1>Perfil</h1>
                <p>{username}</p>
                <p>{firstname} {lastname}</p>
                <p>{description}</p>
                <p>{website}</p>
                <button>Guardar cambios</button>
            </div>
        );
    }
    else{
        return(
            <div className="detalleperfil">
                <img className="imguser" src="https://picsum.photos/350" alt="imgperfil" />
                <h1>Perfil</h1>
                <p><input Value={username}></input></p>
                <p><input Value={firstname + " " + lastname}></input></p>
                <p><input Value={description}></input></p>
                <p><input Value={website}></input></p>
                <button>Guardar cambios</button>
            </div>
        );
    }
}

export default Perfil;