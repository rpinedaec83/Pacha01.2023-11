Proceso calculadora
	escribir ("Escribe el primer numero")
	leer primerNumero
	escribir ("escribirelsegundonumero")
	leer segundonumero
	escribir ("presiona 1 para sumar,presiona 2 para restar,presiona 3 para multiplicar o presiona 4 para dividir")
leer operacion
	resultado=0
	
	si operacion ="1" entonces 
		resultado=primernumero + segundonumero
	SiNo
		si operacion="2" entonces 
			resultado = primernombre - segundonumero
		sino 	
			
		FinSi
	FinSi
//	si operacion ="2" entonces 
//		resultado=primernumero-segundonumero
	FinSi
	escribir "el resultado  es ",resultado
	
	
	
FinProceso
