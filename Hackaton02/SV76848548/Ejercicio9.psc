//9. Hacer un algoritmo en Pseint para determinar el aumento de un trabajador, 
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.

Proceso Ejercicio9
	numero = 0
	Escribir "Ingrese cuanto gana: "
	Leer numero

	si numero <= 2000 Entonces
		aumento = 10
		sumar = TRUNC((numero)*(aumento/100))
		Escribir "Usted tendra un aumento del ",aumento,"% y en total seria: ",(numero+sumar)
	SiNo
		aumento = 5
		sumar = TRUNC((numero)*(aumento/100))
		Escribir "Usted tendra un aumento del ",aumento,"% y en total seria: ",(numero+sumar)
	FinSi
FinProceso
