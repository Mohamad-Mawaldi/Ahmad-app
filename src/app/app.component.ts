import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'KungFuClass';
  constructor(router: Router) {
    // router.navigate(['login']);
    router.navigate(['Home']);

  }
}
