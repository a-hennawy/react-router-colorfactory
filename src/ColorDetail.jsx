import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const ColorDetail = () => {
  const { name } = useParams();
  useEffect(() => {
    console.log(name);
  }, [name]);
  //   return <p>The color {name}</p>;
};

export default ColorDetail;
