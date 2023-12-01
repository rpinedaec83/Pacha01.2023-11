// Hacer un algoritmo en Pseint para calcular la suma de los n primeros números
Proceso Ejercicio_22
	Definir n, suma Como Entero
	
    Escribir "Ingrese un número entero positivo:"
    Leer n
	
    Si n < 1 Entonces
        Escribir "El número debe ser positivo."
    SiNo
        suma <- 0
        Para i <- 1 Hasta n Con Paso 1 Hacer
            suma <- suma + i
        FinPara
        Escribir "La suma de los primeros ", n, " números es: ", suma
    FinSi
FinProceso
