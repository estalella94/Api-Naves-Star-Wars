import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute  } from '@angular/router';
import { NavesService } from '../naves.service';

@Component({
  selector: 'app-naves-detail',
  templateUrl: './naves-detail.component.html',
  styleUrls: ['./naves-detail.component.scss']
})
export class NavesDetailComponent implements OnInit {
  
  starship:any;

  constructor(  
    private router:Router,
    private route: ActivatedRoute,
    private naveService:NavesService,)
    { }

  ngOnInit(): void {
    this.getStarship()
  }

  getStarship(){
    let name = String(this.route.snapshot.paramMap.get('id'));
   
    this.starship = this.naveService.getStarshipByName(name);
    console.log(this.starship);
  }

}
