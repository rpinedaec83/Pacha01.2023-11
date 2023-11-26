//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoci�n de 
//descuento para vender al mayor, esta depender� del n�mero de zapatos que se compren. 
//Si son m�s de diez, se les dar� un 10% de descuento sobre el total de la compra;
//si el n�mero de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% 
//de descuento; y si son m�s treinta
//zapatos se otorgar� un 40% de descuento. El precio de cada zapato es de $80.


Algoritmo  Ejercicio5
    Escribir  "Ingresa cuantos zapatos desea comprar:  ";
    Leer cantidad_zapatos;
    subtotal <- cantidad_zapatos*80;
    descuento <- 0;
    Si cantidad_zapatos>10 Y cantidad_zapatos<=20 Entonces
        descuento <- subtotal*0.1;
    FinSi
    Si cantidad_zapatos>20 Y cantidad_zapatos<=30 Entonces
        descuento <- subtotal*0.2;
    FinSi
    Si cantidad_zapatos>30 Entonces
        descuento <- subtotal*0.4;
    FinSi
    total <- subtotal-descuento;
	Escribir  "Venta Total :" , subtotal;
    Escribir "El descuento es : ", descuento;
	Escribir "Precio con descuento incluido es: : ", total;
FinAlgoritmo