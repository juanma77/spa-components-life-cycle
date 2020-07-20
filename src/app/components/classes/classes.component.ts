import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {

  public alert: string = 'alert-danger';

  public propiedades: Object = {

    danger: false

  }

  public loading: boolean = false; 

  constructor() { }

  ngOnInit() {
  }

  public executeLoading() {

    this.loading = true;

    // Antes de dar clic al boton la variable loading esta en falso, luego cuando damos clic al boton la variable cambia a true, y permanece en true durante 3 segundos para finalmente tomar el valor de falso nuevamente 
    setTimeout(() => {
      
      this.loading = false; 

    }, 3000 );

  }

}
