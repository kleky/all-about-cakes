import { Component } from '@angular/core';
import { CakeService } from './cake.service';
import { Observable } from 'rxjs';
import { Cake } from '../../../../libs/entities/cake.entity';

@Component({
  selector: 'cakes-ltd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  cakes$: Observable<Cake[]>;

  constructor(private cakeService: CakeService) {

    cakeService.getAll().subscribe(d => console.log("DATA", d));

  }
}
