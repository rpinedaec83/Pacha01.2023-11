//40. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Nilakantha. La formula que se debe aplicar es:
//Pi = = 3 + 4/(2*3*4) - 4/(4*5*6) + 4/(6*7*8) - 4/(8*9*10) + 4/(10*11*12) - 4/(12*13*14) ...
Proceso Ejercicio40
	Definir n Como Entero
	Definir pi_A, denominador Como Real
	
	Escribir  "Ingrese la cantidad de terminos para aproximar pi: "
	Leer n 
	
	pi_A <- 3.0
	denominador <- 2.0

	Para i <- 1 Hasta n Con Paso 1 Hacer
		Si i % 2 = 0 Entonces
			pi_A <- pi_A - 4 / (denominador*(denominador+1)*(denominador+2))
		SiNo
			pi_A <- pi_A + 4 / (denominador*(denominador+1)*(denominador+2))
		FinSi
		denominador <- denominador + 2 
	FinPara
	Escribir "La aproxmiacion de pi con ", n," es:", pi_A
	
FinProceso

	