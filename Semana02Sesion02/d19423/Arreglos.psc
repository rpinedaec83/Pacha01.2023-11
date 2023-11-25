Proceso Arreglos 
	
	Dimensionar dia[7]
	
	dia[1]<- "Lunes"
	dia[2]<- "Martes"
	dia[3]<- "Miercoles"
	dia[4]<- "Jueves"
	dia[5]<- "Viernes"
	dia[6]<- "Sabado"
	dia[7]<- "Domingo"
	
	
	escribir "Favor ingresar el numero de dia del anio"
	leer numdia 
	
	si numdia > 0 y numdia < 366 Entonces
		escribir numdia 
		si numdia < 7 Entonces
			Escribir dia[numdia]
		SiNo 
			si numdia % 7 = 0 Entonces
				Escribir dia[7]
			SiNo
				Escribir dia[numdia % 7]
			FinSi
			
		FinSi
	SiNo
		escribir "Escriba un numero entre 1 y 365"
		
	FinSi
FinProceso
