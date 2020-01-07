import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICake } from '@cakes-ltd/api-interfaces';

@Component({
  selector: 'cakes-ltd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  hello$ = this.http.get<ICake>('/api/hello');
  constructor(private http: HttpClient) {}
}
