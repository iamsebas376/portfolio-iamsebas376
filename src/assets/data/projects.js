
import { v4 as uuidv4 } from 'uuid';
import GameCatalogue from '../images/game-catalogue.png';
import ToDoList from '../images/to-do-list.png';
import Pokedex from '../images/pokedex.png';
import BmoCalculadora from '../images/bmo-calculadora.png';
import TheWitcher from '../images/pagina-tributo-the-witcher-3.png';

const projects = [
    {
        id: uuidv4(),
        title: 'Game Catalogue',
        desc:
            'Game Catalogue: una app web en React para explorar juegos. Ofrece búsqueda por género, detalles y búsqueda específica de juegos.',
        link: 'https://game-catalogue-iamsebas376.netlify.app/',
        img: GameCatalogue,
    },
    {
        id: uuidv4(),
        title: 'To do List',
        desc:
            'Este proyecto es una aplicación de To-Do List desarrollada con React. La aplicación permite a los usuarios agregar, eliminar y marcar como completadas las tareas de su lista.',
        link: 'https://to-do-list-react-iamsebas376.netlify.app/',
        img: ToDoList,
    },
    {
        id: uuidv4(),
        title: 'Pokedex',
        desc:
            'La Pokedex: una herramienta clave para entrenadores Pokémon. Esta Pokedex web, creada por Iamsebas376, te permite explorar y aprender sobre los diferentes tipos de Pokémon.',
        link: 'https://iamsebas376.github.io/pokedex/',
        img: Pokedex,
    },
    {
        id: uuidv4(),
        title: "BMO Calcuadora",
        desc:
            'Calculadora web inspirada en BMO de "Hora de Aventura". Cambia entre modo día y noche, añadiendo un toque de diversión a tus cálculos.',
        link: 'https://iamsebas376.github.io/bmo-calculadora/',
        img: BmoCalculadora,
    },
    {
        id: uuidv4(),
        title: 'Página tributo The Witcher',
        desc:
            'Página web tributo a The Witcher 3. La página ofrece información detallada sobre la historia, personajes y el mundo del juego.',
        link: 'https://iamsebas376.github.io/pagina-tributo-the-witcher-3/',
        img: TheWitcher,
    },
];

export default projects;