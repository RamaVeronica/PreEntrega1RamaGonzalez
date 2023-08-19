//Pre entrega 1 - Página fotografía y naturaleza

let totalCarro=0;

let opcionServicio=prompt("Indica que servicio quieres contratar:\n1-Tour fotográfico: un día en la naturaleza castellano - 80€ p/persona.\n2-Tour fotográfico: un día en la naturaleza en inglés - 100€ p/persona.\n3-Sesión de fotos 1 hora - 35€.\n4-Sesión de fotos 1/2 día - 50€\n0-Salir.");

while(opcionServicio!='0'){
    switch(opcionServicio){
        case '1':
            alert('Tour fotográfico en castellano ha sido añadido al carro de compra por un valor de 80€.');
            sumarCarro(80);
            break;
        case '2':
            alert('Tour fotográfico en inglés ha sido añadido al carro de compra por un valor de 100€.');
            sumarCarro(100);
            break;
        case '3':
            alert('Sesión de fotos 1 hora ha sido añadido al carro de compra por un valor de 35€.');
            sumarCarro(35);
            break;
        case '4':
            alert('Sesión de fotos 1/2 día ha sido añadido al carro de compra por un valor de €50.');
            sumarCarro(50);
            break;
        default:
            alert('No has seleccionado ningúna opción.');
            break;
    }
    opcionServicio=prompt("Indica que servicio quieres contratar:\n1-Tour fotográfico: un día en la naturaleza castellano - 80€ p/persona.\n2-Tour fotográfico: un día en la naturaleza en inglés - 100€ p/persona.\n3-Sesión de fotos 1 hora - 35€.\n4-Sesión de fotos 1/2 día - 50€\n0-Salir.");
}

function sumarCarro(precioServicio){
    totalCarro=totalCarro+precioServicio;
    console.log('Subtotal del Carro €'+totalCarro);
}

alert('El total de los servicios seleccionados es: €'+totalCarro);