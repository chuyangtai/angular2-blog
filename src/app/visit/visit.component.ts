import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visit',
  templateUrl: './visit.component.html',
  styleUrls: ['./visit.component.css']
})
export class VisitComponent implements OnInit {
public currentTime = new Date();
  constructor() {
    window.setInterval(
        () => this.currentTime = new Date(), 1000) ;
  }

  ngOnInit() {
  }

}
