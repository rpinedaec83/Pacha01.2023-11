// 38. Hacer un algoritmo en Pseint que nos permita saber si un n�mero es un n�mero perfecto
Proceso Ejercicio38
    Definir numero, sumaDivisores, i Como Entero
	
    Escribir "Ingrese un n�mero para verificar si es un n�mero perfecto:"
    Leer numero
    sumaDivisores = 0
	
    Para i = 1 Hasta numero / 2 Hacer
        Si numero % i = 0 Entonces
            sumaDivisores = sumaDivisores + i
        FinSi
    FinPara
	
    Si sumaDivisores = numero Entonces
        Escribir "El n�mero ", numero, " es un n�mero perfecto."
    Sino
        Escribir "El n�mero ", numero, " no es un n�mero perfecto."
    FinSi
FinProceso