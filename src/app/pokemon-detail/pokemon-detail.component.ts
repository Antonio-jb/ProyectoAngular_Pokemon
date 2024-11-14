import {Component, OnInit} from '@angular/core';
import {PokemonDetailService} from '../services/pokemon/pokemon-detail.service';
import {Pokemon, PokemonApi} from '../services/interfaces/pokemon';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrl: './pokemon-detail.component.scss'
})
export class PokemonDetailComponent implements OnInit{

  //Creamos pokemon para guarda la información recogida.
  pokemon: PokemonApi | null = {
    name: "",
    url: "",
  }

  //Creamos un objeto "any" en donde guardaremos todos los detalles del pokemon del json.
  pokemonDetalles: any

  constructor(
    private pokemonDetailService: PokemonDetailService,
    private http: HttpClient
  ) {
  }

  ngOnInit () {

    //Nos "suscribimos" obteniendo así el valor del dato observado e instanciandolo en el nuevo componente.
    this.pokemonDetailService.infoApi$.subscribe(pk => {
      this.pokemon = pk
    })
    this.getAllPokemonData()
  }

  //Metodo para conseguir todos los datos del json de la PokemonApi.
  getAllPokemonData () {

    //Si utilizamos la URl del atributo de pokemonApi es IGUAL.
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/'+this.pokemon?.name).subscribe(data => {
      console.log(data)
      this.pokemonDetalles = data
    })
  }
}
