import { Component, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {

  @Input() leyenda: string = 'Leyenda';
  @Input() progreso: number = 50;
  @Output() event: EventEmitter<number> = new EventEmitter();
  @ViewChild('txtProgres') txtProgres: ElementRef;

  constructor() { }
  onChanges(newValue: number) {
    if ( newValue >= 100 ){
      this.progreso = 100;
    } else if ( newValue <= 0) {
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }
    this.txtProgres.nativeElement.value = this.progreso;
    this.event.emit(this.progreso);
  }
  cambiarValor(valor): void {
    if (this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.event.emit(this.progreso);
    this.txtProgres.nativeElement.focus();
  }

}
