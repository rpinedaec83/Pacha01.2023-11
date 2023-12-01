//26. Hacer un algoritmo en Pseint para calcular el resto y cociente por medio de restas sucesivas.
Proceso ejericio26
	Definir numerador,denominador,resto,contador Como Entero;
	resto = 0
	contador = 0
	Escribir "Ingrese el numerador: "
	Leer numerador
	Escribir "Ingrese el denominador: "
	Leer denominador
	Repetir
		numerador = numerador - denominador
		resto = numerador
		contador = contador + 1
	Hasta Que numerador < denominador
	Escribir "El resto es: ",resto
	Escribir "El cociente es: ",contador
FinProceso