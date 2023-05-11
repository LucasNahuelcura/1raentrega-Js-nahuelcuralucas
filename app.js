// Parte principal.

alert("Bienvenidos a la Jugueteria El Rey Dumbo")
alert("Le pediremos datos principales para realizar la compra")



//Nombre del cliente.
function nombre_usuario(){
    let nombre = null
    while(isNaN(nombre) != true){
        nombre = prompt("Su Nombre y Apellido: ");
        nombre = nombre.toLowerCase();
        if(isNaN(nombre)){
            return nombre
        }
        else{
            alert("Incorrecto por favor ingrese nuevamente su nombre")
        }
    }
}

//Pedido de Dni del cliente.

function dni_usuario(){
    let dni;
    while(isNaN(dni)){
        dni = parseInt(prompt("Su Dni: "));
        if(!isNaN(dni)){
            return dni
        }
        else{
            alert("Incorrecto por favor ingrese nuevamente su nombre")
        }
    }
}

//Solicitud de edad del cliente.

function edad_usuario(){
    let edad;
    while(isNaN(edad) || edad <18){
        edad = parseInt(prompt("Su Edad: "));
        if(edad >=18){
            return edad
        }
        else if(edad < 18){
            alert("Recuerde ser mayor de 18 Años para realizar la compra");
        }
        else{
            alert("Incorrecto, ingrese nuevamente su edad")
        }
    }
}

//Pago afectuado por el cliente.

function monto_solicitado(){
    let monto = 0
    while(monto<=10000 || monto>1000000){
        monto = parseInt(prompt("Monto a pagar por el producto: "));
        if(monto>=10000 && monto<1000000){
            return monto
        }
        else{
            monto = 0
            alert("Compra minima mayorista debe ser de : $5.000 -- Compra maxima mayorista de ser de : $100.000")
        }
    }
}

// Prestacion de cuotas solicutada por le comercio.

function elegir_cuotas(){
    let consulta = null
    let cuotas = 1
    while(cuotas != 3 || cuotas !=6 || cuotas !=12){
        cuotas = parseInt(prompt("Indicar cantidad de cuotas a pagar con intereses. Opciones: 3 y 6 "))
        if(cuotas==3){
            alert("El porcentaje a pagar en 3 cuotas es del 30%")
            consulta = prompt("Desea continuar con la operacion? Si o No.")
            consulta = consulta.toLowerCase();
            if(consulta == "si"){
                cuotas = 3;
                return cuotas
            }
            else if(consulta == "no"){
                alert("Le mostraremos nuevamente las opciones de cuotas.")
            }
            else{
                alert("Incorrecto, intente nuevamente")
            }
        }
        else if(cuotas==6){
            alert("El porcentaje a pagar en 6 cuotas es del 50%")
            consulta = prompt("Desea continuar con la operacion? Si o No.")
            consulta = consulta.toLowerCase();
            if(consulta == "si"){
                cuotas = 6;
                return cuotas
            }
            else if(consulta == "no"){
                alert("Le mostraremos nuevamente las opciones de cuotas.")
            }
            else{
                alert("Incorrecto, intente nuevamente")
            }
        }
        

            else if(consulta == "no"){
                alert("Le mostraremos nuevamente las opciones de cuotas.")
            }
            else{
                alert("Incorrecto, intente nuevamente")
            }
        }
        
    }


// Calculo de porcentaje en las cuotas.

function porcentajes(){
    let porcentaje_a_pagar = null
    if(cuotas_usuario == 3){
        porcentaje_a_pagar = 0.3;
    }
    else if(cuotas_usuario == 6){
        porcentaje_a_pagar = 0.5;
    }
    
    return porcentaje_a_pagar
}

// Total de la comprar a pagar.

function pagototal(){
    let monto_a_pagar = monto_solicito_cliente + (monto_solicito_cliente * porcentaje_elegido)
    return monto_a_pagar
}

// Division del monto en cuotas.

function cuotas_a_pagar(){
    let cuotas_cliente = pago_total_cliente / cuotas_usuario
    return cuotas_cliente
}


//variables

// Muestra final compilacion de datos del cliente.


let nombre_cliente = nombre_usuario();
let dni = dni_usuario();
let edad = edad_usuario();
let monto_solicito_cliente = monto_solicitado();
let cuotas_usuario = elegir_cuotas();
let porcentaje_elegido = porcentajes();
let pago_total_cliente = pagototal();
let cuanto_por_cuota = cuotas_a_pagar();
alert(" Gracias por comprar en Jugueteria El Rey Dumbo");
alert("Nombre del solicitante: " + nombre_cliente + "\nNumero de DNI: " + dni + "\nMonto solicitado: " + monto_solicito_cliente + "\nCuotas elegidas: " + cuotas_usuario + "\nPorcentaje a pagar: " + porcentaje_elegido + "\nTotal a pagar: " + pago_total_cliente + "\nTotal a pagar por cuota: " + cuanto_por_cuota);
alert("¡¡Te esperamos nuevamente en Jugueteria El Rey Dumbo, gracias por su compra!!");