import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '@cakes-ltd/api-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'aac-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.scss']
})
export class AddCakeComponent implements OnInit {

  newCake: Cake;

  constructor(private cakeService: CakeService,
              private router: Router) {
    this.cakeService.errors$.subscribe(e => console.error(e));
    this.newCake = {name: "", comment: "", imageUrl: "", id: null, yumFactor: 0};
  }

  ngOnInit() {
  }

  save() {
    this.cakeService.add(this.newCake).subscribe(c => {
      this.router.navigateByUrl("/");
    });
  }

}
