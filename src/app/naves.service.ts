import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NavesService {

  url:string; 
  naves:any;

  constructor(
    private http:HttpClient
  ) { 
    this.url = 'https://swapi.dev/api/'
  }


  getData(){

    return this.http.get(this.url + "starships/");

  }
      
  getStarshipByName(name:string):any{
    return this.naves.find((element:any) => element.name === name)
  }
  



}
