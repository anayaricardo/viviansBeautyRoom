import React from "react";
import instagramIcon from "../assets/instagram.png";
import facebookIcon from "../assets/facebook.png";
import whatsappIcon from "../assets/whatsapp.png";
import mapsIcon from "../assets/maps.png";
import "../App.css";

function SocialMedia() {
  return (
    <>
      <div className="social-media-container">
        <a
          className="social-media-icon"
          href="https://www.instagram.com/viviansbeautyroom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagramIcon} className="social-icon" alt="Instagram" />
        </a>
        <a
          className="social-media-icon"
          href="https://www.facebook.com/viviansbeautyroom/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebookIcon} className="social-icon" alt="Facebook" />
        </a>
        <a
          className="social-media-icon"
          href="https://wa.me/524461043917?text=¡Hola! Podrías darme más información de..."
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={whatsappIcon} className="social-icon" alt="WhatsApp" />
        </a>
        <a
          className="social-media-icon"
          href="https://maps.app.goo.gl/s73BJLYJfUhitqLF9" // Reemplaza con tu URL real de Google Maps
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={mapsIcon} className="social-icon" alt="Maps" />
        </a>
      </div>
    </>
  );
}

export default SocialMedia;
