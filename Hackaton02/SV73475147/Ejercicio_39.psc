// Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es
// Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio_39
	Definir n Como Entero
	Definir terminoActual, piAprox Como Real
	
	Escribir "Ingrese la cantidad de terminos para la aproximación de PI: "
	Leer n
	
	Para i <- 0 Hasta n - 1 Con Paso 1 Hacer
		terminoActual <- 4 / (1 + 2 * i)
		
		si i % 2 = 0 Entonces
			piAprox <- piAprox + terminoActual
		SiNo
			piAprox <- piAprox - terminoActual
		FinSi
	FinPara
	Escribir "La aproximación de PI con ",n," es: ", piAprox
FinProceso
