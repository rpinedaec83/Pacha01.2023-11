// 24. Hacer un algoritmo en Pseint para realizar la suma de todos los números pares hasta el 1000.

Algoritmo Ejercicio24
    // Definir variables
    Definir suma_pares, i Como Entero
	
    // Inicializar la suma de pares a cero
    suma_pares <- 0
	
    // Calcular la suma de todos los números pares hasta 1000
    Para i <- 2 Hasta 1000 Con Paso 2 Hacer
        suma_pares <- suma_pares + i
    FinPara
	
    // Mostrar el resultado
    Escribir "La suma de todos los números pares hasta 1000 es: ", suma_pares
FinAlgoritmo