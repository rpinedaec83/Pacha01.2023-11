// 3. Hacer un algoritmo en Pseint que lea un n�mero y determinar si termina en 4.
Proceso Ejercicio3
    Definir numero Como Entero
    Escribir "Ingrese un n�mero:"
    Leer numero
    Definir ultimoDigito Como Entero
    ultimoDigito = Abs(numero) % 10
	
    Si ultimoDigito = 4 Entonces
        Escribir "El n�mero termina en 4."
    Sino
        Escribir "El n�mero no termina en 4."
    FinSi
FinProceso