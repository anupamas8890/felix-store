import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FelixStoreService {

  constructor() { }
  items=[
    {id:1, name:"Item1", item_code:"101", description:"Item 1" , item_image:"/assets/item1.jpeg"},
    {id:2, name:"Item2", item_code:"102", description:"Item 2" , item_image:"/assets/item2.jpeg"}
   // {id:3, name:"Item3", item_code:"103", description:"Item 3" , item_image:"/assets/item3.jpeg"},
    //{id:4, name:"Item4", item_code:"104", description:"Item 4" , item_image:"/assets/item1.jpeg"}

  ];
}
