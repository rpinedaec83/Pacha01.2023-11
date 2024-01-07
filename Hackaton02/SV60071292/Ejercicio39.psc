//Ejercicio39
//Hacer un algoritmo en Pseint que cumpla con la aproximación del número pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es:
//			
//			Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...

Algoritmo AproximacionPi
	
	Definir n Como Entero
	Definir terminoActual, piAprox Como Real
	
	Escribir "Ingrese la cantidad de terminos para la aproximacion de pi: "
	Leer n 
	
	para i <- 0 Hasta n - 1 Con Paso 1 Hacer 
//		calcula el termino con la formula
		terminoActual <- 4 / (1 + 2 * i)
		
		
		si i % 2 = 0 Entonces 
			piAprox <- piAprox + terminoActuaL
		SiNo
			piAprox <- piAprox - terminoActual
		FinSi
	FinPara
	
	Escribir "La aproximacion de pi con ", n, " es: ", piAprox 
	
FinAlgoritmo
