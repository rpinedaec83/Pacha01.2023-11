//23. Hacer un algoritmo en Pseint para calcular la suma de los n�meros impares menores o iguales a n.
Proceso Ejercicio23
	Definir n, suma, i Como Entero
    Escribir "Ingrese un n�mero para calcular la suma de los impares menores o iguales a �l:"
    Leer n
    Si n <= 0 Entonces
        Escribir "El n�mero debe ser mayor que cero"
    Sino
        suma = 0
        Escribir "Calculando la suma de los n�meros impares menores o iguales a ", n, "..."
		Para i = 1 Hasta n Con Paso 2 Hacer
			suma = suma + i
			Escribir "La suma total de los impares menores o iguales a ", n, " es ", suma
		FinPara
    FinSi
FinProceso