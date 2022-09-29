import { Component } from '@angular/core';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data : any = 
    {
      nombre      : '',
      apellido    : '',
      correo      : '',
      usuario     : '',
      contrasena  : ''
    }
  
  
  

  constructor(
    private crud: CrudService
  ) {
    this.crud.mostrar();
  }


  agregar(){
    this.crud.agregarPersona(this.data);
  }
  
}
