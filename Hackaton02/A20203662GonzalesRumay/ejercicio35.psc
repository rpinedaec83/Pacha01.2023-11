// 35. Hacer un algoritmo en Pseint que nos permita saber cu�l es el n�mero mayor y menor, se debe ingresar s�lo veinte n�meros.
Proceso Ejercicio35
	Definir numero, mayor, menor Como Real
    Definir i Como Entero
	
    Escribir "Ingrese veinte n�meros:"
	
    Leer numero
    mayor = numero
    menor = numero
	
    Para i = 2 Hasta 20 Hacer
        Escribir "Ingrese el siguiente n�mero:"
        Leer numero
		
        Si numero > mayor Entonces
            mayor = numero
        FinSi
		
        Si numero < menor Entonces
            menor = numero
        FinSi
    FinPara
	
    Escribir "El n�mero mayor es: ", mayor
    Escribir "El n�mero menor es: ", menor
FinProceso