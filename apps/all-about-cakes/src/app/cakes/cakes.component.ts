import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CakeService } from './cake.service';
import { Observable } from 'rxjs';
import { Cake } from '@cakes-ltd/api-interfaces';

@Component({
  selector: 'aac-cakes',
  templateUrl: './cakes.component.html',
  styleUrls: ['./cakes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CakesComponent {

  cakes$: Observable<Cake[]>;

  constructor(private cakeService: CakeService) {

    this.cakes$ = cakeService.getAll();

  }
}
