import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves-detail',
  templateUrl: './naves-detail.component.html',
  styleUrls: ['./naves-detail.component.scss']
})
export class NavesDetailComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
