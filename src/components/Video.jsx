import React from "react";
import videoTerreno from "../assets/terreno.mp4";

export const Video = () => {
  return (
    <div>
      <video src={videoTerreno} controls />
      <button>Aca podes ver nuestros lotes</button>
    </div>
  );
};
