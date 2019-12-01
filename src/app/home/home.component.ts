import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  showStdDetails : boolean = false;
  constructor() { }

  ngOnInit() {
  }

  openStudentDetails(){
    this.showStdDetails = true;
  }

}
