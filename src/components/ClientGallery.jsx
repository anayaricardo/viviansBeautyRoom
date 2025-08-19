import React from "react";
import styles from "./ClientGallery.module.css";
import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";
import client3 from "../assets/images/client3.jpg";
import client4 from "../assets/images/client4.jpg";
import client5 from "../assets/images/client5.jpg";
import client6 from "../assets/images/client6.jpg";
import client7 from "../assets/images/client7.jpg";
import client8 from "../assets/images/client8.jpg";
import client9 from "../assets/images/client9.jpg";
import client10 from "../assets/images/client10.jpg";
import client11 from "../assets/images/client11.jpg";
import client12 from "../assets/images/client12.jpg";
import client13 from "../assets/images/client13.jpg";
import client14 from "../assets/images/client14.jpg";
import client15 from "../assets/images/client15.jpg";
import client16 from "../assets/images/client16.jpg";
import client17 from "../assets/images/client17.jpg";
import client18 from "../assets/images/client18.jpg";
import client19 from "../assets/images/client19.jpg";
import client20 from "../assets/images/client20.jpg";
import client21 from "../assets/images/client21.jpg";
import client22 from "../assets/images/client22.jpg";
import client23 from "../assets/images/client23.jpg";
import client24 from "../assets/images/client24.jpg";
import client25 from "../assets/images/client25.jpg";
import client26 from "../assets/images/client26.jpg";
import client27 from "../assets/images/client27.jpg";
import client28 from "../assets/images/client28.jpg";
import client29 from "../assets/images/client29.jpg";
import client30 from "../assets/images/client30.jpg";
import client31 from "../assets/images/client31.jpg";
import client32 from "../assets/images/client32.jpg";
import client33 from "../assets/images/client33.jpg";
import client34 from "../assets/images/client34.jpg";
import client35 from "../assets/images/client35.jpg";
import client36 from "../assets/images/client36.jpg";
import client37 from "../assets/images/client37.jpg";
import client38 from "../assets/images/client38.jpg";
import client39 from "../assets/images/client39.jpg";
import client40 from "../assets/images/client40.jpg";
import client41 from "../assets/images/client41.jpg";
import client42 from "../assets/images/client42.jpg";
import client43 from "../assets/images/client43.jpg";
import client44 from "../assets/images/client44.jpg";
import client45 from "../assets/images/client45.jpg";
import client46 from "../assets/images/client46.jpg";
import client47 from "../assets/images/client47.jpg";
import client48 from "../assets/images/client48.jpg";
import client49 from "../assets/images/client49.jpg";
import client50 from "../assets/images/client50.jpg";
import client51 from "../assets/images/client51.jpg";
import client52 from "../assets/images/client52.jpg";
import client53 from "../assets/images/client53.jpg";
import client54 from "../assets/images/client54.jpg";
import client55 from "../assets/images/client55.jpg";
import client56 from "../assets/images/client56.jpg";
import client57 from "../assets/images/client57.jpg";
import client58 from "../assets/images/client58.jpg";
import client59 from "../assets/images/client59.jpg";
import client60 from "../assets/images/client60.jpg";
import client61 from "../assets/images/client61.jpg";
import client62 from "../assets/images/client62.jpg";
import client63 from "../assets/images/client63.jpg";

const clientImages = [
  { id: 1, src: client1, alt: "Cliente 1" },
  { id: 2, src: client2, alt: "Cliente 2" },
  { id: 3, src: client3, alt: "Cliente 3" },
  { id: 4, src: client4, alt: "Cliente 4" },
  { id: 5, src: client5, alt: "Cliente 5" },
  { id: 6, src: client6, alt: "Cliente 6" },
  { id: 7, src: client7, alt: "Cliente 7" },
  { id: 8, src: client8, alt: "Cliente 8" },
  { id: 9, src: client9, alt: "Cliente 9" },
  { id: 10, src: client10, alt: "Cliente 10" },
  { id: 11, src: client11, alt: "Cliente 11" },
  { id: 12, src: client12, alt: "Cliente 12" },
  { id: 13, src: client13, alt: "Cliente 13" },
  { id: 14, src: client14, alt: "Cliente 14" },
  { id: 15, src: client15, alt: "Cliente 15" },
  { id: 16, src: client16, alt: "Cliente 16" },
  { id: 17, src: client17, alt: "Cliente 17" },
  { id: 18, src: client18, alt: "Cliente 18" },
  { id: 19, src: client19, alt: "Cliente 19" },
  { id: 20, src: client20, alt: "Cliente 20" },
  { id: 21, src: client21, alt: "Cliente 21" },
  { id: 22, src: client22, alt: "Cliente 22" },
  { id: 23, src: client23, alt: "Cliente 23" },
  { id: 24, src: client24, alt: "Cliente 24" },
  { id: 25, src: client25, alt: "Cliente 25" },
  { id: 26, src: client26, alt: "Cliente 26" },
  { id: 27, src: client27, alt: "Cliente 27" },
  { id: 28, src: client28, alt: "Cliente 28" },
  { id: 29, src: client29, alt: "Cliente 29" },
  { id: 30, src: client30, alt: "Cliente 30" },
  { id: 31, src: client31, alt: "Cliente 31" },
  { id: 32, src: client32, alt: "Cliente 32" },
  { id: 33, src: client33, alt: "Cliente 33" },
  { id: 34, src: client34, alt: "Cliente 34" },
  { id: 35, src: client35, alt: "Cliente 35" },
  { id: 35, src: client36, alt: "Cliente 36" },
  { id: 35, src: client37, alt: "Cliente 37" },
  //   { id: 35, src: client38, alt: "Cliente 38" },
  { id: 35, src: client39, alt: "Cliente 39" },
  { id: 35, src: client40, alt: "Cliente 40" },
  { id: 35, src: client41, alt: "Cliente 41" },
  { id: 35, src: client42, alt: "Cliente 42" },
  { id: 35, src: client43, alt: "Cliente 43" },
  { id: 35, src: client44, alt: "Cliente 44" },
  { id: 35, src: client45, alt: "Cliente 45" },
  { id: 35, src: client46, alt: "Cliente 46" },
  { id: 35, src: client47, alt: "Cliente 47" },
  { id: 35, src: client48, alt: "Cliente 48" },
  { id: 35, src: client49, alt: "Cliente 49" },
  { id: 35, src: client50, alt: "Cliente 50" },
  //   { id: 35, src: client51, alt: "Cliente 51" },
  { id: 35, src: client52, alt: "Cliente 52" },
  { id: 35, src: client53, alt: "Cliente 53" },
  { id: 35, src: client54, alt: "Cliente 54" },
  { id: 35, src: client55, alt: "Cliente 55" },
  { id: 35, src: client56, alt: "Cliente 56" },
  { id: 35, src: client57, alt: "Cliente 57" },
  { id: 35, src: client58, alt: "Cliente 58" },
  { id: 35, src: client59, alt: "Cliente 59" },
  { id: 35, src: client60, alt: "Cliente 60" },
  { id: 35, src: client61, alt: "Cliente 61" },
  { id: 35, src: client62, alt: "Cliente 62" },
  { id: 35, src: client63, alt: "Cliente 63" },
];

function ClientGallery() {
  return (
    <section className={styles.clientGallerySection}>
      <div className={styles.clientGalleryGrid}>
        {clientImages.map((image) => (
          <div key={image.id} className={styles.clientImageContainer}>
            <img
              src={image.src}
              alt={image.alt}
              className={styles.clientImage}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ClientGallery;
