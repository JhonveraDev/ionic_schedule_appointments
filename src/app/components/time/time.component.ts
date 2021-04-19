import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-time',
  templateUrl: './time.component.html',
  styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {

  @Input() data:any;

  constructor() { }



  ngOnInit() {
    console.log(this.data)
  }

}
