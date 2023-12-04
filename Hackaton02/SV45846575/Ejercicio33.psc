// Hacer un algoritmo en Pseint que permita al usuario continuar con el programa.
Proceso Ejercicio33
	definir total,a,b,x,n Como Entero
	escribir "Ingresa el total de numeros"
	leer total
	x = 1
	mientras x <= total hacer
		escribir "Ingresa un numero"
		leer n
		si x == 1 Entonces
			a = n
			b = n
		SiNo
			si n> a Entonces
				a= n
			SiNo
				si n< b Entonces
					b=n
					finsi
				FinSi
				finsi
				x=x+1
			FinMientras
			escribir" El numero mayor es: ",a
			escribir "El numero menor es: ",b
	
FinProceso
