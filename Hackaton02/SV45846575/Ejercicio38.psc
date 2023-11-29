//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Proceso Ejercicio38
	
	definir i,n,suma Como Entero
	escribir "Ingresa un numero"
	leer n
	i=2
	suma =0
	mientras i <= n Hacer
		si n% i== 0 Entonces
			suma = suma + trunc(n/i)
		FinSi
		i=i+1
	FinMientras
	si suma == n Entonces
		escribir " El numero es perfecto"
	SiNo
		escribir " El numero no es perfecto"
	FinSi
FinProceso
