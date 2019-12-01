import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-header',
  templateUrl: './home-header.component.html',
  styleUrls: ['./home-header.component.less']
})
export class HomeHeaderComponent implements OnInit {

  constructor(private router: Router) {}

  doLogout(){
    this.router.navigate(['/login']);
  }
  ngOnInit() {
  }

}
