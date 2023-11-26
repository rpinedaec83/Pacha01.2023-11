//Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora.
Proceso Ejercicio6
	definir sueldo,horas, excedente,pago Como Real
	escribir "Escribe las horas trabajadas"
	leer horas
	escribir "Escribe el pago por hora"
	leer pago
	
	si horas > 40 Entonces
		excedente = horas -40
		sueldo =(40*pago) + (excedente *pago+5)
	SiNo
		sueldo = horas* pago
	FinSi
	escribir " El pago semanal por las ",horas," horas trabajadas es: s/",sueldo
FinProceso
