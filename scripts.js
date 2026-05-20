function calcularPrecio(precioUnitario,cantidad){
    const total=precioUnitario*cantidad;
    return total;
}
    console.log(calcularPrecio(5,2));
     console.log(calcularPrecio(3,4));
     console.log(calcularPrecio(7,1));

function puedeReservar(tazasDisponibles){
return tazasDisponibles>0;
}

//const botonReservar=document.querySelector("#boton-reservar");

//botonReservar.addEventListener("click",function(){
 //   console.log("EL usuario hizo clic");
//});

const botonReservar=document.querySelector("#boton-reservar");
const contadorTazas=document.querySelector("#contador-tazas");


botonReservar.addEventListener("click",function(){
    //console.log("EL usuario hizo clic");
    const tazasActuales=Number(contadorTazas.textContent);

    if(puedeReservar(tazasActuales)){
        contadorTazas.textContent=tazasActuales-1
    }else{
        botonReservar.textContent="Sin cupos";
        botonReservar.disabled=true;
    }
});