// Hacer un algoritmo en Pseint que lea tres números enteros y los muestre de menor a mayor
Proceso Ejercicio_4
	Definir num1, num2, num3, temporal Como Entero
	
    Escribir "Ingrese los números:"
    Leer num1,num2 , num3

    Si num2 < num1 Entonces
        temporal = num1
        num1 = num2
        num2 = temporal
    FinSi
	
    Si num3 < num1 Entonces
        temporal = num1
        num1 = num3
        num3 = temporal
    FinSi
	
    Si num3 < num2 Entonces
        temporal = num2
        num2 = num3
        num3 = temporal
    FinSi
    Escribir "Los números de menor a mayor son: ", num1, ", ", num2, ", ", num3
FinProceso
