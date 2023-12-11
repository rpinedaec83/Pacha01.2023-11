//6.Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos,
// se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
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
