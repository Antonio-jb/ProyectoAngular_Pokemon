import { Component, OnInit } from '@angular/core';
import { Pokemon } from "../services/interfaces/pokemon";
import { InformacionService } from '../services/modales/informacion.service';
import { EnviarPokemonService } from '../services/pokemon/enviar-pokemon.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  mostrarModal: boolean = false;

  pokemon: Pokemon | null = {
    id: 1,
    nombre: "",
    descripcion: "",
    image_url: ""
    }

  constructor (
    private informacionService: InformacionService,
    private enviarPokemonService: EnviarPokemonService
    ) {

      }

  ngOnInit() {
    this.enviarPokemonService.info$.subscribe(pokemon => {
      this.pokemon = pokemon
      })
    }

  cerrarModal() {
    this.informacionService.toggleModal(false);

    }

}
