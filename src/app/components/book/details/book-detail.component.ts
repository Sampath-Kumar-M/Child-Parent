import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { BookDetails } from '../../../models/bookdetails'

@Component({
    selector: 'app-book-detail',
    templateUrl: './book-detail.component.html'

})export class BookDetailComponent implements OnInit{
   
   @Input()
    bookdetails!: BookDetails;
    @Output() deletebook = new EventEmitter();
   
    ngOnInit(): void {
        
    }

    deleteBook(){
        this.deletebook.emit(this.bookdetails.id);
    }

}