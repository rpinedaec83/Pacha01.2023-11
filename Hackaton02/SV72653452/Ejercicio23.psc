// 23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.

Algoritmo Ejercicio23
    // Definir variables
    Definir n, suma_impares Como Entero
	
    // Leer el valor de n
    Escribir "Ingrese el valor de n para calcular la suma de los números impares hasta n:"
    Leer n
	
    // Inicializar la suma de impares a cero
    suma_impares <- 0
	
    // Verificar si n es positivo
    Si n >= 0 Entonces
        // Calcular la suma de los números impares hasta n
        Para i <- 1 Hasta n Hacer
            Si i Mod 2 <> 0 Entonces
                suma_impares <- suma_impares + i
            FinSi
        FinPara
		
        // Mostrar el resultado
        Escribir "La suma de los números impares hasta ", n, " es: ", suma_impares
    Sino
        Escribir "Ingrese un valor de n no negativo."
    FinSi
FinAlgoritmo