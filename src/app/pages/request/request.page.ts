import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-request',
  templateUrl: './request.page.html',
  styleUrls: ['./request.page.scss'],
})
export class RequestPage implements OnInit {

  changeShift:boolean=false;
  changeBank:boolean=false;

  noteShift(){
    this.changeShift = true
    this.changeBank = false
  }

  noteBank(){
    this.changeBank = true
    this.changeShift = false
  }

  city = "";
  zipcode = "";
  company = "";
  street="";

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {

    this.city = this.route.snapshot.paramMap.get('city')
    this.zipcode = this.route.snapshot.paramMap.get('zipcode')
    this.company = this.route.snapshot.paramMap.get('company')
    this.street = this.route.snapshot.paramMap.get('street')
  }

  

}
