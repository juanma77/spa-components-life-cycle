import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor( private router: ActivatedRoute ) {

    this.router.params.subscribe( parametros  =>{

      console.log( parametros, 'RUTA PADRE' );

    });


  }

  ngOnInit() {
  }

}
