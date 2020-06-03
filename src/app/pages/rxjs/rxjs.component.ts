import { Component, OnInit, OnDestroy} from '@angular/core';
import {Observable,  Subscriber, Subscription} from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  constructor() {

  this.subscription = this.regresaObservable()
  .subscribe(
    numero => console.log('subs: ', numero   ),
    error => console.error( 'el error ', error),
    () => console.log('el observador termino'));

  }

  ngOnInit(): void {
  }

  // @ts-ignore
  regresaObservable(): Observable<any> {
    return new Observable( (observer: Subscriber<any>) => {
      let contacor = 0;
      const intervalo = setInterval(() => {
        contacor += 1;
        const salida = {
          valor: contacor
        }
        observer.next( salida );
      /*  if ( contacor === 3) {
          clearInterval(intervalo);
          observer.complete();
        }*/
      }, 1000);
    }
    ).pipe(
      map(resp => resp.valor),
      filter((valor, index) => {
        if( (valor % 2) === 1 ){
          return true
        }
        return false;
      })
    );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
