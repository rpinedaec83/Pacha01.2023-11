Proceso ejercicio6
	Definir horasTrabajadas, salario Como Entero
	Escribir "Ingrese horas trabajadas"
	leer horasTrabajadas
	
	Si horasTrabajadas <= 40  Entonces
		salario = horasTrabajadas*20 
	SiNo
		salario = horasTrabajadas*25
	Fin Si
	
	Escribir "El sueldo de semanal es " , salario, " porque trabajo ", horasTrabajadas, " horas a la semana"
FinProceso
