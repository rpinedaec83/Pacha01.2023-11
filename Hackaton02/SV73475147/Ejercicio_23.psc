// Hacer un algoritmo en Pseint para calcular la suma de los números impares menores o iguales a n
Proceso Ejercicio_23
	Definir n, suma, i Como Entero
	
    Escribir "Ingrese un n?mero entero positivo:"
    Leer n
	
    Si n < 1 Entonces
        Escribir "El n?mero debe ser positivo."
    SiNo
        suma <- 0
        Para i <- 1 Hasta n Con Paso 1 Hacer
            Si i % 2 <> 0 Entonces
                suma <- suma + i
            FinSi
        FinPara
        Escribir "La suma de los n?meros impares menores o iguales a ", n, " es: ", suma
    FinSi
FinProceso
