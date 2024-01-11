//39. Hacer un algoritmo en Pseint que cumpla con la aproximaci�n del n�mero pi con la serie de Gregory-Leibniz. La formula que se debe aplicar es: Pi = (4/1) - (4/3) + (4/5) - (4/7) + (4/9) - (4/11) + (4/13) - (4/15) ...
Proceso Ejercicio39
    Definir n Como Entero
    Definir terminos Como Real
    Definir aproximacionPi Como Real
	
    Escribir "Ingrese la cantidad de t�rminos para la aproximaci�n de Pi:"
    Leer n
	
    terminos = 0
    aproximacionPi = 0
	
    Para i = 0 Hasta n - 1 Hacer
        terminos = 2 * i + 1
        aproximacionPi = aproximacionPi + ((-1)^i * 4.0 / terminos)
    FinPara
	
    Escribir "La aproximaci�n de Pi con ", n, " t�rminos es:", aproximacionPi
FinProceso