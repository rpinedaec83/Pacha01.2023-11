function imprimir(resultado) {
    let divResultado = document.getElementById('divResultado')
    divResultado.innerHTML = resultado
}

// 1. Hacer un algoritmo en JavaScript que lea un número por el 
// teclado y determinar si tiene tres dígitos.
function ejercicio_1() {
    let numero = parseInt(prompt("Ingrese un numero: "))

    if (numero >= 100 & numero <= 999) {
        imprimir("El numero tiene 3 digitos")
    } else {
        imprimir("El numero no tiene 3 digitos")
    }
}

/**2. Hacer un algoritmo en JavaScript que lea un número entero 
por el teclado y determinar si es negativo.*/
function ejercicio_2() {
    let numero = parseFloat(prompt("Ingrese el numero a valuar: "))

    if (numero < 0) {
        imprimir(`El numero ${numero} es negativo`)
    } else {
        imprimir(`El numero ${numero} es positivo`)
    }
}

/**
 * 3. Hacer un algoritmo en JavaScript que lea un número y determinar si termina en 4.
 */
function ejercicio_3() {
    let numero = parseInt(prompt("Ingrese el numero a evaluar: "))

    if (numero % 10 === 4) {
        imprimir("El numero termina en 4")
    } else {
        imprimir("El numero no termina en 4")
    }
}

/**
 * 4. Hacer un algoritmo en JavaScript que lea tres números 
 * enteros y los muestre de menor a mayor.
 */
function ejercicio_4() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))
    let num3 = parseInt(prompt("Ingrese el tercer numero"))
    let aux = 0

    if (num1 > num2) {
        aux = num1
        num1 = num2
        num2 = aux
    }

    if (num1 > num3) {
        aux = num1
        num1 = num3
        num3 = aux
    }

    if (num2 > num3) {
        aux = num2
        num2 = num3
        num3 = aux
    }

    imprimir(`Los numeros ordenados de menor a mayor son: ${num1}, ${num2}, ${num3}`)
}

/**
 * 5. Hacer un algoritmo en JavaScript para una tienda de zapatos 
 * que tiene una promoción de descuento para vender al mayor, esta 
 * dependerá del número de zapatos que se compren. Si son más de diez, 
 * se les dará un 10% de descuento sobre el total de la compra; si el número 
 * de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de 
 * descuento; y si son más treinta zapatos se otorgará un 40% de descuento. 
 * El precio de cada zapato es de $80.
 */
function ejercicio_5() {
    let zapatosComprados = parseInt(prompt("Ingrese el numero de zapatos comprados:"))
    let descuento = 0
    let precioUnidad = 80
    let precioTotal = zapatosComprados * precioUnidad
    let precioFinal = 0

    if (zapatosComprados >= 30) {
        descuento = precioTotal * 0.4
    } else if (zapatosComprados >= 20) {
        descuento = precioTotal * 0.2
    } else if (zapatosComprados >= 10) {
        descuento = precioTotal * 0.1
    } else {
        descuento = 0
    }

    if (zapatosComprados > 0) {
        precioFinal = precioTotal - descuento
        imprimir(`Cantidad zapatos comprado: ${zapatosComprados} <br>
        Precio por unidad: $.${precioUnidad} <br>
        Precio Total: $.${precioTotal} <br>
        Descuento: $.${descuento} <br>
        Precio Final: $.${precioFinal}`)
    } else {
        imprimir("Ingrese un valor valido")
    }
}

/**
 * 6. Hacer un algoritmo en JavaScript para ayudar a un trabajador a 
 * saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas 
 * o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas 
 * entonces las horas extras se le pagarán a $25 por hora.
 */
function ejercicio_6() {
    let horasTrabajadas = parseInt(prompt("Ingrese la horas trabajadas: "))
    let sueldoHora = 0
    let sueldoFinal = 0

    if (horasTrabajadas <= 40) {
        sueldoHora = 20
    } else {
        sueldoHora = 25
    }

    sueldoFinal = horasTrabajadas * sueldoHora

    imprimir(`Horas trabajadas: ${horasTrabajadas} <br>
    Sueldo por hora: S/. ${sueldoHora} <br>
    Sueldo Final: S/. ${sueldoFinal}`)
}

