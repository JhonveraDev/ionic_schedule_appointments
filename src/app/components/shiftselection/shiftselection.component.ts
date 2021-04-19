import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-shiftselection',
  templateUrl: './shiftselection.component.html',
  styleUrls: ['./shiftselection.component.scss'],
})
export class ShiftselectionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  onClick(event){
    console.log(event)
  }

  slides: { img: string, titulo: string, desc: string }[] = [
    {
      img: '/assets/card/dollar.svg',
      titulo: 'Certifications, Balances and Invoices',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'
    },
    {
      img: '/assets/card/smartphone.svg',
      titulo: 'Membership and Credit Application',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'
    },
    {
      img: '/assets/card/justice-scale.svg',
      titulo: 'Legalization',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'
    },
    {
      img: '/assets/card/credit-card.svg',
      titulo: 'Credit Services',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since'
    }
  ];

  onClicked(url){
    this.router.navigate(['/hour'])
  }

}
