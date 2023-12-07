
import { v4 as uuidv4 } from 'uuid';
import GameCatalogue from '../images/game-catalogue.png';
import ToDoList from '../images/to-do-list.png';
import Pokedex from '../images/pokedex.png';
import BmoCalculadora from '../images/bmo-calculadora.png';
import TheWitcher from '../images/pagina-tributo-the-witcher-3.png';

const projects = [
    {
        id: uuidv4(),
        name: 'Game Catalogue',
        desc:
            'Game Catalogue es una aplicación web desarrollada en React que permite a los usuarios explorar y descubrir juegos. Proporciona una interfaz interactiva para buscar juegos por género, realizar búsquedas específicas y obtener información detallada sobre cada juego.',
        link: 'https://game-catalogue-iamsebas376.netlify.app/',
        img: GameCatalogue,
    },
    {
        id: uuidv4(),
        name: 'To do List',
        desc:
            'Este proyecto es una aplicación de To-Do List desarrollada con React. La aplicación permite a los usuarios agregar, eliminar y marcar como completadas las tareas de su lista.',
        link: 'https://to-do-list-react-iamsebas376.netlify.app/',
        img: ToDoList,
    },
    {
        id: uuidv4(),
        name: 'Pokedex',
        desc:
            'Una Pokedex es una herramienta esencial para cualquier entrenador Pokémon que quiera conocer información sobre diferentes tipos de Pokémon. Este proyecto es una Pokedex web desarrollada por Iamsebas376, que te permite explorar y aprender sobre los Pokémon.',
        link: 'https://iamsebas376.github.io/pokedex/',
        img: Pokedex,
    },
    {
        id: uuidv4(),
        name: "BMO Calcuadora",
        desc:
            'Esta es una calculadora web inspirada en BMO, el adorable personaje de la serie de dibujos animados "Hora de Aventura". La calculadora tiene una función de cambio entre el modo día y el modo noche, lo que la hace aún más especial. ¡Diviértete haciendo cálculos con un toque de aventura!',
        link: 'https://iamsebas376.github.io/bmo-calculadora/',
        img: BmoCalculadora,
    },
    {
        id: uuidv4(),
        name: 'Página tributo The Witcher',
        desc:
            'Este proyecto es una página web tributo a The Witcher 3. La página ofrece información detallada sobre la historia, personajes y el mundo del juego.',
        link: 'https://iamsebas376.github.io/pagina-tributo-the-witcher-3/',
        img: TheWitcher,
    },
];

export default projects;