/**
 * 7. Hacer un algoritmo en JavaScript para una tienda de helado que da un 
 * descuento por compra a sus clientes con membresía dependiendo de su tipo, 
 * sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los descuentos 
 * son los siguientes:

   Tipo A 10% de descuento
   Tipo B 15% de descuento
   Tipo C 20% de descuento
 */
function ejercicio_7() {
    let tipoMembresia = prompt("Ingrese su tipo de membresia: ").toUpperCase()
    let costoCompra = parseFloat(prompt("Ingrese el costo de su compra: "))

    let descuento = 0
    let tipoDescuento = ""
    let costoFinal = 0

    switch (tipoMembresia) {
        case 'A':
            tipoDescuento = "Tiene un descuento del 10%"
            descuento = costoCompra * 0.1
            break
        case 'B':
            tipoDescuento = "Tiene un descuento del 15%"
            descuento = costoCompra * 0.15
            break
        case 'C':
            tipoDescuento = "Tiene un descuento del 20%"
            descuento = costoCompra * 0.2
        default:
            tipoDescuento = "Tipo de membresia invalida, no tiene descuento :C"
    }

    costoFinal = costoCompra - descuento

    imprimir(`El valor de su compra es: ${costoCompra} <br>
    Su tipo de membresia es: ${tipoMembresia} <br>
    ${tipoDescuento} = S/. ${descuento} <br>
    Costo final: S/. ${costoFinal}`)
}

/**
 * 8. Hacer un algoritmo en JavaScript 
 * para calcular el promedio de tres notas y determinar si el estudiante aprobó o no.
 */
function ejercicio_8() {
    let nota1 = parseInt(prompt("Ingrese la primera nota: "))
    let nota2 = parseInt(prompt("Ingrese la segunda nota: "))
    let nota3 = parseInt(prompt("Ingrese la tercera nota: " ))

    let promedio = (nota1 + nota2 + nota3) / 3
    let estado = ""

    if (promedio >= 11) {
        estado = "Aprobado"
    } else {
        estado = "Desaprobado"
    }

    imprimir(`Su promedio es: ${promedio} <br>
    El alumno está: ${estado}`)
}

/**
 * 9. Hacer un algoritmo en JavaScript para determinar el aumento de un trabajador, 
 * se debe tomar en cuenta que si ganaba más de 
 * $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
 */

function ejercicio_9() {
    let sueldoInicial = parseFloat(prompt("Ingrese su sueldo actual: "))
    let aumento = 0
    let sueldoFinal = 0

    if (sueldoInicial > 2000) {
        aumento = sueldoInicial * 0.05
    } else {
        aumento = sueldoInicial * 0.1
    }

    sueldoFinal = sueldoInicial + aumento

    imprimir(`Sueldo inicial: S/. ${sueldoInicial} <br>
    Aumento: S/. ${aumento} <br>
    Sueldo Final: S/. ${sueldoFinal}`)
}

// 10. Hacer un algoritmo en JavaScript que diga si un número es par o impar.
function ejercicio_10() {
    let numeroEvaluar = parseInt(prompt("Ingrese un numero entero: "))

    if (numeroEvaluar % 2 === 0) {
        imprimir(`El numero ${numeroEvaluar} es par`)
    } else {
        imprimir(`El numero ${numeroEvaluar} es impar`)
    }
}

//11. Hacer un algoritmo en JavaScript que lea tres números y diga cuál es el mayor.
function ejercicio_11() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))
    let num3 = parseInt(prompt("Ingrese el tercer numero: "))

    let numMayor = -9999

    if (num1 > numMayor) {
        numMayor = num1
    }
    if (num2 > numMayor) {
        numMayor = num2
    }
    if (num3 > numMayor) {
        numMayor = num3
    }

    imprimir(`El numero mayor es: ${numMayor}`)
}

