import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.page.html',
  styleUrls: ['./city.page.scss'],
})
export class CityPage implements OnInit {

  constructor(private dataService: SearchService) { }

  data:Data[]=[]
  textoBuscar = '';

  ngOnInit() {

    this.dataService.getData().subscribe(resp=>{
      this.data = resp;
    })
  }

  buscar(event){
    this.textoBuscar = event.detail.value
  }

  onClick(event){
    console.log(event)
  }



}
