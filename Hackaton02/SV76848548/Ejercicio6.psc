//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal,
//se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Proceso Ejercicio6
	numero = 0
	Escribir "Ingrese cantidad de horas de trabajo en la semana"
	Leer numero
	
	si numero <= 40 Entonces
		pago = 20
		total = pago*numero
		Escribir "Para un total de ",numero," horas trabajados usted recibira un pago total de ",total," $"
	SiNo
		pago = 25
		total = pago*numero
		Escribir "Para un total de ",numero," horas trabajados usted recibira un pago total de ",total," $"
	FinSi
FinProceso
