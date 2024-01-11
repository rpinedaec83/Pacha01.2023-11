// Hacer un algoritmo en Pseint para ayudar a un trabajador a saber cu�l ser� su sueldo semanal, se sabe que si trabaja 40 horas o menos, se le pagar� $20 por hora, pero si trabaja m�s de 40 horas entonces las horas extras se le pagar�n a $25 por hora.
Proceso Ejercicio6
    Definir horasTrabajadas, sueldoSemanal Como Real
    Escribir "Ingrese las horas trabajadas en la semana:"
    Leer horasTrabajadas
	
    Si horasTrabajadas <= 40 Entonces
        // Si trabaja 40 horas o menos, se le paga $20 por hora
        sueldoSemanal = horasTrabajadas * 20.0
    Sino
        // Si trabaja m�s de 40 horas, se le paga $20 por las primeras 40 horas y $25 por las horas extras
        sueldoSemanal = 40 * 20.0 + (horasTrabajadas - 40) * 25.0
    FinSi
    Escribir "Su sueldo semanal es: $", sueldoSemanal
FinProceso