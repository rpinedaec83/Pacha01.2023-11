Proceso Ejercicio9
	
//	Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, si generaba menos de $2000 su aumento será de un 10%.
	
		// Definir variable
		Definir salario, nuevoSalario Como Real
		
		// Solicitar al usuario ingresar el salario actual
		Escribir "Ingrese el salario actual del trabajador: "
		Leer salario
		
		// Determinar el aumento según el salario actual
		Si salario > 2000 Entonces
			nuevoSalario <- salario * 1.05  // Aumento del 5%
		Sino
			nuevoSalario <- salario * 1.10  // Aumento del 10%
		FinSi
		
		// Mostrar el nuevo salario
		Escribir "El nuevo salario del trabajador es: $", nuevoSalario
		
FinProceso
