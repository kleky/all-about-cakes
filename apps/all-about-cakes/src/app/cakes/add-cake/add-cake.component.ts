import { Component, OnInit } from '@angular/core';
import { CakeService } from '../cake.service';
import { Cake } from '@cakes-ltd/api-interfaces';

@Component({
  selector: 'aac-add-cake',
  templateUrl: './add-cake.component.html',
  styleUrls: ['./add-cake.component.scss']
})
export class AddCakeComponent implements OnInit {

  newCake: Cake;

  constructor(private cakeService: CakeService) {
    this.newCake = {name: "NEW", comment: "commenty", imageUrl: "url", id: null, yumFactor: 9};
  }

  ngOnInit() {
  }

  save() {
    this.cakeService.add(this.newCake);
  }

}
