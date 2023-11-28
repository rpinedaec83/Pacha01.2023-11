//22. Hacer un algoritmo en Pseint para calcular la suma de los n primeros números
Proceso ejercicio22
	Definir numeroingresado,suma,x Como Entero
	suma = 0
	Escribir "Ingresa un número: "
	leer numeroingresado
	
	si numeroingresado <= 0 Entonces		
		Escribir "El número ingresado no se puede calcular"
	SiNo
		para x = 1 Hasta numeroingresado Con Paso 1 Hacer
			suma = suma + x
		FinPara
		
		Escribir "La sumatoria es: ",suma
	FinSi     	
FinProceso
