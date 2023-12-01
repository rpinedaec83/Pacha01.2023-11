// Hacer un algoritmo en Pseint para una heladería se tienen 4 tipos de empleados ordenados de la siguiente forma con su número identificador y salario diario correspondiente:

// Cajero (56$/día).
// Servidor (64$/día).
// Preparador de mezclas (80$/día).
// Mantenimiento (48$/día).

// El dueño de la tienda desea tener un programa donde sólo ingrese dos números enteros que representen al número 
//identificador del empleado y la cantidad de días que trabajó en la semana (6 días máximos). Y el programa le
//mostrará por pantalla la cantidad de dinero que el dueño le debe pagar al empleado que ingresó

Proceso Ejercicio_19
	Definir identificador, dias_trabajados Como Entero;
	Definir salario_diario, salario_total Como Real;
	
	Escribir "Ingrese el número identificador segun la lista: 1 Cajero, 2 Servidor, 3 Preparador de mesclas, 4 Mantenimiento";
	Leer identificador;
	Escribir "Ingrese la cantidad de días trabajados en la semana (máximo 6):";
	Leer dias_trabajados;
	
	Si dias_trabajados > 6 Entonces
		Escribir "Error: El número de días trabajados no puede ser mayor a 6.";
	Sino
		Segun identificador Hacer
			1: salario_diario = 56; // Cajero
			2: salario_diario = 64; // Servidor
			3: salario_diario = 80; // Preparador de mezclas
			4: salario_diario = 48; // Mantenimiento
			De Otro Modo: 
				Escribir "Identificador de empleado no válido.";
					FinSegun
		
		salario_total = salario_diario * dias_trabajados;
		Escribir "El salario total a pagar al empleado es: $", salario_total;
	FinSi
FinProceso
