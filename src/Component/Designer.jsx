import React from "react";
import "../assets/css/Designer.css";
import log from "../assets/IMG/log.jfif";

const Designer = () => {
  return (
    <div className="Designer flex gap-4 my-5 p-3">
      <img src={log} className="w-8 rounded-full"/>
      <p className="">
        Created by <span>CrackenDev</span>
      </p>
    </div>
  );
};
export default Designer;
