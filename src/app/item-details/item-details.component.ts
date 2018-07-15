import { Component, OnInit } from '@angular/core';
import { FelixStoreService } from '../felix-store.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  //constructor() { }

  ngOnInit() {
  }

  myItems;
  constructor(private felixstore : FelixStoreService) {
      this.myItems= this.felixstore.items;
  }

  }

