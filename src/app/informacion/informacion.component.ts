import { Component, OnInit } from '@angular/core';
import { Pokemon, PokemonApi } from "../services/interfaces/pokemon";
import { InformacionService } from "../services/modales/informacion.service";
import { EnviarPokemonService } from "../services/pokemon/enviar-pokemon.service";
import { PokemonApiService } from '../services/pokemon/pokemon-api.service';
import { Router } from '@angular/router';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrl: './informacion.component.scss'
})
export class InformacionComponent implements OnInit {

    mostrarModal: boolean = false;
    pokemonsApi: PokemonApi[] = [];

    constructor (
        private informacionService: InformacionService,
        private enviarPokemonService: EnviarPokemonService,
        private pokemonApiService: PokemonApiService,
        private pokemonDetailService: PokemonDetailService,
        private router: Router,
        ) {

        }

    ngOnInit() {
        // Obtiene la información de Pokémon cuando se inicia el componente.
        this.informacionService.modal$.subscribe(modal => {
            this.mostrarModal = modal;
            });

          this.pokemonApiService.getAllPokemon().subscribe({

              // Obligatorios: next, error.
              // Opcional: complete.

              next: data => { // Si la comunicación y la respuesta está OK.
                  //console.log(data.results);
                  this.pokemonsApi = data.results; // Guardamos la información en el array.
                  console.log(this.pokemonsApi)
                },

              // Si hay error a la hora de comunicarnos con la api o con el servicio de in
              error: error => {
                  console.log("Error, no encontado.", error);
                },

              complete: () => { // Se ejecuta este bien o este mal.
                  console.log('Obtención de Pokemons completada.');
                }

            })

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

  // detallesPokemon(nombre: string) {
      // Deberemos de enviar el nombre
      // a través de BehaviorSubject al component
      // pokmeon-detail.

      detallesPokemon (pk: PokemonApi) {
        this.pokemonDetailService.updatePokemonApi (pk)
        this.router.navigate(['detalles']);

    }
}


