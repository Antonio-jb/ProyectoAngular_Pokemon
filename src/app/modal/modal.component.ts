import { Component } from '@angular/core';
import { Pokemon } from "../services/interfaces/pokemon";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.scss'
})
export class ModalComponent {

  modal: boolean = false;

  toggleModal () {
      this.modal = !this.modal;
      }

}
