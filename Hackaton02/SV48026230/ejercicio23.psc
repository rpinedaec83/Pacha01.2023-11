//23. Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n.
Proceso ejercicio23
	Definir n, suma, impar Como Entero
    
    Escribir "Ingrese el valor de n:"
    Leer n
    
    suma <- 0
    impar <- 1
    
    Mientras impar <= n Hacer
        suma <- suma + impar
        impar <- impar + 2
    FinMientras
    
    Escribir "La suma de los números impares menores o iguales a ", n, " es: ", suma
FinProceso
