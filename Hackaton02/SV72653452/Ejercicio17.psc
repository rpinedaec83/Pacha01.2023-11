// 17. Hacer un algoritmo en Pseint donde se ingrese una hora y nos calcule la hora dentro de un segundo.

Algoritmo Ejercicio17
    Definir hora, minuto, segundo Como Entero
	
    Escribir "Ingrese la hora (formato de 24 horas):"
    Leer hora
    Escribir "Ingrese los minutos:"
    Leer minuto
    Escribir "Ingrese los segundos:"
    Leer segundo
	
    Si segundo < 59 Entonces
        segundo = segundo + 1
    Sino
        segundo = 0
		
        Si minuto < 59 Entonces
            minuto = minuto + 1
        Sino
            minuto = 0
			
            Si hora < 23 Entonces
                hora = hora + 1
            Sino
                hora = 0
            Fin Si
        Fin Si
    Fin Si
	
    Escribir "La hora después de un segundo es:", hora, ":", minuto, ":", segundo
FinAlgoritmo