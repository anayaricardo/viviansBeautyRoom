import React from "react";
import viviansLogo from "./assets/viviansLogo.png";
import SocialMedia from "./components/SocialMedia";
import horizontalImage from "./assets/images/horizontalImage2.jpg";
import ClientGallery from "./components/ClientGallery.jsx";
import "../src/App.css";

function App() {
  return (
    <>
      <div>
        <div>
          <a>
            <img src={viviansLogo} className="logo" alt="Vivian's logo" />
          </a>
        </div>
        <h4 className="glass-container">
          "¡Hey! 🌟 ¡Qué bueno tenerte por aquí! Prepara la cámara y relájate.
          Tu momento 'me time' ha comenzado, y estoy lista para crear ese look
          que tienes en mente. Bienvenida a tu nuevo happy place."
          <br />
          <br />
          <em>Vivian</em>
        </h4>
        <img
          src={horizontalImage}
          className="horizontal-image"
          alt="Imagen horizontal de bienvenida"
        />
        <h4 className="glass-container">
          <h2>¡Inspírate! 💖</h2>
          ¿Buscas ideas para tu próximo cambio de look? Desliza para ver la
          magia que hemos creado con nuestras increíbles clientes. ¡Te veo
          pronto!
        </h4>
        <ClientGallery />
        <h3 className="glass-container">
          ¡Tu glow up empieza ahora! ✨
          <br />
          ¿Estás lista para brillar? Agenda tu cita o explora la magia de mi
          trabajo en redes sociales.
        </h3>
        <div className="social-media-fixed-container">
          <SocialMedia />
          {/* <p className="read-the-docs">Visita mis redes sociales</p> */}
        </div>
      </div>
    </>
  );
}

export default App;
