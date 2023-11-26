//6. Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su 
//sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, 
//pero si trabaja m�s de 40 horas entonces las horas extras se le pagar�n a $25 por hora.

Algoritmo Ejercicio6
	
	Definir horas,horas_extras,pago Como Real
	Escribir "Escribir cuantas horas a trabajado"
	Leer  horas
	
	Si horas >= 40 Entonces
		horas_extras=horas-40
		pago = (40*20) + (horas_extras *25)
	SiNo
		pago=horas*20
	finSi
	
	Escribir  "El pago semanal por horas es : " , pago
FinAlgoritmo
	