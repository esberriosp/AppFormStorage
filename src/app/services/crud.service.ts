import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  arreglo : any = [
    // {
    //   nombre      : '',
    //   apellido    : '',
    //   correo      : '',
    //   usuario     : '',
    //   contrasena  : ''
    // },
  ]

  constructor(
    private storage: Storage
  ) { 
    this.inicio(); 
  }

  async inicio(){

    await this.storage.create();
    await this.storage.set('personas', this.arreglo);

  }

  
  async mostrar(){
    await this.storage.get('personas').then(
      (valor) => {
        console.log(valor);  
      }
    )
  }


  async agregarPersona(data: any){
    let personas = await this.storage.get('personas');

    personas.push(data);
    
    await this.storage.set('personas', personas);
  }
}
