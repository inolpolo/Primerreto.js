var precioBase = 100;
var descuento = 15;

// Definicion de la funcion
// Funcion que resuelve el descuento y valida que este correcto
function calcularPreciototal(precioBase,descuento){
    console.log(calcularPreciototal(precioBase,descuento));

    if(precioBase<=0 || descuento<0 || descuento>100){
         return ("Los valores ingresados son invalidos");
    
     }
     if(descuento == 0){
        return console.log("$" + precioBase + " no tiene descuento");
    }

    if (descuento>0 && descuento <=100){
        var precioTotal=precioBase-(precioBase*descuento)/100;
         return ("El precio final con su descuento es:$ " + precioTotal);


     }
}
consolé.log(calcularPreciototal(precioBase,descuento))

  