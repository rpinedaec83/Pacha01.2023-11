Proceso Promedio3Notas
	Definir nota1, nota2, nota3, prom Como Real
	Definir condicion Como Caracter
	Escribir Sin Saltar "Escribe la primera nota: "
	Leer nota1
	Escribir Sin Saltar "Escribe la segunda nota: "
	Leer nota2
	Escribir Sin Saltar "Escribe la tercera nota: "
	Leer nota3
	prom = (nota1 + nota2 + nota3) / 3
	Si prom < 11 Entonces
		condicion = "desaprobado"
	FinSi
		Si prom >= 11 Entonces
		condicion = "aprobado"
	FinSi
	Escribir "El alumno tiene un promedio de " prom ", está " condicion
	FinProceso