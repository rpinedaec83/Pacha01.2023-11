SubProceso validacion <- VerificarEdad ( AnioNacimiento )
	
	AnioActual = 2023
	
	edad = AnioActual - AnioNacimiento
	
	si edad >= 18 Entonces
		validacion = Verdadero
	SiNo
		validacion = Falso
	FinSi
	
	
Fin SubProceso

Proceso Iteraciones
	
//	bandera = Verdadero
//	valorNumero = 0
//	Mientras bandera Hacer
//		valorNumero = valorNumero + 1
//		Escribir  valorNumero
//		si valorNumero = 50 Entonces
//			bandera = Falso
//		FinSi
//	Fin Mientras
//	
//	
//	bandera2 = Verdadero
//	Repetir
//		valorNumero = valorNumero - 1
//		Escribir  valorNumero
//		si valorNumero = 0 Entonces
//			bandera2 = Falso
//		FinSi
//	Hasta Que bandera2 = Falso
//	
	
	
//	Para inicio<-0 Hasta 10 Con Paso paso Hacer
//		Escribir inicio
//		inicio = inicio + 2
//	Fin Para
	
	Escribir "Escribe tu año de nacimiento"
	Leer anio
	verificacion = VerificarEdad(anio)
	si verificacion Entonces
		escribir "Eres mayor de edad"
	SiNo
		Escribir  "No eres mayor de edad"
	FinSi
	
	Escribir "Escribe tu año de nacimiento"
	Leer anio
	verificacion = VerificarEdad(anio)
	si verificacion Entonces
		escribir "Eres mayor de edad"
	SiNo
		Escribir  "No eres mayor de edad"
	FinSi
	
FinProceso
