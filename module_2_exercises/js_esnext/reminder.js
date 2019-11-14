// El siguiente código implementa una sencilla clase que actúa como reminder,
// es decir, dado un mensaje, lo muestra por consola transcurrido (al menos)
// el tiempo indicado por el usuario.

class Reminder {
    constructor(text) {
        this.text = text;
    }

    remindMe(delay) {
        /*setTimeout(function() {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);*/
        setTimeout(() => {
            console.log(`Your reminder after ${delay} seconds is: ${this.text}`);
        }, delay * 1000);
    }
}

//SOLUCIÓN USAR UNA ARROW FUNCTION PARA EL CALLBACK, PORQUE this ES EL MISMO QUE EL DEL OBJETO

// Te animamos a que crees una nueva instancia de reminder y la utilices.
// Escribe el mensaje que tu quieras y añade unos pocos segundos de retardo.
// Comprueba la salida por consola .. algo no funciona como esperábamos ¿verdad?
// ¿Sabrías decirnos que está pasando aquí? ¿Cómo lo arreglarías?

let reminder = new Reminder("Hola");
reminder.remindMe(4);