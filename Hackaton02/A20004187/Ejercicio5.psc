//5. Hacer un algoritmo en Pseint para una tienda de zapatos que tiene una promoción de descuento para vender al mayor, 
//esta dependerá del número de zapatos que se compren. Si son más de diez, se les dará un 10% de descuento sobre el total de la compra; 
//si el número de zapatos es mayor de veinte pero menor de treinta, se le otorga un 20% de descuento; 
//y si son más treinta zapatos se otorgará un 40% de descuento. El precio de cada zapato es de $80.
Algoritmo  Ejercicio5
    Escribir  "Ingresa cuantos zapatos desea comprar:  ";
    Leer cantidad_zapatos;
    subtotal <- cantidad_zapatos*80;
    descuento <- 0;
    Si cantidad_zapatos>10 Y cantidad_zapatos<=20 Entonces
        descuento = subtotal*0.1;
    FinSi
    Si cantidad_zapatos>20 Y cantidad_zapatos<=30 Entonces
        descuento <- subtotal*0.2;
    FinSi
    Si cantidad_zapatos>30 Entonces
        descuento = subtotal*0.4;
    FinSi
    total = subtotal-descuento;
	Escribir "Precio subtotal: ", subtotal;
    Escribir "El descuento es: ", descuento;
	Escribir "Precio final: ", total;
FinAlgoritmo