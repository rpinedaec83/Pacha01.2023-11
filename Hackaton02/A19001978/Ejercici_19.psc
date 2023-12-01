//19. Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de 
// empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:
//  Cajero (56$/día).
//  Servidor (64$/día).
//  Preparador de mezclas (80$/día).
//  Mantenimiento (48$/día).
// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que 
// representen al número identificador del empleado y la cantidad de días que trabajó en la 
// semana (6 días máximos). Y el programa le mostrará por pantalla la cantidad de dinero que 
// el dueño le debe pagar al empleado que ingresó

Proceso Ejercici_19
	
	Escribir "Tipos de empleado y tarifa por dia : "
	Escribir "1. Cajero ($56)"
	Escribir "2. Servidor ($64)"
	Escribir "3. Preparador de mezclas ($80)"
	Escribir "4. Mantenimiento ($48)"
	Escribir "Ingrese el numero identificador del tipo de empleado: "
	Leer numeroIdentificador
	
	Escribir "Ingrese el numero de dias trabajados durante la semana (1 - 6): "
	Leer diasTrabajados
	
	sueldoEmpleado = 0
	
	Segun numeroIdentificador Hacer
		1:
			sueldoEmpleado = diasTrabajados * 56
		2:
			sueldoEmpleado = diasTrabajados * 64
		3:
			sueldoEmpleado = diasTrabajados * 80
		4:
			sueldoEmpleado = diasTrabajados * 48
		De Otro Modo:
			Escribir "Numero de identificador invalido"
	FinSegun
	
	Escribir "El suedo del empleado es: ", sueldoEmpleado
	
FinProceso
