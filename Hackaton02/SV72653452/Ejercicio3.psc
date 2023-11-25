//3. Hacer un algoritmo en Pseint que lea un número y determinar si termina en 4.
Algoritmo Ejercicio3
	Definir numer, ud Como Entero
	Escribir "Dijite un numero entero"
	Leer numer
	
	Si numer >= 0
		ud = numer - trunc(numer/10)*10
	FinSi
	
	Si ud == 4
		Escribir"El numero ingresado termina en 4"
	SiNo
		Escribir"El numero ingresado no termina en 4"
	FinSi
			
FinAlgoritmo
