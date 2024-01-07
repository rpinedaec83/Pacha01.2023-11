function ejercicio01(){
    //Crea una función que retorna la suma de dos números.
    
    let numero1= parseInt (prompt ("Escribe un numero") )
    let numero2= parseInt (prompt ("Escribe un numero") )
    
    let suma=numero1+numero2
    alert("La suma es: "+suma);
    }
    
    function ejercicio02(){
    
    let numerobase= parseInt (prompt ("Escribe el numero base") )
    let numeropotencia= parseInt (prompt ("escribe la potencia del numero base") )
    
    let resultado= Math.pow(numerobase, numeropotencia)
    alert("El resultado es: "+resultado);
    }
    
    function ejercicio03(){
        let numero1= parseInt (prompt ("Escribe el primer numero") )
        let numero2= parseInt (prompt ("Escribe el segundo numero") )
        let numero3= parseInt (prompt ("Escribe el tercer numero") )
    
        let resultadopotencia1= Math.pow(numero1, 3)
        let resultadopotencia2= Math.pow(numero2, 3)
        let resultadopotencia3= Math.pow(numero3, 3)
    
        let sumaresultado=resultadopotencia1+resultadopotencia2+resultadopotencia3
        
        alert("El resultado es: "+sumaresultado);
    }    

    function ejercicio04(){
        let base= parseInt (prompt ("ingrese la base del triangulo") )
        let altura= parseInt (prompt ("ingrese la altura del triangulo") )
       
    let area = (base*altura)/2
        
        alert("El área del triángulo es : "+area);
    }    

    function ejercicio05(){
        let numero1= parseInt (prompt ("ingrese el primer numero"))
        let operacion= prompt ("ingrese la operación matematica (+,-,/,x,%)")
        let numero2= parseInt (prompt ("ingrese el segundo numero"))
    
        let resultado= 0

        switch(operacion){
            case '+':
                resultado = numero1 + numero2    
                alert("El resultado es: "+resultado);
                break;
            case '-':
                resultado = numero1 - numero2
                alert("El resultado es: "+resultado);   
                break;   
            case '*':
                resultado = numero1 * numero2
                alert("El resultado es: "+resultado);  
                break; 
            case '/':
                resultado = numero1 / numero2
                alert("El resultado es: "+resultado);    
                break; 
            case '%':
                resultado = numero2*(numero1/100)
                alert("El resultado es: "+resultado); 
                break; 
            default:
                alert ("El parámetro no es reconocido")
                break;


                }
    }    