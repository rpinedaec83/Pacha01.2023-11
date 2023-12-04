// 29. Hacer un algoritmo en Pseint para calcular la suma de los primeros cien números con un ciclo mientras.

Algoritmo Ejercicio29
    // Definir variables
    Definir contador, suma Como Entero
	
    // Inicializar la suma y el contador a cero
    suma <- 0
    contador <- 1
	
    // Calcular la suma de los primeros cien números con un ciclo mientras
    Mientras contador <= 100 Hacer
        suma <- suma + contador
        contador <- contador + 1
    FinMientras
	
    // Mostrar el resultado
    Escribir "La suma de los primeros cien números es: ", suma
FinAlgoritmo