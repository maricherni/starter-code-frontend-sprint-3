// Get the input fields
//Para que pueda acceder a todos los inputs del formulario
var form = document.querySelectorAll ('#form input');
var forms = document.querySelectorAll ('.needs-validation');

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
var errorName = document.getElementById('errorName');  
var errorLastName = document.getElementById('errorLastN');  
var errorPhone = document.getElementById('errorPhone'); 
var errorEmail = document.getElementById('errorEmail');   
var errorAddress = document.getElementById('errorAddress'); 

// Exercise 6
function validate() {
    // Validate fields entered by the user: name, phone, password, and email
    
    //Creamos una variable, cuyo valor sea false si no se cumplen las condiciones de cada input.  
       let validInput = true;

    /* NAME VALIDATION */
      //Longitud del texto
    if (fName.value.length < 3) { 
      validInput = false;        
        //Para que aparezca el texto de error debajo del input
        errorName.style.display = 'block'; 
        //Para que aparezca el recuadro del input en rojo y el icono ! || Accedemos a la lista de clases del elemento con .classList y podemos añadir (.add) o eliminar (.remove)
        fName.classList.add("is-invalid");
      //Para comprobar que en el valor del input solo se escriben letras y espacios, se utiliza la Expresión Regular /^[a-zA-Z ]+$/ y .test 
      //Fuente de consulta: https://lenguajejs.com/javascript/caracteristicas/expresiones-regulares/ 
    } else if(!(/^[a-zA-Z ]+$/.test(fName.value))){
        validInput = false;        
        errorName.style.display = 'block';
        fName.classList.add("is-invalid");
      }
    /* LAST NAME VALIDATION */  
      //Igual que en Name  
    if (fLastN.value.length < 3) {
        validInput = false;
        errorLastN.style.display = 'block'; 
        fLastN.classList.add("is-invalid");
    } else if(!(/^[a-zA-Z ]+$/.test(fLastN.value))){
        validInput = false;        
        errorLastN.style.display = 'block'; 
        fLastN.classList.add("is-invalid");
    }
    /* EMAIL VALIDATION */    
    if (fEmail.value.length < 3) {
        validInput = false;
        errorEmail.style.display = 'block'; 
        fEmail.classList.add("is-invalid");
      // Expresión Regular para comprobar que tenga formato de email: abc_de@ab.cd
    } else if (!(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9]+$/.test(fEmail.value))){
      validInput = false;
      errorEmail.style.display = 'block'; 
      fEmail.classList.add("is-invalid");
    }
    /* PASSWORD VALIDATION */ 
    if (fPassword.value.length < 3) {
        validInput = false;
        errorPassword.style.display = 'block'; 
        fPassword.classList.add("is-invalid");
      } else if (!(/^[A-Z?a-z]+[\d]+$/.test(fPassword.value))){//El símbolo + al final de cada "regla" hace que sea obligatorio que haya como mínimo 1. El símbolo ? hace que sea opcional que aparezca el carácter anterior
        validInput = false;
        errorPassword.style.display = 'block'; 
        fPassword.classList.add("is-invalid");
      }

    if (fAddress.value.length < 3) {
        validInput = false;
        errorAddress.style.display = 'block'; 
        fAddress.classList.add("is-invalid");
      }
    //Solo acepta números porque está así configurado en HTML
    if (fPhone.value.length < 9) {
        validInput = false;
        errorPhone.style.display = 'block'; 
        fPhone.classList.add("is-invalid");
      }
    //De la variable que hemos creado al principio de la función, si algún input ha dado negativo, aparecerá un mensaje para pedir que se revisen los campos
    if (!validInput) {
      alert('Por favor, revisa todos los campos');      
    }
    //El formulario solo se enviará si validInput es "true", es decir, que no hay ningún input que haya dado error
    return validInput; 
}

