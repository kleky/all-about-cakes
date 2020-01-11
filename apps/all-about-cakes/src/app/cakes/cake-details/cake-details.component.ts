import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CakeService } from '../cake.service';
import { Cake } from '@cakes-ltd/api-interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'aac-cake-details',
  templateUrl: './cake-details.component.html',
  styleUrls: ['./cake-details.component.scss']
})
export class CakeDetailsComponent implements OnInit {

  cake: Observable<Cake>;

  constructor(private route: ActivatedRoute,
              private cakeService: CakeService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    this.cake = this.cakeService.getByKey(`/${id}`);
  }
}
