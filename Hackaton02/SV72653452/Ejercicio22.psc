// 22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números.

Algoritmo Ejercicio22
    // Definir variables
    Definir numero, factorial Como Entero
	
    // Leer el número
    Escribir "Ingrese un número para calcular su factorial:"
    Leer numero
	
    // Inicializar el factorial a 1
    factorial <- 1
	
    // Calcular el factorial
    Si numero >= 0 Entonces
        Para i <- 1 Hasta numero Hacer
            factorial <- factorial * i
        FinPara
		
        // Mostrar el resultado
        Escribir "El factorial de ", numero, " es: ", factorial
    Sino
        Escribir "No se puede calcular el factorial de un número negativo."
    FinSi
FinAlgoritmo