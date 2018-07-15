import { Component, OnInit } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
  }
  myItems;
  constructor(private felixstore : FelixStoreService) {
     this.myItems=this.felixstore.items;
  }
}
