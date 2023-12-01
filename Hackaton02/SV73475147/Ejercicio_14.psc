// Hacer un algoritmo en Pseint que lea un entero positivo del 1 al diez y al 9 y determine si es un número primo
Proceso Ejercicio_14
	Definir numero Como Entero
	
    Escribir "Ingrese un número entero positivo del 1 al 10:"
    Leer numero
	
    Si numero < 1 o numero > 10 Entonces
        Escribir "El número debe estar entre 1 y 10."
    SiNo
        Si numero == 2 o numero == 3 o numero == 5 o numero == 7 Entonces
            Escribir "El número ", numero, " es primo."
        SiNo
            Escribir "El número ", numero, " no es primo."
        FinSi
    FinSi
FinProceso
