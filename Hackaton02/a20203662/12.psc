//  Hacer un algoritmo en Pseint que lea dos números y diga cuál es el mayor.
Proceso Ejercicio12
    Definir num1, num2, mayor Como Real
	
    Escribir "Ingrese el primer número:"
    Leer num1
    Escribir "Ingrese el segundo número:"
    Leer num2

    Si num1 > num2 Entonces
        mayor = num1
    Sino
        mayor = num2
    FinSi
    Escribir "El número mayor es:", mayor
FinProceso
	