import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {

    this.router.parent.params.subscribe( parametros  =>{

      // Usamos .parent para obtener los parámetros desde la ruta padre 
      console.log( parametros, 'RUTA HIJA' );

    });

  }

  ngOnInit() {
  }

}
