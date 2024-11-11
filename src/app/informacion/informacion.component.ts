import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../services/interfaces/pokemon";
import { InformacionService } from "../services/modales/informacion.service";
import { EnviarPokemonService } from "../services/pokemon/enviar-pokemon.service"

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit {

    mostrarModal: boolean = false;

    constructor (
        private informacionService: InformacionService,
        private enviarPokemonService: EnviarPokemonService
        ) {

        }

    ngOnInit() {
        // Obtiene la información de Pokémon cuando se inicia el componente.
        this.informacionService.modal$.subscribe(modal => {
            this.mostrarModal = modal;
            });
    }

    toggleModal(pk: Pokemon) {
        this.enviarPokemonService.updatePokemon(pk);
        this.informacionService.toggleModal(true);
        }

  // Array de objetos con la información de cada Pokémon para verlos en el HTML.
  pokemons: Pokemon[] = [
    {
      id: 1,
      nombre: 'Pikachu',
      descripcion: 'EL pokémon ratón, es un Pokémon de tipo electrico. Tiene una forma redonda y una cola corta en forma de rayo.',
      image_url: 'Pikachu.jpg',
      },
    {
      id: 2,
      nombre: 'Sylveon',
      descripcion: 'Sylveón es un Pokémon de tipo hada y una de las evoluciones finales de Eevee. Tiene apendices sensoriales en el cuerpo en forma de lazos.',
      image_url: 'Sylveon.jpg',
      },
    {
      id: 3,
      nombre: 'Victini',
      descripcion: 'Victini es un Pokémon singular de tipo psíquico/fuego. Dicen que atrae la victoria a su entrenador.',
      image_url: 'Victini.jpg',
      },
    {
      id: 4,
      nombre: 'Mimikyu',
      descripcion: 'Mimikyu es un Pokémon de tipo fantasma/hada cuyo cuerpo está casi completamente cubierto por un saco tratando de parecerse al Pokémon Pikachu.',
      image_url: 'Mimikyu.jpg',
      },
  ]
}


