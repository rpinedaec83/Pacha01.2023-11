// 34. Hacer un algoritmo en Pseint que imprima la tabla de multiplicar de los n�meros del uno nueve
Proceso Ejercicio34
	Definir i, j, resultado Como Entero
	
    Para i = 1 Hasta 9 Hacer
        Escribir "Tabla de multiplicar del ", i, ":"
		
        Para j = 1 Hasta 10 Hacer
            resultado = i * j
            Escribir i, " x ", j, " = ", resultado
        FinPara
		
        Escribir("") // Salto de l�nea entre tablas
    FinPara
FinProceso