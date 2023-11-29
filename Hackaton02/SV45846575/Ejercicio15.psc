//Hacer un algoritmo en Pseint que convierta centímetros a pulgadas y libras a kilogramos.

Proceso Ejercicio15
	definir k,l,g,t Como Real
	definir opc Como Caracter
	definir num_cm,pulgadas como real
	escribir "Escoga que desea hacer"
	escribir "(1) Libras a Kilos"
	escribir "(2) Centimetros a Pulgadas"
	Escribir "(0) Salir"
	Escribir "Elige una opcion(0-2)...."sin saltar
	leer opc
	segun opc Hacer
		'1':
			Limpiar Pantalla
			Escribir "Esta es la opcion 1"
	escribir " Ingrese el valor de libras "
	leer l
	k<-l/2.20462
	escribir, "libras son: ",k, " kilos"
'2':
	Limpiar Pantalla
	Escribir "Esta es la opcion 2"
	escribir " Ingresar la cantidad de centimetros"
	leer num_cm
	pulgadas<- num_cm/2.54
	escribir " La cantidad de centimetros en pulgadas es ", pulgadas
	finsegun
	
FinProceso
