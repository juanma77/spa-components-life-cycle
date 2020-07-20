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

  constructor() { }

  ngOnInit() {
  }

}
