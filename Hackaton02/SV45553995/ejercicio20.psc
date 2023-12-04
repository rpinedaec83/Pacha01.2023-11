//20. Hacer un algoritmo en Pseint que que lea 4 números enteros positivos y verifique y realice las siguientes operaciones:
//		
//		¿Cuántos números son Pares?
//		
//		¿Cuál es el mayor de todos?
//		
//		Si el tercero es par, calcular el cuadrado del segundo.
//			
//			Si el primero es menor que el cuarto, calcular la media de los 4 números.
//				
//				Si el segundo es mayor que el tercero, verificar si el tercero esta comprendido entre los valores 50 y 700. 
//Si cumple se cumple la segunda condición, calcular la suma de los 4 números.
Proceso ejercicio20
	
	Definir a,b,c,d Como Entero
	Definir pares,mayornumero Como Entero
	Definir promedio Como Real
	pares = 0
	promedio = 0
	mayornumero = 0
	
	Escribir "Ingresa el primer número: "
	Leer a
	Escribir "Ingresa el segundo número: "
	Leer b
	Escribir "Ingresa el tercer número: "
	Leer c
	Escribir "Ingresa el cuarto número: "
	Leer d
	
	Si a MOD 2 = 0 Entonces
		pares = pares+1
	FinSi
	
	Si b MOD 2=0 Entonces
		pares = pares+1
	FinSi
	
	Si c MOD 2 = 0 Entonces
		pares = pares+1
	FinSi
	
	Si d MOD 2 = 0 Entonces
		pares = pares+1
	FinSi
	
	Si a > b Y a > c Y a > d Entonces
		mayornumero = a
	SiNo
		Si b > c Y b > d Entonces
			mayornumero = b
		SiNo
			Si c > d Entonces
				mayornumero = c
			SiNo
				mayornumero = d
			FinSi
		FinSi
	FinSi
	
	Si c MOD 2 = 0 Entonces
		Escribir "El cuadrado del segundo es: ",b*b
	FinSi
	
	Si a < d Entonces
		Escribir "El promedio de todos los números es: ",(a+b+c+d)/4
	FinSi
	
	Si b > c Entonces
		Si c >= 50 Y c<=700 Entonces
			Escribir "El tercer número está comprendido entre 50-700"
			Escribir "La suma de los cuatro números es: ",a+b+c+d
		SiNo
			Escribir "El tercer número no está comprendido entre 50-700"
		FinSi
	FinSi
	
	Escribir "La cantidad de número pares: ",pares
	Escribir "El mayor de todos es: ",mayornumero
FinProceso