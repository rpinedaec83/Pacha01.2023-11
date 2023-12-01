//Hacer un algoritmo en Pseint para determinar el aumento de un trabajador,
//se debe tomar en cuenta que si ganaba más de $2000 tendrá un aumento del 5%, 
//si generaba menos de $2000 su aumento será de un 10%.
Proceso AumentoTrabajador
	Definir salario Como Real;
	Escribir 'Ingrese su salario anterior';
	Leer salario;
	Si (salario<2000) Entonces
		Escribir 'Su nuevo salario será: ',salario+(salario*0.1);
	SiNo
		Escribir 'Su nuevo salario será: ',salario+(salario*0.05);
	FinSi
FinProceso

