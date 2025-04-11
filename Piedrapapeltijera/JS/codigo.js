// Función para validar la edad del usuario a partir de su fecha de nacimiento
function validarEdad(fechaNacimiento) {
    let [dia, mes, anio] = fechaNacimiento.split("/").map(Number);
    let hoy = new Date();
    let fechaNac = new Date(anio, mes - 1, dia);
    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mesActual = hoy.getMonth() + 1;
    let diaActual = hoy.getDate();
    
    if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
        edad--;
    }

    return edad >= 18;
}

// Solicita el nombre del jugador
let nombre = prompt("Ingresa tu nombre:");

// Solicita la fecha de nacimiento y valida que el jugador sea mayor de 18 años
let fechaNacimiento;
do {
    fechaNacimiento = prompt("Ingresa tu fecha de nacimiento en formato DD/MM/AAAA:");
    if (!validarEdad(fechaNacimiento)) {
        alert("Debes ser mayor de 18 años para jugar.");
    }
} while (!validarEdad(fechaNacimiento));

alert("Bienvenido, " + nombre + "! Comienza el juego.");

// Variables para contar las victorias y derrotas
let victorias = 0;
let derrotas = 0;

// Función que genera un número aleatorio entre un mínimo y un máximo
function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// Función que convierte el número ingresado en su equivalente de piedra, papel o tijera
function eleccion(jugador) {
    if (jugador === 1) return "PIEDRA";
    else if (jugador === 2) return "PAPEL";
    else if (jugador === 3) return "TIJERAS";
    else return "Elección no válida";
}

// Función que maneja el combate entre el jugador y la PC
function combate(jugador, pc) {
    alert("PC eligió: " + eleccion(pc));
    alert("Tú elegiste: " + eleccion(jugador));

    if (jugador === pc) {
        alert("¡Empate!");
    } else if ((jugador === 1 && pc === 3) || (jugador === 2 && pc === 1) || (jugador === 3 && pc === 2)) {
        alert("¡Ganaste!");
        victorias++;
    } else {
        alert("Perdiste...");
        derrotas++;
    }

    // Actualiza el marcador en el HTML
    document.getElementById("victorias").textContent = victorias;
    document.getElementById("derrotas").textContent = derrotas;

    // Verifica si alguien ha ganado la partida
    if (victorias === 3) {
        alert("¡Felicidades! Ganaste la partida 🏆");
    } else if (derrotas === 3) {
        alert("¡Lo siento! La PC ganó la partida 🤖");
    }
}

// Agregar eventos de clic a los botones
document.getElementById("piedra").addEventListener("click", function() {
    let pc = aleatorio(1, 3);
    combate(1, pc);
});

document.getElementById("papel").addEventListener("click", function() {
    let pc = aleatorio(1, 3);
    combate(2, pc);
});

document.getElementById("tijeras").addEventListener("click", function() {
    let pc = aleatorio(1, 3);
    combate(3, pc);
});
