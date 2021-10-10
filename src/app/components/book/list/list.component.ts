import { Component, OnInit } from "@angular/core";
import { BookService } from "src/app/service/book.service";
import { BookDetails } from "../../../models/bookdetails";


@Component({
    selector: 'app-books-list',
    templateUrl: './list.component.html'

})
export class ListComponent implements OnInit {    
    books: BookDetails[] = [];
    constructor(private bservice : BookService){}
    ngOnInit(): void {
        this.books = this.bservice.getlist();
    }

    deletebook(data: any) {
        if (confirm("Are u sure to delete the book, Action cannot be undone?")) {
            this.bservice.deletebook(data);
        }
    }

}