// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//Cajero (56$/día).
//Servidor (64$/día).
//Preparador de mezclas (80$/día).
//Mantenimiento (48$/día).
//El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó
Proceso Ejercicio19
	SALARIO_CAJERO = 56
    SALARIO_SERVIDOR = 64
    SALARIO_PREPARADOR = 80
    SALARIO_MANTENIMIENTO = 48
	
    Definir idEmpleado, diasTrabajados Como Entero
    Definir salarioSemanal Como Real
	
    Escribir "Ingrese el número identificador del empleado:"
    Leer idEmpleado
    Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6 días):"
    Leer diasTrabajados
	
	Si diasTrabajados >= 1 y diasTrabajados <= 6 Entonces
        Si idEmpleado = 1 Entonces
            salarioSemanal = SALARIO_CAJERO * diasTrabajados
			Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
        Sino 
			Si idEmpleado = 2 Entonces
				salarioSemanal = SALARIO_SERVIDOR * diasTrabajados
				Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
			Sino 
				Si idEmpleado = 3 Entonces
					salarioSemanal = SALARIO_PREPARADOR * diasTrabajados
					Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
				Sino 
					Si idEmpleado = 4 Entonces
						salarioSemanal = SALARIO_MANTENIMIENTO * diasTrabajados
						Escribir "El salario semanal para el empleado ", idEmpleado, " es: $", salarioSemanal
					Sino
						Escribir "Número de empleado no válido."
					FinSi
					
					
					
				FinSi
			FinSi
		FinSi
	SiNo
		Escribir "Cantidad de días trabajados no válida. Debe ser de 1 a 6 días."
	FinSi
FinProceso
	