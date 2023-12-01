//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su 
//sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Proceso Ejercicio_6
	
	Escribir "Ingrese las horas trabajadas: "
	Leer horastrabajadas
	
	sueldoPorHora = 0
	sueldoFinal = 0
	
	Si horastrabajadas <= 40
		sueldoPorHora = 20
	SiNo
		sueldoPorHora = 25
	FinSi
	
	sueldoFinal = horastrabajadas * sueldoPorHora
	
	Escribir "Total de horas trabajadas: ", horastrabajadas
	Escribir  "Sueldo por hora: ", sueldoPorHora
	Escribir "Sueldo Final: ", sueldoFinal
		
FinProceso
