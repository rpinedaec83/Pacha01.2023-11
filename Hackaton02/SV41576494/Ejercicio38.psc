//38. Hacer un algoritmo en Pseint que nos permita saber si un número es un número perfecto.
Algoritmo detarea
	
	Definir i,n,suma Como Entero
	
	Escribir "Ingresa un numero"
	
	leer n
	
	i = 2
	
	suma = 0
	
	Mientras i <= n Hacer
		
		si n % i == 0 Entonces
			
			suma = suma + trunc(n/i)
			
		FinSi
		
		i = i + 1
		
	FinMientras
	
	si suma == n Entonces
		
		Escribir "El numero es perfecto"
		
	SiNo
		
		Escribir "No numero no es perfecto"
		
	FinSi
	
FinAlgoritmo