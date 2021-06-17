import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-naves-list',
  templateUrl: './naves-list.component.html',
  styleUrls: ['./naves-list.component.scss']
})
export class NavesListComponent implements OnInit {

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

}
