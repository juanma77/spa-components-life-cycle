import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

  constructor( private elementRef: ElementRef ) {

    console.log( "Hola Mundo" );

    //elementRef.nativeElement.style.backgroundColor = 'yellow';

  }

  // Para cuando el mouse pasa por encima del elemento, este se ponga de color amarillo
  @HostListener('mouseenter') mouseEnter() {

    //this.elementRef.nativeElement.style.backgroundColor = 'yellow';
    
    this.doHighlight( this.newColor || 'yellow' );

  }

  
  // Para cuando el mouse sale de elemento, ponerlo de nuevo sin color alguno
  @HostListener('mouseleave') mouseLeave() {

    //this.elementRef.nativeElement.style.backgroundColor = null;

    this.doHighlight( null ); 

  }

  // Este Input es una propiedad que vamos a pasar desde un componente padre (app.component.ts) y lo recibimos en un componente hijo (appHighlighted.directive.ts)
  @Input('appHighlighted') newColor: string; 

  public doHighlight( color: string ) {

    this.elementRef.nativeElement.style.backgroundColor = color;

  }


}
