// Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cuál será su sueldo semanal, se sabe que si trabaja 40 horas o menos,
//se le pagará $20 por hora, pero si trabaja más de 40 horas entonces las horas extras se le pagarán a $25 por hora

Proceso Ejercicio_6
	Definir horasTrabajadas, sueldoBase, sueldoExtra, sueldoTotal Como Real
	
    Escribir "Ingrese el número de horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        sueldoTotal = horasTrabajadas * 20
    SiNo
        sueldoBase = 40 * 20
        sueldoExtra = (horasTrabajadas - 40) * 25
        sueldoTotal = sueldoBase + sueldoExtra
    FinSi
	
    Escribir "El sueldo total es: $", sueldoTotal
FinProceso
