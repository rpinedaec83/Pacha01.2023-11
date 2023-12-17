// 1. Hacer un algoritmo en Pseint que lea un n�mero por el teclado y determinar si tiene tres d�gitos.
Proceso Ejercicio1
    Definir numero Como Entero
    Escribir "Ingrese un n�mero:"
    Leer numero
	
    Si Abs(numero) >= 100 y Abs(numero) <= 999 Entonces
        Escribir "El n�mero tiene tres d�gitos."
    Sino
        Escribir "El n�mero no tiene tres d�gitos."
    FinSi
FinProceso