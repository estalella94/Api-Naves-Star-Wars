import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavesService } from '../naves.service';




@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.scss']
})
export class NavesListComponent implements OnInit {

 starships:any;
 

  constructor(
    private router:Router,
    private naveService:NavesService,
  
  ) { 
    
  }

  ngOnInit():void{
    this.naveService.getData().subscribe(
      response =>{
        let res:any;
        res = response;//Recolectar la respuesta de la api en la variable res
        this.starships = res.results;// Accede a la array results que esta dentro de la res y la gurda en starships
       
        this.naveService.naves = res.results;//guardo los datos de la array de este componente al servicio

      },
      error =>{
        console.log(error);
      }
      );
    }

  

}
