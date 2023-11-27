//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su 
//sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, 
//pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.

Algoritmo Ejercicio6
	
	Definir horas,horas_extras,pago Como Real
	Escribir "Escribir cuantas horas a trabajado"
	Leer  horas
	
	Si horas > 40 Entonces
		horas_extras <- horas - 40
		pago <- (40*20) + (horas_extras*25)
	SiNo
		pago <- horas*20
	finSi
	
	Escribir  "El pago semanal por total de horas es : " , pago
FinAlgoritmo
