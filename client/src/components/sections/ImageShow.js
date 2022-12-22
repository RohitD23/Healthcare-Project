import React from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "images/Hospital.jpg" },
  { url: "images/IVF_Center.jpg" },
  { url: "images/Modular_OT.jpg" },
];

const imageStyle = { width: "100%", height: 400 };

export default function ImageShow() {
  return (
    <div>
      <SimpleImageSlider
        width={imageStyle.width}
        height={imageStyle.height}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}
