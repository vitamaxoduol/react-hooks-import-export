import React from "react";
import howManyParks from "./parks/howManyParks";
import MesaVerde from "./parks/MesaVerde";
import * as RMFunctions from "./parks/RockyMountain"

let parksMesaVerde = (MesaVerde())
console.log(parksMesaVerde);
console.log(RMFunctions.trees);// "Aspen and Pine"
console.log(RMFunctions.wildlife); // "Elk, Bighorn Sheep, Moose"
console.log(RMFunctions.elevator);//Attempted import error

function ColoradoStateParks() {
  howManyParks(); // => "42 parks!"

  return <h1>Colorado State Parks!</h1>;
}

export default ColoradoStateParks;
