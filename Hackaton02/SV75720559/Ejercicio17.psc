//17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.
Proceso  Ejercicio17
    Definir hora, min, seg Como Entero
	
    Escribir "Ingrese la hora (formato de 24 horas): "
    Leer hora
    Escribir "Ingrese los minutos: "
    Leer min
    Escribir "Ingrese los segundos: "
    Leer seg
	
    seg = seg + 1  
	
    Si seg >= 60 Entonces
        seg = 0
        min = min + 1
    Fin Si
	
    Si min >= 60 Entonces
        min = 0
        hora = hora + 1
    Fin Si
	
    Si hora >= 24 Entonces
        hora = 0 
    Fin Si
	
    Escribir "La hora despues de un segundo es: ", hora, ":", min, ":", seg
	
FinProceso

