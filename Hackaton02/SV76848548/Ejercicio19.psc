//19 Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma 
//con su número identificador y salario diario correspondiente:

//Cajero (56$/día).

//Servidor (64$/día).

//Preparador de mezclas (80$/día).

//Mantenimiento (48$/día).

//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador 
//del empleado y la cantidad de días que trabajó en la semana (6 días máximos). 
//Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Ejercicio19
	
	numero = 0
	dias = 0
	Escribir "Ingrese el tipo de empleado que es (1 al 4):"
	Leer numero
	Escribir "la cantidad de días que trabajó en la semana (6 días máximos):"
	Leer dias
	
	si dias > 6 entonces
		Escribir "la cantidad de días  que trabajó en la semana sobrepasa los 6 dias "
	SiNo
		si dias > 4 entonces
			Escribir "El identificador es incorrecto"
		SiNo
			si numero = 1 entonces
				tipo = "cajero"
				salario = 56
				ganancia = salario*(dias)
				escribir "Usted es ",tipo, " y la ganancia es ", (ganancia)
			SiNo 
				si numero = 2 entonces
					tipo = "servidor"
					salario = 64
					ganancia = salario*(dias)
					escribir "Usted es ",tipo, " y la ganancia es ", (ganancia)
				SiNo 
					si numero = 3 entonces
						tipo = "Preparador de mezclas"
						salario = 80
						ganancia = salario*(dias)
						escribir "Usted es ",tipo, " y la ganancia es ", (ganancia)
					SiNo 
						si numero = 4 entonces
							tipo = "mantenimiento"
							salario = 48
							ganancia = salario*(dias)
							escribir "Usted es ",tipo, " y la ganancia es ", (ganancia)
							
						FinSi
						
					FinSi
					
				FinSi
				
			FinSi
		FinSi
	FinSi
FinProceso