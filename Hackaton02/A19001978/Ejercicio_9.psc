//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.
Proceso Ejercicio_9
	
	Escribir "Ingrese su sueldo actual: "
	Leer sueldoActual
	
	aumento = 0
	sueldoFinal = 0
	
	Si sueldoActual >= 2000 Entonces
		aumento = sueldoActual * 0.05
	SiNo
		aumento = sueldoActual * 0.1
	FinSi
	
	sueldoFinal = sueldoActual + aumento
	
	Escribir "Sueldo actual: S/. ", sueldoActual
	Escribir "Aumento: S/.", aumento
	Escribir "Sueldo Final: S7.", sueldoFinal
	
FinProceso
