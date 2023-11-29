Proceso MembresiaDescuento
	Definir membresia Como Caracter
	Definir dsct Como Entero
	Mientras No(Mayusculas(membresia)='A' o Mayusculas(membresia)='B' o Mayusculas(membresia)='C') Hacer
		Escribir "Ingrese una el tipo de membresia:"
		Leer membresia
	FinMientras
	Segun Mayusculas(membresia) Hacer
		'A': dsct = 10
		'B': dsct = 15
		'c': dsct = 20
	FinSegun
	Escribir "El descuento que le corresponde es del ",dsct,"%"
FinProceso
