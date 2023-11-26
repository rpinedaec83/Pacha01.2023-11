//Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio11
	definir n1,n2,n3 Como Entero
	escribir "Ingrese el primer numero"
	leer n1
	escribir "Ingrese el segundo numero"
	leer n2
	escribir " Ingrese el tercer numero"
	leer n3
	si (n1>n2 y n1>n3) Entonces
		escribir " El primer numero es mayor"
	sino
		si (n2>n1 y n2>n3) Entonces
			escribir "El segundo numero es mayor"
		SiNo
			si (n3>n1 y n3>n2) Entonces
				escribir "El tercer numero es mayor"
			SiNo
				escribir "Los numeros son iguales"
			FinSi
		FinSi
	FinSi
FinProceso
