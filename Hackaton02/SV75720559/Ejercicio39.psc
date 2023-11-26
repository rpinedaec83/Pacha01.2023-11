//39. Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio39
	Definir n Como Entero
	Definir termino_A, pi_A Como Real
	Escribir "Ingrese la cantidad de caracteres de terminos para la aprocimacion de pi : "
	Leer n
	Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
		//calcular termino con la formula
		termino_A <- 4 / (1 + 2 * i)
		
		si i % 2 = 0 Entonces
			pi_A <- pi_A + termino_A 
		SiNo
			pi_A <- pi_A - termino_A
		FinSi
	FinPara
	
	Escribir "La aproximacion de pi con", n, "es: ", pi_A 
	
FinProceso
