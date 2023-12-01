//11. Hacer un algoritmo en Pseint que lea tres números y diga cuál es el mayor.
Proceso Ejercicio_11
	
	Escribir "Ingrese el primer numero: "
	Leer primerNumero
	
	Escribir "Ingrese el segundo numero: "
	Leer segundoNumero
	
	Escribir "Ingrese el tercer numero: "
	Leer tercerNumero
	
	numeroMayor = 0
	
	Si primerNumero > numeroMayor Entonces
		numeroMayor = primerNumero
	SiNo
		Si segundoNumero > numeroMayor Entonces
			numeroMayor = segundoNumero
		SiNo
			Si tercerNumero > numeroMayor Entonces
				numeroMayor = tercerNumero
			FinSi
		FinSi
	FinSi
	
	Escribir "El numero mayor es: ", numeroMayor
	
FinProceso
