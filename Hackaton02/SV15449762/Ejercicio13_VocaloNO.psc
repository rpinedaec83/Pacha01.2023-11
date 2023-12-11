Proceso VocaloNO
		
	Definir Letra Como Caracter
	Escribir "Digite la letra"
	Leer Letra
	
	Letra <- Mayusculas(Letra)
	
	Si (Letra = "A" o Letra = "E" o Letra = "I" o Letra = "O" o Letra = "U") Entonces
		Escribir "La letra " Letra " es una vocal"
	SiNo
		Escribir "La letra " Letra " es una consonante"
	FinSi

FinProceso