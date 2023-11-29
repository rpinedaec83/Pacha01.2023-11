//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//		
//		¿Cuántos números son Pares?
//		
//		¿Cuál es el mayor de todos?
//		
//		Si el tercero es par, calcular el cuadrado del segundo.
//			
//		Si el primero es menor que el cuarto, calcular la media de los 4 números.
//				
//		Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso  Ejercicio20
    Definir num1, num2, num3, num4, cant_p, may, media, suma Como Entero
	
    Escribir "Ingrese el primer numero: "
    Leer num1
    Escribir "Ingrese el segundo numero: "
    Leer num2
    Escribir "Ingrese el tercer numero: "
    Leer num3
    Escribir "Ingrese el cuarto numero: "
    Leer num4
	
    cant_p = 0
	
    Si num1 % 2 = 0 Entonces
        cant_p = cant_p + 1
    Fin Si
    Si num2 % 2 = 0 Entonces
        cant_p = cant_p + 1
    Fin Si
    Si num3 % 2 = 0 Entonces
        cant_p = cant_p + 1
    Fin Si
    Si num4 % 2 = 0 Entonces
        cant_p = cant_p + 1
    Fin Si
	
    may = num1
    Si num2 > may Entonces
        may = num2
    Fin Si
    Si num3 > may Entonces
        may = num3
    Fin Si
    Si num4 > may Entonces
        may = num4
    Fin Si
	
    Si num3 % 2 = 0 Entonces
        num2 = num2 * num2
    Fin Si
	
    Si num1 < num4 Entonces
        media = (num1 + num2 + num3 + num4) / 4
    Fin Si
	
    Si num2 > num3 Y num3 >= 50 Y num3 <= 700 Entonces
        suma = num1 + num2 + num3 + num4
    Fin Si
	
    Escribir "Cantidad de numero pares: ", cant_p
    Escribir "El mayor de todos es: ", may
    Escribir "El cuadrado del segundo si el tercero es par: ", num2
    Escribir "La media de los 4 numeros si el primero es menor que el cuarto: ", media
    Escribir "La suma de los 4 numeros si se cumple la segunda condicion: ", suma
	
FinProceso


