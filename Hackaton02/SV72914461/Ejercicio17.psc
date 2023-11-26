//17 Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

algoritmo Ejercicio17
	
	hora = 0
	minuto = 0
	segundos = 0
	Escribir "Ingrese hora:"
	Leer hora
	Escribir "Ingrese minutos:"
	Leer minuto
	Escribir "Ingresesegundos:"
	Leer segundos
	
	nuevo_segundo = (hora*3600)+(minuto*60)+segundos+1
	nueva_hora = TRUNC(nuevo_segundo/3600)
	num = nuevo_segundo mod 3600
	nuevo_minuto = TRUNC(num/60)
	num_segundos = num mod 60
	
	Escribir "El numero de horas ", nueva_hora
	Escribir "El numero de minutos ", nuevo_minuto
	Escribir "El numero de segundos ", num_segundos
	
Finalgoritmo
