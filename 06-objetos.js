// Personaje de TV
let nombre = "Tanjiro";
let anime = "Demon Slayer";
let edad = 16;

let personaje = {
    nombre: "Tanjiro",
    anime: "Demon Slayer",
    edad: 16,
};

console.log(personaje['anime'])

personaje.edad = 18;

personaje['edad'] = 16;

delete personaje.anime

console.log(personaje)