// 12. Hacer un algoritmo en JavaScript que lea dos números y diga cuál es el mayor.
function ejercicio_12() {
    let num1 = parseInt(prompt("Ingrese el primer numero: "))
    let num2 = parseInt(prompt("Ingrese el segundo numero: "))

    if (num1 > num2) {
        imprimir(`El numero mayor es: ${num1}`)
    } else {
        imprimir(`El numer mayor es: ${num2}`)
    }
}

//13. Hacer un algoritmo en JavaScript que lea una letra y diga si es una vocal.
function ejercicio_13() {
    let letraEvaluar = prompt("Ingrese la letra a evaluar: ").toLowerCase()

    switch (letraEvaluar) {
        case 'a':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'e':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'i':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'o':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        case 'u':
            imprimir(`La letra ${letraEvaluar} es una vocal`)
            break
        default:
            imprimir(`No es una vocal`)            
    }
}

// 14. Hacer un algoritmo en JavaScript que lea un entero
// positivo del 1 al diez y al 9 y determine si es un número primo.
function ejercicio_14() {
    let bandera = true
    let numero = 0

    while (bandera) {
        numero = parseInt(prompt("Ingrese el numero a evaluar: "))

        if (numero <=0 || numero > 9) {
            alert("Ingrese un numero entero entre 1 y 9")
        } else {
            bandera = false
        }
    }

    //Evaluar si el numero es primo
    let contDivisores = 0
    
    for (let i = 1; i <= numero; i++) {
        if (numero % i === 0) {
            contDivisores++
        }
    }   

    if (contDivisores === 2) {
        imprimir(`El numero ${numero} es primo`)
    } else {
        imprimir(`El numero ${numero} no es primo`)
    }
}

// 15. Hacer un algoritmo en JavaScript que convierta centímetros a pulgadas y libras a kilogramos.
function ejercicio_15() {
    let operacion = parseInt(prompt(`Ingrese 1 o 2 según la operación que desea realizar: 
    \n1. Convertir de centimetro a pulgadas
    \n2. Cnvertir libras a kilos`))

    let valorIngresado = 0
    let valorConvertido = 0

    switch (operacion) {
        case 1:
            valorIngresado = parseInt(prompt("Ingrese los centimetros a convertir: "))
            valorConvertido = valorIngresado / 2.5387
            imprimir(`${valorIngresado} centimetros es igual a ${valorConvertido} pulgadas`)
            break
        case 2:
            valorIngresado = parseInt(prompt("Ingrese las libras a convertir: "))
            valorConvertido = valorIngresado * 0.45359237
            imprimir(`${valorIngresado} libras es igual a ${valorConvertido} kilos`)
            break
        default: 
            imprimir(`Valor ingresado invalido`)
    }
}

/**
 * 16. Hacer un algoritmo en JavaScript que lea un 
 * número y según ese número, indique el día que corresponde.
 */
function ejercicio_16() {
    let numero = parseInt(prompt("ingrese un numero de 1 al 7: "))
    let dia = ""

    switch (numero) {
        case 1:
            dia = "Lunes"
            break
        case 2:
            dia = "Martes"
            break
        case 3:
            dia = "Miercoles"
            break
        case 4:
            dia = "Jueves"
            break
        case 5:
            dia = "Viernes"
            break
        case 6:
            dia = "Sabado"
            break
        case 7:
            dia = "Domingo"
            break
        default:
            imprimir("Valor invalido")
    }

    if (numero >= 1 && numero <= 7) {
        imprimir(`El día es: ${dia}`)
    }
}

/**
 * 18. Hacer un algoritmo en JavaScript para una empresa se encarga de la venta y
 * distribución de CD vírgenes. Los clientes pueden adquirir los artículos 
 * (supongamos un único producto de una única marca) por cantidad. Los precios son:

    $10. Si se compran unidades separadas hasta 9.

    $8. Si se compran entre 10 unidades hasta 99.

    $7. Entre 100 y 499 unidades.

    $6. Para mas de 500 unidades.

    La ganancia para el vendedor es de 8,25 % de la venta. Realizar un 
    algoritmo en JavaScript que dado un número de CDs a vender calcule el 
    precio total para el cliente y la ganancia para el vendedor.
 */