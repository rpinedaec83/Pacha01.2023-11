//Hacer un algoritmo en JavaScript que lea tres números enteros y los muestree de menor a mayor. (Pendiente)
function ejercicio04(){

        let num1 = parseInt( prompt("Escribe un numero: "))
        let num2 = parseInt( prompt("Escribe un segundo numero: "))
        let num3 = parseInt( prompt("Escribe un tercer numero: "))
    
        // Primer condición “>” y “<”
        if(num1>num2 && num2>num3)
        {
            document.write("Mayor: ", num1);
            document.write("Medio: ", num2);
            document.write("Menor: ", num3); 
        }
       else
        if(num1>num3 && num3>num2)
        {
            document.write("Mayor: ", num1);
            document.write("Medio: ", num3);
            document.write("Menor: ", num2); 
        }
        // Segunda condición “>” y “<”
        else
        if(num2>num1 && num1>num3)
        {
            document.write("Mayor: ", num2);
            document.write("Medio: ", num1);
            document.write("Menor: ", num3); 
        }
        else
        if(num2>num3 && num3>num1)
        {
            document.write("Mayor: ", num2);
            document.write(" Medio: ", num3);
            document.write(" Menor: ", num1); 
        }
        else
        if(num3>num1 && num1>num2)
        {
            document.write("Mayor: ", num3);
            document.write("Medio: ", num1);
            document.write("Menor: ", num2); 
        }
        else
        if(num3>num2 && num2>num1)
        {
            document.write("Mayor: ", num3);
            document.write("Medio: ", num2);
            document.write("Menor: ", num1); 
        }
    }