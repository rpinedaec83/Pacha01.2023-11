Proceso ejercicio9
	Definir salario, aumento, nuevoSalario Como Real
	
	Escribir "Ingrese el salario del trabajador:"
	Leer salario
	
	aumento <- 0.05 
	
	Si salario <= 2000 Entonces
		aumento <- 0.10  
	FinSi
	
	nuevoSalario <- salario + (salario * aumento) 
	Escribir "El salario anterior era: $", salario
	Escribir "El aumento aplicado es del ", (aumento * 100), "%"
	
	Si salario <= 2000 Entonces
		Escribir "El nuevo salario es: $", nuevoSalario
	Sino
		Escribir "El nuevo salario (con el aumento) es: $", nuevoSalario
	FinSi
	
FinProceso
