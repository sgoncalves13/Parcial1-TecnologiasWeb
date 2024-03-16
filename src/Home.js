import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import Imgdetail from "./Imgdetail"
import { Link } from "react-router-dom";


function Home() {

   const [user, setUser] = useState(null);
   
   const [GoPerfil, setGoPerfil] = useState(false);

   const [selectedimg, setSelectedImg] = useState(false);

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
        localStorage.setItem("Username", user.Username);
        localStorage.setItem("FirstName", user.FirstName);
        localStorage.setItem("LastName", user.LastName);
        localStorage.setItem("Description", user.Description);
        localStorage.setItem("website", user.website);
        setGoPerfil(true);
      }

    
    const mostrarDetalle = (urlimg) => {
        setSelectedImg(true);
        localStorage.setItem("img", urlimg);

    };

    if (user === null){
      return <div className="cargando"><strong>Cargando...</strong></div>
    }
    
      
    
    if (GoPerfil === true){
        return <Navigate to="/Perfil" />;
    }

    else if(selectedimg === true){
         return <Navigate to="/Detalle" />;
    }

  return (
  <div className="perfil">
   <div className="user">
   <div className="imgperfil">
      <img onClick={handleNext} src="https://picsum.photos/350" alt="Perfil del usuario" />
  </div>
  <div className="user-info">
    <h1 className="username">{user.Username}</h1>
    <p className="nombre">{user.FirstName} {user.LastName}</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <p>My website: <Link to={user.website}>{user.website}</Link></p>
    <div className="numeros">
    <p><strong>201</strong> posts</p>
    <p><strong>1002</strong> followers</p>
    <p><strong>654</strong> following</p>
    </div>
  </div>
</div>
    <div className="espacio"><hr /></div>
    <div className="fotosperfil">
        <img onClick={() => mostrarDetalle("https://picsum.photos/351")} className ="foto" src="https://picsum.photos/351" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/352")} className ="foto" src="https://picsum.photos/352" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/353")} className ="foto" src="https://picsum.photos/353" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/354")} className ="foto" src="https://picsum.photos/354" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/355")} className ="foto" src="https://picsum.photos/355" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/356")} className ="foto" src="https://picsum.photos/356" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/357")} className ="foto" src="https://picsum.photos/357" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/358")} className ="foto" src="https://picsum.photos/358" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/359")} className ="foto" src="https://picsum.photos/359" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/361")} className ="foto" src="https://picsum.photos/361" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/362")} className ="foto" src="https://picsum.photos/362" alt="imgperfil" />
        <img onClick={() => mostrarDetalle("https://picsum.photos/363")} className ="foto" src="https://picsum.photos/363" alt="imgperfil" />
    </div>
  </div>
  );
}

export default Home;
