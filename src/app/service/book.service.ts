import { Injectable } from '@angular/core';
import { BookDetails } from '../models/bookdetails';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  tempbooksData = [{
    id: 1,
    name: 'story'
  },
  {
    id: 2,
    name: 'maths'
  }
  ];

  constructor() { }

  add(bookdata: BookDetails) {
    bookdata.id = this.tempbooksData.length ? this.tempbooksData[this.tempbooksData.length -1].id + 1 : 1;
    this.tempbooksData.push(bookdata);
  }

  deletebook(id : number){
    this.tempbooksData.splice(this.tempbooksData.findIndex(obj => obj.id == id), 1);
  }

  getlist(){
    return this.tempbooksData;
  }
}
