import { Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Cake } from '@cakes-ltd/api-interfaces';

@Component({
  selector: 'aac-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss']
})
export class CakesComponent implements OnInit {

  cakes$: Observable<Cake[]>;

  constructor(private cakeService: CakeService) {

    this.cakes$ = cakeService.getAll().pipe(tap(d => console.log("Cakes", d)));

  }

  ngOnInit() {
  }

}
