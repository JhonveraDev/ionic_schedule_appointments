import { Component, OnInit } from '@angular/core';
import { bankmodel } from 'src/assets/model/bankmodel';

@Component({
  selector: 'app-bankdraft',
  templateUrl: './bankdraft.component.html',
  styleUrls: ['./bankdraft.component.scss'],
})
export class BankdraftComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  bankdraft:bankmodel[]=[
    {
      day:'Monday',
      pay:3600,
      city:'Aliyaview',
      website: "hildegard.org",
      zipcode: "53919-4257",
      hour:"4:22"
    },
    {
      day:'Monday',
      pay:1170,
      city:'Bartholomebury',
      website: "hildegard.org",
      zipcode: "53919-4257",
      hour:"12:01"
    },
    {
      day:'Sunday',
      pay:1500,
      city:'Lebsackbury',
      website: "hildegard.org",
      zipcode: "53919-4257",
      hour:"6:50"
    },
    {
      day:'Monday',
      pay:1590,
      city:'Wisokyburgh',
      website: "hildegard.org",
      zipcode: "53919-4257",
      hour:"9:20"
    },
    {
      day:'Monday',
      pay:1590,
      city:'Wisokyburgh',
      website: "hildegard.org",
      zipcode: "53919-4257",
      hour:"7:26"
    }
  ]

}
