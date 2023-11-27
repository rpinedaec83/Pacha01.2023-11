// 27. Hacer un algoritmo en Pseint para determinar la media de una lista indefinida de números positivos, se debe acabar el programa al ingresar un número negativo.

Algoritmo Ejercicio27
    // Definir variables
    Definir numero, suma, contador Como Real
	
    // Inicializar la suma y el contador a cero
    suma <- 0
    contador <- 0
	
    // Leer números hasta que se ingrese un número negativo
    Escribir "Ingrese números positivos. Ingrese un número negativo para terminar."
	
    Mientras numero >= 0 Hacer
        // Leer el número
        Leer numero
		
        // Verificar si el número es positivo
        Si numero >= 0 Entonces
            // Actualizar la suma y el contador
            suma <- suma + numero
            contador <- contador + 1
        FinSi
    FinMientras
	
    // Calcular la media si se ingresaron números positivos
    Si contador > 0 Entonces
        Definir media Como Real
        media <- suma / contador
        Escribir "La media de los números positivos ingresados es: ", media
    Sino
        Escribir "No se ingresaron números positivos."
    FinSi
FinAlgoritmo