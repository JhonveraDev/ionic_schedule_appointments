import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { Data } from '../../assets/model/interface.model';
import { Address } from '../../assets/model/interface.model';
import { Geo } from '../../assets/model/interface.model';
import { Company } from '../../assets/model/interface.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { } 

  getData(){
    return this.http.get<Data[] | Address[] | Geo[] | Company[]>('https://jsonplaceholder.typicode.com/users')
  }
}
