//Hacer un algoritmo en Pseint que lea una letra y diga si es una vocal.
Proceso vocal
	Definir letra Como caracter;
	Escribir 'Ingrese una letra';
	Leer letra;
	si (letra = 'a' o letra = 'A') Entonces
		Escribir "Es una vocal";
	SiNo
		si(letra = 'e' o letra = 'E') Entonces
			Escribir "Es una vocal";
		SiNo
			si (letra = 'i' o letra = 'I') Entonces
				Escribir "Es una vocal";
			SiNo
				si (letra = 'o' o letra = 'O') Entonces
					Escribir "Es una vocal";
				SiNo
					si (letra = 'u' o letra = 'U') Entonces
						Escribir "Es una vocal";
					SiNo
						Escribir "No es una vocal";
					FinSi
				FinSi
			FinSi
		FinSi
	FinSi
	
FinProceso