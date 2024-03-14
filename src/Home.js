import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Imgdetail from "./imgdetali"


function Home() {

   const [user, setUser] = useState(null);
   
   const [GoPerfil, setGoPerfil] = useState(false);

        useEffect(() => {
        async function fetchUsers() {
          const response = await fetch('https://65f30afd105614e6549fa801.mockapi.io/usuario/Users');
          const usersData = await response.json();
          setUser(usersData[0])
          console.log(usersData)
        }
        fetchUsers();
      }, []); 


      const handleNext = () =>{
        localStorage.setItem("Username", user.Username)
        localStorage.setItem("FirstName", user.FirstName)
        localStorage.setItem("LastName", user.LastName)
        localStorage.setItem("Description", user.Description)
        localStorage.setItem("website", user.website)
        setGoPerfil(true);
      }

      
    const [selectedimg, setSelectedImg] = useState(null);

    // Función para manejar el clic en un carro, actualizando el carro seleccionado
    const mostrarDetalle = () => {
        setSelectedImg(true);
    };

      if (user === null){
        return <div>cargando...</div>
      }
      
    
      if (GoPerfil === true){
        return <Navigate to="/Perfil" />;
      }

  return (
  <div className="perfil">
    <div className="user">
    <img onClick={handleNext} src="https://picsum.photos/350" alt="imgperfil" />
    <h1>{user.Username}</h1>
    <p>{user.FirstName}</p>
    <p>{user.LastName}</p>
    <p>Descripcion, Descripcion, DescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcionDescripcion</p>
    <p>{user.website}</p>
    <p>post 201</p>
    <p>followers 1002</p>
    <p>following 654</p>
    {selectedimg && <Imgdetail img={"https://picsum.photos/350"} />}
    </div>
    <div className="fotosperfil">
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
        <img onClick={() => mostrarDetalle()} className ="foto" src="https://picsum.photos/350" alt="imgperfil" />
    </div>
  </div>
  );
}

export default Home;
